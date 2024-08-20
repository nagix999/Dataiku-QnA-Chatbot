Installing database drivers[¶](#installing-database-drivers "Permalink to this heading")
========================================================================================


Before being able to create SQL\-based datasets, you need to install the proper JDBC drivers for the database that you intend to connect to.


Additionally, PostgreSQL script recipe support requires the command\-line psql client to be installed. See [PostgreSQL support](#postgresql-support).



Download the driver[¶](#download-the-driver "Permalink to this heading")
------------------------------------------------------------------------


Data Science Studio comes with bundled drivers for :


* PostgreSQL
* Pivotal Greenplum
* Amazon Redshift
* SQlite


Drivers for other databases must be downloaded from your database vendor.




| Database | Website | Download link |
| --- | --- | --- |
| MySQL | <http://dev.mysql.com/downloads/connector/j/> | [https://dev.mysql.com/get/Downloads/Connector\-J/mysql\-connector\-j\-8\.4\.0\.tar.gz](https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-j-8.4.0.tar.gz) |
| Vertica | [https://my.vertica.com/download\-community\-edition/](https://my.vertica.com/download-community-edition/) | Requires a My Vertica account |
| Oracle | [http://www.oracle.com/technetwork/database/features/jdbc/index\-091264\.html](http://www.oracle.com/technetwork/database/features/jdbc/index-091264.html) |  |
| SQL Server | [https://msdn.microsoft.com/en\-us/data/aa937724\.aspx](https://msdn.microsoft.com/en-us/data/aa937724.aspx) | [https://learn.microsoft.com/en\-us/sql/connect/jdbc/download\-microsoft\-jdbc\-driver\-for\-sql\-server](https://learn.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server) |
| BigQuery | See note below |  |


To install BigQuery driver, please follow the instructions listed in [connecting to BigQuery](../../connecting/sql/bigquery.html)




Stop Data Science Studio[¶](#stop-data-science-studio "Permalink to this heading")
----------------------------------------------------------------------------------


In this page, DATA\_DIR refers to the data directory where you installed Data Science Studio.



Note


On macOS, the DATA\_DIR is always: $HOME/Library/DataScienceStudio/dss\_home



Installation of JDBC drivers must be done while Data Science Studio is stopped.



```
DATA_DIR/bin/dss stop

```




Copy the driver[¶](#copy-the-driver "Permalink to this heading")
----------------------------------------------------------------


Copy the driver’s JAR file (and its dependencies, if any) to the DATA\_DIR/lib/jdbc folder




Restart Data Science Studio[¶](#restart-data-science-studio "Permalink to this heading")
----------------------------------------------------------------------------------------



```
DATA_DIR/bin/dss start

```




PostgreSQL support[¶](#postgresql-support "Permalink to this heading")
----------------------------------------------------------------------


Data Science Studio supports datasets stored in PostgreSQL 9 and above.



Warning


PostgreSQL version 8 is not supported.



PostgreSQL script recipe support additionally requires the command\-line psql client
to be available in the search PATH of the Studio Linux account.


You should install a command\-line client compatible with your version of the server.
Depending on your Linux distribution, the appropriate client may be available in a standard
OS package named “postgresql\-client” (Debian / Ubuntu) or “postgresql” (RedHat / CentOS / AlmaLinux).
If that is not the case, you can install the correct client for your server and OS by
configuring an extra package repository as described at <http://www.postgresql.org/download/> .