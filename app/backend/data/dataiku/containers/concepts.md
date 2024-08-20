Concepts[¶](#concepts "Permalink to this heading")
==================================================



* [Interaction between DSS and containers](#interaction-between-dss-and-containers)
* [Capabilities and benefits](#capabilities-and-benefits)


	+ [Limitations](#limitations)
* [Containerized execution configurations](#containerized-execution-configurations)
* [Spark configurations](#spark-configurations)
* [Execution configurations vs clusters](#execution-configurations-vs-clusters)
* [Base images](#base-images)
* [Support of code environments](#support-of-code-environments)




[Interaction between DSS and containers](#id1)[¶](#interaction-between-dss-and-containers "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------


DSS can work with container engines in three ways:


1. Parts of the processing tasks of the DSS design and automation nodes can run on one or several hosts, powered by Docker or Kubernetes. For more details, see the [Elastic AI computation](index.html) section of the documentation.
2. The DSS API node can run as multiple containers orchestrated by Kubernetes. For more details, see the [API Node \& API Deployer: Real\-time APIs](../apinode/index.html) section.
3. The entirety of a DSS design or automation node can run as a Docker container. For more details, see [Running DSS as a container (in Docker or Kubernetes)](../installation/other/container.html).



Note


In general, running Dataiku DSS as a container (either by running Docker directly, or through Kubernetes) is incompatible with the ability to leverage containers as a processing engine.




Note


The rest of this section is about scaling processing of DSS design and automation nodes by leveraging elastic compute clusters powered by Kubernetes.





[Capabilities and benefits](#id2)[¶](#capabilities-and-benefits "Permalink to this heading")
--------------------------------------------------------------------------------------------


DSS can run certain kinds of processes in elastic compute clusters powered by Kubernetes. These processes include the following:


* Python and R recipes and notebooks
* [Visual recipes](containerized-dss-engine.html) using the “DSS” engine
* Spark\-powered code recipes and notebooks
* Spark\-powered visual recipes
* Plugin\-provided recipes that are written in Python or R
* Initial training of in\-memory machine learning models (when using the “in\-memory” engine, see [In\-memory Python](../machine-learning/algorithms/in-memory-python.html))
* Retraining of in\-memory machine learning models
* Scoring of in\-memory machine learning models when NOT using the “Optimized engine” (see [Scoring engines](../machine-learning/scoring-engines.html)). The optimized engine can run on Spark.
* Evaluation of in\-memory machine learning models


Running DSS processes in containers provides several key advantages, namely:


* **Improved scalability**: Use of Kubernetes provide the ability to scale processing of “local” code beyond the single DSS design/automation node machine.
* **Improved computing capabilities**: Containers provide the ability to leverage processing nodes that may have different computing capabilities. In particular, you can leverage remote machines that provide GPUs, even though the DSS machine itself does not. This is especially useful for [deep learning](../machine-learning/deep-learning/index.html).
* **Ease of resource management**: You can restrict the use of resources, such as CPU and memory usage



Warning


The base image for containers has only the basic python packages for DSS. If you need any additional packages that were manually added to the [built\-in python environment](../python/packages.html) of DSS, then we recommend that you use a code environment. You could also choose to use a custom base image.




### [Limitations](#id3)[¶](#limitations "Permalink to this heading")


* In code recipes and notebooks, using libraries from plugins is not supported in containers. For example,
`dataiku.use_plugin_libs` and `dataiku.import_from_plugin` will not work.
* For [deep learning models](../machine-learning/deep-learning/introduction.html), if you run a GPU\-enabled
training in a container, but the DSS server itself does not have a GPU or CUDA installed, Tensorboard
visualization will not work, because it runs locally using the same code environment as the training.
This should not prevent the training itself, only the Tensorboard visualization.





[Containerized execution configurations](#id4)[¶](#containerized-execution-configurations "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------


Each kind of activity (such as recipes, machine learning models, …) that you run on containers targets a specific “Containerized execution configuration”.


This does not apply to Spark activities. For these, see below.


Kubernetes execution configurations indicate:


* The [base image](#base-image-config) to use
* The “context” for the `kubectl` command. This allows you to target multiple unmanaged Kubernetes clusters or to use multiple sets of Kubernetes credentials.
* Resource restriction keys (as specified by Kubernetes)
* The Kubernetes resource namespace for resource quota management
* The image registry URL
* Permissions — to restrict which user groups have the right to use a specific Kubernetes execution configuration


Since each execution configuration specifies resource restrictions, you can use multiple ones to provide differentiated container sizes and quotas to users.




[Spark configurations](#id5)[¶](#spark-configurations "Permalink to this heading")
----------------------------------------------------------------------------------


Each Spark activity references a Spark configuration, and Spark configurations can be configured so as to run on Kubernetes. Each Spark configuration that runs on Kubernetes specifies the base image to use, resource restrictions, Kubernetes resource namespaces and image registry URL.




[Execution configurations vs clusters](#id6)[¶](#execution-configurations-vs-clusters "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


If you use the Dataiku ability to manage Kubernetes clusters, in addition to selecting the “execution configuration”, which specifies “how” to execute something, you need to select the “cluster”, which specifies “where” to run it.


Both execution configuration and clusters have global default that can be overridden per project, or even per recipe / notebook / …


Note that you do not need to use per\-cluster container runtime configurations, or per\-cluster Spark configurations . DSS automatically uses the requested cluster and the limits defined in the container runtime configuration.




[Base images](#id7)[¶](#base-images "Permalink to this heading")
----------------------------------------------------------------


DSS uses one or multiple container images that must be built prior to running any workload.


In most cases, you’ll only have a single container base image that will be used for all container\-based executions. At build time, it is possible to set up whether you want your image to have:


* R support
* CUDA support for execution on GPUs


For advanced use cases, you can build multiple base images. This can be used for example:


* By having one base image with CUDA support, and one without
* If you require additional base system packages




[Support of code environments](#id8)[¶](#support-of-code-environments "Permalink to this heading")
--------------------------------------------------------------------------------------------------


Kubernetes execution capabilities are fully compatible with multiple managed [code environments](../code-envs/index.html). You simply need to indicate for which containerized execution configuration(s) your code environment must be made available. For more information, see [Using code envs with containerized execution](code-envs.html).