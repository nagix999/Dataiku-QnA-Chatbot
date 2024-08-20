Installing an automation node[¶](#installing-an-automation-node "Permalink to this heading")
============================================================================================



* [Installation](#installation)



You need to manually install an automation node if you plan to deploy projects to automation. See [Production deployments and bundles](../../deployment/index.html) for more information.


The process of installing a DSS automation node instance is very similar to a regular DSS installation. [Requirements](requirements.html) and [Installing a new DSS instance](initial-install.html) thus remain mostly valid.



[Installation](#id1)[¶](#installation "Permalink to this heading")
------------------------------------------------------------------


Unpack the kit like for a design node.


Then from the user account which will be used to run the DSS automation node, enter the following command:



```
dataiku-dss-VERSION/installer.sh -t automation -d DATA_DIR -p PORT -l LICENSE_FILE

```


Where:


* DATA\_DIR is the location of the data directory that you want to use. If the directory already exists, it must be empty.
* PORT is the base TCP port.
* LICENSE\_FILE is your DSS license file.


In short, all installation steps are the same as for a design node, you simply need to add `-t automation` to the `installer.sh` command\-line.



Note


Using the automation node requires a specific DSS license. Please contact Dataiku for more information.



Dependencies handling, enabling startup at boot time, and starting the automation node, work exactly as for the DSS design node.