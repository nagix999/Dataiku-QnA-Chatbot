SQL pipelines in DSS[¶](#sql-pipelines-in-dss "Permalink to this heading")
==========================================================================


A SQL pipeline is a process that combines several consecutive recipes (each using the same SQL engine) in a DSS workflow. These combined recipes, which can be both visual and “SQL query” recipes, can then be run as a single job activity. Using a SQL pipeline strongly boosts performance by avoiding unnecessary writes and reads of intermediate datasets.


SQL pipelines also allow you to optimize the data storage capacity without having to manually re\-factor the Dataiku flow (for example, by reducing the number of datasets).



Warning


**Experimental feature**: The SQL pipeline feature is considered experimental and not officially supported.
In case of issues, you always have the option to disable SQL pipelines on a per\-project basis.




Topics[¶](#topics "Permalink to this heading")
----------------------------------------------



* [Using SQL pipelines](sql_pipelines.html)
* [Views in SQL pipelines](views.html)
* [Partitions and SQL pipelines](partitions.html)