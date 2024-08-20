WARN\_SPARK\_WITH\_DATABRICKS\_DATASET: Not leveraging Databricks compute[¶](#warn-spark-with-databricks-dataset-not-leveraging-databricks-compute "Permalink to this heading")
===============================================================================================================================================================================


You have selected a SparkSQL recipe or the Spark engine to execute a job on a Databricks dataset(s). This will not place the workload of the job in the Databricks cluster, but will instead put it wherever the Spark configuration points, for example “locally” on the DSS server or in your Kubernetes cluster.


Since the Databricks connection is a SQL connection, selecting a SQL recipe or the SQL engine will put the workload of the job in the Databricks cluster to leverage your Databricks compute resources.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


When available, use a SQL recipe, or the SQL engine if in a visual recipe, when working with Databricks datasets.