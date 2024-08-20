WARN\_MISC\_CODE\_ENV\_USES\_PYSPARK: pyspark installed in a code environment[¶](#warn-misc-code-env-uses-pyspark-pyspark-installed-in-a-code-environment "Permalink to this heading")
======================================================================================================================================================================================


The package pyspark has been manually installed in a code environment. It is not recommended to install pyspark manually.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Remove pyspark from the list of required packages of the code env.



Note


Please refer to [the documentation](../../spark/index.html) to find out how to install and interact with Spark in the recommended way.
Running the Spark integration in DSS automatically adds pyspark to code envs.