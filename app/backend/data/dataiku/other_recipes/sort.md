Sort: order values[¶](#sort-order-values "Permalink to this heading")
=====================================================================



* [Engines](#engines)
* [Null values handling](#null-values-handling)
* [Write ordering](#write-ordering)



The “sort” recipe allows you to order a dataset. You specify a list of columns, each with ascending or
descending order. It can be performed on any dataset in DSS, wether it’s a SQL dataset or not. However
in order the recipe to be useful, the output dataset must preserve the writing order. The most common
ones are Filesystem and HDFS ; you can check it in the settings tab of the dataset if the option is available.
Thereby when creating a new Sort recipe, the output dataset will be configured to preserve the order in
writing if possible. The recipe also offers visual tools to setup the specifications and aliases.
The “sort” recipe can have pre\-filters. The filters documentation is available [here](sampling.html).



See also


For more information, see the [Concept \| Sort recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/concept-sort-recipe.html) article in the Knowledge Base.




[Engines](#id2)[¶](#engines "Permalink to this heading")
--------------------------------------------------------


Depending on the input dataset types, DSS will adjust the engine it uses to execute the recipe, and choose
between Hive, Impala, SparkSQL, plain SQL, and internal DSS. The available engines can be seen and selected by
clicking on the cogwheel below the “Run” button.




[Null values handling](#id3)[¶](#null-values-handling "Permalink to this heading")
----------------------------------------------------------------------------------


Since DSS version 4\.1 and if the database engine allows it, the null values are sorted in a specific order.
In the ascending order, the null values will be placed at the beginning and in descending order, the null values
will be placed at the end. The main goal is to group together null values and empty strings as DSS consider
both the same. Thus using most of the recent database engines or DSS engine provide the same outputs. However
some database engines such as Vertica, Sybase IQ, and DB2 cannot explicitly order null values and using these engines
may result in different outputs.




[Write ordering](#id4)[¶](#write-ordering "Permalink to this heading")
----------------------------------------------------------------------


Learn more about [Write ordering](../connecting/ordering.html#write-ordering). When the output dataset of the recipe preserves writing order,
the recipe makes sense. In contrary, the Sort recipe is probably useless and the rows of the output dataset
will lose their ordering. In this case, you may want to use a different processing:



> * if your input and output datasets has the same connection, remove the Sort recipe and edit the read\-order settings of the output dataset
> * if your input and output datasets has different connections, replace the Sort recipe by a [Sync recipe](sync.html) and edit the read\-order settings of the output dataset