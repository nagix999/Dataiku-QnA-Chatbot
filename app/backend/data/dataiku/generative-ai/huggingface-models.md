Running HuggingFace models[¶](#running-huggingface-models "Permalink to this heading")
======================================================================================



* [Cautions](#cautions)
* [Pre\-requisites](#pre-requisites)


	+ [Create a containerized execution config](#create-a-containerized-execution-config)
	+ [Create a code env](#create-a-code-env)
	+ [Create a HuggingFace connection](#create-a-huggingface-connection)
	+ [On Dataiku Cloud](#on-dataiku-cloud)
	+ [Test](#test)



The LLM Mesh supports locally\-running HuggingFace transformers models, such as Mistral, Llama3, Falcon, or smaller task\-specific models.



[Cautions](#id1)[¶](#cautions "Permalink to this heading")
----------------------------------------------------------


Running local large scale HuggingFace models is a complex and very costly setup, and both quality and performance tend to be below proprietary LLM APIs. We strongly recommend that you make your first experiments in the domain of LLMs using [Hosted LLM APIs](llm-connections.html). The vast majority of LLM API providers have strong guarantees as to not reusing your data for training their models.




[Pre\-requisites](#id2)[¶](#pre-requisites "Permalink to this heading")
-----------------------------------------------------------------------


In order to run local HuggingFace models, you will need:


* A running Elastic AI Kubernetes cluster with NVIDIA GPUs



> + Smaller models, such as Falcon\-7B or Llama2\-7B, work with an `A10` GPU with 40 GB of VRAM. Single\-GPU nodes are recommended.
> 	+ Larger models require multi\-GPU nodes. For instance, Mixtral\-7x8B or Llama2\-70B work with 2 `A100` GPUs with 80 GB of VRAM each.
* GPUs [compute capability level](https://developer.nvidia.com/cuda-gpus) must be \>\= 7\.0 and NVIDIA driver version \>\= 535
* A fully setup Elastic AI computation capability, with Almalinux 8 base images (i.e. by adding –distrib almalinux8 when building images)
* Python 3\.9 setup



Note


The base images and Python 3\.9 requirements are automatically fulfilled when using Dataiku Cloud Stacks, you do not need additional setup for container images, as long as you have not customized base images.


If you require assistance with the cluster setup, please reach out to your Dataiku Technical Account Manager or Customer Success Manager




Note


For air\-gapped instances, you will need to import the HuggingFace model manually to DSS’s model cache and enable DSS’s model in the HuggingFace connection. Refer to the [model cache documentation](model-cache.html).



For running models such as Falcon 7B or Llama2 7B, you will require A10 GPUs with 40 GB of VRAM. We recommend single\-GPU nodes.



### [Create a containerized execution config](#id3)[¶](#create-a-containerized-execution-config "Permalink to this heading")


* Create a new containerized execution config.
* In “custom limits”, add nvidia.com/gpu with value 1.



> + If you are using multi\-GPU nodes, you can set a higher value. In any case, it is strongly recommended to use a number of GPUs among 1, 2, 4, or 8 in order to maximize compatibility with vLLM’s tensor parallelism constraints.
* Enable “Increase shared memory size”, without setting a specific value


Do not set memory or CPU requests or limits. Anyway, each node will only accommodate a single container, since the GPU is not shared.




### [Create a code env](#id4)[¶](#create-a-code-env "Permalink to this heading")


* Create a new Python 3\.9 code env
* In “Packages to install”:



> + click “Add sets of packages”, select “Local HuggingFace models” and click “Add”
* In “Containerized execution”:



> + Select “Build for”: “All container configurations”
> 	+ In “Container runtime additions”, click “Add”, and in “Type”, select “GPU support for Torch 2”
* Click “Save and update” (this will take at least 10\-20 minutes)




### [Create a HuggingFace connection](#id5)[¶](#create-a-huggingface-connection "Permalink to this heading")


* In Connections, create a new Local HuggingFace connection
* Enter connection name
* In “Containerized execution”, enter the name of the containerized execution config you just created
* In “code environment name”, enter the name of the code environment you just created
* Create the connection


If you want to use Llama2, you must have a HuggingFace account in which Llama2 has been approved. Enter an access token.


We recommend disabling “Use DSS\-managed model cache” if your containers have good outgoing Internet connectivity, as it will be faster to download the models directly from HuggingFace



Note


The LLM mesh automatically selects the LLM inference engine. It uses [vLLM](https://docs.vllm.ai/) by default if the model and runtime environment are compatible, otherwise it uses [transformers](https://huggingface.co/transformers/).


You can manually override this default behavior in the HuggingFace connection settings (Advanced tuning \> Custom Properties). To do so, add a new property `engine.completion` and set its value to `TRANSFORMERS`, `VLLM` or `AUTO` (default, recommended unless you experience issues with the automatic engine selection).





### [On Dataiku Cloud](#id6)[¶](#on-dataiku-cloud "Permalink to this heading")


To access this feature you will need to activate the GPU on your instance. Contact us to know more about our GPU offering.


In order to run local HuggingFace models, you will need:


* Activate your GPU extension in the Launchpad,
* Create a Python 3\.9 code env with the “Local HuggingFace models” set of packages and the option “GPU support for Torch 2” activated,
* Create a HuggingFace connection in the Launchpad and linked the code environment you created.




### [Test](#id7)[¶](#test "Permalink to this heading")


In a project, create a new Prompt Studio (from the green menu). Create a new single prompt. In the LLM dropdown, choose for example Falcon 7B, and click Run.


The model is downloaded, and a container starts, which requires pulling the image to the GPU machine. The first run can take 10\-15 minutes (subsequent runs will be faster).