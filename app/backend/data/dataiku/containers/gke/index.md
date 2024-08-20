Using Google Kubernetes Engine (GKE)[¶](#using-google-kubernetes-engine-gke "Permalink to this heading")
========================================================================================================


You can use containerized execution on GKE as a fully managed Kubernetes solution.


For a complete Elastic AI setup in Google Cloud Platform including elastic storage and elastic compute based on Kubernetes, we recommend that you read our [dedicated GCP documentation](../../cloud/gcp/index.html)



* [Using managed GKE clusters](managed.html)
	+ [Initial setup](managed.html#initial-setup)
		- [Install the GKE plugin](managed.html#install-the-gke-plugin)
		- [Prepare your local commands](managed.html#prepare-your-local-commands)
		- [Create base images](managed.html#create-base-images)
		- [Create a new execution configuration](managed.html#create-a-new-execution-configuration)
	+ [Cluster configuration](managed.html#cluster-configuration)
		- [Connection](managed.html#connection)
		- [Network settings](managed.html#network-settings)
		- [Cluster nodes](managed.html#cluster-nodes)
	+ [Using GPUs](managed.html#using-gpus)
		- [Building an image with CUDA support](managed.html#building-an-image-with-cuda-support)
		- [Enable GPU support on the cluster](managed.html#enable-gpu-support-on-the-cluster)
		- [Add a custom reservation](managed.html#add-a-custom-reservation)
		- [Deploy](managed.html#deploy)
* [Using unmanaged GKE clusters](unmanaged.html)
	+ [Setup](unmanaged.html#setup)
		- [Create your GKE cluster](unmanaged.html#create-your-gke-cluster)
		- [Prepare your local `gcloud`, `docker`, and `kubectl` commands](unmanaged.html#prepare-your-local-gcloud-docker-and-kubectl-commands)
		- [Create base images](unmanaged.html#create-base-images)
		- [Create the execution configuration](unmanaged.html#create-the-execution-configuration)
	+ [Using GPUs](unmanaged.html#using-gpus)
		- [Building an image with CUDA support](unmanaged.html#building-an-image-with-cuda-support)
		- [Enable GPU support on the cluster](unmanaged.html#enable-gpu-support-on-the-cluster)
		- [Add a custom reservation](unmanaged.html#add-a-custom-reservation)
		- [Deploy](unmanaged.html#deploy)