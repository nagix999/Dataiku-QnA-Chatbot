Introduction[¶](#introduction "Permalink to this heading")
==========================================================


With the recent advances in Generative AI and particularly large language models, new kind of applications are ready to be built, leveraging their power to structure natural language, generate new content, and provide powerful question answering capabilities.


However, there is a lack of oversight, governance, and centralization, which hinders deployment of LLM\-based applications.


The LLM Mesh is the common backbone for Enterprise Generative AI Applications.


![../_images/llm-mesh-intro.png](../_images/llm-mesh-intro.png)
It provides:


* Connectivity to a large number of Large Language Models, both as APIs or locally hosted
* Full permissioning of access to these LLMs, through new kinds of connections
* Full support for locally\-hosted HuggingFace models running on GPU
* Audit tracing
* Cost monitoring
* Personally Identifiable Information (PII) detection and redaction
* Toxicity detection
* Caching
* Native support for Retrieval Augmented Generation pattern, using connections to Vector Stores and Embedding recipe.


The LLM Mesh is fully available via [LLM Mesh API](api.html)


On top of the LLM Mesh, Dataiku includes a full\-featured development environment for Prompt Engineering, the *Prompt Studio*. In the Prompt Studio, you can test and iterate on your prompts, compare prompts, compare various LLMs (either APIs or locally hosted), and, when satisfied, deploy your prompts as Prompt Recipes for large\-scale batch generation. See [The Prompt Studio](prompt-studio.html) for more details.


Dataiku includes a complete Chat UI that allows you to expose rich chatbots with retrieval\-augmented\-generation, called *Answers*. See [Dataiku Answers](answers.html) for more details


In addition, Dataiku includes two new recipes that make it very easy to perform two common LLM\-powered tasks:


* Classifying text (either using classes that have been trained into the model, or classes that are provided by the user)
* Summarizing text



Warning


The following features are not currently available on Dataiku Cloud:


* Cost monitoring
* Personally Identifiable Information (PII) detection and redaction
* Toxicity detection