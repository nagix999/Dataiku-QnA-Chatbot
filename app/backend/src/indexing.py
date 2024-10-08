from sqlalchemy import make_url
from llama_index.core import SimpleDirectoryReader, VectorStoreIndex, StorageContext
from llama_index.core.schema import TextNode, Document
from llama_index.core.node_parser import SentenceSplitter, SentenceWindowNodeParser, SemanticSplitterNodeParser
from llama_index.embeddings.openai import OpenAIEmbedding
# from llama_index.vector_stores.postgres import PGVectorStore


def load_files(input_files):
    reader = SimpleDirectoryReader(
        input_files=input_files
    )
    docs = reader.load_data()
    return docs


def load_directory(input_dir):
    reader = SimpleDirectoryReader(
        input_dir=input_dir, recursive=True
    )
    docs = reader.load_data()
    return docs


def split(docs, indexing_strategy, **params):
    if indexing_strategy == "SentenceSplitter":
        indexing = SentenceSplitter(**params)
    elif indexing_strategy == "SementicSplitter":
        indexing = SemanticSplitterNodeParser(**params)
    elif indexing_strategy == "SentenceWindowNodeParser":
        indexing = SentenceWindowNodeParser(**params)
    else:
        raise ValueError()
    
    nodes = indexing.get_nodes_from_documents(docs)
    return nodes

def is_doc(obj):
    if isinstance(obj, Document):
        return True
    elif isinstance(obj, TextNode):
        return False
    return None


def create_index(nodes):
    index = VectorStoreIndex(nodes=nodes)
    return index