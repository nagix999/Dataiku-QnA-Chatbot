import os

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv


load_dotenv(os.environ["envfile"], verbose=True)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        
def get_db_not_yield():
    db = SessionLocal()
    return db

url = os.environ["POSTGRESQL_CONNECTION_STRING"]
dbschema = "llmops,public"

engine = create_engine(url, connect_args={'options': '-csearch_path={}'.format(dbschema)})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

