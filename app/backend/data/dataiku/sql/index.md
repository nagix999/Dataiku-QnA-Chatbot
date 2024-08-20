DSS and SQL[¶](#dss-and-sql "Permalink to this heading")
========================================================


DSS can both read and write datasets in SQL databases. Using DSS with SQL, you can:


* create datasets representing SQL tables (and read and write in them)
* create datasets representing the results of a SQL query (and read them)
* write code recipes that create datasets using the results of a SQL query on existing SQL datasets. See [SQL recipes](../code_recipes/sql.html) for more information about SQL recipes
* use the SQL Notebook for interactive querying


In addition, on most supported databases, DSS is able to:


* execute [Visual recipes](../other_recipes/index.html) directly in\-database (ie: for a visual recipe from the database to the database, the data never moves out of the database)
* execute [Charts](../visualization/index.html) directly in\-database
* create pipelines


For an overview of which databases are supported by DSS, see [the connecting to SQL reference](../connecting/sql/index.html).



* [SQL datasets](datasets.html)
* [SQL write and execution](write_and_execute.html)
* [Partitioning](partition.html)
* [SQL pipelines in DSS](pipelines/index.html)