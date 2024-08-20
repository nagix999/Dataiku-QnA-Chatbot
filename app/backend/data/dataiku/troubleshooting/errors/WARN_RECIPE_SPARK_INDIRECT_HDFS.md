WARN\_RECIPE\_SPARK\_INDIRECT\_HDFS: No direct access to read/write HDFS dataset[¶](#warn-recipe-spark-indirect-hdfs-no-direct-access-to-read-write-hdfs-dataset "Permalink to this heading")
=============================================================================================================================================================================================


You are running a recipe that uses Spark (either a Spark code recipe, or a visual recipe using the Spark engine). This recipe either reads or writes a HDFS dataset.


However, your administrator has not granted you the “Read connection details” permission on the connection in which the HDFS dataset lies.


Without this permission, your Spark job will not be able to read (or write) the HDFS dataset directly, and will indeed need to go through a slow path. This will very strongly degrade the performance of your Spark job.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Your administrator needs to grant the “Details readable by” permission on the HDFS connection to one of the groups you belong to.


More details on this permission can be found in [Connections security](../../security/connections.html)