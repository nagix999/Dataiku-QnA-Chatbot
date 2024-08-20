Using unmanaged EKS clusters[¶](#using-unmanaged-eks-clusters "Permalink to this heading")
==========================================================================================



* [Setup](#setup)


	+ [Create your EKS cluster](#create-your-eks-cluster)
	+ [Prepare your local `aws`, `docker`, and `kubectl` commands](#prepare-your-local-aws-docker-and-kubectl-commands)
	+ [Create base images](#create-base-images)
	+ [Create a new execution configuration](#create-a-new-execution-configuration)
* [Using GPUs](#using-gpus)


	+ [Building an image with CUDA support](#building-an-image-with-cuda-support)
	+ [Enable GPU support on the cluster](#enable-gpu-support-on-the-cluster)
	+ [Add a custom reservation](#add-a-custom-reservation)
	+ [Deploy](#deploy)




[Setup](#id1)[¶](#setup "Permalink to this heading")
----------------------------------------------------



### [Create your EKS cluster](#id2)[¶](#create-your-eks-cluster "Permalink to this heading")


To create your Amazon Elastic Kubernetes Service (EKS) cluster, follow the [AWS user guide](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html). We recommend that you allocate at least 15 GB of memory for each cluster node. More memory may be required if you plan on running very large in\-memory recipes.


You’ll be able to configure the memory allocation for each container and per\-namespace using multiple containerized execution configurations.




### [Prepare your local `aws`, `docker`, and `kubectl` commands](#id3)[¶](#prepare-your-local-aws-docker-and-kubectl-commands "Permalink to this heading")


Follow the [AWS documentation](https://docs.aws.amazon.com/index.html?nc2=h_ql_doc_do_v) to ensure the following on your local machine (where Dataiku DSS is installed):


* The `aws ecr` command can list and create docker image repositories and authenticate `docker` for image push.
* The `kubectl` command can interact with the cluster.
* The `docker` command can successfully push images to the ECR repository.



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


Go to Administration \> Settings \> Containerized execution, and add a new execution configuration of type “Kubernetes”.


* The image registry URL is the one given by `aws ecr describe-repositories`, without the image name.
It typically looks like `XXXXXXXXXXXX.dkr.ecr.us-east-1.amazonaws.com/PREFIX`, where `XXXXXXXXXXXX`
is your AWS account ID, `us-east-1` is the AWS region for the repository and `PREFIX` is an optional
prefix to triage your repositories.
* Set “Image pre\-push hook” to **Enable push to ECR**.


You’re now ready to run recipes and models on EKS.





[Using GPUs](#id6)[¶](#using-gpus "Permalink to this heading")
--------------------------------------------------------------


AWS provides GPU\-enabled instances with NVidia GPUs. Using GPUs for containerized execution requires the following steps.



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


To execute containers that leverage GPUs, your worker nodes and the control plane must also support GPUs. The following
steps describe a simplified way to enable a worker node leverage its GPUs:


* [Install the NVidia Driver](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-nvidia-driver.html) that
goes with the model of GPU on the instance.
* [Install the Cuda driver](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html). We
recommend using the runfile installation method. Note that you do not have to install the cuda toolkit, as the driver
alone is sufficient.
* Install the [NVidia docker runtime](https://github.com/NVidia/nvidia-docker) and set this runtime
as the default docker runtime.



Note


These steps can vary, depending on the underlying hardware and software version requirements for your projects.



Finally, enable the cluster GPU support with the [NVidia device plugin](https://github.com/NVidia/k8s-device-plugin). Be
careful to select the version that matches your Kubernetes version (`v1.10` as of July 2018\).




### [Add a custom reservation](#id9)[¶](#add-a-custom-reservation "Permalink to this heading")


For your container execution to be located on nodes with GPU accelerators, and for EKS to configure the CUDA driver on your containers, the corresponding EKS pods must be created with a custom “limit” (in Kubernetes parlance). This indicates that you need a specific type of resource (standard resource types are CPU and memory).


You must configure this limit in the containerized execution configuration. To do this:


* In the “Custom limits” section, add a new entry with key: `nvidia.com/gpu` and value: `1` (to request 1 GPU).
* Add the new entry and save the settings.




### [Deploy](#id10)[¶](#deploy "Permalink to this heading")


You can now deploy your GPU\-required recipes and models.