from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
from llama_index.core.node_parser import SentenceSplitter
from sqlalchemy.exc import IntegrityError

from settings.database import get_db
from utils.context_manager import get_context
from models import *


def initialize():
    # db = next(get_db())

    # nodes = [
    #     FlowNode(**{"node_id": "caeebdcd-e8ad-464b-9b97-dedccaf89583", "node_type": "InputFilesNode", "label": "Input Files", "position_x": 0, "position_y": 100}),
    #     FlowNode(**{"node_id": "60fd0366-c7bd-44e2-ad50-c92146e4d535", "node_type": "EmbeddingNode", "label": "Embedding1", "position_x": 200, "position_y": 0}),
    #     FlowNode(**{"node_id": "3e0be85a-27a4-4533-ad05-e2eadf97e7dc", "node_type": "EmbeddingNode", "label": "Embedding2", "position_x": 200, "position_y": 100}),
    #     FlowNode(**{"node_id": "e554bb30-c72c-4805-b51b-1ee8cf535834", "node_type": "EmbeddingNode", "label": "Embedding3", "position_x": 200, "position_y": 200}),
    #     FlowNode(**{"node_id": "ed5f5043-4d3b-4c4d-bac4-349be96e85b3", "node_type": "VectorStoreNode", "label": "Vector Store1", "position_x": 400, "position_y": 0}),
    #     FlowNode(**{"node_id": "8bf18acb-a362-4edf-999f-0f1485dac742", "node_type": "VectorStoreNode", "label": "Vector Store2", "position_x": 400, "position_y": 100}),
    #     FlowNode(**{"node_id": "61b63ae4-e888-4ee7-8616-655d171d39f1", "node_type": "VectorStoreNode", "label": "Vector Store3", "position_x": 400, "position_y": 200}),
    #     FlowNode(**{"node_id": "6f697c36-70ff-45c8-8794-1da23647bcae", "node_type": "RetrievalNode", "label": "Retrieval", "position_x": 600, "position_y": 300}),
    #     FlowNode(**{"node_id": "e9360fef-eb7f-4927-9253-83ed690253c0", "node_type": "UserQueryNode", "label": "User Query", "position_x": 200, "position_y": 400}),
    #     FlowNode(**{"node_id": "01469241-c9af-440f-82e6-1ed3316d4037", "node_type": "PreRetrievalNode", "label": "Pre-Retrieval", "position_x": 400, "position_y": 300}),
    #     FlowNode(**{"node_id": "64f5b8a0-b341-4aea-9cec-05e976f7fc08", "node_type": "PromptNode", "label": "Prompt", "position_x": 800, "position_y": 400}),
    #     FlowNode(**{"node_id": "704760ca-fa4b-4d16-92ce-eb701e3d0194", "node_type": "LLMNode", "label": "LLM", "position_x": 1000, "position_y": 400}),
    #     FlowNode(**{"node_id": "5197e965-459d-45cc-baf8-60acfc4918e3", "node_type": "OutputNode", "label": "Ouput Response", "position_x": 1200, "position_y": 400}),
    #     FlowNode(**{"node_id": "951d231e-cbbe-4ae6-9933-8c3a72dffcb7", "node_type": "PostRetrievalNode", "label": "Post-Retrieval", "position_x": 800, "position_y": 300}),
    # ]

    # edges = [
    #     FlowEdge(**{"source_id": "caeebdcd-e8ad-464b-9b97-dedccaf89583", "target_id": "60fd0366-c7bd-44e2-ad50-c92146e4d535"}),
    #     FlowEdge(**{"source_id": "caeebdcd-e8ad-464b-9b97-dedccaf89583", "target_id": "3e0be85a-27a4-4533-ad05-e2eadf97e7dc"}),
    #     FlowEdge(**{"source_id": "caeebdcd-e8ad-464b-9b97-dedccaf89583", "target_id": "e554bb30-c72c-4805-b51b-1ee8cf535834"}),
    #     FlowEdge(**{"source_id": "60fd0366-c7bd-44e2-ad50-c92146e4d535", "target_id": "ed5f5043-4d3b-4c4d-bac4-349be96e85b3"}),
    #     FlowEdge(**{"source_id": "3e0be85a-27a4-4533-ad05-e2eadf97e7dc", "target_id": "8bf18acb-a362-4edf-999f-0f1485dac742"}),
    #     FlowEdge(**{"source_id": "e554bb30-c72c-4805-b51b-1ee8cf535834", "target_id": "61b63ae4-e888-4ee7-8616-655d171d39f1"}),
    #     FlowEdge(**{"source_id": "ed5f5043-4d3b-4c4d-bac4-349be96e85b3", "target_id": "6f697c36-70ff-45c8-8794-1da23647bcae", "target_handle": "top"}),
    #     FlowEdge(**{"source_id": "8bf18acb-a362-4edf-999f-0f1485dac742", "target_id": "6f697c36-70ff-45c8-8794-1da23647bcae", "target_handle": "top"}),
    #     FlowEdge(**{"source_id": "61b63ae4-e888-4ee7-8616-655d171d39f1", "target_id": "6f697c36-70ff-45c8-8794-1da23647bcae", "target_handle": "top"}),
    #     FlowEdge(**{"source_id": "e9360fef-eb7f-4927-9253-83ed690253c0", "target_id": "01469241-c9af-440f-82e6-1ed3316d4037", "target_handle": "left"}),
    #     FlowEdge(**{"source_id": "e9360fef-eb7f-4927-9253-83ed690253c0", "target_id": "64f5b8a0-b341-4aea-9cec-05e976f7fc08", "target_handle": "left"}),
    #     FlowEdge(**{"source_id": "704760ca-fa4b-4d16-92ce-eb701e3d0194", "target_id": "5197e965-459d-45cc-baf8-60acfc4918e3"}),
    #     FlowEdge(**{"source_id": "01469241-c9af-440f-82e6-1ed3316d4037", "target_id": "6f697c36-70ff-45c8-8794-1da23647bcae", "target_handle": "left"}),
    #     FlowEdge(**{"source_id": "64f5b8a0-b341-4aea-9cec-05e976f7fc08", "target_id": "704760ca-fa4b-4d16-92ce-eb701e3d0194"}),
    #     FlowEdge(**{"source_id": "6f697c36-70ff-45c8-8794-1da23647bcae", "target_id": "951d231e-cbbe-4ae6-9933-8c3a72dffcb7", "target_handle": "left", "source_handle": "right"}),
    #     FlowEdge(**{"source_id": "951d231e-cbbe-4ae6-9933-8c3a72dffcb7", "target_id": "64f5b8a0-b341-4aea-9cec-05e976f7fc08", "target_handle": "top", "source_handle": "bottom"}),
    # ]

    # embedding_models = [
    #     EmbeddingModel(model_id="4b722344-09d4-49c2-9cc3-e0f0430954a5", provider="OpenAI", model_name="text-embedding-ada-002", dimension=1536)
    # ]

    # splitters = [
    #     Splitter(splitter_id="215486d1-d9f5-4c8e-9d04-9e8ab6f8eeaf", object_name="SentenceSplitter", display_name="Sentence Splitter", description="Basic split"),
    #     # Splitter(splitter_id="e5ec53b0-301b-489e-8be3-9852f2eef4a4", object_name="SementicSplitter", display_name="Sementic Splitter", description="Sementic split"),
    #     Splitter(splitter_id="cf4d43a3-bdae-4d00-baeb-88e64d33eee4", object_name="SentenceWindowNodeParser", display_name="Window Splitter", description="Window split")
    # ]

    # splitter_params = [
    #     SplitterParam(param_id="c14fa948-39d6-4ba2-ae44-5c8fbde4895c", splitter_id="215486d1-d9f5-4c8e-9d04-9e8ab6f8eeaf", param_name="chunk_size", display_name="chunck size", param_type="INT", param_default_value="256"),
    #     SplitterParam(param_id="ae238da9-1c0f-43cd-b7a9-c4cc8a056cd4", splitter_id="215486d1-d9f5-4c8e-9d04-9e8ab6f8eeaf", param_name="chunk_overlap", display_name="chunck overlap", param_type="INT", param_default_value="50"),
    #     SplitterParam(param_id="0bf482db-f3df-4486-9e3c-e479357ec501", splitter_id="cf4d43a3-bdae-4d00-baeb-88e64d33eee4", param_name="window_size", display_name="window size", param_type="INT", param_default_value="3")
    # ]

    # splitter_settings = [
    #     SplitterSetting(setting_id="94505dbd-5dc0-4bf3-9ce2-9db6b6b9c476", splitter_id="215486d1-d9f5-4c8e-9d04-9e8ab6f8eeaf", param_id="c14fa948-39d6-4ba2-ae44-5c8fbde4895c", param_value="128"),
    #     SplitterSetting(setting_id="94505dbd-5dc0-4bf3-9ce2-9db6b6b9c476", splitter_id="215486d1-d9f5-4c8e-9d04-9e8ab6f8eeaf", param_id="ae238da9-1c0f-43cd-b7a9-c4cc8a056cd4", param_value="0"),
    #     SplitterSetting(setting_id="5485cf61-4d35-433a-9084-9be39dc6b284", splitter_id="215486d1-d9f5-4c8e-9d04-9e8ab6f8eeaf", param_id="c14fa948-39d6-4ba2-ae44-5c8fbde4895c", param_value="256"),
    #     SplitterSetting(setting_id="5485cf61-4d35-433a-9084-9be39dc6b284", splitter_id="215486d1-d9f5-4c8e-9d04-9e8ab6f8eeaf", param_id="ae238da9-1c0f-43cd-b7a9-c4cc8a056cd4", param_value="0"),
    #     SplitterSetting(setting_id="4555ebd7-6597-4a11-9cac-6a6e629ce4d2", splitter_id="cf4d43a3-bdae-4d00-baeb-88e64d33eee4", param_id="0bf482db-f3df-4486-9e3c-e479357ec501", param_value="3")
    # ]

    # embedding_settings = [
    #     EmbeddingSetting(setting_id="a7880150-33e2-4de9-b460-512ecba194fd", embedding_node_id="60fd0366-c7bd-44e2-ad50-c92146e4d535", embedding_model_id="4b722344-09d4-49c2-9cc3-e0f0430954a5", splitter_setting_id="94505dbd-5dc0-4bf3-9ce2-9db6b6b9c476"),
    #     EmbeddingSetting(setting_id="60fdfe5a-b070-4d84-8ebb-b2ad4456cbae", embedding_node_id="3e0be85a-27a4-4533-ad05-e2eadf97e7dc", embedding_model_id="4b722344-09d4-49c2-9cc3-e0f0430954a5", splitter_setting_id="5485cf61-4d35-433a-9084-9be39dc6b284"),
    #     EmbeddingSetting(setting_id="c138cbc3-8998-4747-9dec-4daefa6dc549", embedding_node_id="e554bb30-c72c-4805-b51b-1ee8cf535834", embedding_model_id="4b722344-09d4-49c2-9cc3-e0f0430954a5", splitter_setting_id="4555ebd7-6597-4a11-9cac-6a6e629ce4d2"),
    # ]
    

    # db.add_all(nodes)
    # db.add_all(edges)
    # db.add_all(embedding_models)
    # db.add_all(splitters)
    # db.add_all(splitter_params)
    # db.add_all(splitter_settings)
    # db.add_all(embedding_settings)

    
    # db.commit()
    # db.close()

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

    # vector_store1 = VectorStoreIndex(nodes1)
    # vector_store2 = VectorStoreIndex(nodes2)
    # vector_store3 = VectorStoreIndex(nodes3)

    context.update({"nodes": 
                        {
                            "51908b02-fff6-4805-a7fa-ecfe3803c260": nodes1, 
                            "675e9320-1452-4252-9a87-68d484bb7b77": nodes2, 
                            "ca090869-399b-43a7-b6b8-21ec3edfe14d": nodes3
                        },
                    #  "vector_store_index": 
                    #     {
                    #         "51908b02-fff6-4805-a7fa-ecfe3803c260": vector_store1, 
                    #         "675e9320-1452-4252-9a87-68d484bb7b77": vector_store2, 
                    #         "ca090869-399b-43a7-b6b8-21ec3edfe14d": vector_store3
                    #     }
                    })