Model fine\-tuning[¶](#model-fine-tuning "Permalink to this heading")
=====================================================================


Fine\-tuning in the LLM Mesh specializes a pre\-trained model to perform better on a specific task or domain. It requires annotated data: prompts and their expected completions.



Setup[¶](#setup "Permalink to this heading")
--------------------------------------------


You need full outgoing Internet connectivity for downloading the models. Air\-gapped setups are not supported.


Your admin must create a [LLM connection](llm-connections.html) with fine\-tuning enabled. Fine\-tuning is supported for OpenAI and Local Hugginface connections




Using the Fine\-tuning recipe[¶](#using-the-fine-tuning-recipe "Permalink to this heading")
-------------------------------------------------------------------------------------------



Note


The LLM fine\-tuning recipe is available to customers with the *Advanced LLM Mesh* add\-on




### Standard usage[¶](#standard-usage "Permalink to this heading")


Import a dataset with two required columns : a prompt column (the input of the model) and a completion column (the ideal output). These columns must not contain missing values.


![../_images/fine-tuning-recipe-editor.png](../_images/fine-tuning-recipe-editor.png)
Optionally, the input dataset can include a system message column used to explain the task for a specific row. This column can contain missing values.


Run the recipe to obtain a fine\-tuned model, ready for use in your LLM Mesh.




### Advanced usage[¶](#advanced-usage "Permalink to this heading")


The fine\-tuning recipe also supports a validation dataset as input.


![../_images/fine-tuning-flow.png](../_images/fine-tuning-flow.png)
When present, the loss graph in the model summary will show the evolution of the loss evaluated against the validation dataset during the fine\-tuning.


![../_images/fine-tuning-graph-loss.png](../_images/fine-tuning-graph-loss.png)


### Additional remarks[¶](#additional-remarks "Permalink to this heading")


When fine\-tuning a Local Huggingface model, the recipe will use the code environment defined at the connection level. Its container configuration can be set in the recipe settings. It is strongly advised to use a GPU to fine\-tune Hugginface models.


In all cases, the fine\-tune recipe will **not** apply the guardrails defined in the connection (e.g [PII detection](pii-detection.html) won’t be done)





Using Python code[¶](#using-python-code "Permalink to this heading")
--------------------------------------------------------------------


Besides the visual fine\-tuning recipe above, you can also
[fine\-tune a LLM using Python code](https://developer.dataiku.com/latest/concepts-and-examples/llm-mesh.html#concept-and-examples-llm-mesh-fine-tuning "(in Developer Guide)").