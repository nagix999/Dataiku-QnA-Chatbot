Cloudera CDP[¶](#cloudera-cdp "Permalink to this heading")
==========================================================


Dataiku supports Cloudera Data Platform \- CDP Private Cloud Base:


* 7\.1\.6
* 7\.1\.7 (aka 7\.1\.7\.p0\)
* 7\.1\.7 SP1 (aka 7\.1\.7\.p1000 and above). DSS has been tested on 7\.1\.7\.p1000 and 7\.1\.7\.p1029
* 7\.1\.7 SP2 (aka 7\.1\.7\.p2000 and above)
* 7\.1\.8
* 7\.1\.9



Spark support[¶](#spark-support "Permalink to this heading")
------------------------------------------------------------


* Spark 3\.2 is supported on CDP 7\.1\.7
* Spark 3\.3 is supported on CDP 7\.1\.8
* Support for Spark 2 is deprecated
* Connection to Azure Blob (abfs:// URLs) with Spark 3 is not supported




Security[¶](#security "Permalink to this heading")
--------------------------------------------------


* Connecting to secure clusters is supported
* User isolation is supported with Ranger
* Using Knox is not supported. DSS must be deployed within the zone protected by Knox




Know issues[¶](#know-issues "Permalink to this heading")
--------------------------------------------------------


* The Hive version deployed by CDP 7\.1\.9 doesn’t support unbounded ranges ([https://issues.apache.org/jira/browse/HIVE\-24905](https://issues.apache.org/jira/browse/HIVE-24905)) in analytical function, which impacts Window recipes in DSS if they use an unbounded window frame. It can be worked around by setting the following Hive property:



```
set hive.vectorized.execution.reduce.enabled=false

```