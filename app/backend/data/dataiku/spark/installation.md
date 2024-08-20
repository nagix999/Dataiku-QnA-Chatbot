Setting up Spark integration[¶](#setting-up-spark-integration "Permalink to this heading")
==========================================================================================



* [Unmanaged Spark on Kubernetes](#unmanaged-spark-on-kubernetes)


	+ [Configure DSS](#configure-dss)
	+ [Build your Docker images](#build-your-docker-images)
	+ [Create the Spark configuration](#create-the-spark-configuration)



There are four major ways to setup Spark in Dataiku:


* If you are using [Dataiku Cloud](../installation/index.html) installation, Spark is already setup and ready to use, you do not need any further action
* If you are using [Dataiku Cloud Stacks](../installation/index.html) installation, Spark on Elastic AI clusters is already setup and ready to use, you do not need any further action
* If you are doing a custom installation with [Elastic AI](../containers/index.html), this will configure and enable Spark on Elastic AI clusters
* If you are doing a custom installation with [Hadoop](../hadoop/index.html), Spark will be available through your Hadoop cluster. Please see [Spark](../hadoop/spark.html) for more details.
* Using “Unmanaged Spark on Kubernetes”



[Unmanaged Spark on Kubernetes](#id1)[¶](#unmanaged-spark-on-kubernetes "Permalink to this heading")
----------------------------------------------------------------------------------------------------



Warning


This is a very custom setup. We recommend that you leverage Dataiku Elastic AI capabilities rather.



The precise steps to follow for Spark\-on\-Kubernetes depend on which managed Kubernetes offering you are using and which cloud storage you want to use.


We strongly recommend that you rather use [Elastic AI](../containers/index.html).


The rest of this page provides indicative instructions for non\-managed deployments



### [Configure DSS](#id2)[¶](#configure-dss "Permalink to this heading")


You first need to configure DSS to use your Spark 3\.4




### [Build your Docker images](#id3)[¶](#build-your-docker-images "Permalink to this heading")


Follow the Spark documentation to build Docker images from your Spark distribution and push it to your repository.


Note that depending on which cloud storage you want to connect to, it may be necessary to modify the Spark Dockerfiles. See our guided installation procedures for more details.




### [Create the Spark configuration](#id4)[¶](#create-the-spark-configuration "Permalink to this heading")


Create a named Spark configuration (see [Spark configurations](configuration.html)), and set at least the following keys:


* `spark.master`: `k8s://https://IP_OF_YOUR_K8S_CLUSTER`
* `spark.kubernetes.container.image`: `the tag of the image that you pushed to your repository`