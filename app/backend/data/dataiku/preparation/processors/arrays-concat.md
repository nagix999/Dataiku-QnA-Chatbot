Concatenate JSON arrays[¶](#concatenate-json-arrays "Permalink to this heading")
================================================================================


This processor concatenates N input columns containing arrays (as JSON)
into a single JSON array.



Example[¶](#example "Permalink to this heading")
------------------------------------------------


* Input:



```
a       b
[1,2]   ["x","y"]

```


* Output:



```
[1, 2, "x", "y"]

```