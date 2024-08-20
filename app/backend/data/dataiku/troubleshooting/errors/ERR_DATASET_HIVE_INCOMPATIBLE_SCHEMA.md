ERR\_DATASET\_HIVE\_INCOMPATIBLE\_SCHEMA: Dataset schema not compatible with Hive[¶](#err-dataset-hive-incompatible-schema-dataset-schema-not-compatible-with-hive "Permalink to this heading")
===============================================================================================================================================================================================


This error can occur when trying to synchronize an HDFS dataset to the Hive metastore.
Hive does not support all schemas, and has some limitations on column names, notably:


* It does not preserve case, so some columns names can conflict
* It does not support some characters, like `,`



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Try changing the schema of the dataset in the upstream recipe, so that it is compatible
with Hive. When using Hadoop, a cautious practice can be to only use lowercase and no
`,` nor `.`.