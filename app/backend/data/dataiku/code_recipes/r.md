R recipes[¶](#r-recipes "Permalink to this heading")
====================================================


R is a language and environment for statistical computing. Data Science Studio provides an advanced
integration with this environment, and gives you the ability to write recipes using the R language.


R recipes, like Python recipes, can read and write datasets, whatever their storage backend is. We provide a simple API to read and write them.



Basic R recipe[¶](#basic-r-recipe "Permalink to this heading")
--------------------------------------------------------------


* Create a new R recipe by clicking the « R » button in the Recipes page.
* Go to the Inputs/Outputs tab
* Add the input datasets that will be used as source data in your recipes.
* Select or create the output datasets that will be created by your recipe. For more information, see Creating recipes
* If needed, fill the partition dependencies. For more information, see [Working with partitions](../partitions/index.html)
* Give a name and save your Recipe.
* You can now write your R code.


First of all, you will need to load the Dataiku R library.



```
library(dataiku)

```


You will then be able to obtain the dataframe objects corresponding to your inputs.



### Reading a dataset in a dataframe[¶](#reading-a-dataset-in-a-dataframe "Permalink to this heading")


For example, if your recipe has dataset ‘A’ as input, you can use the method `read.dataset()` to load it into a native R dataframe :



```
# Load the content of dataset A into a native R dataframe
dataframeA <- read.dataset("A")

```




### Writing a dataframe in a dataset[¶](#writing-a-dataframe-in-a-dataset "Permalink to this heading")


Once you have used R to manipulate the input dataframe, you generally want to write it into the output dataset.


The Dataiku R API provides the method `write.dataset()` to do so.



```
# Write the R dataframe 'my_dataframe' into the dataset 'output_dataset_name'
write.dataset(my_dataframe,"output_dataset_name")

```




### Writing the output schema[¶](#writing-the-output-schema "Permalink to this heading")


Generally, you should declare the schema of the output dataset prior to running the R code.
However, it is often impractical to do so, especially when you write dataframes with many columns (or columns that change often).
In that case, it can be useful for the R script to actually modify the schema of the dataset.


The Dataiku R API provides a method to set the schema of the output dataset.
When doing that, the schema of the dataset is modified each time the R recipe is run. This must obviously be used with caution.



```
# Set the schema of ‘my_output_dataset’ to match the columns of the dataframe 'my_dataframe'
write.dataset_schema(my_dataframe,"my_output_dataset")

```


You can also write the schema and the dataframe at the same time:



```
# Write the schema from the dataframe 'my_dataframe' and write it into 'my_output_dataset'
write.dataset_with_schema(my_dataframe,"my_output_dataset")

```


For more information, check the [R API documentation](../R-api/index.html).