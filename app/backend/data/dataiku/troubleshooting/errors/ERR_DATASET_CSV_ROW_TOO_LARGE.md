ERR\_DATASET\_CSV\_ROW\_TOO\_LARGE: Error in CSV file: Dataset row is too long to be processed[¶](#err-dataset-csv-row-too-large-error-in-csv-file-dataset-row-is-too-long-to-be-processed "Permalink to this heading")
=======================================================================================================================================================================================================================


Considering the dataset’s CSV format configuration, a row cannot exceed a certain length.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


This error appears when the dataset contains a row that is unexpectedly long.


Make sure the quoting style, as well as the quote and escape characters, are well chosen.
It’s very likely that the error comes from there.
You’ll find those settings in the dataset tab “Settings \> Format/Preview”.
For more details about CSV quoting styles, please see [Delimiter\-separated values (CSV / TSV)](../../connecting/formats/csv.html).


If the long row is not due to the format configuration but inherent to the dataset, you can increase the limit `Maximum characters per row` in the same tab.
You can set them to 0 if you simply do not want any limit.
Beware that you may encounter out of memory errors.