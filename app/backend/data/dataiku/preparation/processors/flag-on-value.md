Flag rows on value[¶](#flag-rows-on-value "Permalink to this heading")
======================================================================


Flag rows from dataset that contain specific values by creating a column containing ‘1’ for all matching (in\-range) rows. Unmatched rows are left empty.



Options[¶](#options "Permalink to this heading")
------------------------------------------------


**Flag (output) column**


Create a column in which to store the flag.


**Column**


Apply the matching condition to the following:


* A single column
* An explicit list of columns
* All columns matching a regex pattern
* All columns



Note


When applying the match condition to several columns (multiple, pattern, all), select whether the row will be considered as matching if all column match (ALL) or at least one column matches (OR).