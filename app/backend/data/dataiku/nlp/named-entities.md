Named Entities Extraction[¶](#named-entities-extraction "Permalink to this heading")
====================================================================================



* [Native entity extraction](#native-entity-extraction)
* [AWS Comprehend](#aws-comprehend)
* [Azure Cognitive Services](#azure-cognitive-services)
* [Google Cloud NLP](#google-cloud-nlp)



Named Entities Extraction is the process of recognizing various kinds of entities (persons, cities, diseases, …) in documents, and tagging each text with the named entities that it contains.


Dataiku provides several named entities extraction capabilities



[Native entity extraction](#id1)[¶](#native-entity-extraction "Permalink to this heading")
------------------------------------------------------------------------------------------


The native entity extraction capability of Dataiku extracts information about people, dates, places, …


It is an offline capability, meaning that it does not leverage a 3rd party API.


Extraction is provided in [7 languages](https://github.com/dataiku/dss-plugin-nlp-named-entity-recognition/blob/19a682f579670dec0675b9997fb706dfc4e0dc71/custom-recipes/named-entity-recognition-extract/recipe.json#L61)”



Note


This capability is provided by the “Named Entities Recognition” plugin, which you need to install. Please see [Installing plugins](../plugins/installing.html).


This plugin is [Not supported](../troubleshooting/support-tiers.html)



Please see our [Named entity recognition plugin page](https://www.dataiku.com/product/plugins/named-entity-recognition/) for detailed documentation.




[AWS Comprehend](#id2)[¶](#aws-comprehend "Permalink to this heading")
----------------------------------------------------------------------


The AWS Comprehend integration provides named entity recognition in 12 languages.


Please see [NLP using AWS APIs](aws-apis.html) for more details




[Azure Cognitive Services](#id3)[¶](#azure-cognitive-services "Permalink to this heading")
------------------------------------------------------------------------------------------


The Azure Cognitive Services integration provides named entity recognition in 23 languages.


Please see [NLP using Azure APIs](azure-apis.html) for more details




[Google Cloud NLP](#id4)[¶](#google-cloud-nlp "Permalink to this heading")
--------------------------------------------------------------------------


The Google Cloud NLP integration provides named entity recognition in 11 languages.


Please see [NLP using Google APIs](google-apis.html) for more details