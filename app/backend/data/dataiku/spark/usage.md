Usage of Spark in DSS[¶](#usage-of-spark-in-dss "Permalink to this heading")
============================================================================


When Spark support is enabled in DSS, a large number of components feature additional
options to run jobs on Spark.



SparkSQL recipes[¶](#sparksql-recipes "Permalink to this heading")
------------------------------------------------------------------


SparkSQL recipes globally work like [SQL Recipes](../code_recipes/sql.html) but
are not limited to SQL datasets. DSS will fetch the data and
pass it on to Spark.


You can set the Spark configuration in the Advanced tab.


See [SparkSQL recipes](../code_recipes/sparksql.html)




Visual recipes[¶](#visual-recipes "Permalink to this heading")
--------------------------------------------------------------


You can run [Preparation](../preparation/index.html) and some [Visual
Recipes](../other_recipes/index.html) on Spark. To do so, select Spark as the
execution engine and select the appropriate Spark configuration.


For each visual recipe that supports a Spark engine, you can select
the engine under the “Run” button in the recipe’s main tab, and set the Spark
configuration in the “Advanced” tab.


All visual data\-transformation recipes support running on Spark, including:


* Prepare
* Sync
* Sample / Filter
* Group
* Disinct
* Join
* Pivot
* Sort
* Split
* Top N
* Window
* Stack




Python code[¶](#python-code "Permalink to this heading")
--------------------------------------------------------


You can write Spark code using Python:


* In a [Pyspark recipe](../code_recipes/pyspark.html)
* In a [Python notebook](../notebooks/python.html)



### Note about Spark code in Python notebooks[¶](#note-about-spark-code-in-python-notebooks "Permalink to this heading")


All Python notebooks use the same named Spark configuration. See [Spark configurations](configuration.html) for more information about named Spark configurations.


When you change the named Spark configuration used by notebooks, you need to restart DSS afterwards.





R code[¶](#r-code "Permalink to this heading")
----------------------------------------------



Warning


**Tier 2 support**: Support for SparkR and sparklyr is covered by [Tier 2 support](../troubleshooting/support-tiers.html)



You can write Spark code using R:


* In a [Spark R recipe](../code_recipes/sparkr.html)
* In a R notebook


Both the recipe and the notebook support two different APIs for accessing Spark:


* The “SparkR” API, ie. the native API bundled with Spark
* The “sparklyr” API



### Note about Spark code in R notebooks[¶](#note-about-spark-code-in-r-notebooks "Permalink to this heading")


All R notebooks use the same named Spark configuration. See [Spark configurations](configuration.html) for more information about named Spark configurations.


When you change the named Spark configuration used by notebooks, you need to restart DSS afterwards.





Scala code[¶](#scala-code "Permalink to this heading")
------------------------------------------------------


You can use [Scala](../code_recipes/scala.html), spark’s native language, to implement your custom logic. The Spark configuration is set in the recipe’s Advanced tab.


Interaction with DSS datasets is provided through a dedicated DSS Spark API, that makes it easy to read and write SparkSQL dataframes from datasets.



Warning


The Spark\-Scala notebook is deprecated and will soon be removed





Machine Learning with MLLib[¶](#machine-learning-with-mllib "Permalink to this heading")
----------------------------------------------------------------------------------------


See the dedicated [MLLib page](../machine-learning/algorithms/mllib.html).