Deployment on Azure AKS[¶](#deployment-on-azure-aks "Permalink to this heading")
================================================================================


You can use the API Deployer Kubernetes integration to deploy your API Services on Azure Kubernetes Service (AKS).



Setup[¶](#setup "Permalink to this heading")
--------------------------------------------



### Create your ACR registry[¶](#create-your-acr-registry "Permalink to this heading")


Follow the Azure documentation on [how to create your ACR registry](https://docs.microsoft.com/en-us/azure/container-registry/). We recommend that you pay extra attention to the pricing plan since it is directly related to the registry storage capacity.




### Create your AKS cluster[¶](#create-your-aks-cluster "Permalink to this heading")


Follow Azure’s documentation on [how to create your AKS cluster](https://docs.microsoft.com/en-us/azure/aks/). We recommend that you allocate at least 8GB of memory for each cluster node.


Once the cluster is created, you must modify its IAM credentials to [grant it access to ACR](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-auth-aks#grant-aks-access-to-acr) (Kubernetes secret mode is not supported). This is required for the worker nodes to pull images from the registry.




### Prepare your local `az`, `docker` and `kubectl` commands[¶](#prepare-your-local-az-docker-and-kubectl-commands "Permalink to this heading")


Follow the Azure documentation to make sure that:


* Your local (on the DSS machine) `az` command is properly logged in. As of October 2019, this implies running the `az login --service-principal --username client_d --password client_secret --tenant tenant_id` command. You must use a service principal that has sufficient IAM permissions to write to ACR and full control on AKS.
* Your local (on the DSS machine) `docker` command can successfully push images to the ACR repository. As of October 2019, this implies running the `az acr login --name your-registry-name`.
* Your local (on the DSS machine) `kubectl` command can interact with the cluster. As of October 2019, this implies running the `az aks get-credentials --resource-group your-rg --name your-cluster-name` command.



Note



Cluster management has been tested with the following versions of Kubernetes:* 1\.23
* 1\.24
* 1\.25
* 1\.26
* 1\.27
* 1\.28
* 1\.29




There is no known issue with other Kubernetes versions.





### Setup the infrastructure[¶](#setup-the-infrastructure "Permalink to this heading")


Follow the usual setup steps as indicated in [Setting up](setup.html). In particular, to set up the image registry, in the API Deployer go to Infrastructures \> your\-infrastructure \> Settings, and in the “Kubernetes cluster” section, set the “Registry host” field to `your-registry-name.azurecr.io`.




### Deploy[¶](#deploy "Permalink to this heading")


You’re now ready to deploy your API Services to Azure AKS.





Using GPUs[¶](#using-gpus "Permalink to this heading")
------------------------------------------------------


Azure provides GPU\-enabled instances with NVidia GPUs. Several steps are required in order to use them for API Deployer deployments.



### Building an image with CUDA support[¶](#building-an-image-with-cuda-support "Permalink to this heading")


The base image that is built by default does not have CUDA support and cannot use NVidia GPUs.
You need to build a CUDA\-enabled base image. To enable CUDA add the `--with-cuda` option to the command line:



```
./bin/dssadmin build-base-image --type apideployer --with-cuda
```

We recommend that you give this image a specific tag using the `--tag` option and keep the default base image “pristine”. We also recommend that you add the DSS version number in the image tag.



```
./bin/dssadmin build-base-image --type apideployer --with-cuda --tag dataiku-apideployer-base-cuda:X.Y.Z
```

where X.Y.Z is your DSS version number



Note


* This image contains CUDA 10\.0 and CuDNN 7\.6\. You can use `--cuda-version X.Y` to specify another DSS\-provided version (9\.0, 10\.0, 10\.1, 10\.2, 11\.0 and 11\.2 are available).
If you require other CUDA versions, you would have to create a custom image.
* Remember that depending on which CUDA version you build the base image (by default 10\.0\) you will need to use
the [corresponding tensorflow version](https://www.tensorflow.org/install/source#gpu).




Warning


After each upgrade of DSS, you must rebuild all base images and [update code envs](../../containers/code-envs.html).



If you used a specific tag, go to the infrastructure settings, and in the “Base image tag” field, enter `dataiku-apideployer-base-cuda:X.Y.Z`




### Create a cluster with GPUs[¶](#create-a-cluster-with-gpus "Permalink to this heading")


Follow [Azure documentation](https://docs.microsoft.com/en-us/azure/aks/gpu-cluster) for how to create a cluster with GPU.




### Add a custom reservation[¶](#add-a-custom-reservation "Permalink to this heading")


In order for your API Deployer deployments to be located on nodes with GPU devices, and for AKS to configure the CUDA driver on your containers, the corresponding AKS pods must be created with a custom “limit” (in Kubernetes parlance) to indicate that you need a specific type of resource (standard resource types are CPU and memory).


You can configure this limit either at the infrastructure level (all deployments on this infrastructure will use GPUs) or at the deployment level.



#### At the infrastructure level[¶](#at-the-infrastructure-level "Permalink to this heading")


* Go to Infrastructure \> Settings
* Go to “Sizing and Scaling”
* In the “Custom limits” section, add a new entry with key `nvidia.com/gpu` and value: `1` (to request 1 GPU)
* Don’t forget to add the new entry, and save settings




#### At the deployment level[¶](#at-the-deployment-level "Permalink to this heading")


* Go to Deployment \> Settings
* Go to “Sizing and Scaling”
* Enable override of infrastructure settings in the “Container limits” section
* In the “Custom limits” section, add a new entry with key `nvidia.com/gpu` and value: `1` (to request 1 GPU)
* Don’t forget to add the new entry, and save settings





### Deploy[¶](#id1 "Permalink to this heading")


You can now deploy your GPU\-requiring deployments.


This applies to:


* Python functions (your endpoint needs to use a code environment that includes a CUDA\-using package like tensorflow\-gpu)
* Python predictions