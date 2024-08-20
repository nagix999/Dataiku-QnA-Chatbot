Operations (Python)[¶](#operations-python "Permalink to this heading")
======================================================================



Note


* You need to have specific permissions to create, modify and use code environments. If you do not have these permissions, contact your DSS administrator.
* See [Requests](../collaboration/requests.html) for more details on how users without these permissions can request a new code environment.




Create a code environment[¶](#create-a-code-environment "Permalink to this heading")
------------------------------------------------------------------------------------


* Go to Administration \> Code envs
* Click on “New Python env”
* Give an identifier to your code environment. Only use A\-Z, a\-z, digits and hyphens



Note


Code environment identifiers must be globally unique to the DSS instance, so use a complete and descriptive identifier



* Choose the Python version that you want to use. DSS is compatible with Python versions 3\.6 to 3\.11



Note


* The requested version of Python must be installed on your system (by your system administrator)
* In most cases, you also need the Python development headers packages in order to install packages with pip. Depending on the OS, this system package (to be installed by the system administrator) is called “libpython\-dev” or “python\-devel”



* Click on “Create”
* DSS creates the code environment and installs the minimal set of packages



Note


To use Visual Machine Learning, Visual Deep Learning or Time series forecasting, additional packages are required.
They can be added in the “Packages to install” tab after code env creation by clicking “Add sets of packages”.




Warning


* Visual Machine Learning code envs are compatible with Python 3\.6 to 3\.11 (CPU \& GPU).
* Visual Time series forecasting code envs are compatible with Python 3\.6 (without Prophet) and 3\.7 to 3\.10 (including Prophet).
* Visual Causal Machine Learning code env is compatible with Python 3\.6 to 3\.10\.
* Visual Deep Learning code envs are compatible with Python 3\.6 to 3\.10 (CPU \& GPU).



* You are taken to the new environment page




Manage packages[¶](#manage-packages "Permalink to this heading")
----------------------------------------------------------------


You can manage the list of packages to install by clicking on the “Packages to install” tab.


You see here two lists:


* A non\-editable list of the “Base Packages”. These are packages that are required by your current settings. These packages cannot be removed, and you cannot modify their version. For more information, see [Base packages](base-packages.html)
* An editable list of “Requested Packages”. This is where you write the list of packages that you want in your virtual environment. To quickly add the required packages for visual machine learning and deep learning on CPU or GPU, click on “Add Sets of Packages” and make your selections. The required packages will be added to the Requested Packages list.


The list of requested packages is in the `requirements.txt` file format (see [the documentation about the format of requirements.txt](https://pip.pypa.io/en/latest/reference/requirements-file-format/)). Each line must be a package name, optionally with constraints information.


For example:


* `tabulate`
* `sklearn==1.0.2`
* `sklearn>1.2`


Once you have written the packages you want, click on **Save and update**. DSS downloads and installs the newly required packages


Afterwards, you can inspect the exact installed versions in the “Actually installed packages” tab.




Installing packages not available through pip[¶](#installing-packages-not-available-through-pip "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------


Some packages aren’t directly available from pip and need to be installed from the source code. To install such a package in a code environment, you should:


* download the source code of the package on the DSS server
* in the “Packages to install” section of your code environment, fill the “Requested packages” field with:


	+ `/path/to/package/source.zip` for zipped or gzipped packages
	+ `-e /path/to/package/source` for unzipped packages where `source` is a directory that contains a `setup.py` file
* click on “Save and update”.



Warning


* This operation is not possible for a combined use with containerized execution and model API deployment on Kubernetes.
* For automation/API nodes, the package must exist at the same path on the server.





Managed code environment resources directory[¶](#managed-code-environment-resources-directory "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------


The resources directory allows you to download/upload resources to a directory managed by the code environment,
and set environment variables that will be loaded at runtime. This makes those resources available to all
the recipes, notebooks, etc. that use this code environment.



Note


The typical use case is to download heavy pre\-trained deep learning models to the resources directory, by settings the framework’s
cache directory environment variable (e.g. `TFHUB_CACHE_DIR` for TensorFlow, `TORCH_HOME` for PyTorch, `HF_HOME` for Hugging Face etc).



Manage the code environment resources directory in the “Resources” tab:


* Write the **resources initialization script** (code samples for common deep learning frameworks are available).
This script is executed when updating the code environment, if the “Run resources init script” option is active.
* Choose whether the resources initialization script will be executed or not when building this code environment
on an API node.
* View the **environment variables** to load at runtime (set by the initialization script).
* Explore the resources directory.



Warning


* Code environment resources require the core packages to be installed.
* Code environment resources are not supported on external conda code environments.





Using custom package repositories[¶](#using-custom-package-repositories "Permalink to this heading")
----------------------------------------------------------------------------------------------------


On the Design or Automation Nodes, custom repositories can be set via GUI by defining extra “options for ‘pip install’” at Admin \> Settings \> Misc. under the “Code Envs” section. Each option must be added on a separate line.


For example:


* `--index-url=http://custom.pip.repo`
* `--extra-index-url=http://custom.pip.repo/sample`
* `--trusted-host=custom.pip.repo`


On the API node, custom repositories can be set by editing the `config/server.json` file. The `codeEnvsSettings` field contains `pipInstallExtraOptions` where you can set required options.


For example:



```
"codeEnvsSettings": {
  "preventOverrideFromImportedEnvs": true,
  "condaInstallExtraOptions": [],
  "condaCreateExtraOptions": [],
  "pipInstallExtraOptions": [
      "--index-url", "http://custom.pip.repo",
      "--extra-index-url", "http://custom.pip.repo/sample",
      "--trusted-host", "custom.pip.repo"
  ],
  "virtualenvCreateExtraOptions": [],
  "cranMirrorURL": "https://your.cran.mirror"
}

```




Containerized execution[¶](#containerized-execution "Permalink to this heading")
--------------------------------------------------------------------------------


When [running DSS processes in containers](../containers/index.html), you can specify which containers should include this code environment.




Code Environments Management On Dataiku Cloud[¶](#code-environments-management-on-dataiku-cloud "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------


On Dataiku Cloud, you have to enable custom code environments in the Launchpad’s Code Environments tab before being able to create your own code environment.


For more details see [see the dedicated documentation](https://knowledge.dataiku.com/latest/cloud-code/reference-python.html).