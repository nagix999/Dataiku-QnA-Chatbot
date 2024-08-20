WARN\_CONNECTION\_SNOWFLAKE\_NO\_AUTOFASTWRITE: automatic fast\-write disabled[¶](#warn-connection-snowflake-no-autofastwrite-automatic-fast-write-disabled "Permalink to this heading")
========================================================================================================================================================================================


The Snowflake connection could leverage automatic fast\-write given cloud storage connections are available.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Add the cloud storage connection as auto fast write connection to the Snowflake connection. See [Writing data into Snowflake](../../connecting/sql/snowflake.html#connecting-sql-snowflake-writing) for more details.