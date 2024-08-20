PySpark recipes[¶](#pyspark-recipes "Permalink to this heading")
================================================================


DSS lets you write recipes using Spark in Python, using the PySpark API.


As with all Spark integrations in DSS, PySPark recipes can read and write datasets,
whatever their storage backends.


Pyspark recipes manipulate datasets using the PySpark / SparkSQL “DataFrame” API.



* [Creating a PySpark recipe](#creating-a-pyspark-recipe)
* [Anatomy of a basic Pyspark recipe](#anatomy-of-a-basic-pyspark-recipe)




[Creating a PySpark recipe](#id1)[¶](#creating-a-pyspark-recipe "Permalink to this heading")
--------------------------------------------------------------------------------------------


* First make sure that [Spark is enabled](../spark/installation.html)
* Create a Pyspark recipe by clicking the corresponding icon
* Add the input Datasets and/or Folders that will be used as source data in your recipes.
* Select or create the output Datasets and/or Folder that will be filled by your recipe.
* Click Create recipe.
* You can now write your Spark code in Python. A sample code is provided to get you started.



Note


If the Pyspark icon is not enabled (greyed out), it can be because:


* Spark is not installed. See [Setting up Spark integration](../spark/installation.html) for more information
* You don’t have [write access](../security/permissions.html) on the project
* You don’t have the proper [user profile](../security/user-profiles.html). Your administrator
needs to grant you an appropriate user profile





[Anatomy of a basic Pyspark recipe](#id2)[¶](#anatomy-of-a-basic-pyspark-recipe "Permalink to this heading")
------------------------------------------------------------------------------------------------------------


First of all, you will need to load the Dataiku API and Spark APIs, and create the Spark context



```
# -*- coding: utf-8 -*-

# Import Dataiku APIs, including the PySpark layer
import dataiku
from dataiku import spark as dkuspark
# Import Spark APIs, both the base SparkContext and higher level SQLContext
from pyspark import SparkContext
from pyspark.sql import SQLContext

sc = SparkContext()
sqlContext = SQLContext(sc)

```


You will then need to obtain DataFrames for your input datasets and directory handles for your input folders:



```
dataset = dataiku.Dataset("name_of_the_dataset")
df = dkuspark.get_dataframe(sqlContext, dataset)

```


These return a SparkSQL DataFrame
You can then apply your transformations to the DataFrame.


Finally you can save the transformed DataFrame into the output dataset. By default this
method overwrites the dataset schema with that of the DataFrame:



```
out = dataiku.Dataset("out")
dkuspark.write_with_schema(out, the_resulting_spark_dataframe)

```


If you run your recipe on partitioned datasets, the above code will automatically load/save the
partitions specified in the recipe parameters.