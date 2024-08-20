INFO\_RECIPE\_IMPALA\_POTENTIAL\_FAST\_PATH: Potential Impala fast path configuration[¶](#info-recipe-impala-potential-fast-path-potential-impala-fast-path-configuration "Permalink to this heading")
======================================================================================================================================================================================================


The SQL query results are streamed from an input connection through DSS to the output dataset which may be slow.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


If your recipe is not impacted by the known [Impala limitations](../../hadoop/impala.html#impala-limitations), go to the `Advanced` settings
and uncheck the `Stream mode` option.