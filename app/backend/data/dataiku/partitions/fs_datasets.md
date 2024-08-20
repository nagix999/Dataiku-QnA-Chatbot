Partitioning files\-based datasets[¶](#partitioning-files-based-datasets "Permalink to this heading")
=====================================================================================================




All datasets based on files can be partitioned. This includes the following kinds of datasets:


* Filesystem
* HDFS
* Amazon S3
* Azure Blob Storage
* Google Cloud Storage
* Network


On files\-based datasets, partitioning is defined by the *layout of the files on disk*.



Warning


Partitioning a files\-based dataset cannot be defined by the content of a column within this dataset



For example, if a filesystem is organized this way:


* `/folder/2020/02/03/file0.csv`
* `/folder/2020/02/03/file1.csv`
* `/folder/2020/02/04/file0.csv`
* `/folder/2020/02/04/file1.csv`


This folder can be partitioned at the day level, with one folder per partition.


Files\-based partitioning is defined by a matching pattern that maps each file to a given partition identifier.


For example, the previous example would be represented by the pattern `/%Y/%M/%D/.*`



Defining a partitioned dataset[¶](#defining-a-partitioned-dataset "Permalink to this heading")
----------------------------------------------------------------------------------------------


You first need to have defined the connection and format params.
Once this is OK and you can see your data, go to the Partitioning tab, and click “Activate partitioning”


![../_images/activate-partitioning.png](../_images/activate-partitioning.png)
Dataiku DSS automatically tries to recognize the pattern.
If it succeeds, a partitioning pattern will be suggested.


![../_images/suggested-partitioning.png](../_images/suggested-partitioning.png)

Partition redispatch[¶](#partition-redispatch "Permalink to this heading")
--------------------------------------------------------------------------


If you are using a filesystem connection and your files do not map directly to partitions, you can still partition your dataset using Partition Redispatch.


The partition redispatch option is available in the Sync recipe (Configuration tab) and in the Prepare recipe (Advanced tab).


For example, if you have a filesystem dataset made of a singular csv file, it cannot be partitioned as is. The redispatch partition feature solves this problem, as it allows you transform a non\-partitioned dataset to a partitioned dataset. Each row of the csv file is assigned to a partition dynamically based on columns.


![../_images/redispatch.jpg](../_images/redispatch.jpg)

Note


If you activate the redispatch option in the sync recipe, DSS will read and dispatch each row of the dataset depending on its value in the partitioning column, and will build one partition per distinct value in that column.


Beware that with files\-based partitioning, the partition column(s) are removed from the schema. Once the partitioning has been performed, the partitioning columns will no longer be accessible in the recipes.


Possible workarounds:


* Before partitioning: Duplicate the column before partitioning the dataset.
* After partitioning: Add a column labeling the partition for each row via a prepare recipe. To do so, create a prepare recipe and add an “enrich records with files info” step, and fill in the “Output partition column” field.


![../_images/enrich-partitions.jpg](../_images/enrich-partitions.jpg)