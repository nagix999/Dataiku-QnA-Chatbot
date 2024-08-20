Checks[¶](#checks "Permalink to this heading")
==============================================



* [Checks](#id1)


	+ [Numeric range check](#numeric-range-check)
	+ [Value in set check](#value-in-set-check)
	+ [Python check](#python-check)
* [Checks display UI](#checks-display-ui)



The checks system in DSS allows you to automatically run checks on Flow items (managed folders, saved models and evaluation stores). The checks system is integrated with the metrics system in that checks have access to the last values of the metrics of the Flow item they check.


Checks run as part of a build and returning an ERROR status will fail the build. On partitioned folders, the checks can be computed either on a per\-partition basis or on the whole dataset.



Note


Checks are often used in conjunction with scenarios but are not strictly dependent on scenarios.




Note


For datasets, checks are replaced by [Data Quality rules](data-quality-rules.html)



Examples of checks on a managed folder include:


* The duration of the build for the folder stays below 5 min
* The file count is not 0 (i.e., the folder is not empty)
* The total size of the folder is less / more than 1 GB


Checks are configured in the *Status* tabs of managed folders, saved models and evaluation stores, and changes are automatically tracked over time.



[Checks](#id2)[¶](#id1 "Permalink to this heading")
---------------------------------------------------


A check is a condition of some value(s), and the result of the execution of a check is a pair of:


* an outcome: “OK”, “ERROR” or “WARNING”. A fourth outcome “EMPTY” is used to indicate that the condition could not be evaluated because the value is missing.
* an optional message.


Each execution of the check produces one outcome. The value is recorded and associated to the name



### [Numeric range check](#id3)[¶](#numeric-range-check "Permalink to this heading")


A numeric range check asserts that the value of a metric is within a given range and/or within a given soft range:


* value below minimum : ERROR
* value below soft minimum : WARNING
* value in range : OK
* value above soft maximum : WARNING
* value above maximum : ERROR




### [Value in set check](#id4)[¶](#value-in-set-check "Permalink to this heading")


A value in set check asserts that the value of a metric is in a given list of admissible values.




### [Python check](#id5)[¶](#python-check "Permalink to this heading")


You can also write a custom check in Python.





[Checks display UI](#id6)[¶](#checks-display-ui "Permalink to this heading")
----------------------------------------------------------------------------


The value of checks can be viewed in the “Status” tab of a managed folder, saved model or evaluation store.


Since there can be a lot of checks on an item, you must select which checks to display, by clicking on the `X/Y checks` button


There are two check views:


* A “list” view which displays the history of all selected checks.
* A “table” view which displays the latest value of each selected check.