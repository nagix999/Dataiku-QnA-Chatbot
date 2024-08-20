ERR\_SPARK\_PYSPARK\_CODE\_FAILED\_UNSPECIFIED: Pyspark code failed[¶](#err-spark-pyspark-code-failed-unspecified-pyspark-code-failed "Permalink to this heading")
==================================================================================================================================================================



Description[¶](#description "Permalink to this heading")
--------------------------------------------------------


This error can happen when:


* Running a Pyspark recipe
* Running a plugin recipe that uses Pyspark


This error indicates that the Pyspark execution failed, and threw a Python exception.


* The message of the error contains the full error message from Spark
* Additional details, including the Python stack, are available in the job log




Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


You need to carefully read both the error message, and the logs of the job that failed. Between them, they contain all information which is available to understand why the Pyspark code threw an exception.