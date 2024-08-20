Using Microsoft Azure Kubernetes Service (AKS)[¶](#using-microsoft-azure-kubernetes-service-aks "Permalink to this heading")
============================================================================================================================


You can use containerized execution on AKS as a fully managed Kubernetes solution.


For a complete Elastic AI setup in Azure including elastic storage and elastic compute based on Kubernetes, we recommend that you read our [dedicated Azure documentation](../../cloud/azure/index.html)



* [Using managed AKS clusters](managed.html)
	+ [Initial setup](managed.html#initial-setup)
		- [Create your ACR registry](managed.html#create-your-acr-registry)
		- [Install the AKS plugin](managed.html#install-the-aks-plugin)
		- [Prepare your local `az`, `docker`, and `kubectl` commands](managed.html#prepare-your-local-az-docker-and-kubectl-commands)
		- [Create base images](managed.html#create-base-images)
		- [Create a new containerized execution configuration](managed.html#create-a-new-containerized-execution-configuration)
	+ [Cluster configuration](managed.html#cluster-configuration)
	+ [Using GPUs](managed.html#using-gpus)
		- [Building an image with CUDA support](managed.html#building-an-image-with-cuda-support)
		- [Enable GPU support on the cluster](managed.html#enable-gpu-support-on-the-cluster)
		- [Add a custom reservation](managed.html#add-a-custom-reservation)
		- [Deploy](managed.html#deploy)
	+ [Other](managed.html#other)
* [Using unmanaged AKS clusters](unmanaged.html)
	+ [Setup](unmanaged.html#setup)
		- [Create your ACR registry](unmanaged.html#create-your-acr-registry)
		- [Create your AKS cluster](unmanaged.html#create-your-aks-cluster)
		- [Prepare your local `az`, `docker`, and `kubectl` commands](unmanaged.html#prepare-your-local-az-docker-and-kubectl-commands)
		- [Create base images](unmanaged.html#create-base-images)
		- [Create a new containerized execution configuration](unmanaged.html#create-a-new-containerized-execution-configuration)
	+ [Using GPUs](unmanaged.html#using-gpus)
		- [Building an image with CUDA support](unmanaged.html#building-an-image-with-cuda-support)
		- [Create configuration and add a custom reservation](unmanaged.html#create-configuration-and-add-a-custom-reservation)
		- [Create a cluster with GPUs](unmanaged.html#create-a-cluster-with-gpus)
		- [Deploy](unmanaged.html#deploy)