Enrich with record context[¶](#enrich-with-record-context "Permalink to this heading")
======================================================================================


Add columns containing information about the current record, when available. This processor is used on partitioned or file\-based datasets.



Options[¶](#options "Permalink to this heading")
------------------------------------------------


Add a column name to create any of the following:


* **Output partition column:** Create new column with source partition (for partitioned input datasets)
* **Output partition chunks columns prefix:** Create new column with source partition dimension values (for partitioned input datasets)
* **Output file path column:** Create column with file path (for file\-based datasets)
* **Output filename column:** Create column with file name (for file\-based datasets)
* **Output file record column:** Create column with record id in file (for file\-based datasets)



Warning


This processor can only work in the “DSS” engine. It is not compatible with the Spark and SQL engines.




Note


This processor will not output any valid data when designing the preparation. The data will only populate when the Prepare recipe runs.