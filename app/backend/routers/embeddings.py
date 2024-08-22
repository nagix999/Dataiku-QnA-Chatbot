from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from settings.database import get_db
from models import *

router = APIRouter(prefix="/embeddings")

@router.get("/{embedding_node_id}/settings")
async def get_embedding_settings(embedding_node_id, db: Session=Depends(get_db)):
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
            Splitter.display_name,
            Splitter.description
        )\
        .join(EmbeddingModel, EmbeddingSetting.embedding_model_id == EmbeddingModel.model_id)\
        .join(SplitterSetting, EmbeddingSetting.splitter_setting_id == SplitterSetting.setting_id)\
        .join(SplitterParam, SplitterSetting.param_id == SplitterParam.param_id)\
        .join(Splitter, SplitterSetting.splitter_id == Splitter.splitter_id)\
        .filter(EmbeddingSetting.embedding_node_id == embedding_node_id).all()
    
    settings_info = {
        "embedding_settings": {
            "provider": results[0].provider,
            "embedding_model": results[0].model_name,
            "dimension": results[0].dimension
        },
        "splitter_settings": {
            "splitter": results[0].display_name,
            "params": []
        }
    }

    for result in results:
        settings_info["splitter_settings"]["params"].append({"param": result.splitter_param_display_name, "value": result.param_value})

    return settings_info