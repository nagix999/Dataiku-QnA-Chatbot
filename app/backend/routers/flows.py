from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from models import FlowNode, FlowEdge
from schemas.flows import Flow, Node, Edge
from settings.database import get_db


router = APIRouter(prefix="/flows")

@router.get("", response_model=Flow)
async def get_flows(db: Session=Depends(get_db)):
    results = db.query(FlowNode).all()
    nodes = [Node.model_validate(result) for result in results]

    results = db.query(FlowEdge).all()
    edges = [Edge.model_validate(result) for result in results]
    return Flow(nodes=nodes, edges=edges)