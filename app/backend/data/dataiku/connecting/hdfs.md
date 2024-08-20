HDFS[¶](#hdfs "Permalink to this heading")
==========================================


DSS can connect to filesystems based on the “Hadoop Filesystem” API to


* Read and write datasets
* Read and write managed folders



Compatible filesystems[¶](#compatible-filesystems "Permalink to this heading")
------------------------------------------------------------------------------


DSS can read/write from any kind of Hadoop Filesystem and has been tested with the following URL schemes:


* `hdfs://`
* `maprfs://`
* `s3a://`
* `wasb://`
* `adl://`



Note


DSS collectively refers all “Hadoop Filesystem” URIs as the “HDFS” dataset, even though it supports more than `hdfs://` URIs



For more information about connecting to Hadoop filesystems and connection details, see [Hadoop filesystems connections (HDFS, S3, EMRFS, WASB, ADLS, GS)](../hadoop/hadoop-fs-connections.html).