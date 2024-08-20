ERR\_DATASET\_TRUNCATED\_COMPRESSED\_DATA: Error in compressed file: Unexpected end of file[¶](#err-dataset-truncated-compressed-data-error-in-compressed-file-unexpected-end-of-file "Permalink to this heading")
==================================================================================================================================================================================================================


The compressed file ends unexpectedly.
This error is typically caused by a problem in your data (i.e. data is invalid). If this data was created by DSS, you may need to rebuild it. This error can also be ignored, allowing you to process the available data.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


* In the dataset, select “Settings” and “Format / Preview” tab
* In the “File read failure behaviour”, choose “Emit a warning and continue with the next file (if any)”
* Rerun the recipe