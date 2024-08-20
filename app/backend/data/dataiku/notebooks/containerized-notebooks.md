Containerized notebooks[¶](#containerized-notebooks "Permalink to this heading")
================================================================================


By default, notebook kernels run alongside the notebook server process, which can lead to issues of resource contention on the machine (CPU or RAM). DSS offers the option to run the kernels in [containers](../containers/index.html), so as to run in:


* local docker containers and benefit from resource monitoring from docker, or
* remote containers in a Kubernetes cluster, thus freeing the machine hosting the notebook server from the burden of executing the notebooks



Configuring containers for notebooks[¶](#configuring-containers-for-notebooks "Permalink to this heading")
----------------------------------------------------------------------------------------------------------


A notebook kernel must be installed in the container.



### Builtin environment[¶](#builtin-environment "Permalink to this heading")


Install or remove the notebook kernels for the builtin environment on the **Administration \> Settings \> Containerized execution** page.




### Code envs[¶](#code-envs "Permalink to this heading")


For a [code environment](../code-envs/index.html) defined in **Administration \> Code Envs**, within the code environment’s settings ensure that:


* On **Packages to install**, Jupyter notebook support is selected, *and*
* On **Containerized execution**, the environment is built for the desired container configurations





Running a notebook in a container[¶](#running-a-notebook-in-a-container "Permalink to this heading")
----------------------------------------------------------------------------------------------------


Once the kernels are installed, you can select a container configuration by:


* Creating a notebook and choosing the desired container
* Changing the kernel in an existing notebook to a kernel running in a container



### Dependencies[¶](#dependencies "Permalink to this heading")


* Instance\- and project\-level code libraries are available in containerized notebooks, without needing to rebuild the container base image.
* For code environments, changes in the package list require a rebuild of the base image (from the code env’s page) and a reload of the notebook to be effective.




### Writing files from notebook code[¶](#writing-files-from-notebook-code "Permalink to this heading")


Code that saves files to the current working directory (for example when saving ML models) will not be effective in containerized notebooks because these files will only live in the container, and thus be lost when the notebook is unloaded. To save data from a running notebook, you should use [managed folders](../connecting/managed_folders.html).