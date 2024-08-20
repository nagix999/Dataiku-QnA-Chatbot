Sync: copying datasets[¶](#sync-copying-datasets "Permalink to this heading")
=============================================================================



* [Schema handling](#schema-handling)


	+ [Schema mismatch](#schema-mismatch)
* [Partitioning handling](#partitioning-handling)
* [Engines](#engines)



The “sync” recipe allows you to synchronize one dataset to another. Synchronization can be global or per\-partition.


One major use\-case of the sync recipe is to copy a dataset between storage backends where different computation are possible. For example:


* copying a SQL dataset to HDFS to be able to perform Hive recipes on it
* copying a HDFS dataset to ElasticSearch to be able to query it
* copying a file dataset to a SQL database for efficient querying.



See also


For more information, see also the [Concept \| Sync recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/concept-sync-recipe.html) article in the Knowledge Base.




[Schema handling](#id1)[¶](#schema-handling "Permalink to this heading")
------------------------------------------------------------------------


By default, when you create the sync recipe, DSS also creates the output dataset. In that case, DSS automatically copies the schema of the input dataset to the output dataset.


If you modify the schema of the input dataset, you should go to the edition screen for the sync recipe and click the “Resync Schema” button.



### [Schema mismatch](#id2)[¶](#schema-mismatch "Permalink to this heading")


With DSS streaming engine (see below), the Sync recipe allows the input and output schema to be different.
In that case, DSS uses the **names** of the columns to perform the matching between the input and output columns


Therefore, you can use the Sync recipe to remove or reorder some columns of a dataset. You cannot use the Sync recipe to “rename” a column. To do this, use a Preparation recipe.





[Partitioning handling](#id3)[¶](#partitioning-handling "Permalink to this heading")
------------------------------------------------------------------------------------


By default, when syncing a partitioned dataset, DSS creates the output dataset with the same partitioning and puts a “equals” dependency.
You can also sync to a non partitioned dataset or change the dependency.


When creating the recipe or clicking “Resync schema”, DSS automatically adds, if needed, the partitioning columns to the output schemas.


More on partitioning in [Working with partitions](../partitions/index.html)




[Engines](#id4)[¶](#engines "Permalink to this heading")
--------------------------------------------------------


For optimal performance, the recipe can run over several engines:


* DSS streaming (always available, may not be optimal)
* Spark
* SQL
* Hive
* Impala
* Specific fast\-paths (see links for specific documentation about the fast paths)



> + [Amazon S3 to Amazon Redshift](../connecting/sql/redshift.html) (and vice\-versa)
> 	+ Azure Blob Storage to Azure SQL Data Warehouse (and vice\-versa)
> 	+ Google Cloud Storage to Google BigQuery (and vice\-versa)
> 	+ [HDFS to Teradata](../hadoop/tdch.html) (and vice\-versa)
> 	+ [Amazon S3 to Snowflake](../connecting/sql/snowflake.html) (and vice\-versa)
> 	+ [Azure Blob Storage to Snowflake](../connecting/sql/snowflake.html) (and vice\-versa)


Depending on the types and parameters of the input and output, DSS automatically chooses the engine to execute the synchronization.