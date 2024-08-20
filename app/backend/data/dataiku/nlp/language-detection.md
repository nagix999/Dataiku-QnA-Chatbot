Language Detection[¶](#language-detection "Permalink to this heading")
======================================================================



* [Native language detection](#native-language-detection)
* [AWS Comprehend](#aws-comprehend)
* [Azure Cognitive Services](#azure-cognitive-services)
* [Crowlingo](#crowlingo)
* [MeaningCloud](#meaningcloud)



Language Detection is the process of finding out the language of a piece of text


Dataiku provides multiple language detection capabilities



[Native language detection](#id1)[¶](#native-language-detection "Permalink to this heading")
--------------------------------------------------------------------------------------------


The native language detection capability of Dataiku provides language detection in [114 languages](https://github.com/dataiku/dss-plugin-nlp-preparation/blob/ae7691471e1b98aa8c714a97dec963ae5193996b/custom-recipes/nlp-preparation-language-detection/recipe.json#L52)


It is an offline capability, meaning that it does not leverage a 3rd party API.



Note


This capability is provided by the “Text Preparation” plugin, which you need to install. Please see [Installing plugins](../plugins/installing.html).


This plugin is [Not supported](../troubleshooting/support-tiers.html)



Please see our [Text preparation plugin page](https://www.dataiku.com/product/plugins/nlp-preparation/) for detailed documentation.




[AWS Comprehend](#id2)[¶](#aws-comprehend "Permalink to this heading")
----------------------------------------------------------------------


The AWS Comprehend integration provides language detection in 100 languages


Please see [NLP using AWS APIs](aws-apis.html) for more details




[Azure Cognitive Services](#id3)[¶](#azure-cognitive-services "Permalink to this heading")
------------------------------------------------------------------------------------------


The Azure Cognitive Services integration provides language detection in 108 languages


Please see [NLP using Azure APIs](azure-apis.html) for more details




[Crowlingo](#id4)[¶](#crowlingo "Permalink to this heading")
------------------------------------------------------------


The Crowlingo integration provides language detection in 102 languages.


Please see [NLP with Crowlingo API](crowlingo-apis.html) for more details




[MeaningCloud](#id5)[¶](#meaningcloud "Permalink to this heading")
------------------------------------------------------------------


The MeaningCloud integration provides language detection in 180 languages.


Please see [NLP with MeaningCloud API](meaningcloud-apis.html) for more details