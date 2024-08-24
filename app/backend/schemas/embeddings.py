from datetime import datetime
from schemas.base_schema import BaseSchema
from typing import List, Dict

class EmbeddingSetting(BaseSchema):
    embedding_model: str
    provider: str
    dimension: int

class SplitterSetting(BaseSchema):
    splitter: str
    splitter_name: str
    params: List[Dict[str, str]]

class EmbeddingNodeSetting(BaseSchema):
    node_id: str
    embedding_settings: EmbeddingSetting
    splitter_settings: SplitterSetting