Switch case[¶](#switch-case "Permalink to this heading")
========================================================


This processor applies rules to compute a new column based on the input column values.



Rules[¶](#rules "Permalink to this heading")
--------------------------------------------


Rules are defined as a list of key\-value pairs. When a key is found in the input column, the corresponding value is set in the output column.
If a column row matches no key, the value for unmatched row is empty by default.
You can set a default value in the `Value for unmatched rows` field.
In order to add as many matching conditions as necessary, click on the `ADD RULE` plus icon.



Note


The matching between column values and key values is based on a strict equality comparison.





Normalization modes[¶](#normalization-modes "Permalink to this heading")
------------------------------------------------------------------------


By setting the normalization mode, you can specify whether you want the processor to perform:


* Case\-sensitive matches (‘Exact’ mode)
* Case\-insensitive matches (‘Lowercase’ mode)
* Accents\-insensitive matches (‘Normalize’ mode)


![../../_images/switch-case.png](../../_images/switch-case.png)