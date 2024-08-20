Teradata[¶](#teradata "Permalink to this heading")
==================================================



Note


You might want to start with our resources on [data connections](https://knowledge.dataiku.com/latest/data-sourcing/connections/index.html) in the Knowledge Base.




* [Installing the JDBC driver](#installing-the-jdbc-driver)
* [Connecting using TD2 (default) authentication](#connecting-using-td2-default-authentication)


	+ [Using per\-user\-credentials with TD2 authentication](#using-per-user-credentials-with-td2-authentication)
* [Connecting using LDAP authentication](#connecting-using-ldap-authentication)


	+ [Using per\-user\-credentials with LDAP authentication](#using-per-user-credentials-with-ldap-authentication)
* [Connecting using Kerberos authentication](#connecting-using-kerberos-authentication)


	+ [Using per\-user\-credentials with Kerberos authentication](#using-per-user-credentials-with-kerberos-authentication)
* [Impersonation](#impersonation)


	+ [Prerequisites](#prerequisites)
	+ [Setup (same DSS / Teradata users)](#setup-same-dss-teradata-users)
	+ [Setup (different users)](#setup-different-users)
* [Controlling the primary index](#controlling-the-primary-index)
* [Tracing additional query information](#tracing-additional-query-information)
* [Autocommit Mode](#autocommit-mode)
* [Limitations](#limitations)


	+ [Personal Connections](#personal-connections)
	+ [In\-database charts](#in-database-charts)
	+ [Sort recipe](#sort-recipe)
	+ [Split recipe](#split-recipe)
	+ [Parallel build of partitioned datasets](#parallel-build-of-partitioned-datasets)
* [Fast sync using TDCH](#fast-sync-using-tdch)
* [Notes](#notes)



DSS supports the following features on Teradata:


* Reading and writing datasets
* Executing SQL recipes
* Performing visual recipes in\-database
* Using in\-database engine for charts


Please see below for limitations and detailed instructions.



[Installing the JDBC driver](#id1)[¶](#installing-the-jdbc-driver "Permalink to this heading")
----------------------------------------------------------------------------------------------


The Teradata JDBC driver can be downloaded from [Teradata website](https://downloads.teradata.com/download/connectivity/jdbc-driver).


The driver contains the following JAR file:


* terajdbc4\.jar


To install:


* Copy the JAR file to the `lib/jdbc` subdirectory of the DSS data directory
* Restart DSS




[Connecting using TD2 (default) authentication](#id2)[¶](#connecting-using-td2-default-authentication "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------------


By default, the Teradata connector uses the TD2 authentication mechanism. Simply enter the login/password.



### [Using per\-user\-credentials with TD2 authentication](#id3)[¶](#using-per-user-credentials-with-td2-authentication "Permalink to this heading")


Use the classic [per\-user\-credentials](../../security/connections.html) procedure.





[Connecting using LDAP authentication](#id4)[¶](#connecting-using-ldap-authentication "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


By default, the Teradata connector uses the TD2 authentication mechanism. To use other kinds of authentication mechanism, enable the “Use custom JDBC URL”.


Enter “[jdbc:teradata://YOUR\-TERADATA\-HOSTNAME/](jdbc:teradata://YOUR-TERADATA-HOSTNAME/)” as both the “connection URL” and “displayed URL”.


Add Advanced JDBC properties as documented in the Teradata JDBC driver documentation.


To log in using LDAP, add the following properties:


* `LOGMECH` \= `LDAP`
* `LOGDATA` \= `username@@password`



### [Using per\-user\-credentials with LDAP authentication](#id5)[¶](#using-per-user-credentials-with-ldap-authentication "Permalink to this heading")


First, get familiar with per\-user\-credentials: [Connections security](../../security/connections.html)


Switch the connection to “per\-user credentials mode”. Then add the following properties:


* `LOGMECH` \= `LDAP`
* `LOGDATA` \= `%{pucUser}@@%{pucPassword}`


The `%{pucUser}` and `%{pucPassword}` will be replaced by the per\-user\-credential login and password at runtime.





[Connecting using Kerberos authentication](#id6)[¶](#connecting-using-kerberos-authentication "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------


In order to use Kerberos authentication, you need a principal and keytab for that principal, authorized to connect to the Teradata database.


The keytab must be saved on the DSS machine, readable by the DSS user (and not readable by impersonated users)


* Enable “Login with Kerberos” option
* Enter the principal (fully\-qualified)
* Enter the absolute path to the keytab



### [Using per\-user\-credentials with Kerberos authentication](#id7)[¶](#using-per-user-credentials-with-kerberos-authentication "Permalink to this heading")


It is not possible to use per\-user\-credentials with Kerberos authentication. Instead, you can use impersonation (see below).





[Impersonation](#id8)[¶](#impersonation "Permalink to this heading")
--------------------------------------------------------------------


It is possible to use the Teradata PROXYUSER mechanism in order to implement impersonation on Teradata.


This is implemented by using a `SET QUERY_BAND` statement as a “Post\-connect statement”. The post\-connect statement will contain a reference to a variable indicating the user currently trying to connect



### [Prerequisites](#id9)[¶](#prerequisites "Permalink to this heading")


* The connection must be in “global credential” mode.
* The user specified in the connection is the “trusted user” and must have the right to impersonate other users. This means that for each impersonated user (aka proxy user), a `GRANT CONNECT THROUGH trusted_user TO PERMANENT proxy_user WITHOUT ROLE` or similar must be issued, accompanied with `GRANT CONNECT THROUGH trusted_user WITH TRUST_ONLY`.
* You must add the following advanced JDBC property to the connection: `TRUSTED_SQL` with value `ON` (DSS will automatically mark user\-submitted code as untrusted)



Warning


Make sure to use the `WITH TRUST_ONLY` statement. Without this, the proxy user would be able to switch back to the trusted user





### [Setup (same DSS / Teradata users)](#id10)[¶](#setup-same-dss-teradata-users "Permalink to this heading")


This requires that the DSS users have the same login as the Teradata users


In the Teradata connection, add the following post\-connect statement:


`SET QUERY_BAND='PROXYUSER=${dssUserLogin};' FOR SESSION`


When user A (a DSS user) connects to the database, DSS will execute `SET QUERY_BAND='PROXYUSER=A`, and further commands will execute as the Teradata user A.




### [Setup (different users)](#id11)[¶](#setup-different-users "Permalink to this heading")


If your Teradata users have different logins than the DSS user, then the DSS administrator needs to setup an “administrator property” for each DSS user, which indicates the name of the Teradata user.


If you have a DSS user A\_D that you want to remap to a Teradata user A\_T:


* Go to the user profile of A\_D
* In “Admin properties”, add something like `"teradataUser" : "A_T"`


Then in the Teradata connection, add the following post\-connect statement:


`SET QUERY_BAND='PROXYUSER=${adminProperty:teradataUser};' FOR SESSION`


When DSS user A\_D connects to the database, DSS will execute `SET QUERY_BAND='PROXYUSER=A_T`, and further commands will execute as the Teradata user A\_T





[Controlling the primary index](#id12)[¶](#controlling-the-primary-index "Permalink to this heading")
-----------------------------------------------------------------------------------------------------


In Teradata, the Primary Index of a table defines how this table will be distributed among the multiple AMPs that make up a Teradata database.


For each managed Teradata dataset, you can configure how the Primary Index will be created in the dataset settings (Teradata settings \> Primary index strategy):


* “Auto”, which will use the default setting of the database. In other words, no “PRIMARY INDEX” will be added to the table creation statement. In many cases, this leads to using the first column of the table as the only column of the primary index. This may not be desirable, especially if the first column is not spread out enough (in that case, only a few AMPs would get most/all of the data).
* “Specify index columns” lets you manually enter which column(s) will make up the primary index. You can also specify whether you want a unique index (which makes a `CREATE TABLE`) or non\-unique index (which makes a `CREATE MULTISET TABLE`)
* “No primary index” which uses `NO PRIMARY INDEX`. In that case, rows are randomly assigned to AMPs


At the connection settings level, you can specify what the settings should be for new datasets: either Auto or No Primary Index. It is not possible to use “Specify index columns” as the connection\-level default because you need to explicitly choose the columns for each dataset.




[Tracing additional query information](#id13)[¶](#tracing-additional-query-information "Permalink to this heading")
-------------------------------------------------------------------------------------------------------------------


In order to provide for better audit, it can be interesting to add in the Query band of your Teradata queries information about the queries that are being performed.


You can do that by adding/putting elements in a `SET QUERY_BAND` post\-connect statement. You can only use user\-level information here.


For example, you can use the following post\-connect statement: `SET QUERY_BAND='DSS_USER=${dssUserLogin};' FOR TRANSACTION`. This will add the logfin of the DSS user in the Query band. You can then find this query band in various Teradata tracing options (like the `dbc.dbqlogtbl` table).


You can also access user and admin properties using `${userProperty:XXX}` and `${adminProperty:XXX}`


In addition, you can add “job\-specific post\-connect statements”. These statements will only execute for Teradata queries that are emitted as part of a job. In these job\-specific post\-connect statements, you can access the following additional variables:


* `${jobProjectKey}` (contains the project key in which the job executes)
* `${jobId}` (contains the full identifier of the job)
* `${activityId}` (contains the recipe name and output partition)
* All variables of the project


For example, the following job\-specific post\-connect statement will log information about the job being executed in the query band:



```
SET QUERY_BAND = 'JPK=${jobProjectKey};JID=${jobId};AID=${activityId};USER=${dssUserLogin};' FOR TRANSACTION

```




[Autocommit Mode](#id14)[¶](#autocommit-mode "Permalink to this heading")
-------------------------------------------------------------------------


Teradata connections can be put in “autocommit” mode, which makes it much easier to write DDL statements, use stored procedures, write stored procedures or use third\-party plugins.


This is configured by selecting the checkbox “Autocommit mode” in the Advanced Params of the connection. If you are attempting to call Teradata stored procedures, this setting should be enabled.




[Limitations](#id15)[¶](#limitations "Permalink to this heading")
-----------------------------------------------------------------



### [Personal Connections](#id16)[¶](#personal-connections "Permalink to this heading")


Creating personal connections with Teradata is not supported.




### [In\-database charts](#id17)[¶](#in-database-charts "Permalink to this heading")


Breakdown by “Quarter” and “Week” are not supported for in\-database charts on Teradata. You can workaround by using the DSS charts (this will be slower).




### [Sort recipe](#id18)[¶](#sort-recipe "Permalink to this heading")


The Sort recipe is not supported on Teradata inputs. You can workaround by setting the engine of the recipe to DSS engine (this will be slower).


Note that sorting with a Teradata output will have no effect since Teradata does not preserve order on write.




### [Split recipe](#id19)[¶](#split-recipe "Permalink to this heading")


The “Random dispatch of data” with “subset of columns” mode is not supported on Teradata. You can workaround by setting the engine of the recipe to DSS engine (this will be slower).




### [Parallel build of partitioned datasets](#id20)[¶](#parallel-build-of-partitioned-datasets "Permalink to this heading")


The first build job creating a partitioned dataset (either the first time, or subsequent times after the dataset has been cleared) must not be run on multiple partitions in parallel.


If this “first build”, which creates the table, is run on multiple partitions in parallel, some partitions may randomly fail. You can either set the parallelism of the recipe to 1, or first build a single partition before building others.





[Fast sync using TDCH](#id21)[¶](#fast-sync-using-tdch "Permalink to this heading")
-----------------------------------------------------------------------------------


Fast synchronization of datasets between Teradata and HDFS is possible using TDCH. Please see [Teradata Connector For Hadoop](../../hadoop/tdch.html) .




[Notes](#id22)[¶](#notes "Permalink to this heading")
-----------------------------------------------------


* If your password contains a comma, you need to enclose the whole password in single\-quotes