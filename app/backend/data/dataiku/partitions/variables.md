Partitioning variables substitutions[¶](#partitioning-variables-substitutions "Permalink to this heading")
==========================================================================================================


When a recipe involves partitioned datasets, some variables are made available to the code that you write for this recipe, to help you manage partitions.



Substituting variables[¶](#substituting-variables "Permalink to this heading")
------------------------------------------------------------------------------



### SQL[¶](#sql "Permalink to this heading")


Variables are replaced in your code using the $VARIABLE\_NAME syntax. For example, if you have the following code:



```
SELECT * from mytable WHERE condition='$DKU_DST_country';

```


with a variable DKU\_DST\_country which has value France, the following query will actually be executed:



```
SELECT * from mytable WHERE condition='France';

```




### Hive[¶](#hive "Permalink to this heading")


Variables are replaced in your code using the ${hiveconf:VARIABLE\_NAME} syntax. For example, if you have the following code:



```
SELECT * from mytable WHERE condition='${hiveconf:DKU_DST_date}';

```


with a variable DKU\_DST\_date which has value 2020\-12\-21, the following query will actually be executed:



```
SELECT * from mytable WHERE condition='2020-12-21';

```




### Python[¶](#python "Permalink to this heading")


Since read and write is done through Dataiku DSS, you don’t need to specify the source or destination partitions in your code for that, using “get\_dataframe()” will automatically give you only the relevant partitions.


For other purposes than reading/writing dataframes, all variables are available in a dictionary called dku\_flow\_variables in the dataiku module. Example:



```
import dataiku
print("I am working for year %s" % (dataiku.dku_flow_variables["DKU_DST_YEAR"]))

```




### R[¶](#r "Permalink to this heading")


Flow variables are retrieved using the `dkuFlowVariable(variableName)` function



```
library(dataiku)
dkuFlowVariable("DKU_DST_country")

```





Available variables[¶](#available-variables "Permalink to this heading")
------------------------------------------------------------------------



### Related to the target datasets[¶](#related-to-the-target-datasets "Permalink to this heading")




| Variable name | Available if | Value | Examples |
| --- | --- | --- | --- |
| DKU\_DST\_dimensionName | For each dimension | Value of the dimension “dimensionName” for the current activity. For time dimensions, given using time partition identifier syntax. | * France * 2020\-01\-22 |
| DKU\_DST\_YEAR | time partitioned | Value of the year (4 digits) for the time dimension. | 2020 |
| DKU\_DST\_MONTH | time partitioned (month, day or hour) | Value of the month (2 digits, from) 01 to 12\) for the time dimension | 01 |
| DKU\_DST\_DAY | time partitioned (day or hour) | Value of the day of month (2 digits, from 01 to 31\) for the time dimension | 22 |
| DKU\_DST\_DATE | time partitioned (day or hour) | Date for the time dimension, in yyyy\-MM\-dd format | 2020\-01\-22 |
| DKU\_DST\_HOUR | time partitioned (hour) | Value of the hour of day (2 digits, from) 00 to 23\) for the time dimension. | 21 |
| DKU\_DST\_YEAR\_1DAYAFTER … | the same variable is available | Value of the various date components variables for the day FOLLOWING the dimension value. | 2020\-01\-23 |
| DKU\_DST\_YEAR\_1DAYBEFORE | the same variable is available | Value of the various date components for the day PRECEDING the dimension value | 2020\-01\-21 |
| … \_7DAYSBEFORE … \_7DAYSAFTER | Idem | Value of the various date components for the date 7 days PRECEDING or FOLLOWING the dimension value | 2020\-01\-15 |
| … \_1HOURBEFORE … \_1HOURAFTER | Idem | Idem |  |




### Related to the source datasets[¶](#related-to-the-source-datasets "Permalink to this heading")




| Variable name | Available if | Value | Examples |
| --- | --- | --- | --- |
| DKU\_SRC\_datasetName\_dimensionName | * For each dimension of each dataset * There is only one source partition for this dataset | The value of the dimension dimensionName for input dataset datasetName | 2020\-01\-23 |
| DKU\_SRC\_dimensionName | * There is only one source dataset * There is only one source partition for this dataset | The value of the dimension dimensionName for the single input dataset | 2020\-01\-23 |
| DKU\_PARTITION\_FILTER\_datasetName | * the recipe is an SQL recipe | filter for the partitions used by the recipe |  |
| DKU\_PARTITION\_FILTER | * the recipe is an SQL recipe * There is only one source dataset | filter for the partitions used by the recipe |  |
| DKU\_SRC\_FIRST\_DATE | * There is only one source dataset * The dataset is time\-partitioned | smallest partition id |  |
| DKU\_SRC\_LAST\_DATE | * There is only one source dataset * The dataset is time\-partitioned | biggest partition id |  |


Additionally, if the source dataset has time dimensions, all variables DKU\_SRC\_datasetName (date/year/month/day/hour), DKU\_SRC\_datasetName (DATE/YEAR/MONTH/DAY/HOUR)\_(timeshift) will be available subject to the same rules as for DKU\_DST \_


If there is only one input dataset, all DKU\_SRC\_datasetName\_variable variables are also available in the DKU\_SRC\_variable shortcut.