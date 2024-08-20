Working with partitions[¶](#working-with-partitions "Permalink to this heading")
================================================================================


Partitioning refers to the splitting of a dataset along meaningful *dimensions*. Each partition contains a subset of the dataset that can be built independently.


For a general introduction to partitioning, see [DSS concepts](../concepts/index.html)



* [Partitioning files\-based datasets](fs_datasets.html)
* [Partitioned SQL datasets](sql_datasets.html)
* [Specifying partition dependencies](dependencies.html)
* [Partition identifiers](identifiers.html)
* [Recipes for partitioned datasets](recipes.html)
* [Partitioned Hive recipes](hive.html)
* [Partitioned SQL recipes](sql_recipes.html)
* [Partitioning variables substitutions](variables.html)
* [Partitioned Models](models.html)




The two partitioning models[¶](#the-two-partitioning-models "Permalink to this heading")
----------------------------------------------------------------------------------------


There are two models for partitioning datasets: files\-based partitioning and column\-based partitioning.



### Files\-based partitioning[¶](#files-based-partitioning "Permalink to this heading")


This partitioning method is used for all datasets based on a filesystem hierarchy. This includes Filesystem, HDFS, Amazon S3, Azure Blob Storage, Google Cloud Storage and Network datasets.


In this method, partitioning is defined by the layout of the files on disk., so the data in the files is NOT used to decide which records belong to which partition.


For more information, see [Partitioning files\-based datasets](fs_datasets.html)




### Column\-based partitioning[¶](#column-based-partitioning "Permalink to this heading")


This partitioning method is used for datasets based on structured storage engines:


* All SQL databases
* NoSQL databases: MongoDB, Cassandra and Elasticsearch


In this method, the partitioning is derived from information (one or several columns) which is part of the data.


A very important point is that in this method, the schema of the dataset does contain the partitioning data.