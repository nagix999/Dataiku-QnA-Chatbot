import os

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import make_url
from llama_index.core import StorageContext, VectorStoreIndex
from llama_index.vector_stores.postgres import PGVectorStore

from settings.database import get_db
from models import *
from schemas.embeddings import EmbeddingNodeSetting
from src import indexing

router = APIRouter(prefix="/embeddings")

@router.get("/{embedding_node_id}/settings", response_model=EmbeddingNodeSetting)
async def get_embedding_settings(embedding_node_id: str, db: Session=Depends(get_db)):
    results = db.query(
            EmbeddingSetting.embedding_node_id,
            EmbeddingModel.provider,
            EmbeddingModel.model_name,
            EmbeddingModel.dimension,
            SplitterParam.param_name,
            SplitterParam.display_name.label("splitter_param_display_name"),
            SplitterSetting.param_value,
            SplitterParam.param_default_value,
            SplitterParam.param_type,
            Splitter.object_name,
            Splitter.display_name,
            Splitter.description,
            FlowEdge.target_id
        )\
        .join(EmbeddingModel, EmbeddingSetting.embedding_model_id == EmbeddingModel.model_id)\
        .join(SplitterSetting, EmbeddingSetting.splitter_setting_id == SplitterSetting.setting_id)\
        .join(SplitterParam, SplitterSetting.param_id == SplitterParam.param_id)\
        .join(Splitter, SplitterSetting.splitter_id == Splitter.splitter_id)\
        .join(FlowEdge, EmbeddingSetting.embedding_node_id == FlowEdge.source_id)\
        .filter(EmbeddingSetting.embedding_node_id == embedding_node_id).all()
    
    settings_info = {
        "node_id": embedding_node_id,
        "vector_store_node_id": results[0].target_id,
        "embedding_settings": {
            "provider": results[0].provider,
            "embedding_model": results[0].model_name,
            "dimension": results[0].dimension
        },
        "splitter_settings": {
            "splitter": results[0].object_name,
            "splitter_name": results[0].display_name,
            "params": []
        }
    }

    for result in results:
        settings_info["splitter_settings"]["params"].append({
                "param": result.param_name, 
                "display": result.splitter_param_display_name,
                "value": result.param_value
            })

    return settings_info

@router.post("/run")
async def create_vector_store(embedding_node_settings: EmbeddingNodeSetting, db: Session=Depends(get_db)):
    docs = indexing.load_directory("data/dataiku")
    splitter = embedding_node_settings.splitter_settings.splitter
    params = {param["param"]: int(param["value"]) for param in embedding_node_settings.splitter_settings.params}
    nodes = indexing.split(docs, splitter, **params)

    result = db.query(FlowEdge).filter(FlowEdge.source_id == embedding_node_settings.node_id).one()
    vector_store_node_id = str(result.target_id)

    table_name = None

    url = make_url(os.environ["POSTGRES_CONNECTION_STRING"])

    if vector_store_node_id == "ed5f5043-4d3b-4c4d-bac4-349be96e85b3":
        table_name = "vector_store1"
    elif vector_store_node_id == "8bf18acb-a362-4edf-999f-0f1485dac742":
        table_name = "vector_store2"
    elif vector_store_node_id == "61b63ae4-e888-4ee7-8616-655d171d39f1":
        table_name = "vector_store3"
    else:
        raise ValueError(f"table name {table_name} is not valid")

    vector_store = PGVectorStore.from_params(
        database=url.database,
        host=url.host,
        password=url.password,
        port=url.port,
        user=url.username,
        table_name=table_name,
        embed_dim=1536,
        hnsw_kwargs={
            "hnsw_m": 16,
            "hnsw_ef_construction": 64,
            "hnsw_ef_search": 40,
            "hnsw_dist_method": "vector_cosine_ops",
        },
    )

    storage_context = StorageContext.from_defaults(vector_store=vector_store)
    index = VectorStoreIndex(nodes=nodes, storage_context=storage_context)
    
    
    return {"test": "ok"}