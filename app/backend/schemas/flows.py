from datetime import datetime
from typing import Deque, List, Optional, Tuple, Union
from schemas.base_schema import BaseSchema
from pydantic import UUID4

class Node(BaseSchema):
    node_id: UUID4
    node_type: str
    label: str
    position_x: int
    position_y: int

class Edge(BaseSchema):
    edge_id: UUID4
    source_id: UUID4
    target_id: UUID4
    target_handle: Union[str, None]
    source_handle: Union[str, None]

class Flow(BaseSchema):
    nodes: List[Node]
    edges: List[Edge]

