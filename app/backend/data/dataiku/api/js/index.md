The Javascript API[¶](#the-javascript-api "Permalink to this heading")
======================================================================



* [Fetching dataset data](#fetching-dataset-data)
* [The DataFrame object](#the-dataframe-object)
* [Sampling](#sampling)


	+ [sampling \= ‘head’](#sampling-head)
	+ [sampling \= ‘random’](#sampling-random)
	+ [sampling \= ‘full’](#sampling-full)
	+ [sampling \= ‘random\-column’](#sampling-random-column)
	+ [sampling \= ‘sort\-column’](#sampling-sort-column)
* [Partitions selection](#partitions-selection)
* [Columns selection](#columns-selection)
* [Rows filtering](#rows-filtering)



The Dataiku Javascript API allows you to write custom Web apps that can read from the Dataiku datasets.



[Fetching dataset data](#id1)[¶](#fetching-dataset-data "Permalink to this heading")
------------------------------------------------------------------------------------




dataiku.fetch(*datasetName*, \[*options*, ]*success*, *failure*)[¶](#dataiku.fetch "Permalink to this definition")
Returns a DataFrame object with the contents of a dataset



Arguments:
* **datasetName** (`string()`) – Name of the dataset. Can be in either of two formats



	+ projectKey.datasetName
	+ datasetName. In this case, the default project will be searched
* **options** (`dict()`) – Options for the call. Valid keys are:



	+ apiKey: forced API key for this dataset. By default, dataiku.apiKey is used
	+ partitions: array of partition ids to fetch. By default, all partitions are fetched.
	+ sampling: sampling method to apply. By default, the first 20000 records are retrieved. See below for the available sampling methods.
	+ filter: formula for filtering which rows are returned.
	+ limit : maximum number of rows to be retrieved, used by “head”, “random”, “random\-column” and “sort\-column”.
	+ ratio : define the max row count as a ratio (between 0 and 1\) of the dataset’s total row count, used by “head”, “random”, “random\-column” and “sort\-column”.
	+ ascending : sort in ascending order the selected column of the “sort\-column” sampling, defaults to true.
* **success** (`function(dataframe)()`) – Gets called in case of success with a Dataframe object
* **failure** (`function(error)()`) – Gets called in case of error







[The DataFrame object](#id2)[¶](#the-dataframe-object "Permalink to this heading")
----------------------------------------------------------------------------------




*class* DataFrame()[¶](#DataFrame "Permalink to this definition")
Object representing a set of rows from a dataset.


DataFrame objects are created by dataiku.fetch


Interaction with the rows in a DataFrame can be made either:



> * As “record” objects, which map each column name to value
> * As “row” arrays. Each row array contains one entry per column


Using row arrays requires a bit more code and using getColumnIdx, but generally provides
better performance.





DataFrame.getNbRows()[¶](#DataFrame.getNbRows "Permalink to this definition")

Returns:
the number of rows in the dataframe







DataFrame.getRow(*rowIdx*)[¶](#DataFrame.getRow "Permalink to this definition")

Returns:
an array representing the row with a given row idx







DataFrame.getColumnNames()[¶](#DataFrame.getColumnNames "Permalink to this definition")

Returns:
an array of column names







DataFrame.getRows()[¶](#DataFrame.getRows "Permalink to this definition")

Returns:
an array of dataframe rows. Each element of the array is what getRow would return







DataFrame.getRecord(*rowIdx*)[¶](#DataFrame.getRecord "Permalink to this definition")

Returns:
a record object for the row with a given row idx. The keys of the object are the names of the columns







DataFrame.getColumnValues(*name*)[¶](#DataFrame.getColumnValues "Permalink to this definition")

Arguments:
* **name** (`string()`) – Name of the column



Returns:
an array containing all values of the column \<name\>







DataFrame.getColumnIdx(*name*)[¶](#DataFrame.getColumnIdx "Permalink to this definition")
Returns the columnIdx of the column bearing the name name. This idx can be used to lookup in the array returned by getRow.


Returns \-1 if the column name is not found.



Arguments:
* **name** (`string()`) – Name of the column



Returns:
the columnIdx of the column or \-1







DataFrame.mapRows(*f*)[¶](#DataFrame.mapRows "Permalink to this definition")
Applies a function to each row



Arguments:
* **f** (`function(row)()`) – Function to apply to each row array



Returns:
the array \[ f(row\[0]), f(row\[1]), … , f(row\[N\-1]) ]







DataFrame.mapRecords(*f*)[¶](#DataFrame.mapRecords "Permalink to this definition")
Applies a function to each record array



Arguments:
* **f** (`function(record)()`) – Function to apply to each record object



Returns:
the array \[ f(record\[0]), f(record\[1]), … , f(record\[N\-1]) ]







dataiku.setAPIKey(*apiKey*)[¶](#dataiku.setAPIKey "Permalink to this definition")
Sets the API key to use. This should generally be the first thing called





dataiku.setDefaultProjectKey(*projectKey*)[¶](#dataiku.setDefaultProjectKey "Permalink to this definition")
Sets the “search path” for projects. This is used to resolve dataset names given as
“datasetName” instead of “projectKey.datasetName”.





[Sampling](#id3)[¶](#sampling "Permalink to this heading")
----------------------------------------------------------


Returning a whole dataset as a JS object is generally not possible due to memory reasons. The API allows you to sample the rows of the dataset, with option keys.


The **sampling** key contains the sampling method to use


For more details on the sampling methods, see [Sampling](../../preparation/sampling.html)



Note


The default sampling is **head(20000\)**: by default, only the first 20K rows are returned




### [sampling \= ‘head’](#id4)[¶](#sampling-head "Permalink to this heading")


Returns the first rows of the dataset



```
/* Returns the first 15 000 lines */
{
    sampling : 'head',
    limit : 15000
}

```




### [sampling \= ‘random’](#id5)[¶](#sampling-random "Permalink to this heading")


Returns either a number of rows, randomly picked, or a ratio of the dataset



```
/* Returns 10% of the dataset */
{
    sampling : 'random',
    ratio: 0.1
}

```



```
/* Returns 15000 rows, randomly sampled */
{
    sampling : 'random',
    limit : 15000
}

```




### [sampling \= ‘full’](#id6)[¶](#sampling-full "Permalink to this heading")


No sampling, returns all




### [sampling \= ‘random\-column’](#id7)[¶](#sampling-random-column "Permalink to this heading")


Returns a number of rows based on the values of a column



```
/* Returns 15000 rows, randomly sampled among the values of column 'user_id' */
{
    sampling : 'random-column',
    sampling_column : 'user_id',
    limit : 15000
}

```




### [sampling \= ‘sort\-column’](#id8)[¶](#sampling-sort-column "Permalink to this heading")


Returns the first rows of the dataset after sorting by a column



```
/* Returns the 15000 rows with largest values for column 'amount' */
{
    sampling : 'sort-column',
    sampling_column : 'amount',
    limit : 15000,
    ascending : false
}

```





[Partitions selection](#id9)[¶](#partitions-selection "Permalink to this heading")
----------------------------------------------------------------------------------


In the `partitions` key, you can pass in a JS array of partition identifiers



```
/* Only returns data from two partitions */
{
   partitions : ["2014-01-02", "2014-02-04"]
}

```




[Columns selection](#id10)[¶](#columns-selection "Permalink to this heading")
-----------------------------------------------------------------------------


In the `columns` key, you can pass in a JS array of column names. Only these columns are returned



```
/* Only returns two columns from the dataset */
{
  columns : ["type", "price"]
}

```




[Rows filtering](#id11)[¶](#rows-filtering "Permalink to this heading")
-----------------------------------------------------------------------


In the `filter` key, you can pass a custom formula to filter the returned rows



```
/* Only returns rows matching condition */
{
    filter : "type == 'event' && price > 2000"
}

```