Spark / R recipes[¶](#spark-r-recipes "Permalink to this heading")
==================================================================


DSS lets you write recipes using Spark in R, using one of two Spark / R integration APIs:


* The “SparkR” API, ie. the native API bundled with Spark
* The “sparklyr” API


As with all Spark integrations in DSS, PySPark recipes can read and write datasets,
whatever their storage backends.



Warning


**Tier 2 support**: Support for SparkR and sparklyr is covered by [Tier 2 support](../troubleshooting/support-tiers.html)




Warning


**Limited compatibility**: SparkR and sparklyr cannot be used on Cloudera, nor on Elastic AI / Spark\-on\-Kubernetes setups




Warning


**Features and security**: sparklyr has concurrency and security limitations




* [Creating a Spark / R recipe](#creating-a-spark-r-recipe)
* [Choosing the API](#choosing-the-api)
* [Anatomy of a basic SparkR recipe](#anatomy-of-a-basic-sparkr-recipe)


	+ [Spark 1\.X](#spark-1-x)
	+ [Spark 2\.X](#spark-2-x)
* [Anatomy of a basic Sparklyr recipe](#anatomy-of-a-basic-sparklyr-recipe)




[Creating a Spark / R recipe](#id1)[¶](#creating-a-spark-r-recipe "Permalink to this heading")
----------------------------------------------------------------------------------------------


* First make sure that [Spark is enabled](../spark/installation.html)
* Create a SPARKR recipe by clicking the corresponding icon
* Add the input Datasets and/or Folders that will be used as source data in your recipes.
* Select or create the output Datasets and/or Folder that will be filled by your recipe.
* Click Create recipe.
* You can now write your Spark code in R. A sample code is provided to get you started.



Note


If the SPARKR icon is not enabled (greyed out), it can be because:


* Spark is not installed. See [Setting up Spark integration](../spark/installation.html) for more information
* You don’t have [write access](../security/permissions.html) on the project
* You don’t have the proper [user profile](../security/user-profiles.html). Your administrator
needs to grant you an appropriate user profile





[Choosing the API](#id2)[¶](#choosing-the-api "Permalink to this heading")
--------------------------------------------------------------------------


By default, when you create a new Spark / R recipe, the recipe runs in “SparkR” mode, i.e. the native Spark / R API bundled with Spark. You can also choose to switch to the “sparklyr” API.


The two APIs are incompatible and you must choose the proper mode for the recipe to execute properly (i.e. if the recipe is declared as using the SparkR API, sparklyr\-using code will not work).


To switch between the two R APIs, click on the “API” button at the bottom of the recipe editor. Each time you switch the API, your previous code is kept in the recipe but commented away, and a new sample code is loaded.




[Anatomy of a basic SparkR recipe](#id3)[¶](#anatomy-of-a-basic-sparkr-recipe "Permalink to this heading")
----------------------------------------------------------------------------------------------------------



Note


This only covers the SparkR native API. See the next section for the sparklyr API.



The SparkR API is very different between Spark 1\.X and Spark 2\.X \- DSS automatically loads the proper code sample for your Spark version. To cover this, DSS provides two packages: `dataiku.spark` (for Spark 1\.X) and `dataiku.spark2` (for Spark 2\.X)



### [Spark 1\.X](#id4)[¶](#spark-1-x "Permalink to this heading")


First of all, you will need to load the Dataiku API and Spark APIs, and create the Spark and SQL contexts



```
library(SparkR)
library(dataiku)
library(dataiku.spark)

# Create the Spark context
sc <- sparkR.init()
sqlContext <- sparkRSQL.init(sc)

```


You will then need to obtain DataFrames for your input datasets



```
df <- dkuSparkReadDataset(sqlContext, "input_dataset_name")

```


These return a SparkSQL DataFrame. You can then apply your transformations to the DataFrame.


Finally you can save the transformed DataFrame into the output dataset. By default this
method overwrites the dataset schema with that of the DataFrame:



```
dkuSparkWriteDataset(df, "output_dataset_name")

```


If you run your recipe on partitioned datasets, the above code will automatically load/save the
partitions specified in the recipe parameters.




### [Spark 2\.X](#id5)[¶](#spark-2-x "Permalink to this heading")


First of all, you will need to load the Dataiku API and Spark APIs, and create the Spark session



```
library(SparkR)
library(dataiku)
library(dataiku.spark2)

sc <- sparkR.session()

```


You will then need to obtain DataFrames for your input datasets



```
df <- dkuSparkReadDataset("input_dataset_name")

```


These return a SparkSQL DataFrame. You can then apply your transformations to the DataFrame.


Finally you can save the transformed DataFrame into the output dataset. By default this
method overwrites the dataset schema with that of the DataFrame:



```
dkuSparkWriteDataset(df, "output_dataset_name")

```


If you run your recipe on partitioned datasets, the above code will automatically load/save the
partitions specified in the recipe parameters.





[Anatomy of a basic Sparklyr recipe](#id6)[¶](#anatomy-of-a-basic-sparklyr-recipe "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------



Note


This only covers the Sparklyr API. See the previous section for the native SparkR API.



First of all, you will need to load the Dataiku API and sparklyr APIs, and create the sparklyr connection.



```
library(sparklyr)
library(dplyr)
library(dataiku.sparklyr)

sc <- dku_spark_connect()

```



Warning


Unlike other Spark APIs, the sparklyr requires an explicit “spark.master” configuration parameter. It cannot inherit “spark.master” from the default spark environment.


You will need either to:



> * Have a “spark.master” in your [Spark configuration](../spark/configuration.html)
> * Pass `additional_config = list("spark.master" = "your-master-declaration")` to the `dku_spark_connect` function



You will then need to obtain DataFrames for your input datasets



```
df <- spark_read_dku_dataset(sc, "input_dataset_name", "input_dataset_table_name")

```


Since sparklyr is based on dplyr, it mostly deals with SQL and requires a temporary table name for the dataset.


This returns a sparkly DataFrame, compatible with the dplyr APIs. You can then apply your transformations to the DataFrame.


Finally you can save the transformed DataFrame into the output dataset. By default this
method overwrites the dataset schema with that of the DataFrame:



```
spark_write_dku_dataset(df, "output_dataset_name")

```


If you run your recipe on partitioned datasets, the above code will automatically load/save the
partitions specified in the recipe parameters.