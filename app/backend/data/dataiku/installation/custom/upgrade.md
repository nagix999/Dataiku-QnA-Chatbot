Upgrading a DSS instance[¶](#upgrading-a-dss-instance "Permalink to this heading")
==================================================================================



* [Notes and limitations](#notes-and-limitations)
* [Ways to upgrade a DSS instance](#ways-to-upgrade-a-dss-instance)


	+ [Upgrading an instance in\-place](#upgrading-an-instance-in-place)
	+ [Upgrading by project import/export](#upgrading-by-project-import-export)
	+ [Upgrading by cloning the instance](#upgrading-by-cloning-the-instance)
* [Pre\-upgrade tasks](#pre-upgrade-tasks)
* [Unpack the new software](#unpack-the-new-software)
* [Perform the upgrade](#perform-the-upgrade)
* [Post\-upgrade tasks (before startup)](#post-upgrade-tasks-before-startup)


	+ [Update R installation](#update-r-installation)
	+ [Reinstall graphics exports](#reinstall-graphics-exports)
	+ [Reinstall standalone Hadoop and Spark](#reinstall-standalone-hadoop-and-spark)
	+ [User\-isolation framework instances only: secure the new installation](#user-isolation-framework-instances-only-secure-the-new-installation)
	+ [Rebuild base images](#rebuild-base-images)
* [Start the new version of DSS](#start-the-new-version-of-dss)
* [Post\-upgrade tasks (after startup)](#post-upgrade-tasks-after-startup)


	+ [Rebuild code envs](#rebuild-code-envs)
	+ [Retrain machine learning models](#retrain-machine-learning-models)




Note


On macOS, upgrade your instance by following the instructions on [https://www.dataiku.com/product/get\-started/mac/](https://www.dataiku.com/product/get-started/mac/), and install directly over the existing application. It’s still a good idea to make a backup of the data directory first.



In the rest of this procedure, DATA\_DIR denotes the location of the DSS Data directory.



[Notes and limitations](#id1)[¶](#notes-and-limitations "Permalink to this heading")
------------------------------------------------------------------------------------


For each version of DSS, we publish [Release notes](../../release_notes/index.html), which indicate the detailed limitations, attention points and notes about release. We strongly advise that you read all release notes for the new DSS version before starting the upgrade.


Notably, some machine learning models often need to be retrained when upgrading between major DSS upgrades.




[Ways to upgrade a DSS instance](#id2)[¶](#ways-to-upgrade-a-dss-instance "Permalink to this heading")
------------------------------------------------------------------------------------------------------



### [Upgrading an instance in\-place](#id3)[¶](#upgrading-an-instance-in-place "Permalink to this heading")


This documentation explains how to upgrade a single DSS instance. After the upgrade completes, it is not possible to rollback the upgrade. We therefore strongly advise that you take a backup of the whole DATA\_DIR prior to starting the upgrade procedure




### [Upgrading by project import/export](#id4)[¶](#upgrading-by-project-import-export "Permalink to this heading")


Some people perform upgrades by:


* Creating a new DSS instance
* Exporting projects from the old instance
* Importing the projects into the new instance
* Then only shutting down the old DSS instance


We *do not* recommend that you use this approach for the following reasons:


* It is much slower and requires much more operations than an instance clone
* While a project export carries all important parts of the projects, some things are NOT part of a project export and will be lost. This includes files written from Jupyter notebooks, SQL notebooks results, and the whole “state” of the Flow. In other words, all incremental computation state will be lost and all datasets / partitions will need to be recomputed.


If you want to keep the original instance up and running while trying the migration, please see the following procedure.




### [Upgrading by cloning the instance](#id5)[¶](#upgrading-by-cloning-the-instance "Permalink to this heading")


Some people prefer to keep an old instance running and to clone it to a new DSS instance that will be upgraded to the new version.


This requires a few additional migration operations and care:


* If you are going to run it on the same machine, keep in mind that each instance needs its own block of 10 consecutive TCP ports. Thus, the new instance needs to be installed on a different port range
* Changing the `installid` flag of the new instance is recommended to avoid conflicts.
* The new instance will run all scenarios just like the old one. This could lead to corrupted data
* If Graphite reporting is enabled, you need to change the prefix for the new instance in order not to corrupt the metrics.


We recommend that you get in touch with your Dataiku Customer Success Manager before such a procedure.


In any case, the path would be “duplicate the instance, migrate ports and DATA\_DIR, upgrade the new instance” (copying DATA\_DIR between DSS instances of distinct versions is not supported).





[Pre\-upgrade tasks](#id6)[¶](#pre-upgrade-tasks "Permalink to this heading")
-----------------------------------------------------------------------------



Warning


Before upgrading, it is very highly recommended to backup the whole content of the data directory.



Stop the old version of DSS



```
DATA_DIR/bin/dss stop

```




[Unpack the new software](#id7)[¶](#unpack-the-new-software "Permalink to this heading")
----------------------------------------------------------------------------------------


Unpack the distribution tarball in the location you have chosen for the new installation directory.



```
cd SOMEDIR
tar xzf /PATH/TO/dataiku-dss-NEWVERSION.tar.gz
# This creates installation directory SOMEDIR/dataiku-dss-NEWVERSION for the new version

```




[Perform the upgrade](#id8)[¶](#perform-the-upgrade "Permalink to this heading")
--------------------------------------------------------------------------------



```
dataiku-dss-NEWVERSION/installer.sh -d DATA_DIR -u

```


Like for normal install, DSS will check for missing system dependencies, and ask you to run a dependencies installation command with superuser privileges if needed.


DSS will ask you to confirm migration of the existing data directory




[Post\-upgrade tasks (before startup)](#id9)[¶](#post-upgrade-tasks-before-startup "Permalink to this heading")
---------------------------------------------------------------------------------------------------------------



### [Update R installation](#id10)[¶](#update-r-installation "Permalink to this heading")


If R installation has been performed (see: [R integration](r.html)), you must perform again the “install\-R\-integration” step after upgrade.



```
DATA_DIR/bin/dssadmin install-R-integration

```




### [Reinstall graphics exports](#id11)[¶](#reinstall-graphics-exports "Permalink to this heading")


If [graphics exports have been enabled](graphics-export.html), you must replay the same installation procedure




### [Reinstall standalone Hadoop and Spark](#id12)[¶](#reinstall-standalone-hadoop-and-spark "Permalink to this heading")


If you used standalone libraries for Hadoop and/or Spark, you need to rerun the corresponding install procedure.




### [User\-isolation framework instances only: secure the new installation](#id13)[¶](#user-isolation-framework-instances-only-secure-the-new-installation "Permalink to this heading")


If [User Isolation Framework](../../user-isolation/index.html) is enabled, you must rerun the
[install\-impersonation](../../user-isolation/initial-setup.html#install-impersonation) step (as root) to secure the new installation.




### [Rebuild base images](#id14)[¶](#rebuild-base-images "Permalink to this heading")


If [containerized execution has been enabled](../../containers/setup-k8s.html), you will need to [rebuild all base images](../../containers/setup-k8s.html#rebuild-base-images).





[Start the new version of DSS](#id15)[¶](#start-the-new-version-of-dss "Permalink to this heading")
---------------------------------------------------------------------------------------------------


To start DSS, run the following command:



```
DATA_DIR/bin/dss start

```




[Post\-upgrade tasks (after startup)](#id16)[¶](#post-upgrade-tasks-after-startup "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------



### [Rebuild code envs](#id17)[¶](#rebuild-code-envs "Permalink to this heading")


For some major upgrades, you may need to rebuild the code environments that you already have. The reason is that core dependencies may have been updated, and DSS may not be compatible with the old core dependencies anymore.


If you are using code environments with containerized execution, make sure that all your [code env images have been rebuilt](../../containers/code-envs.html) and you will need to update all your code environments accordingly (for the appropriate selected container configurations).


For more details, please check the release notes of your version




### [Retrain machine learning models](#id18)[¶](#retrain-machine-learning-models "Permalink to this heading")


For some major upgrades, you may need to retrain some of the machine learning models.


Note that in these cases, the packages deployed in an API node also need to be regenerated on DSS and redeployed on the API node.


For more details, please check the release notes of your version.