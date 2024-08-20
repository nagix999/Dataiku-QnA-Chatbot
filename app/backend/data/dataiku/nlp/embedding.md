Text Embedding[¶](#text-embedding "Permalink to this heading")
==============================================================



* [Native embedding in Visual Machine Learning](#native-embedding-in-visual-machine-learning)
* [Explicit embedding](#explicit-embedding)



Text Embedding refers to the process of computing a numerical representation of a piece of text (often a sentence), that can then be used as a feature vector for Machine Learning.


Text Embeddings are computed using large\-scale embedding models that generate vectors that are close for related pieces of text.



[Native embedding in Visual Machine Learning](#id1)[¶](#native-embedding-in-visual-machine-learning "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------------


Text embedding is a native feature handling option for text features in Visual ML. Please see [Text variables](../machine-learning/features-handling/text.html) for more information. With this method, you can benefit for high quality extraction from text features without any specific configuration or work




[Explicit embedding](#id2)[¶](#explicit-embedding "Permalink to this heading")
------------------------------------------------------------------------------


In addition to the native feature, you can also use the “Sentence Embedding” plugin. This plugin provides a recipe that allows you to retrieve the text embeddings directly as a vector column. This can be used for further customized processing in code. This can also be used for [similarity search](https://www.dataiku.com/product/plugins/similarity-search/)


This feature is only available in English.



Note


This capability is provided by the “sentence\-embedding” plugin, which you need to install. Please see [Installing plugins](../plugins/installing.html).


This plugin is [Not supported](../troubleshooting/support-tiers.html)



Please see our [plugin page](https://www.dataiku.com/product/plugins/sentence-embedding/) for more information