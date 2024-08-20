Data ordering[¶](#data-ordering "Permalink to this heading")
============================================================


In some cases, you must order the rows in a dataset. Depending on the type of the dataset and your use case, you may choose between two types of ordering: write ordering and read\-time ordering.



Write ordering[¶](#write-ordering "Permalink to this heading")
--------------------------------------------------------------


Write ordering is used to store the rows physically in the same order as they are pushed into the dataset.
Enabling write ordering implies using a single thread for writing data and thus it may decrease performance.
This option can be enabled in the dataset settings. This setting is compatible with most storage types that act like file systems:



> * [Upload your files](upload.html)
> * [Server filesystem](filesystem.html)
> * [HDFS](hdfs.html)
> * [Amazon S3](s3.html)
> * [Google Cloud Storage](gcs.html)
> * [Azure Blob Storage](azure-blob.html)
> * [FTP](ftp.html)
> * [SCP / SFTP (aka SSH)](scp-sftp.html)




Read\-time ordering[¶](#read-time-ordering "Permalink to this heading")
-----------------------------------------------------------------------


Read\-time ordering means that the rows of the dataset will be ordered when they are read from the source.
Enabling read\-time ordering may decrease read performance. Read\-time ordering is compatible with
most SQL databases. This option is available in the dataset settings and can be superseded with
different values for two distinguish uses:



> * Configuring a sample in explore view
> * Exporting a dataset in action menu