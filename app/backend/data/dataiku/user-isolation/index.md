User Isolation[¶](#user-isolation "Permalink to this heading")
==============================================================



Note


User Isolation Framework was previously called Multi\-User\-Security.




Note


If using [Dataiku Cloud Stacks](../installation/index.html) installation, User Isolation is automatically managed for you, and you do not need to follow these instructions




Note


If using [Dataiku Cloud](../installation/index.html), User Isolation is automatically managed for you, and you do not need to follow these instructions



On an out\-of\-the\-box installation of DSS, every action performed by DSS is performed as a single account on the host machine. This account which runs the DSS service is called the `dssuser`. For example, when a DSS end\-user executes a code recipe, it runs as the UNIX `dssuser`


Similarly:


* Every action performed on a Hadoop cluster is performed by the `dssuser` service account. When a DSS end\-user executes an Hadoop/Spark recipe or notebook on a Hadoop cluster, it runs on the cluster as the Hadoop `dssuser`.
* Every action performed on Kubernetes is initialized through the `dssuser` service account
* Actions performed on external databases use the credentials configured in the database connection.


This default behavior has several limitations:


* There is a lack of traceability on the Hadoop clusters to identify which user performed which action.
* If the DSS end\-user is hostile and has the permission to execute “unsafe” code, he can run arbitrary code as UNIX `dssuser` and modify the DSS configuration


DSS features a set of mechanisms to isolate code which can be controlled by the user, so as to guarantee both traceability and inability for a hostile user to attack the `dssuser`. Together, these mechanisms form the *User Isolation Framework*.


The User Isolation Framework is not a single technology but a set of capabilities that permit isolation depending on the context. Most of the components of the User Isolation Framework imply that DSS *impersonates* the end\-user and runs all user\-controlled code under different identities than `dssuser`.


This documentation includes a number of reference architectures showing common deployments of the various UIF components.



Note


The User Isolation Framework may require specific editions of DSS. Please contact your Account Executive for any further information




* [Capabilities of User Isolation Framework](capabilities-summary.html)
* [Concepts](concepts.html)
	+ [The fundamental layer](concepts.html#the-fundamental-layer)
	+ [Means of isolation](concepts.html#means-of-isolation)
	+ [Identity mapping](concepts.html#identity-mapping)
* [Prerequisites and limitations](prerequisites-limitations.html)
	+ [Prerequisites](prerequisites-limitations.html#prerequisites)
		- [Local machine](prerequisites-limitations.html#local-machine)
		- [Hadoop](prerequisites-limitations.html#hadoop)
		- [LDAP](prerequisites-limitations.html#ldap)
		- [DSS](prerequisites-limitations.html#dss)
		- [Required information](prerequisites-limitations.html#required-information)
	+ [Limitations](prerequisites-limitations.html#limitations)
		- [Unsafe features](prerequisites-limitations.html#unsafe-features)
		- [HDFS datasets](prerequisites-limitations.html#hdfs-datasets)
* [Initial Setup](initial-setup.html)
	+ [Prerequisites and required information](initial-setup.html#prerequisites-and-required-information)
	+ [Perform a regular DSS installation](initial-setup.html#perform-a-regular-dss-installation)
	+ [Initialize UIF](initial-setup.html#initialize-uif)
		- [Additional setup for local filesystem access](initial-setup.html#additional-setup-for-local-filesystem-access)
	+ [Configure filesystem access on the DSS folders](initial-setup.html#configure-filesystem-access-on-the-dss-folders)
	+ [Configure identity mapping](initial-setup.html#configure-identity-mapping)
* [Troubleshooting](troubleshooting.html)
	+ [sudo failed (exit code 1\) when UIF is enabled and devtoolset\-8 is installed](troubleshooting.html#sudo-failed-exit-code-1-when-uif-is-enabled-and-devtoolset-8-is-installed)
* [Reference architectures](reference-architectures/index.html)
	+ [Local\-code only](reference-architectures/local-code-only.html)
	+ [Setup with Kubernetes](reference-architectures/kubernetes.html)
		- [Initial setup](reference-architectures/kubernetes.html#initial-setup)
		- [Common setup](reference-architectures/kubernetes.html#common-setup)
		- [Running regular workloads](reference-architectures/kubernetes.html#running-regular-workloads)
		- [Running Spark workloads](reference-architectures/kubernetes.html#running-spark-workloads)
			* [One\-namespace\-per\-user setup](reference-architectures/kubernetes.html#one-namespace-per-user-setup)
			* [One\-namespace\-per\-team setup](reference-architectures/kubernetes.html#one-namespace-per-team-setup)
	+ [Setup with Cloudera](reference-architectures/cloudera.html)
		- [The two modes](reference-architectures/cloudera.html#the-two-modes)
		- [Prerequisites and required information](reference-architectures/cloudera.html#prerequisites-and-required-information)
		- [Common setup](reference-architectures/cloudera.html#common-setup)
		- [Ranger\-mode](reference-architectures/cloudera.html#ranger-mode)
			* [Assumptions](reference-architectures/cloudera.html#assumptions)
			* [Configure your Cloudera cluster](reference-architectures/cloudera.html#configure-your-cloudera-cluster)
				+ [Do it with Cloudera Manager](reference-architectures/cloudera.html#do-it-with-cloudera-manager)
				+ [Setup Ranger](reference-architectures/cloudera.html#setup-ranger)
				+ [Additional setup for Impala](reference-architectures/cloudera.html#additional-setup-for-impala)
				+ [Additional setup for encrypted HDFS filesystems](reference-architectures/cloudera.html#additional-setup-for-encrypted-hdfs-filesystems)
			* [Setup driver for Impala](reference-architectures/cloudera.html#setup-driver-for-impala)
			* [Setup HDFS connections in DSS](reference-architectures/cloudera.html#setup-hdfs-connections-in-dss)
			* [Configure identity mapping](reference-architectures/cloudera.html#configure-identity-mapping)
			* [Setup Hive and Impala access](reference-architectures/cloudera.html#setup-hive-and-impala-access)
			* [Authorization models](reference-architectures/cloudera.html#authorization-models)
				+ [One DSS connection per database](reference-architectures/cloudera.html#one-dss-connection-per-database)
				+ [One database per DSS project, multiple databases per DSS connection](reference-architectures/cloudera.html#one-database-per-dss-project-multiple-databases-per-dss-connection)
				+ [More complex setups](reference-architectures/cloudera.html#more-complex-setups)
		- [DSS\-ACL\-synchronization\-mode](reference-architectures/cloudera.html#dss-acl-synchronization-mode)
			* [Configure your Cloudera cluster](reference-architectures/cloudera.html#id1)
				+ [Do it with Cloudera Manager](reference-architectures/cloudera.html#id2)
				+ [Additional setup for Impala](reference-architectures/cloudera.html#id3)
				+ [Additional setup for encrypted HDFS filesystems](reference-architectures/cloudera.html#id4)
			* [Setup driver for Impala](reference-architectures/cloudera.html#id5)
			* [Configure identity mapping](reference-architectures/cloudera.html#id6)
			* [Setup Hive and Impala access](reference-architectures/cloudera.html#id7)
			* [Initialize ACLs on HDFS connections](reference-architectures/cloudera.html#initialize-acls-on-hdfs-connections)
		- [Validate behavior](reference-architectures/cloudera.html#validate-behavior)
		- [Operations (Ranger mode)](reference-architectures/cloudera.html#operations-ranger-mode)
			* [Overview](reference-architectures/cloudera.html#overview)
			* [Adding a project](reference-architectures/cloudera.html#adding-a-project)
			* [Adding/Removing a user in a group](reference-architectures/cloudera.html#adding-removing-a-user-in-a-group)
			* [Adding / Removing access to a group](reference-architectures/cloudera.html#adding-removing-access-to-a-group)
			* [Interaction with externally\-managed data](reference-architectures/cloudera.html#interaction-with-externally-managed-data)
				+ [Existing Hive table](reference-architectures/cloudera.html#existing-hive-table)
				+ [Synchronized Hive table](reference-architectures/cloudera.html#synchronized-hive-table)
		- [Operations (ACL synchronization mode)](reference-architectures/cloudera.html#operations-acl-synchronization-mode)
* [Details of UIF capabilities](capabilities/index.html)
	+ [Local code isolation](capabilities/local-code.html)
	+ [Hadoop Impersonation (HDFS, YARN, Hive, Impala)](capabilities/hadoop-impersonation.html)
		- [Interaction with HDFS](capabilities/hadoop-impersonation.html#interaction-with-hdfs)
		- [Interaction with Hive](capabilities/hadoop-impersonation.html#interaction-with-hive)
		- [Interaction with Impala](capabilities/hadoop-impersonation.html#interaction-with-impala)
		- [Interaction with Spark on YARN](capabilities/hadoop-impersonation.html#interaction-with-spark-on-yarn)
			* [Architecture](capabilities/hadoop-impersonation.html#architecture)
			* [Hive Metastore](capabilities/hadoop-impersonation.html#hive-metastore)
	+ [Workload isolation on Kubernetes](capabilities/kubernetes.html)
		- [Running regular workloads](capabilities/kubernetes.html#running-regular-workloads)
		- [Running Spark workloads](capabilities/kubernetes.html#running-spark-workloads)
	+ [Impersonation on Oracle](capabilities/oracle.html)
* [Advanced topics](advanced/index.html)
	+ [Configuration of the local security](advanced/local-security.html)
		- [What are the sudo authorizations?](advanced/local-security.html#what-are-the-sudo-authorizations)
		- [Configuration of the local security module](advanced/local-security.html#configuration-of-the-local-security-module)
			* [Splitted DSS datadirs](advanced/local-security.html#splitted-dss-datadirs)
	+ [HDFS datasets data structure](advanced/hdfs-datasets.html)