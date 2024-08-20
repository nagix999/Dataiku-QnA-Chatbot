Sampling datasets[¶](#sampling-datasets "Permalink to this heading")
====================================================================



* [Filtering in DSS](#filtering-in-dss)


	+ [Rules based filters](#rules-based-filters)
	
	
		- [Conditions](#conditions)
		- [Groups](#groups)
		- [Boolean operators](#boolean-operators)
	+ [Formula based filters](#formula-based-filters)
	+ [SQL expression based filters](#sql-expression-based-filters)
	+ [ElasticSearch query string](#elasticsearch-query-string)



The “sample/filter” recipe serves the dual purpose of sampling and/or filtering dataset.



See also


For more information, see the [Concept \| Sample/Filter recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/concept-sample-filter-recipe.html) article in the Knowledge Base.





---



[Filtering in DSS](#id2)[¶](#filtering-in-dss "Permalink to this heading")
--------------------------------------------------------------------------


4 types of filtering are available and can be selected using the top dropdown menu :


* Rules based
* Formula based
* SQL expression based
* ElasticSearch query string (only available when the input dataset is on ElasticSearch v7 and above)



### [Rules based filters](#id3)[¶](#rules-based-filters "Permalink to this heading")


A filter is defined by a list of possibly grouped conditions and the boolean operators that bind them.



#### [Conditions](#id4)[¶](#conditions "Permalink to this heading")


A Condition is defined by an input column, an operator, and a value.


* Input column : choose any column from the dataset.
* operator : choose an operator from the dropdown menu. The available operators match the storage type of the column. (a string column will have string operators available, such as `contains`, while a number column will have numerical operators available, such as `<`).
* value : input a value or choose an existing column to apply the operator to.


Conditions can be added, deleted, duplicated, and turned into a group to create advanced conditions.


![../_images/filters_example1.png](../_images/filters_example1.png)


#### [Groups](#id5)[¶](#groups "Permalink to this heading")


Groups can be used to create advanced logic for conditional statements.
Groups can be nested to create sub\-conditions `(y AND z AND (t OR u)))` or defined at the same level `(y OR z) AND (t OR u)`.
Groups can be added using the \+ADD \> Add group button, deleted, duplicated, and ungrouped.


![../_images/filters_example2.png](../_images/filters_example2.png)


#### [Boolean operators](#id6)[¶](#boolean-operators "Permalink to this heading")


Conditions and groups are bound using boolean operators, that can be either `And` or `Or`.





### [Formula based filters](#id7)[¶](#formula-based-filters "Permalink to this heading")


Formulas are manually defined using functions of the formula language, dataset column names, and project variables. Formulas are well suited for more complex filtering options or specific functions that do not appear in the rules based filter view.
The formula language documentation can be found [here](https://doc.dataiku.com/dss/latest/formula/index.html).


![../_images/filters_example3.png](../_images/filters_example3.png)


### [SQL expression based filters](#id8)[¶](#sql-expression-based-filters "Permalink to this heading")


When using an SQL based recipe engine, an SQL expression can directly be given to filter the dataset, using dataset columns and project variables.


![../_images/filters_example4.png](../_images/filters_example4.png)


### [ElasticSearch query string](#id9)[¶](#elasticsearch-query-string "Permalink to this heading")


When using an input dataset on ElasticSearch v7 and above, you can use the [query\_string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/8.4/query-dsl-query-string-query.html) to filter the dataset.



Note


When using an ElasticSearch query string, sampling is disabled and filtering is performed on the whole dataset.