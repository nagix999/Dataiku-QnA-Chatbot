Deployment on AWS EKS[¶](#deployment-on-aws-eks "Permalink to this heading")
============================================================================


You can use the API Deployer Kubernetes integration to deploy your API Services on AWS Elastic Kubernetes Service (EKS).



Setup[¶](#setup "Permalink to this heading")
--------------------------------------------



### Create your EKS cluster[¶](#create-your-eks-cluster "Permalink to this heading")


To create your Amazon Elastic Kubernetes Service (EKS) cluster, follow the [AWS user guide](https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html). We recommend that you allocate at least 7 GB of memory for each cluster node.




### Prepare your local `aws`, `docker`, and `kubectl` commands[¶](#prepare-your-local-aws-docker-and-kubectl-commands "Permalink to this heading")


Follow the [AWS documentation](https://docs.aws.amazon.com/index.html?nc2=h_ql_doc_do_v) to ensure the following on your local machine (where Dataiku DSS is installed):


* The `aws ecr` command can list and create docker image repositories and authenticate `docker` for image push.
* The `kubectl` command can create deployments and services on the cluster.
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





### Setup the infrastructure[¶](#setup-the-infrastructure "Permalink to this heading")


Follow the usual setup steps as indicated in [Setting up](setup.html).


* On EKS, the image registry URL is the one given by `aws ecr describe-repositories`, without the image name. It typically looks like `XXXXXXXXXXXX.dkr.ecr.us-east-1.amazonaws.com/PREFIX`, where `XXXXXXXXXXXX` is your AWS account ID, `us-east-1` is the AWS region for the repository and `PREFIX` is an optional prefix to triage your repositories.
* Once you have filled the registry URL, the “Image pre\-push hook” field becomes visible: set it to “Enable push to ECR”.




### Deploy[¶](#deploy "Permalink to this heading")


You are now ready to deploy your API Services to EKS.





Using GPUs[¶](#using-gpus "Permalink to this heading")
------------------------------------------------------


AWS provides GPU\-enabled instances with NVidia GPUs. Several steps are required in order to use them for API Deployer deployments.



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


Follow [AWS documentation](https://docs.aws.amazon.com/eks/latest/userguide/gpu-ami.html) for how to create a cluster with GPU.




### Add a custom reservation[¶](#add-a-custom-reservation "Permalink to this heading")


In order for your API Deployer deployments to be located on nodes with GPU devices, and for EKS to configure the CUDA driver on your containers, the corresponding EKS pods must be created with a custom “limit” (in Kubernetes parlance) to indicate that you need a specific type of resource (standard resource types are CPU and memory).


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