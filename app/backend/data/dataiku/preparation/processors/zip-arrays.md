Zip JSON arrays[¶](#zip-json-arrays "Permalink to this heading")
================================================================


This processor combines N input columns containing arrays (as JSON) into
a single output column.


The output column will contain JSON arrays of objects.



Example[¶](#example "Permalink to this heading")
------------------------------------------------


* Input:



```
a       b
[1,2]   ["x","y"]

```


* Output:



```
[{"a":1, "b":"x"} , {"a":2, "b":"y"}]

```