Image variables[¶](#image-variables "Permalink to this heading")
================================================================


Image variables are supported for training a tabular model in Visual ML with the Python backend. In order to leverage images, make sure they are stored in a [Managed Folder](../../connecting/managed_folders.html). Your training dataset should contain a column that indicates the path of each image within that managed folder.


Image variables are also usable for deep learning models. See [deep learning image features](../deep-learning/images.html) for more information.



Image handling[¶](#image-handling "Permalink to this heading")
--------------------------------------------------------------



### Image embedding[¶](#image-embedding "Permalink to this heading")


Image embedding creates semantically meaningful vector representation of images.


In DSS, this image handling method makes use of image embedding models from the [LLM Mesh](../../generative-ai/index.html). Each image is passed to the selected model, the outputs are then pooled to an embedding vector with a fixed size (specific to the model).


The supported models are:


* timm models using the [timm](https://huggingface.co/timm/) library. To select a timm model you need to have access to a [Local HuggingFace connection](../../generative-ai/huggingface-models.html) with image embeddings models enabled.   

The configuration of the connection exposing the model is applied (caching, auditing, …).



Warning


Image embedding feature handling is not supported on the API node.






Missing values[¶](#missing-values "Permalink to this heading")
--------------------------------------------------------------


Options for handling missing values in an image feature:


* **Drop rows** discards rows with missing values from the model building. This means dropping them from the training, and not predicting these rows when scoring. *Avoid discarding rows, unless missing data is extremely rare*.
* **Fail if missing values found** fails training (and scoring) when the image paths is either missing or does not correspond to an image file in the managed folder.
* **Impute** replaces missing values with empty embeddings (zeros). This should be used for *randomly missing* data due to random noise or incomplete data. You can also use this if the trained model should support scoring rows without any image.