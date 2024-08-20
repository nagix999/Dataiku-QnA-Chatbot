Split invalid cells into another column[¶](#split-invalid-cells-into-another-column "Permalink to this heading")
================================================================================================================


This processor takes all values of a column that are invalid for a
specific meaning and moves them to another column.



Example[¶](#example "Permalink to this heading")
------------------------------------------------


With the following data:




| icol |
| --- |
| 42 |
| Baad |


With parameters:


* Column: icol
* Column for invalid data: bad\_icol
* Meaning to check: Number The result will be:




| icol | bad\_icol |
| --- | --- |
| 42 |  |
|  | Baad |