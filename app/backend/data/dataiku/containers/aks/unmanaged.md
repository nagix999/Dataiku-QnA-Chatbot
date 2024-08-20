Using unmanaged AKS clusters[¶](#using-unmanaged-aks-clusters "Permalink to this heading")
==========================================================================================



* [Setup](#setup)


	+ [Create your ACR registry](#create-your-acr-registry)
	+ [Create your AKS cluster](#create-your-aks-cluster)
	+ [Prepare your local `az`, `docker`, and `kubectl` commands](#prepare-your-local-az-docker-and-kubectl-commands)
	+ [Create base images](#create-base-images)
	+ [Create a new containerized execution configuration](#create-a-new-containerized-execution-configuration)
* [Using GPUs](#using-gpus)


	+ [Building an image with CUDA support](#building-an-image-with-cuda-support)
	+ [Create configuration and add a custom reservation](#create-configuration-and-add-a-custom-reservation)
	+ [Create a cluster with GPUs](#create-a-cluster-with-gpus)
	+ [Deploy](#deploy)




[Setup](#id1)[¶](#setup "Permalink to this heading")
----------------------------------------------------



### [Create your ACR registry](#id2)[¶](#create-your-acr-registry "Permalink to this heading")


If you already have an Azure Container Registry (ACR) up and ready, you can skip this section and go to [Create your AKS cluster](#aks-create-cluster).


Otherwise, follow the Azure documentation on [how to create your ACR registry](https://docs.microsoft.com/en-us/azure/container-registry/).



Warning


We recommend that you pay extra attention to the Azure [container registry pricing plan](https://azure.microsoft.com/en-us/pricing/details/container-registry/), as it is directly related to the registry storage capacity.





### [Create your AKS cluster](#id3)[¶](#create-your-aks-cluster "Permalink to this heading")


To create your Azure Kubernetes Service (AKS) cluster, follow the Azure documentation on [how to create your AKS cluster](https://docs.microsoft.com/en-us/azure/aks/). We recommend that you allocate at least 16GB of memory for each cluster node.


Once the cluster is created, you must modify its IAM credentials to [grant it access to ACR](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-auth-aks#grant-aks-access-to-acr) (Kubernetes secret mode is not supported). This is required for the worker nodes to pull images from the registry.




### [Prepare your local `az`, `docker`, and `kubectl` commands](#id4)[¶](#prepare-your-local-az-docker-and-kubectl-commands "Permalink to this heading")


Follow the Azure documentation to ensure the following on your local machine (where Dataiku DSS is installed):


* The `az` command is properly logged in. As of October 2019, this implies running the `az login --service-principal --username client_d --password client_secret --tenant tenant_id` command. You must use a service principal that has sufficient IAM permissions to write to ACR and full control on AKS.
* The `docker` command can successfully push images to the ACR repository. As of October 2019, this implies running the `az acr login --name your-registry-name` command.
* The `kubectl` command can interact with the cluster. As of October 2019, this implies running the `az aks get-credentials --resource-group your-rg --name your-cluster-name` command.



Note



Cluster management has been tested with the following versions of Kubernetes:* 1\.23
* 1\.24
* 1\.25
* 1\.26
* 1\.27
* 1\.28
* 1\.29




There is no known issue with other Kubernetes versions.





### [Create base images](#id5)[¶](#create-base-images "Permalink to this heading")


Build the base image by following [these instructions](../setup-k8s.html#k8s-base-image).




### [Create a new containerized execution configuration](#id6)[¶](#create-a-new-containerized-execution-configuration "Permalink to this heading")


Go to Administration \> Settings \> Containerized execution, and add a new execution configuration of type “Kubernetes”.


* In particular, to set up the image registry, the URL must be of the form `your-registry-name.azurecr.io`.
* Finish by clicking **Push base images**.


You’re now ready to run recipes, notebooks and ML models in AKS.





[Using GPUs](#id7)[¶](#using-gpus "Permalink to this heading")
--------------------------------------------------------------


Azure provides GPU\-enabled instances with NVidia GPUs. Several steps are required in order to use them for containerized execution.



### [Building an image with CUDA support](#id8)[¶](#building-an-image-with-cuda-support "Permalink to this heading")


The base image that is built by default does not have CUDA support and cannot use NVidia GPUs.
You need to build a CUDA\-enabled base image. To enable CUDA add the `--with-cuda` option to the command line:



```
./bin/dssadmin build-base-image --type container-exec --with-cuda
```

We recommend that you give this image a specific tag using the `--tag` option and keep the default base image “pristine”. We also recommend that you add the DSS version number in the image tag.



```
./bin/dssadmin build-base-image --type container-exec --with-cuda --tag dataiku-container-exec-base-cuda:X.Y.Z
```

where X.Y.Z is your DSS version number



Note


* This image contains CUDA 10\.0 and CuDNN 7\.6\. You can use `--cuda-version X.Y` to specify another DSS\-provided version (9\.0, 10\.0, 10\.1, 10\.2, 11\.0 and 11\.2 are available).
If you require other CUDA versions, you would have to create a custom image.
* Remember that depending on which CUDA version you build the base image (by default 10\.0\) you will need to use
the [corresponding tensorflow version](https://www.tensorflow.org/install/source#gpu).




Warning


After each upgrade of DSS, you must rebuild all base images and [update code envs](../code-envs.html).



Thereafter, create a new container configuration dedicated to running GPU workloads. If you specified a tag
for the base image, report it in the “Base image tag” field.




### [Create configuration and add a custom reservation](#id9)[¶](#create-configuration-and-add-a-custom-reservation "Permalink to this heading")


Create a new containerized execution configuration dedicated to running GPU workloads. If you specified a tag for the base image, report it in the “Base image tag” field.


In order for your container execution to be located on nodes with GPU accelerators, and for AKS to configure the CUDA driver on your containers, the corresponding AKS pods must be created with a custom “limit” (in Kubernetes parlance) to indicate that you need a specific type of resource (standard resource types are CPU and Memory). Also, NVidia drivers should be mounted in the containers.


To do so:


* in the “Custom limits” section, add a new entry with key: `alpha.kubernetes.io/nvidia-gpu` and value: `1` (to request 1 GPU). Don’t forget to effectively add the new entry.
* in “HostPath volume configuration”, mount `/usr/local/nvidia` as `/usr/local/nvidia`. Don’t forget to effectively add the new entry, and save the settings.




### [Create a cluster with GPUs](#id10)[¶](#create-a-cluster-with-gpus "Permalink to this heading")


Follow Azure documentation for how to create a cluster with GPU accelerators.




### [Deploy](#id11)[¶](#deploy "Permalink to this heading")


You can now deploy your GPU\-requiring recipes and models.