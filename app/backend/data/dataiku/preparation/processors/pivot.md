Pivot[¶](#pivot "Permalink to this heading")
============================================


Transpose multiple rows into columns, widening the dataset.



Note



Before running a Pivot processor:* Sort the values of the index column so that identical values are adjacent. If the column is not sorted, the processor may create unneeded index rows.
* Ensure the data source is not parallel (i.e. single\-threaded, e.g. a single file)






Example[¶](#example "Permalink to this heading")
------------------------------------------------


Input:




| Company | Type | Value |
| --- | --- | --- |
| Comp.A | Revenue | 42M |
| Comp.A | Raw Margin | 9M |
| Comp.B | Revenue | 137M |
| Comp.B | Raw Margin | 3M |
| Comp.B | Net income | \-11M |


Pivot with:


* Index column: Company
* Labels column: Type
* Values column: Value


Result:




| Company | Revenue | Raw Margin | Net income |
| --- | --- | --- | --- |
| Comp.A | 42M | 9M |  |
| Comp.B | 137M | 3M | \-11M |




Options[¶](#options "Permalink to this heading")
------------------------------------------------


**Index column**


Generate a new row for each change of value in the index column.


**Labels column**


Create a column for each value in the label column.


**Values column**


Populate cells with the values of the values column. When several rows have the same index and label, the pivot only keeps the value corresponding to the last row in the output.


Example of OK input:




| idx1 | label1 | v1 |
| --- | --- | --- |
| idx1 | label2 | v2 |
| idx2 | label1 | v3 |


Example of not OK input:




| idx1 | label1 | v1 |
| --- | --- | --- |
| idx2 | label1 | v3 |
| idx1 | label2 | v2 |




Related Resources[¶](#related-resources "Permalink to this heading")
--------------------------------------------------------------------


To build pivot tables with more control over the rows, columns and aggregations, use the [Pivot recipe](../../other_recipes/pivot.html).