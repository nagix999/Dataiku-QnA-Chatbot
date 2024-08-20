Supported connections[¶](#supported-connections "Permalink to this heading")
============================================================================


DSS can read and write data from a variety of sources.



Connectors[¶](#connectors "Permalink to this heading")
------------------------------------------------------


Here is a list of the available connectors in DSS.




| Type | Read | Write |
| --- | --- | --- |
| [Upload your files](upload.html) | yes (see supported formats) | yes (see supported formats) |
| [Server filesystem](filesystem.html) | yes (see supported formats) | yes (see supported formats) |
| [HDFS](hdfs.html) | yes (see supported formats) | yes (see supported formats) |
| [Amazon S3](s3.html) | yes (see supported formats) | yes (see supported formats) |
| [Google Cloud Storage](gcs.html) | yes (see supported formats) | yes (see supported formats) |
| [Azure Blob Storage](azure-blob.html) | yes (see supported formats) | yes (see supported formats) |
| [SharePoint Online](sharepoint-online.html) | yes (see supported formats) | yes (see supported formats) |
| [FTP](ftp.html) | yes (see supported formats) | yes (see supported formats) |
| [SSH (SCP and SFTP)](scp-sftp.html) | yes (see supported formats) | yes (see supported formats) |
| [HTTP](http.html) | yes (see supported formats) | no |
| [Snowflake](sql/index.html) | yes | yes |
| [Databricks](sql/index.html) | yes | yes |
| [Microsoft Azure Synapse](sql/index.html) | yes | yes |
| [Google BigQuery](sql/index.html) | yes | yes |
| [Amazon Redshift](sql/index.html) | yes | yes |
| [PostgreSQL](sql/index.html) | yes | yes |
| [MySQL](sql/index.html) | yes | yes |
| [Microsoft SQL Server](sql/index.html) | yes | yes |
| [Oracle](sql/index.html) | yes | yes |
| [Teradata](sql/index.html) | yes | yes |
| [Greenplum](sql/index.html) | yes | yes |
| [Google AlloyDB](sql/index.html) | yes | yes |
| [Vertica](sql/index.html) | yes | yes |
| [SAP HANA](sql/index.html) | yes | yes |
| [IBM Netezza](sql/index.html) | yes | yes |
| [Exadata](sql/index.html) | yes | yes |
| [IBM DB2](sql/index.html) | yes (Tier 2\) | yes (Tier 2\) |
| [Exasol](sql/index.html) | yes (Tier 2\) | yes (Tier 2\) |
| [SingleStore](sql/index.html) | yes (Tier 2\) | yes (Tier 2\) |
| Other SQL databases (JDBC driver) | best effort, not guaranteed | no, generally |
| MongoDB | yes | yes |
| [Cassandra](cassandra.html) | yes | yes |
| [Elasticsearch](elasticsearch.html) | yes | yes |
| [kdb\+](kdbplus.html) | yes (Experimental) | no |
| Twitter (Streaming API) | yes (Tier 2\) | no |
| Generic APIs | Custom Python or R code, plugins | Custom Python or R code, plugins |
| [PI System / PIWebAPI server](pi-system.html) | yes | yes |
| [Google Sheets](googlesheets.html) | yes | yes |




File formats[¶](#file-formats "Permalink to this heading")
----------------------------------------------------------


Here is a list of the file formats that DSS can read and write for files\-based
connections (filesystem, HDFS, Amazon S3, SharePoint Online, HTTP, FTP, SSH).



### Standard formats[¶](#standard-formats "Permalink to this heading")




| Format | Read | Write |
| --- | --- | --- |
| [Delimited values (CSV, TSV, …)](formats/csv.html) | yes | yes |
| [Fixed width](formats/fixed-width.html) | yes | no |
| [Excel (from Excel 97\)](formats/excel.html) | yes | only via export |
| [Avro](formats/avro.html) | yes | yes |
| Custom format using regular expression | yes | no |
| [XML](formats/xml.html) | yes | no |
| [JSON](formats/json.html) | yes | no |
| [ESRI Shapefiles](formats/shapefile.html) | yes | no |
| MySQL Dump | yes | no |
| Apache Combined log format | yes | no |


Note that file\-based formats can be read compressed: ZIP, GZIP, BZ2\.




### Hadoop/Spark specific formats[¶](#hadoop-spark-specific-formats "Permalink to this heading")


The following formats can be read and written on HDFS, S3, Azure Blob and Google Cloud Storage.




| Format | Read | Write |
| --- | --- | --- |
| [Parquet](formats/parquet.html) | yes | yes |
| [Hive ORCFile](formats/orcfile.html) | yes | yes |
| [Delta Lake](formats/deltalake.html) | yes | no |