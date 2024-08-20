Deployment on Google Kubernetes Engine[¶](#deployment-on-google-kubernetes-engine "Permalink to this heading")
==============================================================================================================


You can use the API Deployer Kubernetes integration to deploy your API Services on Google Kubernetes Engine.



Setup[¶](#setup "Permalink to this heading")
--------------------------------------------



### Create your GKE cluster[¶](#create-your-gke-cluster "Permalink to this heading")


Follow Google documentation on how to create your cluster. We recommend that you allocate at least 7 GB of memory for each cluster node.




### Prepare your local `docker` and `kubectl` commands[¶](#prepare-your-local-docker-and-kubectl-commands "Permalink to this heading")


Follow Google documentation to make sure that:


* Your local (on the DSS machine) `kubectl` command can interact with the cluster. As of July 2018, this implies running `gcloud container clusters get-credentials <cluster_id>`
* Your local (on the DSS machine) `docker` command can successfully push images to the `gcr.io` repository. As of July 2018, this implies running `gcloud auth configure-docker`



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


Follow the usual setup steps as indicated in [Setting up](setup.html).


On GKE, there is only a single shared image repository URL, `gcr.io`. Access control is based on images names. Therefore, all images pushed by API Deployer must be prefixed by `<GCP project name>/`


For example, if your GCP project is called `my-gke-project`, all images must be prefixed by `my-gke-project/`. In addition, we recommend that you add a prefix specific to API Deployer


* Go to the infrastructure settings \> Kubernetes cluster
* In the Registry host field, enter `gcr.io`
* In the images prefix field, enter `my-gke-project/dataiku-mad`




### Deploy[¶](#deploy "Permalink to this heading")


You’re now ready to deploy your API Services to GKE





Using GPUs[¶](#using-gpus "Permalink to this heading")
------------------------------------------------------


Google Cloud Platform provides GPU\-enabled instances with NVidia GPUs. Several steps are required in order to use them for API Deployer deployments



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


Follow GCP’s documentation for how to create a cluster with GPU accelerators (Note: you can also create a GPU\-enabled node group in an existing cluster)


Don’t forget to run the “daemonset” installation procedure. This procedure needs several minutes to complete.




### Add a custom reservation[¶](#add-a-custom-reservation "Permalink to this heading")


In order for your API Deployer deployments to be located on nodes with GPU accelerators, and for GKE to configure the CUDA driver on your containers, the corresponding GKE pods must be created with a custom “limit” (in Kubernetes parlance) to indicate that you need a specific type of resource (standard resource types are CPU and memory)


You can configure this limit either at the infrastructure level (all deployments on this infrastructure will use GPUs) or at the deployment level.



#### At the infrastructure level[¶](#at-the-infrastructure-level "Permalink to this heading")


* Go to Infrastructure \> Settings
* Go to “Sizing and Scaling”
* In the “Custom limits” section, add a new entry with key: `nvidia.com/gpu` and value: `1` (to request 1 GPU)
* Don’t forget to add the new entry, save settings




#### At the deployment level[¶](#at-the-deployment-level "Permalink to this heading")


* Go to Deployment \> Settings
* Go to “Sizing and Scaling”
* Enable override of infrastructure settings in the “Container limits” section
* In the “Custom limits” section, add a new entry with key: `nvidia.com/gpu` and value: `1` (to request 1 GPU)
* Don’t forget to add the new entry, and save settings





### Deploy[¶](#id1 "Permalink to this heading")


You can now deploy your GPU\-requiring deployments


This applies to:


* Python functions (your endpoint needs to use a code environment that includes a CUDA\-using package like tensorflow\-gpu)
* Python predictions (ditto)