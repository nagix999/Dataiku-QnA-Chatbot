Split column[¶](#split-column "Permalink to this heading")
==========================================================


Split a column into several columns on each occurrence of the delimiter. The output columns are numbered: The first chunk will be in prefix\_0, the second in prefix\_1, and so on.



Examples[¶](#examples "Permalink to this heading")
--------------------------------------------------


* Split `col=a/b/c` using `/` as the delimiter and `chunk` as the output column prefix



> + Output: `chunk_0=a`, `chunk_1=b`, `chunk_3=c`
* Split `col=a/b/c` using `/` as the delimiter, `chunk` as the output column prefix, and keep 2 columns from the beginning



> + Output: `chunk_0=a`, `chunk_1=b`




Options[¶](#options "Permalink to this heading")
------------------------------------------------


**Delimiter**


Separates values from each input column within the output.


**Output columns prefix**


Add a prefix to identify the output columns.


**Output as**


Output the result(s) of the split as separate columns or as an array (`A-B` → `["A",”B”]`).


**Truncate**


Limit the number of output columns and keep only the first N columns or the N last columns.


**Keep empty chunks**


Preserve empty chunks between consecutive delimiters. (`App`, delimiter `p` → `["A", “”, “”]`)