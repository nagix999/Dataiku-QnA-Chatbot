Variables expansion in code recipes[¶](#variables-expansion-in-code-recipes "Permalink to this heading")
========================================================================================================


Code recipes can use the two kinds of variables expansion in DSS:


* Expansion of user\-defined variables. See [Custom variables expansion](../variables/index.html)
* Expansion of “Flow” variables (ie, variables that are specific to this specific recipe)


Flow variables are mostly used for partitioning\-related stuff. See [Partitioning variables substitutions](../partitions/variables.html) for more information.



Summary of expansion syntax[¶](#summary-of-expansion-syntax "Permalink to this heading")
----------------------------------------------------------------------------------------



### SQL[¶](#sql "Permalink to this heading")


Both Flow and custom variables are replaced in your code using the ${VARIABLE\_NAME} syntax. For example, if you have the following code:



```
SELECT * from mytable WHERE condition='${DKU_DST_ctry}';

```


with a variable DKU\_DST\_ctry which has value France, the following query will actually be executed:



```
SELECT * from mytable WHERE condition='France';

```




### Hive[¶](#hive "Permalink to this heading")


Both Flow and custom variables are replaced in your code using the ${hiveconf:VARIABLE\_NAME} syntax. For example, if you have the following code:



```
SELECT * from mytable WHERE condition='${hiveconf:DKU_DST_date}';

```


with a variable DKU\_DST\_date which has value 2013\-12\-21, the following query will actually be executed:



```
SELECT * from mytable WHERE condition='2013-12-21';

```




### Python[¶](#python "Permalink to this heading")


Flow variables are available in a python dictionary called dku\_flow\_variables in the dataiku module. Example:



```
import dataiku
print("I am working for year %s" % (dataiku.dku_flow_variables["DKU_DST_YEAR"]))

```


Custom variables are available in a python dictionary retrieved by the `dataiku.get_custom_variables()`
function. Example:



```
import dataiku
print("I am excluding %s" % (dataiku.get_custom_variables()["logs.preprocessing.excluded_ip"]))

```




### R[¶](#r "Permalink to this heading")


Flow variables are retrieved using the `dkuFlowVariable(variableName)` function



```
library(dataiku)
dkuFlowVariable("DKU_DST_ctry")

```


Custom variables are retrieved using the `dkuCustomVariable(name)` function.



```
library(dataiku)
dkuCustomVariable("logs.preprocessing_excluded_ip")

```