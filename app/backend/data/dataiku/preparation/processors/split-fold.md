Split and fold[¶](#split-and-fold "Permalink to this heading")
==============================================================


This processor splits the values of a column based on a separator and
transforms them into several rows.


For example, with the following dataset:




| customer\_id | events | browser |
| --- | --- | --- |
| 1 | login,product,buy | Mozilla |
| 2 | login,product,logout | Chrome |


Applying “Split and Fold” on the “events” column with “,” as the separator will generate the
following result:




| customer\_id | events | browser |
| --- | --- | --- |
| 1 | login | Mozilla |
| 1 | product | Mozilla |
| 1 | buy | Mozilla |
| 2 | login | Chrome |
| 2 | product | Chrome |
| 2 | logout | Chrome |


All columns except the folded column are copied in each new line.


For more details on reshaping, please see [Reshaping](../reshaping.html).