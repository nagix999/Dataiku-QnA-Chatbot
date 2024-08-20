LLM connections[¶](#llm-connections "Permalink to this heading")
================================================================



* [Hosted LLM APIs](#hosted-llm-apis)


	+ [Anthropic](#anthropic)
	+ [AWS Bedrock](#aws-bedrock)
	+ [AWS SageMaker LLM](#aws-sagemaker-llm)
	+ [Azure OpenAI](#azure-openai)
	+ [Azure LLM](#azure-llm)
	+ [Cohere](#cohere)
	+ [Databricks Mosaic AI (previously MosaicML)](#databricks-mosaic-ai-previously-mosaicml)
	+ [Google Vertex Generative AI](#google-vertex-generative-ai)
	+ [Mistral AI](#mistral-ai)
	+ [OpenAI](#openai)
	+ [Snowflake Cortex](#snowflake-cortex)
* [Locally\-running HuggingFace models](#locally-running-huggingface-models)



In order to start using the LLM Mesh, an administrator first needs to define connections to LLM.


There are two kinds of connections to LLMs:


* Hosted LLM APIs
* Locally\-running LLMs, using HuggingFace models running on GPUs.



[Hosted LLM APIs](#id1)[¶](#hosted-llm-apis "Permalink to this heading")
------------------------------------------------------------------------


The LLM Mesh provides support for a vast number of LLM API providers in order to maximize your options for choosing your preferred LLM provider.



### [Anthropic](#id2)[¶](#anthropic "Permalink to this heading")


The Anthropic connection provides connection to Anthropic text models. You will need a Anthropic API key.


The Claude, Claude\-instant, Claude 2 and Claude 3 models are supported.




### [AWS Bedrock](#id3)[¶](#aws-bedrock "Permalink to this heading")


The Bedrock connection provides connection to Bedrock text models. You will need:


* An AWS account with Bedrock access enabled
* An existing S3 connection with credentials properly setup.


The Bedrock connection provides access to the following Bedrock models:


* The Anthropic Claude models family (v1, v2, v3, v3\.5 Sonnet)
* The AI21 Labs Jurassic 2 models family
* The Cohere Command models family (Command, Command Light, Command R, command R\+), and Cohere Embed models
* The AWS Titan G1 models family, AWS Titan v2 Embeddings
* The Mistral models family (7B, 8x7B, Large)
* The Meta Llama2 and Llama3 Chat models


Text completion, chat completion, and text embedding models are supported.




### [AWS SageMaker LLM](#id4)[¶](#aws-sagemaker-llm "Permalink to this heading")


The SageMaker LLM connection allows connecting to some completion and summarization models deployed as SageMaker endpoints. You will need an existing SageMaker connection.


The following models have builtin handling modes:


* The Anthropic Claude models family (v1, v2\)
* The AI21 Labs Jurassic 2 models family
* The Cohere Command and Cohere Command Light models
* The LLama2 family (v1, v2, v3\)
* Hugging Face models


Limited support for some other models and endpoints is provided through configuration of a custom query template.




### [Azure OpenAI](#id5)[¶](#azure-openai "Permalink to this heading")


The Azure OpenAI connection provides connection to Azure OpenAI text models. You will need:


* An Azure account with Azure OpenAI enabled
* A deployed Azure OpenAI service
* One or several Azure OpenAI model deployments
* An Azure OpenAI API key


You will need to declare each Azure OpenAI model deployment, as well as the underlying model that is being deployed (for the purpose of cost computation).


Text completion, chat completion, and text embedding models are supported.


As of October 2023, Azure OpenAI Terms and Conditions indicate that Azure will not retain your data for enhancing its models.




### [Azure LLM](#id6)[¶](#azure-llm "Permalink to this heading")


The Azure LLM connection provides connectivity for models deployed with Azure Machine Learning (also known as Azure ML or Azure AI \| Machine Learning Studio) or Azure AI Studio.


You will need:


* An Azure account with Azure ML or Azure AI Studio enabled
* If using Azure AI Studio, a deployment on a serverless endpoint
* If using Azure ML, a serverless endpoint
* In both cases, the Key provided by Azure


You will need to declare each Azure ML Endpoint or Azure AI Studio Deployment, with the Target URI as provided by Azure.


The serverless endpoints should conform to the [Open AI v1 API Reference](https://platform.openai.com/docs/api-reference). [Chat](https://platform.openai.com/docs/api-reference/chat) and [Embbeddings](https://platform.openai.com/docs/api-reference/embeddings) endpoints are supported.




### [Cohere](#id7)[¶](#cohere "Permalink to this heading")


The Cohere connection provides connection to Cohere text models. You will need a Cohere API key.


The command and command\-light models are supported.




### [Databricks Mosaic AI (previously MosaicML)](#id8)[¶](#databricks-mosaic-ai-previously-mosaicml "Permalink to this heading")


The Databricks Mosaic AI connection provides connection to Databricks Foundation Model APIs. You will need an existing Databricks Model Deployment connection.


The supported models are:


* BGE Large En (text embedding)
* DBRX Instruct
* Llama2 70B
* Mixtral 8x7B
* MPT 7B Instruct
* MPT 30B Instruct



Note


MosaicML Inference has been retired by MosaicML, and therefore the MosaicML connection has been removed in DSS 12\.6\.


Databricks Mosaic AI connections should be used as a replacement.





### [Google Vertex Generative AI](#id9)[¶](#google-vertex-generative-ai "Permalink to this heading")


The Google Vertex LLM connection provides connection to Vertex PaLM text models. You will need either a service account key, or OAuth credentials.


The Chat Bison and Gemini Pro models are supported.




### [Mistral AI](#id10)[¶](#mistral-ai "Permalink to this heading")


The Mistral AI connection provides connection to Mistral AI text models. You will need a Mistral AI API key.


The supported models are:


* Mistral 7B
* Mistral 8x7B
* Mistral Small
* Mistral Large
* Mistral Embed




### [OpenAI](#id11)[¶](#openai "Permalink to this heading")


The OpenAI connection provides connection to OpenAI text models (GPT 3\.5 Turbo, GPT 4\). You will need an OpenAI API key (not to be confused with a ChatGPT account). You will be able to select which OpenAI models are allowed


The OpenAI connection supports both text completion and embedding. Only “standard” OpenAI models are supported.


As of October 2023, OpenAI Terms and Conditions indicate that OpenAI will not retain your data for enhancing its models.




### [Snowflake Cortex](#id12)[¶](#snowflake-cortex "Permalink to this heading")


The Snowflake Cortex connection provides connection to some Snowflake Cortex text models. You will need an existing Snowflake connection.


The following chat models are supported:


* Gemma 7B
* Llama2 70B
* Mistral 7B
* Mixtral 8x7B
* Mistral Large
* Snowflake Arctic





[Locally\-running HuggingFace models](#id13)[¶](#locally-running-huggingface-models "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------


See [Running HuggingFace models](huggingface-models.html)