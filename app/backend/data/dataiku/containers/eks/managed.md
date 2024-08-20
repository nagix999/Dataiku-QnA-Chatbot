Using managed EKS clusters[¶](#using-managed-eks-clusters "Permalink to this heading")
======================================================================================



* [Initial Setup](#initial-setup)


	+ [Install the EKS plugin](#install-the-eks-plugin)
	+ [Prepare your local commands](#prepare-your-local-commands)
	+ [Create base images](#create-base-images)
	+ [Create a new containerized execution configuration](#create-a-new-containerized-execution-configuration)
* [Cluster configuration](#cluster-configuration)


	+ [Connection](#connection)
	+ [Network settings](#network-settings)
	+ [Cluster nodes](#cluster-nodes)
* [Using GPUs](#using-gpus)


	+ [Building an image with CUDA support](#building-an-image-with-cuda-support)
	+ [Enable GPU support on the cluster](#enable-gpu-support-on-the-cluster)
	+ [Add a custom reservation](#add-a-custom-reservation)
	+ [Deploy](#deploy)




[Initial Setup](#id1)[¶](#initial-setup "Permalink to this heading")
--------------------------------------------------------------------



### [Install the EKS plugin](#id2)[¶](#install-the-eks-plugin "Permalink to this heading")


To use Amazon Elastic Kubernetes Service (EKS), begin by installing the “EKS clusters” plugin from the Plugins store in Dataiku DSS. For more details, see the [instructions for installing plugins](../../plugins/installing.html).




### [Prepare your local commands](#id3)[¶](#prepare-your-local-commands "Permalink to this heading")


Follow the [AWS documentation](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html) to ensure the following on your local machine (where DSS is installed):


* The `aws` command has credentials that give it write access to Amazon Elastic Container Registry (ECR) and full control on EKS.
* The `aws-iam-authenticator` command is installed. [See documentation](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html).
* The `kubectl` command is installed. [See documentation](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html).
* The `docker` command is installed and can build images. [See documentation](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-docker.html).



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




### [Create a new containerized execution configuration](#id5)[¶](#create-a-new-containerized-execution-configuration "Permalink to this heading")


Go to Administration \> Settings \> Containerized execution, and add a new execution configuration of type “Kubernetes”.


* The image registry URL is the one given by `aws ecr describe-repositories`, without the image name.
It typically looks like `XXXXXXXXXXXX.dkr.ecr.us-east-1.amazonaws.com/PREFIX`, where `XXXXXXXXXXXX`
is your AWS account ID, `us-east-1` is the AWS region for the repository, and `PREFIX` is an optional
prefix to triage your repositories.
* Set “Image pre\-push hook” to **Enable push to ECR**.





[Cluster configuration](#id6)[¶](#cluster-configuration "Permalink to this heading")
------------------------------------------------------------------------------------



### [Connection](#id7)[¶](#connection "Permalink to this heading")


The connection is where you define how to connect to AWS. Instead of providing a value here, we recommend that you leave it empty, and use the AWS credentials found by the `aws` command in `~/.aws/credentials`.


The connection can be defined either inline in each cluster (not recommended), or as a preset in the plugin’s settings (recommended).




### [Network settings](#id8)[¶](#network-settings "Permalink to this heading")


EKS requires two subnets in the same virtual private cloud (VPC). Your AWS administrator needs to provide you with two subnet identifiers.
We strongly recommend that these subnets reside in the same VPC as the DSS host. Otherwise, you have to manually set up some peering and routing between VPCs.


Additionally, you must indicate security group ids. These security groups will be associated with the EKS cluster nodes. The networking requirement is that the DSS machine has full inbound connectivity from the EKS cluster nodes. We recommend that you use the `default` security group.


Network settings can be defined either inline in each cluster (not recommended), or as a preset in the plugin’s settings (recommended).




### [Cluster nodes](#id9)[¶](#cluster-nodes "Permalink to this heading")


This setting allows you to define the number and type of nodes in the cluster.





[Using GPUs](#id10)[¶](#using-gpus "Permalink to this heading")
---------------------------------------------------------------


AWS provides GPU\-enabled instances with NVidia GPUs. Using GPUs for containerized execution requires the following steps.



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


When you create your cluster using the EKS plugin, be sure to select a instance type with a GPU. See [EC2 documentation for a full list](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/accelerated-computing-instances.html). You’ll also need to enable the “With GPU” option in the node pool settings.


At cluster creation, the plugin will run the NVidia driver “DaemonSet” installation procedure, which needs several minutes to complete.




### [Add a custom reservation](#id13)[¶](#add-a-custom-reservation "Permalink to this heading")


For your containerized execution task to run on nodes with GPUs, and for EKS to configure the CUDA driver on your containers, the corresponding pods must be created with a custom limit (in Kubernetes parlance). This indicates that you need a specific type of resource (standard resource types are CPU and memory).


You must configure this limit in the containerized execution configuration. To do this:


* In the “Custom limits” section, add a new entry with key `nvidia.com/gpu` and value `1` (to request 1 GPU).
* Add the new entry and save your settings.




### [Deploy](#id14)[¶](#deploy "Permalink to this heading")


You can now deploy your GPU\-based recipes and models.