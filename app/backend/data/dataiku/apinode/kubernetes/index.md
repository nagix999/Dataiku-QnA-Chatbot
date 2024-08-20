Deploying on Kubernetes[¶](#deploying-on-kubernetes "Permalink to this heading")
================================================================================


Using the API Deployer, you can deploy your API services to a Kubernetes cluster.


Each API Service Deployment (see [Concepts](../concepts.html)) is setup on Kubernetes as:


* A *Kubernetes deployment* made of several *replicas* of a single pod
* A *Kubernetes service* to expose a publicly available URL which applications can use to query your API



* [Setting up](setup.html)
	+ [Prerequisites](setup.html#prerequisites)
	+ [Limitations](setup.html#limitations)
	+ [Build the base image](setup.html#build-the-base-image)
	+ [Create the Kubernetes infrastructure in DSS](setup.html#create-the-kubernetes-infrastructure-in-dss)
* [Deployment on Google Kubernetes Engine](gke.html)
	+ [Setup](gke.html#setup)
		- [Create your GKE cluster](gke.html#create-your-gke-cluster)
		- [Prepare your local `docker` and `kubectl` commands](gke.html#prepare-your-local-docker-and-kubectl-commands)
		- [Setup the infrastructure](gke.html#setup-the-infrastructure)
		- [Deploy](gke.html#deploy)
	+ [Using GPUs](gke.html#using-gpus)
		- [Building an image with CUDA support](gke.html#building-an-image-with-cuda-support)
		- [Create a cluster with GPUs](gke.html#create-a-cluster-with-gpus)
		- [Add a custom reservation](gke.html#add-a-custom-reservation)
			* [At the infrastructure level](gke.html#at-the-infrastructure-level)
			* [At the deployment level](gke.html#at-the-deployment-level)
		- [Deploy](gke.html#id1)
* [Deployment on Azure AKS](aks.html)
	+ [Setup](aks.html#setup)
		- [Create your ACR registry](aks.html#create-your-acr-registry)
		- [Create your AKS cluster](aks.html#create-your-aks-cluster)
		- [Prepare your local `az`, `docker` and `kubectl` commands](aks.html#prepare-your-local-az-docker-and-kubectl-commands)
		- [Setup the infrastructure](aks.html#setup-the-infrastructure)
		- [Deploy](aks.html#deploy)
	+ [Using GPUs](aks.html#using-gpus)
		- [Building an image with CUDA support](aks.html#building-an-image-with-cuda-support)
		- [Create a cluster with GPUs](aks.html#create-a-cluster-with-gpus)
		- [Add a custom reservation](aks.html#add-a-custom-reservation)
			* [At the infrastructure level](aks.html#at-the-infrastructure-level)
			* [At the deployment level](aks.html#at-the-deployment-level)
		- [Deploy](aks.html#id1)
* [Deployment on AWS EKS](eks.html)
	+ [Setup](eks.html#setup)
		- [Create your EKS cluster](eks.html#create-your-eks-cluster)
		- [Prepare your local `aws`, `docker`, and `kubectl` commands](eks.html#prepare-your-local-aws-docker-and-kubectl-commands)
		- [Setup the infrastructure](eks.html#setup-the-infrastructure)
		- [Deploy](eks.html#deploy)
	+ [Using GPUs](eks.html#using-gpus)
		- [Building an image with CUDA support](eks.html#building-an-image-with-cuda-support)
		- [Create a cluster with GPUs](eks.html#create-a-cluster-with-gpus)
		- [Add a custom reservation](eks.html#add-a-custom-reservation)
			* [At the infrastructure level](eks.html#at-the-infrastructure-level)
			* [At the deployment level](eks.html#at-the-deployment-level)
		- [Deploy](eks.html#id1)
* [Deployment on Minikube](minikube.html)
	+ [Setup](minikube.html#setup)
		- [Create the base image](minikube.html#create-the-base-image)
		- [Start DSS with proper env](minikube.html#start-dss-with-proper-env)
	+ [Configure infrastructure](minikube.html#configure-infrastructure)
* [Managing SQL connections](sql-connections.html)
	+ [Configuring the connection used for storage of bundled data](sql-connections.html#configuring-the-connection-used-for-storage-of-bundled-data)
	+ [Configuring the “referenced” connections](sql-connections.html#configuring-the-referenced-connections)