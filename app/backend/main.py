from contextlib import asynccontextmanager

from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from fastapi.staticfiles import StaticFiles

from routers.files import router as files_router
from routers.vector_stores import router as vector_stores_router
from routers.flows import router as flows_router
from routers.embeddings import router as embeddings_router
from utils.stream import astreamer
from utils.context_manager import context
from utils.init import initialize
from settings.database import engine
from models import Base

load_dotenv(".env", verbose=True)

Base.metadata.create_all(engine)


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield
    context.clear()

app = FastAPI(lifespan=lifespan)

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(files_router, prefix="/api")
app.include_router(vector_stores_router, prefix="/api")
app.include_router(flows_router, prefix="/api")
app.include_router(embeddings_router, prefix="/api")

app.mount("/data", StaticFiles(directory="data/dataiku"), name="data")

# llama-index test
initialize()

@app.get("/health-check", status_code=status.HTTP_200_OK) 
async def health_check():
    return {"status": "ok"}