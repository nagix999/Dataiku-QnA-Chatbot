The data directory[¶](#the-data-directory "Permalink to this heading")
======================================================================


The data directory is the unique location on the DSS server where DSS stores all its configuration and data files.


Notably, you will find here:


* Startup scripts to start and stop DSS
* Settings and definitions of your datasets, recipes, projects, …
* The actual data of your machine learning models
* Some of the data for your datasets (those stored in local connections)
* Logs
* Temporary files
* Caches



Finding the data directory[¶](#finding-the-data-directory "Permalink to this heading")
--------------------------------------------------------------------------------------


The data directory is the directory which you set during the installation of DSS on your server (the \-d option).


If you did not install DSS yourself, you can find the path to the data directory by going to Administration \> Maintenance \> System info (you need to be a DSS administrator for this).


If you use the macOS application, the data directory is automatically set to `~/Library/DataScienceStudio/dss_home`.




Main folders of the data directory[¶](#main-folders-of-the-data-directory "Permalink to this heading")
------------------------------------------------------------------------------------------------------


The data directory is made of the following folders



Note


Depending on the node type, some of these folders may not exist




### R.lib[¶](#r-lib "Permalink to this heading")


Include in backups: Yes


This folder contains the R libraries installed by calling `install.packages()` from a R notebook or recipe, as well as the R libraries that DSS installs when running `install-R-integration`.


Note that we recommend using code environments rather than calling `install.packages()` manually. For more information, see [Code environments](../code-envs/index.html).




### analysis\-data[¶](#analysis-data "Permalink to this heading")


Include in backups: Yes


This folder contains the data for the models trained in the Lab part of DSS.


The data is organized by project, then by visual analysis, then by ML Task. The data for a ML Task is removed when the ML Task (or its containing visual analysis) is removed in DSS.


Depending on the ML engine used, this folder can contain the train and test splits data, which can become big (in `splits` folders). It is possible to remove these CSV files, but you will lose some of the ability to compare exactly models since they won’t be based on the same splits.




### bin[¶](#bin "Permalink to this heading")


Include in backups: Yes


This folder contains various programs and scripts to manage DSS.


* dss: main start/stop script
* dssadmin: for offline administration tasks
* [dsscli](dsscli.html): for various administration tasks
* env\-default.sh, env\-hadoop.sh, env\-spark.sh, dku, fek, jek, python: internal usage, not for use by end users
* env\-site.sh for advanced environment customization
* pip: for management of the builtin Python environment. For more information, see [Code environments](../code-envs/index.html).




### caches[¶](#caches "Permalink to this heading")


Include in backups: Not needed


This folder contains various precomputed information. It is safe to remove elements in this folder, but some operations in DSS will to recompute them (displaying explore samples and charts)




### code\-envs[¶](#code-envs "Permalink to this heading")


Include in backups: Yes



Note


This folder is called acode\-envs on the automation node



This folder contains the definitions of all code environments, as well as the actual packages




### config[¶](#config "Permalink to this heading")


Include in backups: Yes


This is the most important folder, where all user configuration and data is stored:


* All projects, datasets, recipes, notebooks, webapps, ….
* Users and security settings
* Connections
* API keys
* …


This folder contains several Git repositories




### databases[¶](#databases "Permalink to this heading")


Include in backups: Yes


This folder contains several internal databases used for operation of DSS:


* Usage statistics
* Jobs and scenarios histories
* Metrics and checks histories
* Users watches and stars
* Users notifications


Some of the information in these databases can be accessed from DSS itself using the “Internal stats” and “Metrics” virtual datasets




### data\-catalog[¶](#data-catalog "Permalink to this heading")


Include in backups: Not strictly required


This folder contains the indices and staging data for the DSS data catalog.




### exports[¶](#exports "Permalink to this heading")


Include in backups: Not strictly required


This folder contains download files for exports made by users.


It is safe to remove old folders in this folder \- exports will not be available anymore for download by users




### install\-support[¶](#install-support "Permalink to this heading")


Include in backups: Yes


Internal support files




### jobs[¶](#jobs "Permalink to this heading")


Include in backups: As desired, not strictly required


This folder contains the job logs and support files for all flow build jobs in DSS, both running and previous.


It is safe to remove folders of jobs that are not currently running. Logs of these jobs will not be available anymore, but the existence of the job will still be registered in the DSS UI.




### jupyter\-run[¶](#jupyter-run "Permalink to this heading")


Include in backups: Yes


This folder contains internal runtime support file for the Jupyter notebook.


The “current working directory” of all notebooks is initialized within this folder. If a user’s notebook code writes files to the current working directory, these files will appear in `jupyter-run`.




### lib[¶](#lib "Permalink to this heading")


Include in backups: Yes


This folder contains administrator\-installed global custom libraries (Python and R), as well as JDBC drivers.




### local[¶](#local "Permalink to this heading")


Include in backups: Yes


This folder contains administrator\-installed files for serving in web applications




### managed\_datasets[¶](#managed-datasets "Permalink to this heading")


Include in backups: Yes


This is the location of the “filesystem\_managed” connection which is installed by default in DSS. It contains datasets data written in this connection.




### managed\_folders[¶](#managed-folders "Permalink to this heading")


Include in backups: Yes


This is the location of the “filesystem\_folders” connection which is installed by default in DSS. It contains folders data written in this connection.




### notebook\_results[¶](#notebook-results "Permalink to this heading")


Include in backups: Yes


This folder contains the query results for SQL / Hive / Impala notebooks




### plugins[¶](#plugins "Permalink to this heading")


Include in backups: Yes


This folder contains the plugins (both installed in DSS, and developed directly in DSS)




### privtmp[¶](#privtmp "Permalink to this heading")


Include in backups: Yes


This folder contains security\-sensitive temporary files that should not be modified.




### pyenv[¶](#pyenv "Permalink to this heading")


Include in backups: Yes


This folder contains the builtin Python environment of DSS




### run[¶](#run "Permalink to this heading")


Include in backups: Not required


This folder contains all core log files of DSS. See [Diagnosing and debugging issues](../troubleshooting/diagnosing.html) for more information.




### saved\_models[¶](#saved-models "Permalink to this heading")


Include in backups: Yes


This folder contains the data for the models trained in the Flow.


The data is organized by project, then by model id.




### scenarios[¶](#scenarios "Permalink to this heading")


Include in backups: As desired, not strictly required


It is safe to remove folders of scenarios that are not currently running. Logs of these scenarios will not be available anymore, but the existence of the scenario will still be registered in the DSS UI.




### timelines[¶](#timelines "Permalink to this heading")


Include in backups: Yes


This folder contains databases storing the “timelines” information associated to each kind of DSS object.




### tmp[¶](#tmp "Permalink to this heading")


Include in backups: No


This folder contains temporary files. See below for more information




### uploads[¶](#uploads "Permalink to this heading")


Include in backups: Yes


This folder contains the files that have been uploaded to DSS to use as datasets.





DSS is using too much space on disk[¶](#dss-is-using-too-much-space-on-disk "Permalink to this heading")
--------------------------------------------------------------------------------------------------------


Please see [Managing DSS disk usage](disk-usage.html)




Managing temporary files[¶](#managing-temporary-files "Permalink to this heading")
----------------------------------------------------------------------------------


Please see [Managing DSS disk usage](disk-usage.html)