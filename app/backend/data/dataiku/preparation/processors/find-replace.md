Find and replace[¶](#find-and-replace "Permalink to this heading")
==================================================================


Find and replace strings in one or more columns. Find/Replace supports multiple replacements: Several replacements can be applied on the same cell, one after the other.


To stop the replacement after the first occurrence, select **Only perform the first matching replacement**.



Options[¶](#options "Permalink to this heading")
------------------------------------------------


**Column**


Apply find and replace to the following:


* A single column
* An explicit list of columns
* All columns matching a regex pattern
* All columns


**Output column**


Create a separate output column or leave blank to perform find and replace in\-column.


**Replacements**


List the strings to match and their corresponding replacements.


**Matching mode**


Determine the type of replacement for find and replace to perform.


* **Complete value:** replace the entire content of the matched cell
* **Substring:** replace all occurrences of a string within the cell
* **Regular expression:** replace matches of a regular expression



Note


* Regular expression matching supports group captures. Reference groups using the $index notation. If you want to find/replace `val-17-x` into `V17`, use the following replacement `val-([0-9]*)-.*` → `V$1`
* To replace the symbol `$` in a regular expression match, escape it and type `\$`.



**Normalization mode**


Specify how to find the match:


* **Exact (no transformation):** use case\-sensitive search
* **Lowercase:** use case\-insenstive search



Note


Accent\-insensitive normalization is only available for complete value matching.





Related resources[¶](#related-resources "Permalink to this heading")
--------------------------------------------------------------------


To extract multiple values from a cell using a regular expression, use the [extract with regular expression](https://doc.dataiku.com/dss/11.0/preparation/processors/pattern-extract.html) processor.