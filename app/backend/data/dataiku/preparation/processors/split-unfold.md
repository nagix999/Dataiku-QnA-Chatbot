Split and unfold[¶](#split-and-unfold "Permalink to this heading")
==================================================================


This processor splits the values of a column based on a separator and
transforms them into several binary columns. Also called
‘dummification’.


You can prefix new columns by filling the “Prefix” option.


You can choose the maximum number of columns to create with the “Max nb. columns to create” option.


For example, with the following dataset:




| customer\_id | events |
| --- | --- |
| 1 | login, product, buy |
| 2 | login, product, logout |


We get:




| customer\_id | events\_login | events\_product | events\_buy | events\_logout |
| --- | --- | --- | --- | --- |
| 1 | 1 | 1 | 1 |  |
| 2 | 1 | 1 |  | 1 |


The unfolded column is deleted.



Warning


**Limitations**


The limitations that apply to the [Unfold](unfold.html#unfold) processor also apply to the Split and Unfold processor.



For more details on reshaping, please see [Reshaping](../reshaping.html).