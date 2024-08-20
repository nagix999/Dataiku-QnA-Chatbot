from datetime import datetime
from schemas.base_schema import BaseSchema      

class File(BaseSchema):
    filename: str
    extension: str
    size: int
    created_at: datetime
    modified_at: datetime