from utils.context_manager import get_context
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core.node_parser import SentenceSplitter


def initialize():
    context = get_context()
    reader = SimpleDirectoryReader(input_dir="data/dataiku/apinode", recursive=True)
    documents = reader.load_data()
    
    embedding1 = SentenceSplitter(chunk_size=128, chunk_overlap=0)
    embedding2 = SentenceSplitter(chunk_size=256, chunk_overlap=0)
    embedding3 = SentenceSplitter(chunk_size=512, chunk_overlap=0)

    nodes1 = embedding1.get_nodes_from_documents(
        documents, show_progress=False
    )

    nodes2 = embedding2.get_nodes_from_documents(
        documents, show_progress=False
    )

    nodes3 = embedding3.get_nodes_from_documents(
        documents, show_progress=False
    )

    vector_store1 = VectorStoreIndex(nodes1)
    vector_store2 = VectorStoreIndex(nodes2)
    vector_store3 = VectorStoreIndex(nodes3)

    context.update({"vector_store": 
                        {
                            "51908b02-fff6-4805-a7fa-ecfe3803c260": nodes1, 
                            "675e9320-1452-4252-9a87-68d484bb7b77": nodes2, 
                            "ca090869-399b-43a7-b6b8-21ec3edfe14d": nodes3
                        },
                     "vector_index": 
                        {
                            "51908b02-fff6-4805-a7fa-ecfe3803c260": vector_store1, 
                            "675e9320-1452-4252-9a87-68d484bb7b77": vector_store2, 
                            "ca090869-399b-43a7-b6b8-21ec3edfe14d": vector_store3
                        }
                    })