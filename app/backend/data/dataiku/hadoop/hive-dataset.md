Hive datasets[¶](#hive-datasets "Permalink to this heading")
============================================================



* [Use cases](#use-cases)


	+ [Hive views](#hive-views)
	+ [No read access on source files](#no-read-access-on-source-files)
	+ [ACID tables (ORC)](#acid-tables-orc)
	+ [DATE and DECIMAL data types](#date-and-decimal-data-types)
* [Creating a Hive dataset](#creating-a-hive-dataset)


	+ [New dataset](#new-dataset)
	+ [Import](#import)
* [Using a Hive dataset](#using-a-hive-dataset)


	+ [Hive recipes](#hive-recipes)
	+ [Visual recipes with Hive as execution engine](#visual-recipes-with-hive-as-execution-engine)
	+ [Spark recipes](#spark-recipes)
	+ [Visual recipes with Spark as execution engine](#visual-recipes-with-spark-as-execution-engine)
	+ [Limitations](#limitations)



Most of the time, to read and write data in the Hadoop ecosystem, DSS handles HDFS datasets, that is file\-oriented datasets pointing to files residing on one or several HDFS\-like filesystems.


DSS can also handle Hive datasets. Hive datasets are pointers to Hive tables already defined in the Hive metastore.


* Hive datasets can only be used for reading, not for writing
* To read data from Hive datasets, DSS uses HiveServer2 (using a JDBC connection). In essence a Hive dataset is a SQL\-like dataset



[Use cases](#id1)[¶](#use-cases "Permalink to this heading")
------------------------------------------------------------


HDFS dataset remains the “to\-go” dataset for interacting with Hadoop\-hosted data. The HDFS dataset provides the most features, the most ability to parallelize work and execute it on the cluster.


However, there are some cases of (existing) source data for which the HDFS isn’t able to read them properly. In that case, using a Hive dataset as the source of your Flow will allow you to read your data. Since Hive dataset is read\-only, only the sources of the Flow use a Hive dataset, and subsequent parts of the Flow revert to regular HDFS datasets.



### [Hive views](#id2)[¶](#hive-views "Permalink to this heading")


If you have existing data which is available through a Hive view, there are no HDFS files materializing this particular data. In that case, you cannot use a HDFS dataset and should use a Hive dataset.




### [No read access on source files](#id3)[¶](#no-read-access-on-source-files "Permalink to this heading")


Through the Hive security mechanisms (Ranger), it is possible to have existing tables in the Hive metastore, with read access to these tables using HiveServer2, but not read access to the underlying HDFS files.


In that case, you cannot use a HDFS dataset and should use a Hive dataset.




### [ACID tables (ORC)](#id4)[¶](#acid-tables-orc "Permalink to this heading")


You can create ACID tables in Hive (in the ORC format). These tables support UPDATE statements that regular Hive tables don’t support. These tables are stored in a very specific format that only HiveServer2 can read. DSS cannot properly read the underlying files of these tables.


In that case, you cannot use a HDFS dataset and should use a Hive dataset.




### [DATE and DECIMAL data types](#id5)[¶](#date-and-decimal-data-types "Permalink to this heading")


There are various difficulties in reading tables containing these kind of columns. It is recommended to use Hive datasets preferably when reading these tables.





[Creating a Hive dataset](#id6)[¶](#creating-a-hive-dataset "Permalink to this heading")
----------------------------------------------------------------------------------------


You do not need to setup a connection to create a Hive dataset. As soon as connectivity with Hadoop (and your HiveServer2\) is established, you can create Hive datasets



### [New dataset](#id7)[¶](#new-dataset "Permalink to this heading")


* Select New Dataset \> Hive
* Select the database and the table
* Click on test to retrieve the schema
* Your Hive dataset is ready to use




### [Import](#id8)[¶](#import "Permalink to this heading")


Either from the catalog or connections explorer, when selecting an existing Hive table, you will have the option to import it either as a HDFS dataset or Hive dataset.





[Using a Hive dataset](#id9)[¶](#using-a-hive-dataset "Permalink to this heading")
----------------------------------------------------------------------------------


A Hive dataset can be used with most kinds of DSS recipes.



### [Hive recipes](#id10)[¶](#hive-recipes "Permalink to this heading")


You can create Hive recipes with Hive datasets as inputs.



Note


The recipe MUST be in “Hive CLI (global metastore)” or HiveServer2 mode for this to work. Please see [Hive](hive.html) for more information.





### [Visual recipes with Hive as execution engine](#id11)[¶](#visual-recipes-with-hive-as-execution-engine "Permalink to this heading")


You can create visual recipes and select the Hive execution engine (when available) with Hive datasets as inputs.



Note


The recipe MUST be in “Hive CLI (global metastore)” or HiveServer2 mode for this to work. Please see [Hive](hive.html) for more information.





### [Spark recipes](#id12)[¶](#spark-recipes "Permalink to this heading")


You can create Spark (code) recipes with Hive datasets as inputs.



Note


The recipe MUST be in “Use global metastore)” mode for this to work.




Note


You must have filesystem\-level access to the underlying files of this Hive table for this to work.





### [Visual recipes with Spark as execution engine](#id13)[¶](#visual-recipes-with-spark-as-execution-engine "Permalink to this heading")


You can create visual recipes and select the Spark execution engine (when available) recipes with Hive datasets as inputs.



Note


The recipe MUST be in “Use global metastore)” mode for this to work.




Note


You must have filesystem\-level access to the underlying files of this Hive table for this to work.





### [Limitations](#id14)[¶](#limitations "Permalink to this heading")


* SQL recipes cannot be used. Use a Hive recipe instead
* Spark engine (and Spark recipes) cannot be used if you don’t have filesystem access to the underlying tables.