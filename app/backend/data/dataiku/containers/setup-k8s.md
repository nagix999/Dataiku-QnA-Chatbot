Initial setup[¶](#initial-setup "Permalink to this heading")
============================================================



* [Prerequisites](#prerequisites)


	+ [Docker and kubectl setup](#docker-and-kubectl-setup)
	+ [Other prerequisites include](#other-prerequisites-include)
* [(Optional) Setup Spark](#optional-setup-spark)
* [Build the base image](#build-the-base-image)
* [(Optional) Build the Spark base image](#optional-build-the-spark-base-image)
* [Setting up containerized execution configs](#setting-up-containerized-execution-configs)
* [Setting up Spark configurations](#setting-up-spark-configurations)
* [Push Base images](#push-base-images)
* [Use Kubernetes](#use-kubernetes)




Warning


When using Dataiku Cloud Stacks, all this setup is already handled as part of the Cloud Stacks capabilities. You do not need
to go through this setup




[Prerequisites](#id1)[¶](#prerequisites "Permalink to this heading")
--------------------------------------------------------------------



Note


Many Kubernetes setups will be based on managed Kubernetes clusters handled by your Cloud Provider. DSS provides deep integrations with these, and we recommend that you read our dedicated sections: [Using Amazon Elastic Kubernetes Service (EKS)](eks/index.html), [Using Microsoft Azure Kubernetes Service (AKS)](aks/index.html) and [Using Google Kubernetes Engine (GKE)](gke/index.html)




### [Docker and kubectl setup](#id2)[¶](#docker-and-kubectl-setup "Permalink to this heading")



Warning


Dataiku DSS is not responsible for setting up your local Docker daemon




Warning


Dataiku DSS is not compatible with podman, the alternative container engine for Redhat 8 / CentOS 8 / AlmaLinux 8



The prerequisites for running workloads in Kubernetes are:


* You must have an existing Docker daemon. The `docker` command on the DSS machine must be fully functional and usable by the user running DSS. This includes the permission to build images, and thus access to a Docker socket.
* You must have an image registry, that will accessible by your Kubernetes cluster.
* The local `docker` command must have permission to push images to your image registry.
* The `kubectl` command must be installed on the DSS machine and be usable by the user running DSS.
* The containers running on the cluster must be able to open TCP connections on the DSS host on any port.




### [Other prerequisites include](#id3)[¶](#other-prerequisites-include "Permalink to this heading")


* To install packages, your DSS machine must have direct outgoing Internet access.
* To install packages, your containers must have direct outgoing Internet access.
* DSS should be stopped prior to starting this procedure





[(Optional) Setup Spark](#id4)[¶](#optional-setup-spark "Permalink to this heading")
------------------------------------------------------------------------------------


* Download the dataiku\-dss\-spark\-standalone binary from your usual Dataiku DSS download site
* Download the dataiku\-dss\-hadoop\-standalone\-libs\-generic\-hadoop3 binary from your usual Dataiku DSS download site
* Setup setup of Hadoop and Spark (note that this is only about client libraries, no Hadoop cluster will be setup)



```
./bin/dssadmin install-hadoop-integration -standaloneArchive /PATH/TO/dataiku-dss-hadoop3-standalone-libs-generic...tar.gz
./bin/dssadmin install-spark-integration -standaloneArchive /PATH/TO/dataiku-dss-spark-standalone....tar.gz -forK8S

```




[Build the base image](#id5)[¶](#build-the-base-image "Permalink to this heading")
----------------------------------------------------------------------------------


Before you can deploy to Kubernetes, at least one “base image” must be constructed.



Warning


After each upgrade of DSS, you must rebuild all base images



To build the base image, run the following command from the DSS data directory:



```
./bin/dssadmin build-base-image --type container-exec

```




[(Optional) Build the Spark base image](#id6)[¶](#optional-build-the-spark-base-image "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


For Spark workloads, then run:



```
./bin/dssadmin build-base-image --type spark

```




[Setting up containerized execution configs](#id7)[¶](#setting-up-containerized-execution-configs "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------------------


After building the base image, you need to create containerized execution configurations.


* In Administration \> Settings \> Containerized execution, click **Add another config** to create a new configuration.
* Enter the image registry URL
* Dataiku recommends to create a namespace per user:



> + Set `dssns-${dssUserLogin}` as namespace
> 	+ Enable “auto\-create namespace”
* When deploying on AWS EKS the setting “Image pre\-push hook” should be set to “Enable push to ECR”
* Save




[Setting up Spark configurations](#id8)[¶](#setting-up-spark-configurations "Permalink to this heading")
--------------------------------------------------------------------------------------------------------


* Go to Administration \> Spark
* Repeat the following operations for each named Spark configuration that you want to run on Kubernetes



> + Enable “Managed Spark on K8S”
> 	+ Enter the image registry URL (See [Elastic AI computation](index.html) for more details)
> 	+ Dataiku recommends to create a namespace per user:
> 	
> 	
> 	
> 	> - Set `dssns-${dssUserLogin}` as namespace
> 	> 	- Enable “auto\-create namespace”
> 	+ Set “Authentication mode” to “Create service accounts dynamically”
* When deploying on AWS EKS the setting “Image pre\-push hook” should be set to “Enable push to ECR”
* Save




[Push Base images](#id9)[¶](#push-base-images "Permalink to this heading")
--------------------------------------------------------------------------


In Administration \> Settings \> Containerized execution, click on the “Push base images” button




[Use Kubernetes](#id10)[¶](#use-kubernetes "Permalink to this heading")
-----------------------------------------------------------------------


The configurations for containerized execution can be chosen:


* As a global default in Administration \> Settings \> Containerized execution
* In the project settings — in which case the settings apply by default to all project activities that can run on containers
* In a recipe’s advanced settings
* In the “Execution environment” tab of in\-memory machine learning Design screen


Each Spark activity which is configured to use one of the K8S\-enabled Spark configurations will automatically use Kubernetes.