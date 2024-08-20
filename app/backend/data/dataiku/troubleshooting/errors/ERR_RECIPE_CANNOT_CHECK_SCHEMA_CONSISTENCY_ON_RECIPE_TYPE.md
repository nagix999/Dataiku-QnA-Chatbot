ERR\_RECIPE\_CANNOT\_CHECK\_SCHEMA\_CONSISTENCY\_ON\_RECIPE\_TYPE: Cannot check schema consistency on this kind of recipe[¶](#err-recipe-cannot-check-schema-consistency-on-recipe-type-cannot-check-schema-consistency-on-this-kind-of-recipe "Permalink to this heading")
===========================================================================================================================================================================================================================================================================


DSS cannot check the schema consistency on this kind recipe, because
this recipe contains arbitrary code that can set the output schema
at runtime.


This error can happen when trying to run a schema check or propagate
schema changes from a dataset.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


If you are trying to propagate the changes made on an upstream schema,
you should rebuild this recipe’s output dataset (in recursive mode)
to get the updated schema for this dataset and continue propagating
downstream.