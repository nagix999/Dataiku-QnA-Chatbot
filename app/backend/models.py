from datetime import datetime
import uuid

from sqlalchemy import Column, String, Integer, UUID, Sequence, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
class VectorStore(Base):
    __tablename__ = "vector_store"
    vector_store_id = Column(UUID, nullable=False, primary_key=True, index=True, default=uuid.uuid4)

class FlowNode(Base):
    __tablename__ = "flow_node"
    node_id = Column(UUID, nullable=False, primary_key=True, index=True, default=uuid.uuid4)
    node_type = Column(String(20), nullable=False)
    label = Column(String(50), nullable=False)
    position_x = Column(Integer, nullable=False)
    position_y = Column(Integer, nullable=False)

class FlowEdge(Base):
    __tablename__ = "flow_edge"
    edge_id = Column(UUID, nullable=False, primary_key=True, index=True, default=uuid.uuid4)
    source_id = Column(UUID, nullable=True)
    target_id = Column(UUID, nullable=True)
    source_handle = Column(String(20), nullable=True)
    target_handle = Column(String(20), nullable=True)

class EmbeddingModel(Base):
    __tablename__ = "embedding_model"
    model_id = Column(UUID, nullable=False, primary_key=True, index=True, default=uuid.uuid4)
    provider = Column(String(20), nullable=False)
    model_name = Column(String(50), nullable=False, index=True)
    dimension = Column(Integer, nullable=False)

class Splitter(Base):
    __tablename__ = "splitter"
    splitter_id = Column(UUID, nullable=False, primary_key=True, index=True, default=uuid.uuid4)
    object_name = Column(String(50), nullable=False, index=True)
    display_name = Column(String(50), nullable=False)
    description = Column(String(1000), nullable=True)

class SplitterParam(Base):
    __tablename__ = "splitter_param"
    param_id = Column(UUID, nullable=False, primary_key=True, index=True, default=uuid.uuid4)
    splitter_id = Column(UUID, nullable=False)
    param_name = Column(String(30), nullable=False)
    display_name = Column(String(30), nullable=False)
    param_type = Column(String(20), nullable=False)
    param_default_value = Column(String(1000), nullable=True)

class SplitterSetting(Base):
    __tablename__ = "splitter_setting"
    seq = Column(Integer, Sequence("splitter_setting_seq"), nullable=False, primary_key=True, index=True)
    setting_id = Column(UUID, nullable=False, default=uuid.uuid4)
    splitter_id = Column(UUID, ForeignKey("splitter.splitter_id"), nullable=False)
    param_id = Column(UUID, ForeignKey("splitter_param.param_id"), nullable=False)
    param_value = Column(String(1000), nullable=True)

class EmbeddingSetting(Base):
    __tablename__ = "embedding_setting"
    setting_id = Column(UUID, nullable=False, primary_key=True, index=True, default=uuid.uuid4)
    embedding_node_id = Column(UUID, nullable=False)
    embedding_model_id = Column(UUID, ForeignKey("embedding_model.model_id"), nullable=False)
    splitter_setting_id = Column(UUID, nullable=False)

    embedding_model = relationship("EmbeddingModel", backref="embedding_settings")

class Prompt(Base):
    __tablename__ = "prompt"
    prompt_id = Column(UUID, nullable=False, primary_key=True, index=True, default=uuid.uuid4)
    prompt_name = Column(String(50), nullable=False)
    prompt_template = Column(String(2000), nullable=False)
    context_string = Column(String(20), nullable=False, default="context_str")
    query_string = Column(String(20), nullable=False, default="query_str")
