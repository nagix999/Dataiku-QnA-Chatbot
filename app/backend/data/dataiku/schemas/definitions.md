Definitions[¶](#definitions "Permalink to this heading")
========================================================


Datasets in Data Science Studio have a schema. The schema of a dataset is the list of columns, with their names and types.


There are two kinds of “types” in DSS.


* The *storage type*, used to indicate how the dataset backend should store the column data.
* The *meaning*, a “rich” semantic type. Meanings are automatically detected from the contents of the columns.


Storage types and meaning are related but with large amounts of flexibility that allow Data Science Studio to handle invalid data while retaining advanced meanings.



* [Storage types](#storage-types)


	+ [Why use precise storage types ?](#why-use-precise-storage-types)
* [Meanings](#meanings)




[Storage types](#id1)[¶](#storage-types "Permalink to this heading")
--------------------------------------------------------------------


Storage types are “technical” types:


* string
* int (32 bits), bigint (64 bits), smallint (16 bits), tinyint (8 bits)
* float (32 bits decimal), double (64 bits decimal)
* boolean
* date
* geopoint (for storing coordinates)
* geometry (for storing lines, polygons, …)
* array
* map
* object


A storage type is “strict”, ie. it is generally not possible to store data which would be “invalid” for a given storage type. For example, if a SQL table has an “int” columns, it is not possible at all to store a decimal in it.



### [Why use precise storage types ?](#id2)[¶](#why-use-precise-storage-types "Permalink to this heading")


Storage types are used in many places in DSS, notably recipes, including for generating queries and jobs in other systems (like SQL, Hadoop, Spark).


For example, if you use a text\-based dataset directly in a Spark recipe, the storage type information will be taken into account for the typing of the input dataframes. If you use a text\-based dataset directly in Hive, the storage type information will be taken into account for the typing of the input Hive table).


A mistyped column will generally result in failures.





[Meanings](#id3)[¶](#meanings "Permalink to this heading")
----------------------------------------------------------


Meanings have a “high\-level” definition, like:


* URL
* IP Address
* Email address
* Country code
* Currency code
* …


Each meaning in DSS is able to *validate* a cell value. Thus, each cell can be “valid” or “invalid” for a given meaning.