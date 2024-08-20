Text cleaning[¶](#text-cleaning "Permalink to this heading")
============================================================



* [Offline text cleaning](#offline-text-cleaning)



Text cleaning is the process of cleaning up, simplifying text, and preparing it for further analysis


Dataiku provides offline text cleaning



[Offline text cleaning](#id1)[¶](#offline-text-cleaning "Permalink to this heading")
------------------------------------------------------------------------------------


The native text cleaning capability of Dataiku provides capabilities in [59 languages](https://github.com/dataiku/dss-plugin-nlp-preparation/blob/ae7691471e1b98aa8c714a97dec963ae5193996b/custom-recipes/nlp-preparation-cleaning/recipe.json#L51)


It provides:


* Tokenization
* Filtering of punctuation, stop words, and multiple other categories
* Lemmatization


It is an offline capability, meaning that it does not leverage a 3rd party API.



Note


This capability is provided by the “Text Preparation” plugin, which you need to install. Please see [Installing plugins](../plugins/installing.html).


This plugin is [Not supported](../troubleshooting/support-tiers.html)



Please see our [Text preparation plugin page](https://www.dataiku.com/product/plugins/nlp-preparation/) for detailed documentation.