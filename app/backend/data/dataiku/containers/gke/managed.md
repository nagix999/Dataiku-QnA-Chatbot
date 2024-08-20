Using managed GKE clusters[¶](#using-managed-gke-clusters "Permalink to this heading")
======================================================================================



* [Initial setup](#initial-setup)


	+ [Install the GKE plugin](#install-the-gke-plugin)
	+ [Prepare your local commands](#prepare-your-local-commands)
	+ [Create base images](#create-base-images)
	+ [Create a new execution configuration](#create-a-new-execution-configuration)
* [Cluster configuration](#cluster-configuration)


	+ [Connection](#connection)
	+ [Network settings](#network-settings)
	+ [Cluster nodes](#cluster-nodes)
* [Using GPUs](#using-gpus)


	+ [Building an image with CUDA support](#building-an-image-with-cuda-support)
	+ [Enable GPU support on the cluster](#enable-gpu-support-on-the-cluster)
	+ [Add a custom reservation](#add-a-custom-reservation)
	+ [Deploy](#deploy)




[Initial setup](#id1)[¶](#initial-setup "Permalink to this heading")
--------------------------------------------------------------------



### [Install the GKE plugin](#id2)[¶](#install-the-gke-plugin "Permalink to this heading")


To use Google Kubernetes Engine (GKE), begin by installing the “GKE clusters” plugin from the Plugins store in Dataiku DSS. For more details, see the [instructions for installing plugins](../../plugins/installing.html).




### [Prepare your local commands](#id3)[¶](#prepare-your-local-commands "Permalink to this heading")


Follow the Google Cloud Platform (GCP) [documentation](https://cloud.google.com/kubernetes-engine/docs/quickstart) to ensure the following on your local machine (where DSS is installed):


* The `gcloud` command is installed. See [install documentation](https://cloud.google.com/sdk/docs/install). The `gcloud` command has the appropriate permissions and scopes to:



> + push to the Google Container Registry (GCR) service.
> 	+ have full control on the GKE service.
* The `gke-gcloud-auth-plugin` command is installed. See [GCP documentation](https://cloud.google.com/blog/products/containers-kubernetes/kubectl-auth-changes-in-gke).
* The `kubectl` command is installed. See [install documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl).
* The `docker` command is installed, can build images and push them to GCR. The latter can be enabled by running the `gcloud auth configure-docker` command. See [install documentation](https://docs.docker.com/engine/install/).



Note



Cluster management has been tested with the following versions of Kubernetes:* 1\.23
* 1\.24
* 1\.25
* 1\.26
* 1\.27
* 1\.28
* 1\.29




There is no known issue with other Kubernetes versions.





### [Create base images](#id4)[¶](#create-base-images "Permalink to this heading")


Build the base image by following [these instructions](../setup-k8s.html#k8s-base-image).




### [Create a new execution configuration](#id5)[¶](#create-a-new-execution-configuration "Permalink to this heading")


Go to Administration \> Settings \> Containerized execution, and add a new execution configuration of type “Kubernetes.”


* In GCP, there is only a single shared image repository URL, `gcr.io`. Access control is based on image names; therefore, the repository URL to use is `gcr.io/your-gcp-project-name`.
* Finish by clicking **Push base images**.





[Cluster configuration](#id6)[¶](#cluster-configuration "Permalink to this heading")
------------------------------------------------------------------------------------



### [Connection](#id7)[¶](#connection "Permalink to this heading")


The connection is where you define how to connect to GCP. This can be done either inline in each cluster (not recommended), or as a preset in the “GKE connection” plugin settings (recommended).




### [Network settings](#id8)[¶](#network-settings "Permalink to this heading")


The “network” field refers to the Virtual Private Cloud (VPC) where the cluster will be deployed. The “sub\-network” field defines the IP space within that VPC where the pod IPs will be allocated.
If left blank, those fields will use default network settings, the details of which are explained in the [GCP documentation](https://cloud.google.com/kubernetes-engine/docs/quickstart).




### [Cluster nodes](#id9)[¶](#cluster-nodes "Permalink to this heading")


This is where you define the number and type of nodes that you want in your cluster. You can define the properties of a node pool either inline (not recommended) or as a preset in the “Node pools” plugin settings (recommended). You have the possibility to define multiple node pools, each with its own properties.





[Using GPUs](#id10)[¶](#using-gpus "Permalink to this heading")
---------------------------------------------------------------


GCP provides GPU\-enabled instances with NVidia GPUs. Using GPUs for containerized execution requires the following steps.



### [Building an image with CUDA support](#id11)[¶](#building-an-image-with-cuda-support "Permalink to this heading")


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




### [Enable GPU support on the cluster](#id12)[¶](#enable-gpu-support-on-the-cluster "Permalink to this heading")


When you create your cluster using the GKE plugin, be sure to enable the “With GPU” option in the node pool settings. Follow the [GCP documentation on GPUs](https://cloud.google.com/compute/docs/gpus/) to select the GPU type.


At cluster creation, the plugin will run the NVidia driver “DaemonSet” installation procedure, which needs several minutes to complete.




### [Add a custom reservation](#id13)[¶](#add-a-custom-reservation "Permalink to this heading")


For your containerized execution task to run on nodes with GPUs, and for GKE to configure the CUDA driver on your containers, the corresponding pods must be created with a custom limit (in Kubernetes parlance). This indicates that you need a specific type of resource (standard resource types are CPU and memory).


You must configure this limit in the containerized execution configuration. To do this:


* In the “Custom limits” section, add a new entry with key `nvidia.com/gpu` and value `1` (to request 1 GPU).
* Add the new entry and save your settings.




### [Deploy](#id14)[¶](#deploy "Permalink to this heading")


You can now deploy your GPU\-based recipes and models.