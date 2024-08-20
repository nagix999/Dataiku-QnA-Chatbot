import os
import glob

from fastapi import APIRouter, Depends
from schemas.files import File

PATH_NAME = "data/**/*"

router = APIRouter(prefix="/files")

@router.get("", response_model=list[File])
async def get_all_files():
    files = [File(**{
        "filename": "\\".join(file.split("\\")[1:]), 
        "extension": file.split(".")[-1],
        "size": os.path.getsize(file),
        "created_at": os.path.getctime(file),
        "modified_at": os.path.getmtime(file)
      }) for file in glob.glob(PATH_NAME, recursive=True) if os.path.isfile(file)]

    return files


@router.get("/contents")
async def get_file_content(filename: str):
    file_path = "data" + "\\" + filename

    with open(file_path, "r", encoding="utf-8") as f:
        contents = f.read()
    return {"contents": contents}