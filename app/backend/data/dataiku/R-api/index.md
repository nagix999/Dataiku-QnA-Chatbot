R API[¶](#r-api "Permalink to this heading")
============================================


DSS comes with a complete set of R API.


In many parts of DSS, you can write R code (recipes, notebooks, webapps, …). This R code interacts with DSS (for example, to read datasets) using the R API of DSS.


Most of the R APIs can be used both *within* DSS and *outside* of DSS (for example, in RStudio).


The Dataiku R API is contained in several R packages:


* `dataiku`, containing most of the features
* `dataiku.spark`, to work with SparkR in Spark 1\.X
* `dataiku.spark2`, to work with SparkR in Spark 2\.X
* `dataiku.sparklyr`, to work with sparklyr



Warning


**Tier 2 support**: Support for SparkR and sparklyr is covered by [Tier 2 support](../troubleshooting/support-tiers.html)




* [Using the R API inside of DSS](inside-usage.html)
* [Using the R API outside of DSS](outside-usage.html)
* [Reference documentation](reference-doc.html)
* [Authentication information](authinfo.html)
* [Creating static insights](static_insights.html)