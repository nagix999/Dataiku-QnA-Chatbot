Partitions and SQL pipelines[¶](#partitions-and-sql-pipelines "Permalink to this heading")
==========================================================================================



* [Partitioned datasets in a SQL pipeline](#partitioned-datasets-in-a-sql-pipeline)



Partitioning refers to the splitting of a dataset along meaningful dimensions, such that each partition contains a subset of the dataset.


Dataiku DSS can provide partitioning support, both on SQL databases that have native partitioning support and on those that do not. However, performance will generally be better when the SQL database has native partitioning support.


See [Partitioned SQL datasets](../../partitions/sql_datasets.html) for more information.



[Partitioned datasets in a SQL pipeline](#id1)[¶](#partitioned-datasets-in-a-sql-pipeline "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------


It is possible to go from a partitioned dataset to a non\-partitioned dataset in your SQL pipeline. You can also go from one partitioned dataset to another, with both datasets having uneven partition dependencies. See [Specifying partition dependencies](../../partitions/dependencies.html) for more details.