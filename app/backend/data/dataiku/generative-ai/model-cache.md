DSS’s Model cache[¶](#dss-s-model-cache "Permalink to this heading")
====================================================================



The model cache[¶](#the-model-cache "Permalink to this heading")
----------------------------------------------------------------


DSS has its own (optional) managed cache to store models from HuggingFace.


If enabled at the connection level, the cache is automatically populated when using the [LLM Mesh](huggingface-models.html) with pre\-trained models from HuggingFace.
Models are downloaded from [HuggingFace hub](https://huggingface.co/models).


View the model cache content in: Settings \> Misc. You can also delete, export or import models.




Import and export models[¶](#import-and-export-models "Permalink to this heading")
----------------------------------------------------------------------------------


If your DSS instance does not have access to HuggingFace (huggingface.co), you can manually import a model archive, typically one exported from the model cache of another DSS design or automation node with network access.




Build your own model archive to import[¶](#build-your-own-model-archive-to-import "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------



Note


It is simpler (and recommended) to import a model that was previously exported by DSS
when that is possible, instead of creating an archive manually.



If you want to manually create an archive it should contain the following structure:


* a root folder
	+ a folder named “model” containing the HuggingFace model repo content
	+ a file named “model\_metadata.json”


To retrieve the `model` folder content from HuggingFace hub:



```
git lfs install
git clone https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2

```


Example of a model archive content:



```
sentence-transformers_2fall-MiniLM-L6-v2 ← folder at the root (its name is not important)
├── model ← a folder named "model" containing the HuggingFace model repo content
│   ├── 1_Pooling
│   │   └── config.json
│   ├── README.md
│   ├── config.json
│   ├── config_sentence_transformers.json
│   ├── data_config.json
│   ├── modules.json
│   ├── pytorch_model.bin
│   ├── sentence_bert_config.json
│   ├── special_tokens_map.json
│   ├── tokenizer.json
│   ├── tokenizer_config.json
│   ├── train_script.py
│   └── vocab.txt
└── model_metadata.json ← a file named "model_metadata.json"

```


The model\_metadata.json file should have the following schema:



```
{
    "commitHash": "7dbbc90392e2f80f3d3c277d6e90027e55de9125",
    "downloadDate": 1698300636139,
    "downloadedBy": "admin",
    "lastDssUsage": 1699570884724,
    "lastModified": "2022-11-07T08:44:33.000Z",
    "lastUsedBy": "admin",
    "libraryName": "sentence-transformers",
    "modelDefinition": {
        "key": "hf@sentence-transformers/all-MiniLM-L6-v2"
    },
    "pipelineName": "sentence-similarity",
    "sizeInBytes": 91652688,
    "taggedLanguages": [
        "en"
    ],
    "tags": [
        "sentence-transformers",
        "pytorch",
        "tf",
        "rust",
        "bert",
        "feature-extraction",
        "sentence-similarity",
        "en",
        "dataset:s2orc",
        "dataset:flax-sentence-embeddings/stackexchange_xml",
        ...
        "arxiv:2104.08727",
        "arxiv:1704.05179",
        "arxiv:1810.09305",
        "license:apache-2.0",
        "endpoints_compatible",
        "has_space",
        "region:us"
    ],
    "url": "https://huggingface.co/sentence-transformers%2Fall-MiniLM-L6-v2/tree/main",
    "version": 0
}

```


Most of these fields can be retrieved from the HuggingFace model repository.


The important ones are:


* modelDefinition:
	+ key: consists of `hf@<modelId>` or `hf@<modelId>@<revision>` if a specific revision was used
* version: as of now should be 0
* url: the url used to fetch the model