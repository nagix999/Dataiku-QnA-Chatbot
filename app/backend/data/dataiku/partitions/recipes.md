Recipes for partitioned datasets[¶](#recipes-for-partitioned-datasets "Permalink to this heading")
==================================================================================================


When a recipe is used to compute a partitioned dataset and/or to compute from a partitioned dataset, the recipe only processes the involved partitions and does not access the full datasets.


If a recipe computes several datasets:


* All output datasets must have the same partitioning schema
* The same partition will be computed for all target datasets.


A single invocation of a recipe will therefore:


* Read one or several partitions of the input datasets
* Write exactly one partition for each output dataset


Dataiku DSS automatically computes the partitions of the input datasets depending on the requested output partitions using the partition dependencies mechanism. For more information, please refer to [DSS concepts](../concepts/index.html) and [Specifying partition dependencies](dependencies.html)


See [Partitioned Hive recipes](hive.html) and [Partitioned SQL recipes](sql_recipes.html) about how to read only the input partitions and write to the output partition.