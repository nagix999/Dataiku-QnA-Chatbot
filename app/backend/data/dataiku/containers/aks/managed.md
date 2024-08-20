Using managed AKS clusters[¶](#using-managed-aks-clusters "Permalink to this heading")
======================================================================================



* [Initial setup](#initial-setup)


	+ [Create your ACR registry](#create-your-acr-registry)
	+ [Install the AKS plugin](#install-the-aks-plugin)
	+ [Prepare your local `az`, `docker`, and `kubectl` commands](#prepare-your-local-az-docker-and-kubectl-commands)
	+ [Create base images](#create-base-images)
	+ [Create a new containerized execution configuration](#create-a-new-containerized-execution-configuration)
* [Cluster configuration](#cluster-configuration)
* [Using GPUs](#using-gpus)


	+ [Building an image with CUDA support](#building-an-image-with-cuda-support)
	+ [Enable GPU support on the cluster](#enable-gpu-support-on-the-cluster)
	+ [Add a custom reservation](#add-a-custom-reservation)
	+ [Deploy](#deploy)
* [Other](#other)




[Initial setup](#id1)[¶](#initial-setup "Permalink to this heading")
--------------------------------------------------------------------



### [Create your ACR registry](#id2)[¶](#create-your-acr-registry "Permalink to this heading")


If you already have an Azure Container Registry (ACR) up and ready, you can skip this section and go to [Install the AKS plugin](#aks-install-plugin).


Otherwise, follow the Azure documentation on [how to create your ACR registry](https://docs.microsoft.com/en-us/azure/container-registry/).



Warning


We recommend that you pay extra attention to the Azure [container registry pricing plan](https://azure.microsoft.com/en-us/pricing/details/container-registry/), as it is directly related to the registry storage capacity.





### [Install the AKS plugin](#id3)[¶](#install-the-aks-plugin "Permalink to this heading")


To use Microsoft Azure Kubernetes Service (AKS), begin by installing the “AKS clusters” plugin from the Plugins store in Dataiku DSS. For more details, see the [instructions for installing plugins](../../plugins/installing.html).




### [Prepare your local `az`, `docker`, and `kubectl` commands](#id4)[¶](#prepare-your-local-az-docker-and-kubectl-commands "Permalink to this heading")


Follow the Azure documentation to ensure the following on your local machine (where DSS is installed):


* The `az` command is properly logged in. This implies running the `az login --service-principal --username client_d --password client_secret --tenant tenant_id` command. More details in [Azure documentation](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli).
* The `docker` command can successfully push images to the ACR repository. This implies running the `az acr login --name your-registry-name` command.
* The `kubectl` command is installed.



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





[Cluster configuration](#id7)[¶](#cluster-configuration "Permalink to this heading")
------------------------------------------------------------------------------------


* The **connection** is where you define how to connect to Azure. This can be done either inline in each cluster (not recommended) or via a preset in the “AKS connection” plugin settings (recommended).
* By default, the service principal associated to the cluster will be the same as the one used on the DSS machine. You can change this by enabling the **Use distinct credentials** option and defining a specific connection, either inline or via a preset.
* **Cluster nodes** is where you define the number and type of nodes that you want in your cluster. You can define the properties of a node pool either inline (not recommended) or as a preset in the “Node pools” plugin settings (recommended). You have the possibility to define multiple node pools, each with its own properties.




[Using GPUs](#id8)[¶](#using-gpus "Permalink to this heading")
--------------------------------------------------------------


Azure provides GPU\-enabled instances with NVidia GPUs. Using GPUs for containerized execution requires the following steps.



### [Building an image with CUDA support](#id9)[¶](#building-an-image-with-cuda-support "Permalink to this heading")


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



Thereafter, create a new container configuration dedicated to running GPU workloads. If you specified a tag for the base image, report it in the “Base image tag” field.




### [Enable GPU support on the cluster](#id10)[¶](#enable-gpu-support-on-the-cluster "Permalink to this heading")


When you create your cluster using the AKS plugin, be sure to select a VM with a GPU. See [Azure documentation for a full list](https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-gpu). You’ll also need to enable the “With GPU” option in the node pool settings.


At cluster creation, the plugin will run the NVidia driver “DaemonSet” installation procedure, which needs several minutes to complete.




### [Add a custom reservation](#id11)[¶](#add-a-custom-reservation "Permalink to this heading")


For your containerized execution task to run on nodes with GPUs, and for AKS to configure the CUDA driver on your containers, the corresponding pods must be created with a custom limit (in Kubernetes parlance). This indicates that you need a specific type of resource (standard resource types are CPU and memory).


You must configure this limit in the containerized execution configuration. To do this:


* In the “Custom limits” section, add a new entry with key `nvidia.com/gpu` and value `1` (to request 1 GPU).
* Add the new entry and save your settings.




### [Deploy](#id12)[¶](#deploy "Permalink to this heading")


You can now deploy your GPU\-based recipes and models.





[Other](#id13)[¶](#other "Permalink to this heading")
-----------------------------------------------------


When you create a cluster using the AKS plugin, Microsoft will receive information that this cluster was provisioned from a Dataiku DSS instance. Microsoft is able to correlate the Azure resources that are used to support the software. Microsoft collects this information to provide the best experiences with their products and to operate their business. The data is collected and governed by Microsoft’s privacy policies, which can be found [here](https://www.microsoft.com/trustcenter/).


To disable this, set a `DISABLE_AZURE_USAGE_ATTRIBUTION` environment variable to `1` in `DATADIR/bin/env-site.sh`.