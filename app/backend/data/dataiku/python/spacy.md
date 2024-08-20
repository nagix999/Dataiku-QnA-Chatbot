Using SpaCy[¶](#using-spacy "Permalink to this heading")
========================================================


SpaCy is a Python library for Natural Language Processing (NLP) such as tokenization,
named entity recognition with pre\-trained models for several languages.


Documentation for SpaCy is available at <https://spacy.io/>



Installing SpaCy[¶](#installing-spacy "Permalink to this heading")
------------------------------------------------------------------


In a [code environment](../code-envs/index.html), you need to install the `spacy` package.


To add a specific pre\-trained model, you can add the URL of the pip package for that model,
as specified in the [Installation via pip](https://spacy.io/usage/models#download-pip)
page of the SpaCy documentation.


For example for the English model, your code env’s Requested Packages could be:



```
spacy
https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-2.2.0/en_core_web_sm-2.2.0.tar.gz

```


See SpaCy’s [Models](https://spacy.io/models) page for a list of languages.




Using SpaCy models[¶](#using-spacy-models "Permalink to this heading")
----------------------------------------------------------------------


In a python notebook or recipe (using the aforementioned code environment), you can then
import `spacy` and use `spacy.load` with the model package name:



```
import spacy
nlp = spacy.load("en_core_web_sm")
doc = nlp(u"This is an example sentence.")

```