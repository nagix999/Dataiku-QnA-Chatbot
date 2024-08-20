Retrieval\-Augmented Generation[¶](#retrieval-augmented-generation "Permalink to this heading")
===============================================================================================



* [Concepts](#concepts)
* [Initial setup](#initial-setup)


	+ [Create a code env](#create-a-code-env)
	+ [Enable the code env](#enable-the-code-env)
* [Embedding LLMs](#embedding-llms)
* [Your first RAG setup](#your-first-rag-setup)
* [Vector store types](#vector-store-types)


	+ [Pinecone limitations](#pinecone-limitations)



Retrieval\-Augmented Generation, or RAG, is a standard technique used with LLMs, in order to give to standard LLMs the knowledge of your particular business problem.


RAG supposes that you already have a corpus of text knowledge. When you query a Retrieval\-Augmented LLM, the most relevant elements of your corpus are automatically selected, and are added into the query that is sent to the LLM, so that the LLM can synthesize an answer using that contextual knowledge



[Concepts](#id2)[¶](#concepts "Permalink to this heading")
----------------------------------------------------------


RAG works using Embedding, i.e. a vector representation of a chunk of text. The Embedding is performed by a specialized kind of LLM, the Embedding LLM.


In order to perform RAG in Dataiku, you first must create an **Embedding recipe**. The Embedding recipe takes your text corpus as input, and outputs a **Knowledge Bank**.


The **Knowledge Bank** contains the embedded version of your corpus, that is stored in a **Vector Store**. A vector store is a specialized kind of database, that allows to quickly search for the “closest vectors”.


You then defined **Retrieval\-augmented LLMs**. A retrieval\-augmented LLM is the combination of a standard LLM and a Knowledge Bank, with some search settings.


When you submit a query to the Retrieval\-augmented LLM (either with the Prompt Studio, a Prompt Recipe, or using the LLM Mesh API), Dataiku will automatically:


* Use the Embedding LLM in order to obtain the embedded representation of the query
* Use the vector store in the Knowledge Bank in order to search for the embedded vectors (i.e. the documents of your corpus) that are the closest to your query
* Add the relevant documents to the query
* Query the actual LLM with the contextual document
* Respond with the context\-aware answer, as well as with information about which documents were used (the “sources” of the augmented query)




[Initial setup](#id3)[¶](#initial-setup "Permalink to this heading")
--------------------------------------------------------------------


You will need a setup with full outgoing Internet connectivity for downloading the models. Air\-gapped setups are not supported.



### [Create a code env](#id4)[¶](#create-a-code-env "Permalink to this heading")


* Create a new Python 3\.9 code env
* In “Packages to install”, click “Add sets of packages”, and select “Retrieval Augmented Generation models”
* Click “Save and update”




### [Enable the code env](#id5)[¶](#enable-the-code-env "Permalink to this heading")


In Admin \> Settings, go to “LLM Mesh”. In “Retrieval Augmentation”, select the code env you just created


On Dataiku Cloud you can set it as default for RAG in the code env tab in the launchpad.





[Embedding LLMs](#id6)[¶](#embedding-llms "Permalink to this heading")
----------------------------------------------------------------------


In order to use RAG, you must have at least one LLM connection that supports embedding LLMs. At the moment, embedding is supported on the following connection types:


* OpenAI
* Azure OpenAI
* AWS Bedrock
* Databricks Mosaic AI
* Local Hugging Face
* Custom LLM Plugins




[Your first RAG setup](#id7)[¶](#your-first-rag-setup "Permalink to this heading")
----------------------------------------------------------------------------------


* In your project, select the dataset that will be used as your corpus. It needs to have at least one column of text
* Create a new embedding recipe
* Give a name to your knowledge bank
* Select the embedding model to use
* In the settings of the Embedding recipe, select the column of text
* Optionally, select one or several “metadata columns”. These columns will be displayed in the “Sources” section of the answer
* Run the embedding recipe
* Open the Knowledge Bank
* You will now define a Retrieval\-Augmented LLM



> + Select the underlying LLM that will be queried
> 	+ Optionally, tune the advanced settings for the search in the vector store
* Create a new prompt studio
* As LLM, select the new “Retrieval augmented” entry
* Ask your question
* You will now receive an answer that feeds on info gathered from your corpus dataset, with “Sources” indicating how this answer was generated




[Vector store types](#id8)[¶](#vector-store-types "Permalink to this heading")
------------------------------------------------------------------------------


Out of the box, Knowledge Banks are created with a Vector Store called “FAISS”. This does not require any setup, and provides good performance even for quite large corpus.


As an alternative, another no\-setup Vector Store called Chroma is available.


For more advanced use cases, you may wish to use a dedicated Vector Store. Dataiku supports a third\-party Vector Store called Pinecone. To use Pinecone, you must first create a Pinecone setup. Then, before running the Embedding recipe, edit the settings of the Knowledge Bank, and select Pinecone as vector store type, select your Pinecone connection, and enter the name of an existing Pinecone index.



### [Pinecone limitations](#id9)[¶](#pinecone-limitations "Permalink to this heading")


* Rebuilding a Pinecone\-based Knowledge Bank may require that you manually delete and recreate the Pinecode index.