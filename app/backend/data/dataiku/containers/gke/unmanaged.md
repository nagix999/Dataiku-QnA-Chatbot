Using unmanaged GKE clusters[¶](#using-unmanaged-gke-clusters "Permalink to this heading")
==========================================================================================



* [Setup](#setup)


	+ [Create your GKE cluster](#create-your-gke-cluster)
	+ [Prepare your local `gcloud`, `docker`, and `kubectl` commands](#prepare-your-local-gcloud-docker-and-kubectl-commands)
	+ [Create base images](#create-base-images)
	+ [Create the execution configuration](#create-the-execution-configuration)
* [Using GPUs](#using-gpus)


	+ [Building an image with CUDA support](#building-an-image-with-cuda-support)
	+ [Enable GPU support on the cluster](#enable-gpu-support-on-the-cluster)
	+ [Add a custom reservation](#add-a-custom-reservation)
	+ [Deploy](#deploy)




[Setup](#id1)[¶](#setup "Permalink to this heading")
----------------------------------------------------



### [Create your GKE cluster](#id2)[¶](#create-your-gke-cluster "Permalink to this heading")


To create a Google Kubernetes Engine (GKE) cluster, follow the Google Cloud Platform (GCP) documentation on [creating a GKE cluster](https://cloud.google.com/kubernetes-engine/docs/quickstart).
We recommend that you allocate at least 16GB of memory for each cluster node. More memory may be required if you plan on running very large in\-memory recipes.


You’ll be able to configure the memory allocation for each container and per\-namespace in Dataiku DSS using multiple containerized execution configurations.




### [Prepare your local `gcloud`, `docker`, and `kubectl` commands](#id3)[¶](#prepare-your-local-gcloud-docker-and-kubectl-commands "Permalink to this heading")


Follow the GCP [documentation](https://cloud.google.com/kubernetes-engine/docs/quickstart) to ensure the following on your local machine (where DSS is installed):


* The `gcloud` command has the appropriate permission and scopes to push to the Google Container Registry (GCR) service.
* The `kubectl` command is installed and can interact with the cluster. This can be achieved by running the `gcloud container clusters get-credentials your-gke-cluster-name` command.
* The `docker` command is installed, can build images and push them to GCR. The latter can be enabled by running the `gcloud auth configure-docker` command.



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




### [Create the execution configuration](#id5)[¶](#create-the-execution-configuration "Permalink to this heading")


Go to Administration \> Settings \> Containerized execution, and add a new execution configuration of type “Kubernetes”.


* In GCP, there is only a single shared image repository URL, `gcr.io`. Access control is based on image names. Therefore the repository URL to use is `gcr.io/your-gcp-project-name`.
* Finish by clicking **Push base images**.


You’re now ready to run recipes and ML models in GKE.





[Using GPUs](#id6)[¶](#using-gpus "Permalink to this heading")
--------------------------------------------------------------


GCP provides GPU\-enabled instances with NVidia GPUs. Using GPUs for containerized execution requires the following steps.



### [Building an image with CUDA support](#id7)[¶](#building-an-image-with-cuda-support "Permalink to this heading")


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




### [Enable GPU support on the cluster](#id8)[¶](#enable-gpu-support-on-the-cluster "Permalink to this heading")


Follow the GCP documentation on [how to create a GKE cluster with GPU accelerators](https://cloud.google.com/kubernetes-engine/docs/how-to/gpus). You can also create a GPU\-enabled node pool in an existing cluster.


Be sure to run the “DaemonSet” installation procedure, which needs several minutes to complete.




### [Add a custom reservation](#id9)[¶](#add-a-custom-reservation "Permalink to this heading")


For your containerized execution task to run on nodes with GPUs, and for GKE to configure the CUDA driver on your containers, the corresponding pods must be created with a custom limit (in Kubernetes parlance). This indicates that you need a specific type of resource (standard resource types are CPU and memory).


You must configure this limit in the containerized execution configuration. To do this:


* In the “Custom limits” section, add a new entry with key `nvidia.com/gpu` and value `1` (to request 1 GPU).
* Add the new entry and save your settings.




### [Deploy](#id10)[¶](#deploy "Permalink to this heading")


You can now deploy your GPU\-based recipes and models.