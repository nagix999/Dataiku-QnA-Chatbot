ERR\_SPARK\_FAILED\_DRIVER\_OOM: Spark failure: out of memory in driver[¶](#err-spark-failed-driver-oom-spark-failure-out-of-memory-in-driver "Permalink to this heading")
==========================================================================================================================================================================



Description[¶](#description "Permalink to this heading")
--------------------------------------------------------


This error can happen when running any Spark\-enabled recipe


This error indicates that the Spark processing failed because the Spark “driver” (main component) experienced an out of memory situation.




Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------



### Specific case of code recipes[¶](#specific-case-of-code-recipes "Permalink to this heading")


If the failure comes from a Spark code recipe (Spark\-Scala, Pyspark or SparkR), check your code for large allocations performed in the driver.




### General case[¶](#general-case "Permalink to this heading")


This error generally does not indicate that the DSS machine or the cluster is out of memory, but that the configuration for executing the Spark code is too restrictive.


You generally need to increase the `spark.driver.memory` Spark setting. For more information about how to set Spark settings, please see [Spark configurations](../../spark/configuration.html). Note that your administrator may need to perform this change.


If not set, the default value of `spark.driver.memory` is 1 gigabyte (`1g`).


If your Spark is running in `local` master mode, note that the value of `spark.driver.memory` must also include memory for executors.