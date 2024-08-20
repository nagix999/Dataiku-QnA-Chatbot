Using Amazon Elastic Kubernetes Service (EKS)[¶](#using-amazon-elastic-kubernetes-service-eks "Permalink to this heading")
==========================================================================================================================


You can use containerized execution on EKS as a fully managed Kubernetes solution.


For a complete Elastic AI setup in Amazon Web Services including elastic storage and elastic compute based on Kubernetes, we recommend that you read our [dedicated AWS documentation](../../cloud/aws/index.html)



* [Using managed EKS clusters](managed.html)
	+ [Initial Setup](managed.html#initial-setup)
		- [Install the EKS plugin](managed.html#install-the-eks-plugin)
		- [Prepare your local commands](managed.html#prepare-your-local-commands)
		- [Create base images](managed.html#create-base-images)
		- [Create a new containerized execution configuration](managed.html#create-a-new-containerized-execution-configuration)
	+ [Cluster configuration](managed.html#cluster-configuration)
		- [Connection](managed.html#connection)
		- [Network settings](managed.html#network-settings)
		- [Cluster nodes](managed.html#cluster-nodes)
	+ [Using GPUs](managed.html#using-gpus)
		- [Building an image with CUDA support](managed.html#building-an-image-with-cuda-support)
		- [Enable GPU support on the cluster](managed.html#enable-gpu-support-on-the-cluster)
		- [Add a custom reservation](managed.html#add-a-custom-reservation)
		- [Deploy](managed.html#deploy)
* [Using unmanaged EKS clusters](unmanaged.html)
	+ [Setup](unmanaged.html#setup)
		- [Create your EKS cluster](unmanaged.html#create-your-eks-cluster)
		- [Prepare your local `aws`, `docker`, and `kubectl` commands](unmanaged.html#prepare-your-local-aws-docker-and-kubectl-commands)
		- [Create base images](unmanaged.html#create-base-images)
		- [Create a new execution configuration](unmanaged.html#create-a-new-execution-configuration)
	+ [Using GPUs](unmanaged.html#using-gpus)
		- [Building an image with CUDA support](unmanaged.html#building-an-image-with-cuda-support)
		- [Enable GPU support on the cluster](unmanaged.html#enable-gpu-support-on-the-cluster)
		- [Add a custom reservation](unmanaged.html#add-a-custom-reservation)
		- [Deploy](unmanaged.html#deploy)