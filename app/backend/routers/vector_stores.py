import os
import glob

from fastapi import APIRouter, Depends, status
# from sqlalchemy.orm import Session

# from settings.database import get_db
from src import indexing
from utils.context_manager import get_context


router = APIRouter(prefix="/vector-stores")

@router.post("", status_code=status.HTTP_201_CREATED)
async def create_vector_store(files, context: dict=Depends(get_context)):
    file_paths = ["data/" + file.filename for file in files]

    docs = indexing.load_files(file_paths)
    nodes = indexing.split(docs, indexing_strategy="SentenceSplitter")
    index = indexing.create_index(nodes)
    context["index"] = index

    return {"message": "success"}