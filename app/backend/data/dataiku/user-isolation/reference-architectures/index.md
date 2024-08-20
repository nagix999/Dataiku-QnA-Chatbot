Reference architectures[¶](#reference-architectures "Permalink to this heading")
================================================================================


Obtaining a complete working and secure deployment of the different components of the User Isolation Framework adapted to your particular setup can be a complex task.


These reference architectures are meant to provide you with end\-to\-end ready\-to\-use deployment instructions for the most common setups. In some cases, it may be needed to combine several them if you use several of the technologies described thereafter.


Your Dataiku Sales Engineer or Customer Success Manager is ready to help for any specific deployment questions.



* [Local\-code only](local-code-only.html)
* [Setup with Kubernetes](kubernetes.html)
	+ [Initial setup](kubernetes.html#initial-setup)
	+ [Common setup](kubernetes.html#common-setup)
	+ [Running regular workloads](kubernetes.html#running-regular-workloads)
	+ [Running Spark workloads](kubernetes.html#running-spark-workloads)
		- [One\-namespace\-per\-user setup](kubernetes.html#one-namespace-per-user-setup)
		- [One\-namespace\-per\-team setup](kubernetes.html#one-namespace-per-team-setup)
* [Setup with Cloudera](cloudera.html)
	+ [The two modes](cloudera.html#the-two-modes)
	+ [Prerequisites and required information](cloudera.html#prerequisites-and-required-information)
	+ [Common setup](cloudera.html#common-setup)
	+ [Ranger\-mode](cloudera.html#ranger-mode)
		- [Assumptions](cloudera.html#assumptions)
		- [Configure your Cloudera cluster](cloudera.html#configure-your-cloudera-cluster)
			* [Do it with Cloudera Manager](cloudera.html#do-it-with-cloudera-manager)
			* [Setup Ranger](cloudera.html#setup-ranger)
			* [Additional setup for Impala](cloudera.html#additional-setup-for-impala)
			* [Additional setup for encrypted HDFS filesystems](cloudera.html#additional-setup-for-encrypted-hdfs-filesystems)
		- [Setup driver for Impala](cloudera.html#setup-driver-for-impala)
		- [Setup HDFS connections in DSS](cloudera.html#setup-hdfs-connections-in-dss)
		- [Configure identity mapping](cloudera.html#configure-identity-mapping)
		- [Setup Hive and Impala access](cloudera.html#setup-hive-and-impala-access)
		- [Authorization models](cloudera.html#authorization-models)
			* [One DSS connection per database](cloudera.html#one-dss-connection-per-database)
			* [One database per DSS project, multiple databases per DSS connection](cloudera.html#one-database-per-dss-project-multiple-databases-per-dss-connection)
			* [More complex setups](cloudera.html#more-complex-setups)
	+ [DSS\-ACL\-synchronization\-mode](cloudera.html#dss-acl-synchronization-mode)
		- [Configure your Cloudera cluster](cloudera.html#id1)
			* [Do it with Cloudera Manager](cloudera.html#id2)
			* [Additional setup for Impala](cloudera.html#id3)
			* [Additional setup for encrypted HDFS filesystems](cloudera.html#id4)
		- [Setup driver for Impala](cloudera.html#id5)
		- [Configure identity mapping](cloudera.html#id6)
		- [Setup Hive and Impala access](cloudera.html#id7)
		- [Initialize ACLs on HDFS connections](cloudera.html#initialize-acls-on-hdfs-connections)
	+ [Validate behavior](cloudera.html#validate-behavior)
	+ [Operations (Ranger mode)](cloudera.html#operations-ranger-mode)
		- [Overview](cloudera.html#overview)
		- [Adding a project](cloudera.html#adding-a-project)
		- [Adding/Removing a user in a group](cloudera.html#adding-removing-a-user-in-a-group)
		- [Adding / Removing access to a group](cloudera.html#adding-removing-access-to-a-group)
		- [Interaction with externally\-managed data](cloudera.html#interaction-with-externally-managed-data)
			* [Existing Hive table](cloudera.html#existing-hive-table)
			* [Synchronized Hive table](cloudera.html#synchronized-hive-table)
	+ [Operations (ACL synchronization mode)](cloudera.html#operations-acl-synchronization-mode)