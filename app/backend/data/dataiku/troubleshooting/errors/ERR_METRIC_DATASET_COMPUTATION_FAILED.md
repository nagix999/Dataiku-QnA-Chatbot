ERR\_METRIC\_DATASET\_COMPUTATION\_FAILED: Metrics computation completely failed[¶](#err-metric-dataset-computation-failed-metrics-computation-completely-failed "Permalink to this heading")
=============================================================================================================================================================================================


DSS tried refresh the basic metrics on a dataset, but failed.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


The causes for not being able to compute a metric can be:


* invalid dataset setup, resulting in unreadable data files or unreadable SQL tables
* unavailability of the engine selected for the computations (Hiveserver2 or Impala server down, invalid connection parameters for Hadoop or the SQL connection)


The error message should give more context about what part of the metric computations can have failed, and should direct attempts to fix the problem. If the engine seems available, the settings of which engine to use are accessible on the dataset’s Status \> Edit tab.