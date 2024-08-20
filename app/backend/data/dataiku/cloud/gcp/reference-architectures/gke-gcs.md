Reference architecture: managed compute on GKE and storage on GCS[¶](#reference-architecture-managed-compute-on-gke-and-storage-on-gcs "Permalink to this heading")
===================================================================================================================================================================



Overview[¶](#overview "Permalink to this heading")
--------------------------------------------------


This architecture document explains how to deploy:


* A DSS instance running on a Google Compute Engine (GCE) virtual machine
* Dynamically\-spawned Google Kubernetes Engine (GKE) clusters for computation (Python and R recipes/notebooks, in\-memory visual ML, visual and code Spark recipes, Spark notebooks)
* Ability to store data in Google Cloud Storage




Security[¶](#security "Permalink to this heading")
--------------------------------------------------


The `dssuser` needs to be authenticated on the GCE machine hosting DSS with a GCP Service Account that has sufficient permissions to:



> * manage GKE clusters
> * push Docker images to Google Container Registry (GCR)




Main steps[¶](#main-steps "Permalink to this heading")
------------------------------------------------------



### Prepare the instance[¶](#prepare-the-instance "Permalink to this heading")


* Setup an AlmaLinux 8 GCE machine and make sure that:



> + you select the right Service Account
> 	+ you set the access scope to “read \+ write” for the Storage API
* Install and configure Docker CE
* Install kubectl
* Setup a non\-root user for the `dssuser`




### Install DSS[¶](#install-dss "Permalink to this heading")


* Download DSS, together with the “generic\-hadoop3” standalone Hadoop libraries and standalone Spark binaries.
* Install DSS, see [Installing and setting up](../../../installation/index.html)
* Build base container\-exec and Spark images, see [Initial setup](../../../containers/setup-k8s.html)




### Setup containerized execution configuration in DSS[¶](#setup-containerized-execution-configuration-in-dss "Permalink to this heading")


* Create a new “Kubernetes” containerized execution configuration
* Set `gcr.io/your-gcp-project` as the “Image registry URL”
* Push base images




### Setup Spark and metastore in DSS[¶](#setup-spark-and-metastore-in-dss "Permalink to this heading")


* Create a new Spark configuration and enable “Managed Spark\-on\-K8S”
* Set `gcr.io/your-gcp-project` as the “Image registry URL”
* Push base images
* Set metastore catalog to “Internal DSS catalog”




### Setup GCS connections[¶](#setup-gcs-connections "Permalink to this heading")


* Setup as many GCS connections as required, with appropriate credentials and permissions
* Make sure that “GS” is selected as the HDFS interface




### Install GKE plugin[¶](#install-gke-plugin "Permalink to this heading")


* Install the GKE plugin
* Create a new “GKE connections” preset and fill in :



> + the GCP project key
> 	+ the GCP zone
* Create a new “Node pools” preset and fill in:



> + the machine type
> 	+ the number of nodes




### Create your first cluster[¶](#create-your-first-cluster "Permalink to this heading")


* Create a new cluster, select “create GKE cluster” and enter the desired name
* Select the previously created presets and create the cluster
* Cluster creation takes around 5 minutes




### Use your cluster[¶](#use-your-cluster "Permalink to this heading")


* Create a new DSS project and configure it to use your newly\-created cluster
* You can now perform all Spark operations over Kubernetes
* GCS datasets that are built will sync to the local DSS metastore