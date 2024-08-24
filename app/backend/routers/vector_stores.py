import os
import glob

from fastapi import APIRouter, Depends, status
from llama_index.core import StorageContext, VectorStoreIndex
from llama_index.vector_stores.postgres import PGVectorStore
from sqlalchemy.orm import Session
from sqlalchemy import make_url

from settings.database import get_db
from src import indexing
from utils.context_manager import get_context


router = APIRouter(prefix="/vector-stores")

@router.post("/embedding", status_code=status.HTTP_201_CREATED)
async def embedding(files, context: dict=Depends(get_context)):
    file_paths = ["data/" + file.filename for file in files]

    docs = indexing.load_files(file_paths)
    nodes = indexing.split(docs, indexing_strategy="SentenceSplitter")
    index = indexing.create_index(nodes)
    context["index"] = index

    return {"message": "success"}

@router.post("/{vector_store_id}", status_code=status.HTTP_201_CREATED)
async def create_vector_store(vector_store_id, db: Session=Depends(get_db), context: dict=Depends(get_context)):
    nodes = context["nodes"][vector_store_id]

    url = make_url(os.environ["POSTGRES_CONNECTION_STRING"])

    params = {
        "embed_dim": 1536,
        "hnsw_kwargs": {
            "hnsw_m": 16,
            "hnsw_ef_construction": 64,
            "hnsw_ef_search": 40,
            "hnsw_dist_method": "vector_cosine_ops",
        }
    }

    vector_store = PGVectorStore.from_params(
        database=url.database,
        host=url.host,
        password=url.password,
        port=url.port,
        user=url.username,
        table_name="dataiku",
        **params
    )

    storage_context = StorageContext.from_defaults(vector_store=vector_store)
    index = VectorStoreIndex(nodes, storage_context=storage_context)

    print(index)
    return {"message": "success"}


@router.get("/{vector_store_id}", status_code=status.HTTP_200_OK)
async def get_nodes(vector_store_id, context: dict=Depends(get_context)):
    embedding_vectors = context["nodes"][vector_store_id]

    return {"embedding_vectors": embedding_vectors}