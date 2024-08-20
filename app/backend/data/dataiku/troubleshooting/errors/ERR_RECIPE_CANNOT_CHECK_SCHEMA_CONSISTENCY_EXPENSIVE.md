ERR\_RECIPE\_CANNOT\_CHECK\_SCHEMA\_CONSISTENCY\_EXPENSIVE: Cannot check schema consistency: expensive checks disabled[¶](#err-recipe-cannot-check-schema-consistency-expensive-cannot-check-schema-consistency-expensive-checks-disabled "Permalink to this heading")
======================================================================================================================================================================================================================================================================


DSS has detected that the schema is expensive to compute for the
specified dataset(s).


This error can happen when trying to run a schema check or propagate
schema changes from a dataset.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


The “Check consistency” and “Propagate schema” tools in the flow
have a “Perform potentially slow checks” option.
Make sure this option is enabled.