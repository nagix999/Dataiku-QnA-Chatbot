Delimiter\-separated values (CSV / TSV)[¶](#delimiter-separated-values-csv-tsv "Permalink to this heading")
===========================================================================================================


“CSV” in DSS format covers a wide range of traditional formats, including comma\-separated values (CSV) and tab\-separated values (TSV).


Despite its apparent simplicity, there are subtleties in the DSV format. Data Science Studio reads the DSV according to the specifications you give, so if the file doesn’t conform to the spec, you may end up with misaligned, misplaced fields, or fields consisting of almost all the file (and out of memory issues).



* [Quoting and escaping styles](#quoting-and-escaping-styles)


	+ [Excel\-style](#excel-style)
	+ [Unix\-style](#unix-style)
	+ [Escaping only](#escaping-only)
	+ [No escaping, no quoting](#no-escaping-no-quoting)
* [Usage in datasets](#usage-in-datasets)
* [Usage in recipes](#usage-in-recipes)




[Quoting and escaping styles](#id3)[¶](#quoting-and-escaping-styles "Permalink to this heading")
------------------------------------------------------------------------------------------------


The main problem with DSV is the handling of special characters within the fields.


Several methods exist, and Data Science Studio supports all of the following.



### [Excel\-style](#id4)[¶](#excel-style "Permalink to this heading")


Also known as RFC4180, the most common variant of DSV.


* The quoting char is a double quote (`"`)
* If the separator char appears in a field, the field is enclosed in the quoting char
* If a \\n or \\r char appears in a field, the field is also enclosed in the quoting char
* If the quoting char appears in the field the quoting char itself is doubled



#### Example[¶](#example "Permalink to this heading")


With separator: `,`


Input



```
a normal,line
"the,delimiter","in,a field"
"but ""also""","double ""quotes"", in a field"

```


Output:



```
a normal            line
the, delimiter      in, a field
but "also"          double "quotes", in a field

```





### [Unix\-style](#id5)[¶](#unix-style "Permalink to this heading")


* If the separator char appears in a field, the field is enclosed in a quoting char (generally a double quote)
* If a \\n or \\r char appears in a field, the field is also enclosed in the quoting char
* If the quoting char appears in the field, it is prefixed with the escape char (generally \\)
* If the escape char appears in a field, it is prefixed with itself



#### Example[¶](#id1 "Permalink to this heading")


With separator: `,`, quoteChar: `"`, escapeChar: `\`


Input:



```
a normal,line
"the,delimiter","in,a field"
"but \"also\"","double \"quote\", in a field"
and \\ in a field, "is \"possible\" too

```


Output:



```
a normal            line
the, delimiter      in, a field
but "also"          double "quotes", in a field
and \ in a field    is "possible" too

```





### [Escaping only](#id6)[¶](#escaping-only "Permalink to this heading")


* If the separator char appears in a field, it is prefixed with the escape char (generally )
* If \\n or \\r appears in a field, it is prefixed with the escape char
* If the escape char appears in a field, it is prefixed with itself


In this format, the double quote is not a special character



#### Example[¶](#id2 "Permalink to this heading")


With separator: `,`, escapeChar: `\`


Input:



```
a normal,line
the \,delimiter, in \,a field
but "also", double "quotes"\,in a field
and \\ in a field, is "possible" too

```


Output:



```
a normal            line
the, delimiter      in, a field
but "also"          double "quotes", in a field
and \ in a field    is "possible" too

```





### [No escaping, no quoting](#id7)[¶](#no-escaping-no-quoting "Permalink to this heading")


* The separator may not appear in a field
* \\n or \\r may not appear in a field


In this format, the double quote is not a special character.


Input:



```
a normal, line
is the, only "possible" thing

```


Output:



```
a normal            line
is the              only "possible" thing

```





[Usage in datasets](#id8)[¶](#usage-in-datasets "Permalink to this heading")
----------------------------------------------------------------------------


Data Science Studio tries to autodetect the quoting style when you create a new external dataset.


This will not always be able to detect the correct quoting style, as quoting/escaping chars might not appear in the first lines.


Make sure to select the correct quoting style for your dataset. Using wrong quoting styles can lead to huge number of columns being generated or values of arbitrarily large size. This may cause some memory issues.



Note


When using “no quoting, no escaping” style, it is highly recommended to have a very exotic separator like u0001


Note also that this style is not able to represent all data.





[Usage in recipes](#id9)[¶](#usage-in-recipes "Permalink to this heading")
--------------------------------------------------------------------------




| Recipe type | Restrictions |
| --- | --- |
| Hive Spark | Escaping only and “no escaping no quoting” are the only supported styles When creating a new managed dataset from the Hive recipe editor, it automatically gets “Escaping only ” style Additionally, due to Hadoop limitations, files with newlines in fields cannot be used |
| Other | If “no escaping, no quoting” is used as output and either the delimiter, \\n or \\r appears in a field, the offending character is automatically replaced by a space |