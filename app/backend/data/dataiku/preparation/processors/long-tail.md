Group long\-tail values[¶](#group-long-tail-values "Permalink to this heading")
===============================================================================


This processor merges together all values of a column that are not part
of an allow\-list of values that should not be merged.



Use case[¶](#use-case "Permalink to this heading")
--------------------------------------------------


The main use case of this processor is to merge all values of a column
except the most frequent ones. The merged values are replaced by a
generic ‘Others’ value.