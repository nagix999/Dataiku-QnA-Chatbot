DSS in the cloud[¶](#dss-in-the-cloud "Permalink to this heading")
==================================================================


DSS can run fully in the cloud.


When running in the cloud, DSS features advanced integrations with the managed services of the cloud providers, allowing deployment of complex architectures in a fully managed fashion.


DSS has advanced support for:


* [Amazon Web Services (AWS)](aws/index.html)
* [Microsoft Azure](azure/index.html)
* [Google Cloud Platform (GCP)](gcp/index.html)


This section documents the various integration points, and provides some reference architectures for fully\-managed cloud services



* [DSS in AWS](aws/index.html)
	+ [Reference architecture: managed compute on EKS with Glue and Athena](aws/reference-architectures/eks-glue-athena.html)
		- [Overview](aws/reference-architectures/eks-glue-athena.html#overview)
		- [Architecture diagram](aws/reference-architectures/eks-glue-athena.html#architecture-diagram)
		- [Security](aws/reference-architectures/eks-glue-athena.html#security)
		- [Main steps](aws/reference-architectures/eks-glue-athena.html#main-steps)
			* [Prepare the instance](aws/reference-architectures/eks-glue-athena.html#prepare-the-instance)
			* [Setup connectivity to AWS](aws/reference-architectures/eks-glue-athena.html#setup-connectivity-to-aws)
			* [Install DSS](aws/reference-architectures/eks-glue-athena.html#install-dss)
			* [Setup container configuration in DSS](aws/reference-architectures/eks-glue-athena.html#setup-container-configuration-in-dss)
			* [Setup Spark and Metastore in DSS](aws/reference-architectures/eks-glue-athena.html#setup-spark-and-metastore-in-dss)
			* [Setup S3 connections](aws/reference-architectures/eks-glue-athena.html#setup-s3-connections)
			* [Setup Athena connections](aws/reference-architectures/eks-glue-athena.html#setup-athena-connections)
			* [Install EKS plugin](aws/reference-architectures/eks-glue-athena.html#install-eks-plugin)
			* [Create your first cluster](aws/reference-architectures/eks-glue-athena.html#create-your-first-cluster)
			* [Use it](aws/reference-architectures/eks-glue-athena.html#use-it)
* [DSS in Azure](azure/index.html)
	+ [Reference architecture: manage compute on AKS and storage on ADLS gen2](azure/reference-architectures/azure-aks-adls.html)
		- [Overview](azure/reference-architectures/azure-aks-adls.html#overview)
		- [Security](azure/reference-architectures/azure-aks-adls.html#security)
		- [Main steps](azure/reference-architectures/azure-aks-adls.html#main-steps)
			* [Prepare the instance](azure/reference-architectures/azure-aks-adls.html#prepare-the-instance)
			* [Install DSS](azure/reference-architectures/azure-aks-adls.html#install-dss)
			* [Setup containerized execution configuration in DSS](azure/reference-architectures/azure-aks-adls.html#setup-containerized-execution-configuration-in-dss)
			* [Setup Spark and metastore in DSS](azure/reference-architectures/azure-aks-adls.html#setup-spark-and-metastore-in-dss)
			* [Setup ADLS gen2 connections](azure/reference-architectures/azure-aks-adls.html#setup-adls-gen2-connections)
			* [Install AKS plugin](azure/reference-architectures/azure-aks-adls.html#install-aks-plugin)
			* [Create your first cluster](azure/reference-architectures/azure-aks-adls.html#create-your-first-cluster)
			* [Use your cluster](azure/reference-architectures/azure-aks-adls.html#use-your-cluster)
* [DSS in GCP](gcp/index.html)
	+ [Reference architecture: managed compute on GKE and storage on GCS](gcp/reference-architectures/gke-gcs.html)
		- [Overview](gcp/reference-architectures/gke-gcs.html#overview)
		- [Security](gcp/reference-architectures/gke-gcs.html#security)
		- [Main steps](gcp/reference-architectures/gke-gcs.html#main-steps)
			* [Prepare the instance](gcp/reference-architectures/gke-gcs.html#prepare-the-instance)
			* [Install DSS](gcp/reference-architectures/gke-gcs.html#install-dss)
			* [Setup containerized execution configuration in DSS](gcp/reference-architectures/gke-gcs.html#setup-containerized-execution-configuration-in-dss)
			* [Setup Spark and metastore in DSS](gcp/reference-architectures/gke-gcs.html#setup-spark-and-metastore-in-dss)
			* [Setup GCS connections](gcp/reference-architectures/gke-gcs.html#setup-gcs-connections)
			* [Install GKE plugin](gcp/reference-architectures/gke-gcs.html#install-gke-plugin)
			* [Create your first cluster](gcp/reference-architectures/gke-gcs.html#create-your-first-cluster)
			* [Use your cluster](gcp/reference-architectures/gke-gcs.html#use-your-cluster)