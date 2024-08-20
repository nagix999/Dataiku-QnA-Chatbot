PII detection[¶](#pii-detection "Permalink to this heading")
============================================================


PII detection in the LLM Mesh can detect various forms of PII in your prompts and queries, and either block or redact the queries.



Setup[¶](#setup "Permalink to this heading")
--------------------------------------------


You will need a setup with full outgoing Internet connectivity for downloading the models. Air\-gapped setups are not supported.



### Create a code env[¶](#create-a-code-env "Permalink to this heading")


* Create a new Python 3\.9 code env
* In “Packages to install”, add the following packages



```
presidio_anonymizer
presidio_analyzer
langdetect

```


* In “Resources”, enter the following:



```
import spacy
spacy.cli.download("en_core_web_md")
spacy.cli.download("fr_core_news_sm")
spacy.cli.download("de_core_news_sm")
spacy.cli.download("de_core_news_md")
spacy.cli.download("it_core_news_sm")
spacy.cli.download("ja_core_news_md")
spacy.cli.download("nl_core_news_sm")
spacy.cli.download("es_core_news_sm")

```


* Click “Save and update”




### Enable the code env[¶](#enable-the-code-env "Permalink to this heading")


In Admin \> Settings, go to “LLM Mesh”. In “PII Detection”, select the code env you just created


On Dataiku Cloud you can set it as default for “PII Detection” in the code env tab in the launchpad.




### Enable PII detection in the connection[¶](#enable-pii-detection-in-the-connection "Permalink to this heading")


In the LLM connection that you wish to protect, click “PII detection (queries)” \> “Add detector”. You can select whether to:


* Reject queries where PII is detected
* Replace PII by a placeholder, such as “John Smith” \-\> “\<PERSON\>”
* Replace PII by a hash value, such as “John Smith” \-\> “0aa12bc86bd123bd”
* Remove PII, such as “I said hello to John Smith” \-\> “I said hello to”
* Replace parts of PII by stars, such as “His phone number was (570\) 123\-4567” \-\> “His phone number was \*\*\*\*\*\*\*\*567”





Detected PII types[¶](#detected-pii-types "Permalink to this heading")
----------------------------------------------------------------------


The following entity types are recognized:


Generic entities:


* CREDIT\_CARD
* DATE\_TIME
* EMAIL\_ADDRESS
* IBAN\_CODE
* IP\_ADDRESS
* LOCATION
* PERSON
* PHONE\_NUMBER
* MEDICAL\_LICENSE
* URL


Country\-specific entities:


* US\_BANK\_NUMBER
* US\_DRIVER\_LICENSE
* US\_ITIN
* US\_PASSPORT
* US\_SSN
* UK\_NHS
* ES\_NIF
* IT\_FISCAL\_CODE
* IT\_DRIVER\_LICENSE
* IT\_VAT\_CODE
* IT\_PASSPORT
* IT\_IDENTITY\_CARD
* SG\_NRIC\_FIN
* AU\_ABN
* AU\_ACN
* AU\_TFN
* AU\_MEDICARE




Details[¶](#details "Permalink to this heading")
------------------------------------------------


PII Detection is based on Microsoft Presidio library: <https://microsoft.github.io/presidio>