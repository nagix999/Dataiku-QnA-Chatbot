Introduction[¶](#introduction "Permalink to this heading")
==========================================================



* [Supported databases](#supported-databases)


	+ [Full support](#full-support)
	+ [Tier 2 support](#tier-2-support)
	+ [Other databases](#other-databases)
* [Defining a connection](#defining-a-connection)
* [Advanced connection settings](#advanced-connection-settings)


	+ [Advanced JDBC properties](#advanced-jdbc-properties)
	+ [Custom JDBC URL](#custom-jdbc-url)
	+ [Fetch size](#fetch-size)
	+ [Truncate to clear data](#truncate-to-clear-data)
	+ [Naming rules](#naming-rules)




[Supported databases](#id1)[¶](#supported-databases "Permalink to this heading")
--------------------------------------------------------------------------------


DSS provides full support for many databases and experimental support for others. Click on a link for detailed support information for that database.



### [Full support](#id2)[¶](#full-support "Permalink to this heading")


DSS fully supports the following databases:


* [Snowflake](snowflake.html)
* [Azure Synapse](synapse.html)
* [Google BigQuery](bigquery.html)
* [Amazon Redshift](redshift.html)
* [PostgreSQL](postgresql.html)
* [Teradata](teradata.html)
* [Oracle](oracle.html)
* [Microsoft SQL Server](sqlserver.html)
* [Pivotal Greenplum](greenplum.html)
* [MySQL](mysql.html)
* [Vertica](vertica.html)




### [Tier 2 support](#id3)[¶](#tier-2-support "Permalink to this heading")


DSS has [Tier 2 support](../../troubleshooting/support-tiers.html) for the following databases:


* [SAP HANA](saphana.html)
* [AWS Athena](athena.html)
* [Exasol](exasol.html)
* [IBM Netezza](netezza.html)
* [IBM DB2](db2.html)
* [kdb\+](../kdbplus.html)




### [Other databases](#id4)[¶](#other-databases "Permalink to this heading")


In addition, DSS can connect to any database that provides a JDBC driver.



Warning


For databases not listed previously, we cannot guarantee that anything will work.
Reading datasets often works, but it is rare that writing works out of the box.



You might be able to get a better behavior by selecting a specific dialect from the dropdown in the JDBC connection screen





[Defining a connection](#id5)[¶](#defining-a-connection "Permalink to this heading")
------------------------------------------------------------------------------------



Note


Before you try to connect to a database, make sure that the proper JDBC driver for it is installed. For information on how to install JDBC drivers, see [Custom Dataiku instructions](../../installation/custom/jdbc.html) or [Dataiku Cloud Stacks for AWS instructions](../../installation/cloudstacks-aws/templates-actions.html)



The first step to work with SQL databases is to create a connection to your SQL database.


* Go to the Administration \> Connection page.
* Click “New connection” and select your database type.
* Enter a name for your connection.
* Enter the requested connection parameters. See the page of your database for more information, if needed
* Click on Test. DSS attempts to connect to the database, and gives you feedback on whether the attempt was successful.
* Save your connection.




[Advanced connection settings](#id6)[¶](#advanced-connection-settings "Permalink to this heading")
--------------------------------------------------------------------------------------------------



### [Advanced JDBC properties](#id7)[¶](#advanced-jdbc-properties "Permalink to this heading")


For all databases, you can pass arbitrary key/value properties that are passed as\-is to the database’s JDBC driver. The possible properties depend on each JDBC driver. Please refer to the documentation of your JDBC driver for more information




### [Custom JDBC URL](#id8)[¶](#custom-jdbc-url "Permalink to this heading")


For all databases for which DSS has a specific connection kind, DSS automatically constructs the JDBC URL from the structured settings. For advanced use cases, you can enable the “Custom JDBC URL” mode and enter your own JDBC URL




### [Fetch size](#id9)[¶](#fetch-size "Permalink to this heading")


When DSS reads records from the database, it fetches them by batches for improved performance. The “fetch size” parameter lets you select the size of this batch. If you leave this parameter blank, DSS uses a reasonable default. Setting the fetch size to high values (above a few thousands) can improve performance, especially if your network connection to the database has high latency, at the expense of increased memory usage.




### [Truncate to clear data](#id10)[¶](#truncate-to-clear-data "Permalink to this heading")


By default, when writing non\-partitioned managed datasets, DSS drops the table and recreates it (which avoid schema discrepancy problems). You can enable this option to TRUNCATE the table instead.




### [Naming rules](#id11)[¶](#naming-rules "Permalink to this heading")


See [Making relocatable managed datasets](../relocation.html)