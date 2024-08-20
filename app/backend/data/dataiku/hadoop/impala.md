Impala[¶](#impala "Permalink to this heading")
==============================================




Impala is a tool of the Hadoop environment to run interactive analytic SQL queries on large amounts of HDFS data.


Unlike [Hive](hive.html), Impala does not use MapReduce nor Tez but a custom Massive Parallel Processing engine, ie. each node of the Hadoop cluster runs the query on its part of the data.


Data Science Studio provides the following integration points with Impala :


* All HDFS datasets can be made available in the Impala environment, where they can be used by any Impala\-capable tool.
* The [Impala](../code_recipes/impala.html) run queries on Impala, while handling the schema of the output dataset.
* The “Impala notebook” allows you to run Impala queries on any Impala database, whether they have been created by DSS or not.
* When performing [Charts](../visualization/index.html) on a HDFS dataset, you can choose to use Impala as the query execution engine.
* Many [visual recipes](../other_recipes/index.html) can use Impala as their execution engine if the computed query permits it.



Impala connectivity[¶](#impala-connectivity "Permalink to this heading")
------------------------------------------------------------------------


Data Science Studio connects to Impala through a JDBC connection to one of the impalad server(s) configured in the “Settings / Hadoop” administration screen.


Hive connectivity is mandatory for Impala use, as Impala connections use the Hive JDBC driver, and Impala table definitions
are stored in the global Hive metastore.




Metastore synchronization[¶](#metastore-synchronization "Permalink to this heading")
------------------------------------------------------------------------------------


Making HDFS datasets automatically available to Impala is done through the same mechanism as for Hive. See [Hive](hive.html) for more info.




Supported formats and limitations[¶](#supported-formats-and-limitations "Permalink to this heading")
----------------------------------------------------------------------------------------------------


Impala can only interact with HDFS datasets with the following formats:


* [CSV](../connecting/formats/csv.html)
	+ only in “Escaping only” or “No escaping nor quoting” modes.
	+ only in “NONE” compression
* [Parquet](../connecting/formats/parquet.html)
	+ If the dataset has been built by DSS, it should use the “Hive flavor” option of the Parquet parameters.
* Hive Sequence File
* Hive RC File
* Avro


Additional limitations apply:


* Impala cannot handle datasets if they contain any complex type column.




Configuring connection to Impala servers[¶](#configuring-connection-to-impala-servers "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


The settings for Impala are located in Administration \> Settings \> Impala.


Impala queries are analyzed and their execution initiated by a `impalad` daemon on one datanode from your Hadoop cluster. Thus, in order for DSS to interact with Impala, DSS must know the hostnames of the impalad hosts (or at least a fraction of them). You need to setup the list of these hostnames in the “Hosts” field.


Should you need a custom port, you can also set it in the “Port” field.


DSS can handle both the regular Hive\-provided JDBC driver and the [Cloudera enterprise connector](https://www.cloudera.com/documentation/other/connectors.html).


DSS supports the following authentication modes for Impala:


* No authentication (on non\-secure Hadoop clusters)
* Kerberos (on secure Hadoop clusters)
* LDAP



### Kerberos authentication (secure clusters)[¶](#kerberos-authentication-secure-clusters "Permalink to this heading")


Since Impala queries are run by the `impalad` daemons under the `impala` user, in a kerberized environment the principal of that `impala` user is required in order to properly connect to the daemons through jdbc, and it can be set in the “Principal” field.


When multiple hostnames have been specified in the “Hosts” field, DSS provides the same placeholder mechanism as Impala itself: the string `_HOST` is swapped with the hostname DSS tries to run the query against.




### LDAP authentication[¶](#ldap-authentication "Permalink to this heading")


Just like SQL connections in DSS, credentials must be provided in form of a user/password. These credentials can be GLOBAL and shared by all users of the DSS instance, of defined per\-DSS user in their Profile settings.


If Impala has been setup to encrypt connections to client services (see Cloudera’s [documentation](https://www.cloudera.com/documentation/enterprise/latest/topics/impala_ssl.html)), then DSS, as a JDBC client of Impala, needs access to the Java truststore holding the necessary security certificates (see the Hive [documentation on JDBC connection](https://cwiki.apache.org/confluence/display/Hive/HiveServer2+Clients#HiveServer2Clients-ConnectionURLWhenSSLIsEnabledinHiveServer2)).


Please refer to [Adding SSL certificates to the Java truststore](../installation/custom/advanced-java-customization.html#java-ssl-truststore) for the procedure to add trusted certificates to the JVM used by DSS.





Using Impala to write outputs[¶](#using-impala-to-write-outputs "Permalink to this heading")
--------------------------------------------------------------------------------------------


Even though Impala is traditionally used to perform SELECT queries, it also offers INSERT capabilities, albeit reduced ones.


First, Impala supports less formats for writing than it does for reading. You can check Impala’s support of your format on Cloudera’s [documentation](http://www.cloudera.com/content/cloudera/en/documentation/core/latest/topics/impala_file_formats.html).


Second, Impala doesn’t do impersonation and writes its output using the `impala` user. Since DSS uses EXTERNAL tables (in the meaning Hive gives to it), the user must be particularly attentive to the handling of file permissions, depending on the Hive authorization mode and the DSS security mode.



### No Hive authorization (DSS regular security)[¶](#no-hive-authorization-dss-regular-security "Permalink to this heading")


In order for Impala to write to the directories corresponding to the managed datasets, it needs to have write permissions on them. It is also necessary to ensure that after Impala has written a folder, DSS can still manage that.


To achieve this, it is necessary that:


* Hive must be set to propagate parent permissions onto sub\-folders as it creates them, which means the property `hive.warehouse.subdir.inherit.perms` must be set to “true”.
* The directory holding the managed datasets gives write permission to the `impala` user
* The directory holding the managed datasets must default to giving write permissions to other users, so that when Hive propagates permissions, DSS still has write permission.


In summary, the recommended setup is:


* Set `hive.warehouse.subdir.inherit.perms` to true in the global Hive conf
* Set permission 777 on the root directory of all managed datasets (which is generally `/user/dss_user/dss_managed_datasets`)
* In DSS, make sure that in Administration \> Settings \> Impala, the `Pre-create folder for write recipes` setting is not checked. Save DSS settings.


Note that this gives everybody read and write access on all datasets. It is possible to restrict a bit the permissions by restricting permissions on the upper directory (while maintaining an ACL to Impala), or by putting DSS in the group that Impala uses for writing.




### Ranger[¶](#ranger "Permalink to this heading")


See [Hive](hive.html)




### Switching from write\-through\-DSS to write\-through\-Impala[¶](#switching-from-write-through-dss-to-write-through-impala "Permalink to this heading")



Warning


Before switching to write\-through\-Impala, you must clear the dataset. Failure to clear the dataset will lead to permission issues that will require cluster administrator intervention.