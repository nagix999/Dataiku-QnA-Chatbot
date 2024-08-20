Setup with Cloudera[¶](#setup-with-cloudera "Permalink to this heading")
========================================================================


This reference architecture will guide you through deploying on your DSS connected to your Cloudera:


* The fundamental local isolation code layer
* Impersonation for accessing HDFS datasets
* Impersonation for running Spark code over Yarn
* Impersonation for accessing Hive and Impala


In the rest of this document:


* `dssuser` means the UNIX user which runs the DSS software
* `DATADIR` means the directory in which DSS is running



* [The two modes](#the-two-modes)
* [Prerequisites and required information](#prerequisites-and-required-information)
* [Common setup](#common-setup)
* [Ranger\-mode](#ranger-mode)


	+ [Assumptions](#assumptions)
	+ [Configure your Cloudera cluster](#configure-your-cloudera-cluster)
	
	
		- [Do it with Cloudera Manager](#do-it-with-cloudera-manager)
		- [Setup Ranger](#setup-ranger)
		- [Additional setup for Impala](#additional-setup-for-impala)
		- [Additional setup for encrypted HDFS filesystems](#additional-setup-for-encrypted-hdfs-filesystems)
	+ [Setup driver for Impala](#setup-driver-for-impala)
	+ [Setup HDFS connections in DSS](#setup-hdfs-connections-in-dss)
	+ [Configure identity mapping](#configure-identity-mapping)
	+ [Setup Hive and Impala access](#setup-hive-and-impala-access)
	+ [Authorization models](#authorization-models)
	
	
		- [One DSS connection per database](#one-dss-connection-per-database)
		- [One database per DSS project, multiple databases per DSS connection](#one-database-per-dss-project-multiple-databases-per-dss-connection)
		- [More complex setups](#more-complex-setups)
* [DSS\-ACL\-synchronization\-mode](#dss-acl-synchronization-mode)


	+ [Configure your Cloudera cluster](#id1)
	
	
		- [Do it with Cloudera Manager](#id2)
		- [Additional setup for Impala](#id3)
		- [Additional setup for encrypted HDFS filesystems](#id4)
	+ [Setup driver for Impala](#id5)
	+ [Configure identity mapping](#id6)
	+ [Setup Hive and Impala access](#id7)
	+ [Initialize ACLs on HDFS connections](#initialize-acls-on-hdfs-connections)
* [Validate behavior](#validate-behavior)
* [Operations (Ranger mode)](#operations-ranger-mode)


	+ [Overview](#overview)
	+ [Adding a project](#adding-a-project)
	+ [Adding/Removing a user in a group](#adding-removing-a-user-in-a-group)
	+ [Adding / Removing access to a group](#adding-removing-access-to-a-group)
	+ [Interaction with externally\-managed data](#interaction-with-externally-managed-data)
	
	
		- [Existing Hive table](#existing-hive-table)
		- [Synchronized Hive table](#synchronized-hive-table)
* [Operations (ACL synchronization mode)](#operations-acl-synchronization-mode)




[The two modes](#id8)[¶](#the-two-modes "Permalink to this heading")
--------------------------------------------------------------------


There are two major ways to deploy UIF on Cloudera. The difference lies in how authorization is propagated on HDFS datasets


* Using Ranger. In this mode, Ranger will manage all authorization on HDFS data, both at the raw HDFS level and Hive/Impala level
* Using “DSS\-managed ACL synchronization”. DSS will place HDFS ACLs on the managed datasets that it builds. Note that you will also need to leverage Ranger ACLs for Hive/Impala level.


**We recommend that you use Ranger preferably to DSS\-managed ACLs**. Ranger lives in the NameNode and has more pervasive and flexible access, implying fewer limitations than DSS\-managed ACLs. The three main advantages of using Ranger mode are:


* Centralized authorization in Ranger rather than requiring managing Ranger rules in addition to the HDFS ACLs.
* For some customer deployments, working around limitations in number of HDFS ACLs (the default DSS\-managed ACLs require a larger number of ACLs per path, which can overflow the limit to 32 ACLs per path in HDFS)
* Appending in HDFS datasets using multiple users becomes possible.




[Prerequisites and required information](#id9)[¶](#prerequisites-and-required-information "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------


Please read carefully the [Prerequisites and limitations](../prerequisites-limitations.html) documentation and check that you have all required information.


The most important parts here are:


* Having a keytab for the `dssuser`
* Having administrator access to the Cloudera cluster
* Having root access to the local machine
* Having an initial list of end\-user groups allowed to use the impersonation mechanisms.




[Common setup](#id10)[¶](#common-setup "Permalink to this heading")
-------------------------------------------------------------------


Initialize UIF (including local code isolation), see [Initial Setup](../initial-setup.html)




[Ranger\-mode](#id11)[¶](#ranger-mode "Permalink to this heading")
------------------------------------------------------------------



### [Assumptions](#id12)[¶](#assumptions "Permalink to this heading")


In this model (as in the default DSS\-managed\-ACLs one btw) the security boundary is that of the Hive database.
There should be at least one Hive database per security tenant (ie set of different authorization rules).
Within a given Hive database, all tables (and thus all DSS datasets) have by default the same authorization
rules as the database itself.


In this model, each Hive database maps to a base directory of the HDFS filesystem. All datasets within this database are stored into a subdirectory of this base directory.


Authorization rules are defined in Ranger (Hive) at the database level and in Ranger (HDFS) at the folder level.


DSS HDFS connections can be set up to map DSS projects to these security tenants in several ways, depending on the
application constraints, in particular:


* one DSS connection per tenant
* several tenants per connection, multiple projects per security tenant




### [Configure your Cloudera cluster](#id13)[¶](#configure-your-cloudera-cluster "Permalink to this heading")



Note


This part must be performed by the Hadoop administrator. A restart of your Cloudera cluster may be required.



You now need to allow the `dssuser` user to impersonate all end\-user groups that you have previously identified.


This is done by adding `hadoop.proxyuser.dssuser.groups` and `hadoop.proxyuser.dssuser.hosts`
configuration keys to your Hadoop configuration (core\-site.xml).
These respectively specify the list of groups of users which DSS is allowed to impersonate, and the list of hosts
from which DSS is allowed to impersonate these users.


The `hadoop.proxyuser.dssuser.groups` parameter should be set to a comma\-separated list containing:


* A list of end\-user groups which collectively contain all DSS users
* The group with which the `hive` user creates its files (generally: `hive` on Cloudera, `hadoop` on HDP)
* In addition, on Cloudera, the group with which the `impala` user creates its files (generally: `impala`)


Alternatively, this parameter can be set to `*` to allow DSS to impersonate all cluster users (effectively disabling
this extra security check).


The `hadoop.proxyuser.dssuser.hosts` parameter should be set to the fully\-qualified host name of the server on
which DSS is running. Alternatively, this parameter can be set to `*` to allow all hosts (effectively disabling
this extra security check).


Make sure Hadoop configuration is properly propagated to all cluster hosts and to the host running DSS. Make sure that all relevant Hadoop services are properly restarted.



#### [Do it with Cloudera Manager](#id14)[¶](#do-it-with-cloudera-manager "Permalink to this heading")


(NB: This information is given for information purpose only. Please refer to the official Cloudera documentation for your Cloudera version)


* In Cloudera Manager, navigate to HDFS \> Configuration and search for “proxyuser”
* Add two new keys in the “Cluster\-wide Advanced Configuration Snippet (Safety Valve) for core\-site.xml” section.


	+ Name: `hadoop.proxyuser.dssuser.groups`
	+ Value: comma\-separated list of Hadoop groups of your end users, plus hive, impala
	+ Name: `hadoop.proxyuser.dssuser.hosts`
	+ Value: fully\-qualified DSS host name, or `*`
* Save changes
* At the top of the HDFS page, click on the “Stale configuration: restart needed” icon and click on “Restart Stale Services” then “Restart now”




#### [Setup Ranger](#id15)[¶](#setup-ranger "Permalink to this heading")


* Create one or several root directories for DSS output directories.
* For each security tenant which you want DSS to use:



> + create the database in HiveServer2
> 	
> 	
> 	
> 	> ```
> 	> beeline> CREATE DATABASE <db_name> LOCATION 'hdfs://<namenode>/<path_to_dir>';
> 	> 
> 	> ```
> 	+ grant access to the database in Ranger (Hive)
> 	+ grant access to the folder in Ranger (HDFS)




#### [Additional setup for Impala](#id16)[¶](#additional-setup-for-impala "Permalink to this heading")


If you plan on using Impala, you must perform an additional setup because Impala does not use the regular proxyuser mechanism.


* In Cloudera Manager, go to Impala \> Configuration
* In the Impala Daemon Command Line Argument Advanced Configuration Snippet (Safety Valve) setting, add:
`authorized_proxy_user_config=dssuser=enduser_1,enduser_2,...`, where `enduser_xx` is the Hadoop name of a DSS user,
or `*` for all



Note


Contrary to the rest of Hadoop, the Impala impersonation authorization list is user\-based, not group\-based, which means that
in many cases the only practical configuration is to use `*` and allow DSS to impersonate all Impala users.





#### [Additional setup for encrypted HDFS filesystems](#id17)[¶](#additional-setup-for-encrypted-hdfs-filesystems "Permalink to this heading")


If DSS should access encrypted HDFS filesystems on behalf of users, you need to add specific Hadoop configuration keys to authorize
impersonated access to the associated key management system (KMS):


* `hadoop.kms.proxyuser.dssuser.groups` : comma\-separated list of Hadoop groups of your end users
* `hadoop.kms.proxyuser.dssuser.hosts` : fully\-qualified DSS host name, or `*`





### [Setup driver for Impala](#id18)[¶](#setup-driver-for-impala "Permalink to this heading")


If you want to use Impala, you need to install the Cloudera Impala JDBC Driver.


Download the driver from Cloudera Downloads website. You should obtain a Zip file `impala_jdbc_VERSION.zip`, containing two more Zip files. Unzip the “JDBC 4\.1” version of the driver (the “JDBC 4” version will not work).


Copy the `ImpalaJDBC41.jar` file to the `lib/jdbc` folder of DSS. Beware, you must not copy other JARs. Restart DSS.




### [Setup HDFS connections in DSS](#id19)[¶](#setup-hdfs-connections-in-dss "Permalink to this heading")


Configure DSS managed HDFS connection(s) so that:



> * Hive database for datasets map to one of the databases defined above
> * HDFS paths for datasets map to the matching location for this database
> * Management of HDFS ACLs by DSS is turned off (ACL synchronization mode: None)




### [Configure identity mapping](#id20)[¶](#configure-identity-mapping "Permalink to this heading")


If needed, go to Administration \> Settings \> Security and. update identity mapping.



Note


Due to various issues notably related to Spark, we strongly recommend that your DSS users and Hadoop users have the same name.





### [Setup Hive and Impala access](#id21)[¶](#setup-hive-and-impala-access "Permalink to this heading")


* Go to Administration \> Settings \> Hive
* Fill in the HiveServer2 host and principal if needed, as described in [Connecting to secure clusters](../../hadoop/secure-clusters.html)
* Fill in the “Hive user” setting with the name of the user running HiveServer2 (generally: `hive`)
* Switch “Default execution engine” to “HiveServer2”


If you plan to use Impala:


* Go to Administration \> Settings \> Impala
* Fill in the Impala hosts and principal if needed, as described in [Connecting to secure clusters](../../hadoop/secure-clusters.html)
* Fill in the “Impala user” setting with the name of the user running impalad (generally: `impala`)
* Check the “Use Cloudera Driver” setting




### [Authorization models](#id22)[¶](#authorization-models "Permalink to this heading")


There are several possible deployments of the above model, depending on the desired authorization and management
model:



#### [One DSS connection per database](#id23)[¶](#one-dss-connection-per-database "Permalink to this heading")


* directly configure the database name in “Hive database”
* add the DSS project key to the table names, as in : “Hive table name prefix” \= `${projectKey}_`
* root path URI : path to database directory
* Path prefix: `${projectKey}/`
* optionally, you can restrict access to this DSS connection to its authorized DSS users, so the other ones do not see it at all




#### [One database per DSS project, multiple databases per DSS connection](#id24)[¶](#one-database-per-dss-project-multiple-databases-per-dss-connection "Permalink to this heading")


* Embed the DSS project key the Hive database name, as in: “Hive database” \= `dataiku_${projectKey}`
* Hive table name prefix can then be empty
* Root path URI must be a common parent to all database directories
* Embed the DSS project key in the HDFS path prefix, as in: “Path prefix” \= `${projectKey}/`
* You need to create each database using the above command sequence from an admin account when creating a DSS project




#### [More complex setups](#id25)[¶](#more-complex-setups "Permalink to this heading")


More complex setups are possible using per\-project variables, typically representing the security tenant to
use for a given project, and expanding these variables in the database name or path prefix






[DSS\-ACL\-synchronization\-mode](#id26)[¶](#dss-acl-synchronization-mode "Permalink to this heading")
------------------------------------------------------------------------------------------------------



Note


In most cases, we recommend that you preferably use Ranger mode as detailed above




Warning


HDFS ACLs are not supported for [Per\-project single user permissions](../../security/permissions.html#per-project-single-user-permissions).




### [Configure your Cloudera cluster](#id27)[¶](#id1 "Permalink to this heading")



Note


This part must be performed by the Cloudera administrator. A restart of your Cloudera cluster may be required.



You now need to allow the `dssuser` user to impersonate all end\-user groups that you have previously identified.


This is done by adding `hadoop.proxyuser.dssuser.groups` and `hadoop.proxyuser.dssuser.hosts`
configuration keys to your Hadoop configuration (core\-site.xml).
These respectively specify the list of groups of users which DSS is allowed to impersonate, and the list of hosts
from which DSS is allowed to impersonate these users.


The `hadoop.proxyuser.dssuser.groups` parameter should be set to a comma\-separated list containing:


* A list of end\-user groups which collectively contain all DSS users
* The group with which the `hive` user creates its files (generally: `hive` on Cloudera, `hadoop` on HDP)
* In addition, on Cloudera, the group with which the `impala` user creates its files (generally: `impala`)


Alternatively, this parameter can be set to `*` to allow DSS to impersonate all cluster users (effectively disabling
this extra security check).


The `hadoop.proxyuser.dssuser.hosts` parameter should be set to the fully\-qualified host name of the server on
which DSS is running. Alternatively, this parameter can be set to `*` to allow all hosts (effectively disabling
this extra security check).


Make sure Hadoop configuration is properly propagated to all cluster hosts and to the host running DSS. Make sure that all relevant Hadoop services are properly restarted.



#### [Do it with Cloudera Manager](#id28)[¶](#id2 "Permalink to this heading")


(NB: This information is given for information purpose only. Please refer to the official Cloudera documentation for your Cloudera version)


* In Cloudera Manager, navigate to HDFS \> Configuration and search for “proxyuser”
* Add two new keys in the “Cluster\-wide Advanced Configuration Snippet (Safety Valve) for core\-site.xml” section.


	+ Name: `hadoop.proxyuser.dssuser.groups`
	+ Value: comma\-separated list of Hadoop groups of your end users, plus hive, impala
	+ Name: `hadoop.proxyuser.dssuser.hosts`
	+ Value: fully\-qualified DSS host name, or `*`
* Save changes
* At the top of the HDFS page, click on the “Stale configuration: restart needed” icon and click on “Restart Stale Services” then “Restart now”




#### [Additional setup for Impala](#id29)[¶](#id3 "Permalink to this heading")


If you plan on using Impala, you must perform an additional setup because Impala does not use the regular proxyuser mechanism.


* In Cloudera Manager, go to Impala \> Configuration
* In the Impala Daemon Command Line Argument Advanced Configuration Snippet (Safety Valve) setting, add:
`authorized_proxy_user_config=dssuser=enduser_1,enduser_2,...`, where `enduser_xx` is the Hadoop name of a DSS user,
or `*` for all



Note


Contrary to the rest of Hadoop, the Impala impersonation authorization list is user\-based, not group\-based, which means that
in many cases the only practical configuration is to use `*` and allow DSS to impersonate all Impala users.





#### [Additional setup for encrypted HDFS filesystems](#id30)[¶](#id4 "Permalink to this heading")


If DSS should access encrypted HDFS filesystems on behalf of users, you need to add specific Hadoop configuration keys to authorize
impersonated access to the associated key management system (Hadoop KMS or Ranger KMS):


* `hadoop.kms.proxyuser.dssuser.groups` : comma\-separated list of Hadoop groups of your end users
* `hadoop.kms.proxyuser.dssuser.hosts` : fully\-qualified DSS host name, or `*`





### [Setup driver for Impala](#id31)[¶](#id5 "Permalink to this heading")


If you want to use Impala, you need to install the Cloudera Impala JDBC Driver.


Download the driver from Cloudera Downloads website. You should obtain a Zip file `impala_jdbc_VERSION.zip`, containing two more Zip files. Unzip the “JDBC 4\.1” version of the driver (the “JDBC 4” version will not work).


Copy the `ImpalaJDBC41.jar` file to the `lib/jdbc` folder of DSS. Beware, you must not copy other JARs. Restart DSS.




### [Configure identity mapping](#id32)[¶](#id6 "Permalink to this heading")


If needed, go to Administration \> Settings \> Security and update identity mapping.



Note


Due to various issues notably related to Spark, we strongly recommend that your DSS users and Hadoop users have the same name.





### [Setup Hive and Impala access](#id33)[¶](#id7 "Permalink to this heading")


* Go to Administration \> Settings \> Hive
* Fill in the HiveServer2 host and principal if needed, as described in [Connecting to secure clusters](../../hadoop/secure-clusters.html)
* Fill in the “Hive user” setting with the name of the user running HiveServer2 (generally: `hive`)
* Switch “Default execution engine” to “HiveServer2”


If you plan to use Impala:


* Go to Administration \> Settings \> Impala
* Fill in the Impala hosts and principal if needed, as described in [Connecting to secure clusters](../../hadoop/secure-clusters.html)
* Fill in the “Impala user” setting with the name of the user running impalad (generally: `impala`)
* Check the “Use Cloudera Driver” setting




### [Initialize ACLs on HDFS connections](#id34)[¶](#initialize-acls-on-hdfs-connections "Permalink to this heading")


Go to the settings of the `hdfs_managed` connection. Click on `Resync Root permissions`


If you have other HDFS connections, do the same thing for them.





[Validate behavior](#id35)[¶](#validate-behavior "Permalink to this heading")
-----------------------------------------------------------------------------


* Grant to at least one of your user groups the right to create projects
* Log in as an end user
* Create a project with key `PROJECTKEY`
* As a Hive administrator, create a database named `dataiku_PROJECTKEY` and use Sentry to grant to the end\-user group the right to use this database. Details on how to do that are in the “Setup Sentry” section above
* As the end user in DSS, check that you can:
	+ Create external HDFS datasets
	+ Create prepare recipes writing to HDFS datasets
	+ Synchronize datasets to the Hive metastore
	+ Create Hive recipes to write new HDFS datasets
	+ Use Hive notebooks
	+ Create Python recipes
	+ Use Python notebooks
	+ Create Spark recipes
	+ If you have Impala, create Impala recipes
	+ If you have Impala, use Impala notebooks
	+ Create visual recipes and use all available execution engines




[Operations (Ranger mode)](#id36)[¶](#operations-ranger-mode "Permalink to this heading")
-----------------------------------------------------------------------------------------


When you follow these setup instructions and use Ranger mode, DSS starts with a configuration that enables a per\-project security policy with minimal administrator intervention.



### [Overview](#id37)[¶](#overview "Permalink to this heading")


* The HDFS connections are declared as usable by all users.
* Each project writes to a different HDFS folder.
* Each project writes to a different Hive database.
* Ranger rules grant permissions on the folder and database


The separation of folders and Hive database for each project are ensured by the naming rules defined in the HDFS connection.



Note


This default configuration should be usable by all, we recommend that you keep it.





### [Adding a project](#id38)[¶](#adding-a-project "Permalink to this heading")


In that setting, adding a project requires adding a Hive database and granting permissions to the project’s groups on the database.


* Create the project in DSS
* Add the groups who must have access to the project


By default, the new database is called `dataiku_PROJECTKEY` where `PROJECTKEY` is the key of the newly created project. You can configure this in the settings of each HDFS connection.


As Hive administrator:


* As Hive administrator, using beeline or another Hive client, create the database
* As the Ranger administrator, perform the grants at both Hive and HDFS level




### [Adding/Removing a user in a group](#id39)[¶](#adding-removing-a-user-in-a-group "Permalink to this heading")


Grants are group\-level, so no intervention is required when a user is added to a group.




### [Adding / Removing access to a group](#id40)[¶](#adding-removing-access-to-a-group "Permalink to this heading")


When you add project access to a group, you need to:


* Do the permission change on the DSS project
* Do the permission changes in Ranger




### [Interaction with externally\-managed data](#id41)[¶](#interaction-with-externally-managed-data "Permalink to this heading")


In the Ranger setup, DSS does not manage any ACLs. It is the administrator’s responsibility to ensure that read ACLs on these datasets are properly set.



#### [Existing Hive table](#id42)[¶](#existing-hive-table "Permalink to this heading")


If externally\-managed data has an existing Hive table, and no synchronization to the Hive metastore, you need to ensure that Hive\-level permissions (Ranger) allow access to all relevant groups.




#### [Synchronized Hive table](#id43)[¶](#synchronized-hive-table "Permalink to this heading")


Even on read\-only external data, you can ask DSS to synchronize the definition to the Hive metastore. In that case, you need to ensure that the HDFS\-level permissions allow the Hive (and maybe Impala) users to access the folder.






[Operations (ACL synchronization mode)](#id44)[¶](#operations-acl-synchronization-mode "Permalink to this heading")
-------------------------------------------------------------------------------------------------------------------


We recommend that you favor Ranger mode.