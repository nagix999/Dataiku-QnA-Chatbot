Avro[¶](#avro "Permalink to this heading")
==========================================


Avro is an efficient file format. Its main points are:


* Compact, fast, binary data format.
* Rich data structures (`map`, `union`, `array`, `record` and `enum`).
* Very well suited for data exchange since the schema is stored along with the data (unlike [CSV](csv.html)).



Applicability[¶](#applicability "Permalink to this heading")
------------------------------------------------------------



### Reading Avro files[¶](#reading-avro-files "Permalink to this heading")


Data Science Studio is capable of reading most Avro files. However, there are some fundamental difference between the Avro object model and ours. For instance, Data Science Studio cannot natively represent some Avro types, and some conversions are automatically applied.


* Date:
	+ Avro Date type is not supported.
* Unions
	+ In general, the `union` type is replaced by the most specific type which is able to represent all the unified types. For instance `["int","float","null"]` will be converted to `double`. When no conversion is possible, DSS always falls back to `string`.
	+ DSS perfectly recognizes the common idiom for nullable types in Avro `["null", "the_other_type"]`.
* Enums
	+ They are converted to `string`.




### Reading Avro files / multiple versions[¶](#reading-avro-files-multiple-versions "Permalink to this heading")


Schema evolution is unavoidable, and you may be in a situation where you have a large partitioned dataset composed by many Avro files of different version. In that case, you need to manually define the schema you want to read in the dataset’s settings.




### Writing Avro files[¶](#writing-avro-files "Permalink to this heading")


Data Science Studio also supports writing Avro files. The output Avro schema is deduced from the dataset’s schema, and cannot be enforced. As a direct consequence of this, all types are always wrapped in a nullable union.