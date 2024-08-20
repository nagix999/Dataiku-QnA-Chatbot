INFO\_RECIPE\_POTENTIAL\_FAST\_PATH: Potential fast path configuration[¶](#info-recipe-potential-fast-path-potential-fast-path-configuration "Permalink to this heading")
=========================================================================================================================================================================


The SQL query results are streamed from an input connection through DSS to the output dataset which may be slow. This is
due to your recipe using an input connection as the main connection.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


If the output dataset connection can access all inputs, then you can configure the recipe to use fast\-path: in the
`Advanced` settings, check the `Allow SQL across connections` option and select the output dataset as the `Main SQL
connection`.