Count occurrences[¶](#count-occurrences "Permalink to this heading")
====================================================================


This processor counts the number of occurrences of a pattern in the
specified column



Matching modes[¶](#matching-modes "Permalink to this heading")
--------------------------------------------------------------


* ‘Complete value’ : counts complete cell values (output can only be 0
or 1\)
* ‘Substring’ : counts all occurrences of a string within the cell
* ‘Regular expression’: counts matches of a regular expression




Normalization modes[¶](#normalization-modes "Permalink to this heading")
------------------------------------------------------------------------


* Case\-sensitive matches (‘Exact’ mode)
* Case\-insensitive matches (‘Lowercase’ mode)
* Accents\-insensitive matches (‘Normalize’ mode)


Note: accent\-insensitive matching is only available for ‘complete value’
matching.