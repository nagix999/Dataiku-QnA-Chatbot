import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

from models import VectorStore


load_dotenv(".env", verbose=True)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
def get_db_not_yield():
    db = SessionLocal()
    return db

url = os.environ["POSTGRES_CONNECTION_STRING"]
dbschema = "postgres,public"

engine = create_engine(url, connect_args={'options': '-csearch_path={}'.format(dbschema)})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)



