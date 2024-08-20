Code environments[¶](#code-environments "Permalink to this heading")
====================================================================


DSS allows you to create an arbitrary number of code environments. A code environment is a standalone and self\-contained environment to run Python or R code.


Each code environment has its own set of packages. Environments are independent: you can install different packages or different versions of packages in different environments without interaction between them. In the case of Python environments, each environment may also use its own version of Python. You can for example have one environment running Python 3\.6 and one running Python 3\.9


In each location where you can run Python or R code, you can select which code environment to use.



* [Operations (Python)](operations-python.html)
	+ [Create a code environment](operations-python.html#create-a-code-environment)
	+ [Manage packages](operations-python.html#manage-packages)
	+ [Installing packages not available through pip](operations-python.html#installing-packages-not-available-through-pip)
	+ [Managed code environment resources directory](operations-python.html#managed-code-environment-resources-directory)
	+ [Using custom package repositories](operations-python.html#using-custom-package-repositories)
	+ [Containerized execution](operations-python.html#containerized-execution)
	+ [Code Environments Management On Dataiku Cloud](operations-python.html#code-environments-management-on-dataiku-cloud)
* [Operations (R)](operations-r.html)
	+ [Create a code environment](operations-r.html#create-a-code-environment)
	+ [Manage packages](operations-r.html#manage-packages)
	+ [Using different package repositories](operations-r.html#using-different-package-repositories)
	+ [Code Environments Management On Dataiku Cloud](operations-r.html#code-environments-management-on-dataiku-cloud)
* [Base packages](base-packages.html)
* [Using Conda](conda.html)
	+ [Prerequisites](conda.html#prerequisites)
	+ [Using Conda environments](conda.html#using-conda-environments)
* [Automation nodes](automation.html)
	+ [Versioning](automation.html#versioning)
	+ [Code environments from bundles](automation.html#code-environments-from-bundles)
		- [Comparison between bundled and existing](automation.html#comparison-between-bundled-and-existing)
		- [Preloading code environments](automation.html#preloading-code-environments)
	+ [Managing code environments directly](automation.html#managing-code-environments-directly)
* [Non\-managed code environments](non-managed.html)
	+ [Non\-managed Python code environment](non-managed.html#non-managed-python-code-environment)
	+ [Non\-managed R code environment](non-managed.html#non-managed-r-code-environment)
* [Plugins’ code environments](plugins.html)
	+ [Defining requirements of a plugin](plugins.html#defining-requirements-of-a-plugin)
	+ [Creating code environment instances for plugins](plugins.html#creating-code-environment-instances-for-plugins)
	+ [Plugin code environment types](plugins.html#plugin-code-environment-types)
* [Custom options and environment](custom-options.html)
	+ [Examples](custom-options.html#examples)
		- [Adding a trusted host for pip installs](custom-options.html#adding-a-trusted-host-for-pip-installs)
		- [Adding a proxy for pip installs](custom-options.html#adding-a-proxy-for-pip-installs)
		- [Point to a custom python package repository for pip installs](custom-options.html#point-to-a-custom-python-package-repository-for-pip-installs)
		- [Install from a local directory without scanning remote package indexes](custom-options.html#install-from-a-local-directory-without-scanning-remote-package-indexes)
		- [Add a conda channel for packages install](custom-options.html#add-a-conda-channel-for-packages-install)
* [Troubleshooting](troubleshooting.html)
	+ [Where to look for logs](troubleshooting.html#where-to-look-for-logs)
	+ [Creation or package installation fails with gcc error](troubleshooting.html#creation-or-package-installation-fails-with-gcc-error)
		- [Python.h not found](troubleshooting.html#python-h-not-found)
			* [RHEL / CentOS / AlmaLinux / Rocky Linux / Oracle Linux](troubleshooting.html#rhel-centos-almalinux-rocky-linux-oracle-linux)
			* [Debian / Ubuntu](troubleshooting.html#debian-ubuntu)
			* [Amazon Linux 2](troubleshooting.html#amazon-linux-2)
			* [SUSE Linux Enterprise Server 15](troubleshooting.html#suse-linux-enterprise-server-15)
			* [macOS](troubleshooting.html#macos)
		- [Other .h file not found](troubleshooting.html#other-h-file-not-found)
	+ [Creation of code environments fails with : No module named ‘distutils.spawn’](troubleshooting.html#creation-of-code-environments-fails-with-no-module-named-distutils-spawn)
* [Code env permissions](permissions.html)