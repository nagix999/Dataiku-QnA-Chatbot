from contextlib import asynccontextmanager

from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from fastapi.staticfiles import StaticFiles

from routers.files import router as files_router
from routers.vector_stores import router as vector_stores_router
from utils.stream import astreamer
from utils.context_manager import context

load_dotenv(verbose=True)


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

app.mount("/data", StaticFiles(directory="data/dataiku"), name="data")

@app.get("/health-check", status_code=status.HTTP_200_OK) 
async def health_check():
    return {"status": "ok"}