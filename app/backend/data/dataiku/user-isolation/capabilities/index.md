Details of UIF capabilities[¶](#details-of-uif-capabilities "Permalink to this heading")
========================================================================================


The User Isolation Framework is made of a number of components and capabilities that are more or less independent. These pages present details on operation and technical details of each component.


We recommend that you start by reading the appropriate [Reference architectures](../reference-architectures/index.html) for your needs.



* [Local code isolation](local-code.html)
* [Hadoop Impersonation (HDFS, YARN, Hive, Impala)](hadoop-impersonation.html)
	+ [Interaction with HDFS](hadoop-impersonation.html#interaction-with-hdfs)
	+ [Interaction with Hive](hadoop-impersonation.html#interaction-with-hive)
	+ [Interaction with Impala](hadoop-impersonation.html#interaction-with-impala)
	+ [Interaction with Spark on YARN](hadoop-impersonation.html#interaction-with-spark-on-yarn)
		- [Architecture](hadoop-impersonation.html#architecture)
		- [Hive Metastore](hadoop-impersonation.html#hive-metastore)
* [Workload isolation on Kubernetes](kubernetes.html)
	+ [Running regular workloads](kubernetes.html#running-regular-workloads)
	+ [Running Spark workloads](kubernetes.html#running-spark-workloads)
* [Impersonation on Oracle](oracle.html)