Data Quality Rules[¶](#data-quality-rules "Permalink to this heading")
======================================================================


The Data Quality mechanism in Dataiku allows you to easily ensure that your data meets quality standards and automatically monitor the status of your data quality across datasets, projects, and your entire Dataiku instance.


A Data Quality rule tests whether a dataset satisfies set conditions. The computation of a rule yields:


* a status outcome: “Ok”, “Error” or “Warning”. A less common outcome “Empty” is used to indicate that the condition could not be evaluated because the value is missing.
* an observed value with further detail. This parameter is optional for custom rules.


Each execution of a rule produces one outcome.
Note that if the rule has not yet been computed, the status is “Not Computed”.



* [Data Quality rule types](#data-quality-rule-types)


	+ [Column min in range](#column-min-in-range)
	+ [Column avg in range](#column-avg-in-range)
	+ [Column max in range](#column-max-in-range)
	+ [Column sum in range](#column-sum-in-range)
	+ [Column median in range](#column-median-in-range)
	+ [Column std dev in range](#column-std-dev-in-range)
	+ [Column values are not empty](#column-values-are-not-empty)
	+ [Column values are empty](#column-values-are-empty)
	+ [Column values are unique](#column-values-are-unique)
	+ [Column top N values in set](#column-top-n-values-in-set)
	+ [Column most frequent value in set](#column-most-frequent-value-in-set)
	+ [Column values are valid according to meaning](#column-values-are-valid-according-to-meaning)
	+ [Metric value in range](#metric-value-in-range)
	+ [Metric value in set](#metric-value-in-set)
	+ [File size in range](#file-size-in-range)
	+ [Record count in range](#record-count-in-range)
	+ [Column count in range](#column-count-in-range)
	+ [Python code](#python-code)
	+ [Plugin rules](#plugin-rules)
* [Rule configuration](#rule-configuration)


	+ [Testing the rule](#testing-the-rule)
	+ [Hard and soft minimums and maximums](#hard-and-soft-minimums-and-maximums)
	+ [Enable / disable](#enable-disable)
	+ [Auto\-run after build](#auto-run-after-build)
* [Data Quality monitoring views](#data-quality-monitoring-views)


	+ [Dataset level view](#dataset-level-view)
	+ [Project level view](#project-level-view)
	+ [Instance level view](#instance-level-view)
	+ [Timezone limitations](#timezone-limitations)
* [Other data quality views](#other-data-quality-views)


	+ [Dataset right panel](#dataset-right-panel)
	+ [Data Quality Flow view](#data-quality-flow-view)
* [Data Quality on partitioned datasets](#data-quality-on-partitioned-datasets)


	+ [Computation scope](#computation-scope)
	+ [Auto\-run after build](#id2)
	+ [Data Quality monitoring views](#dq-partitioned-views)
* [Retro\-compatibility with Checks](#retro-compatibility-with-checks)




Note


The Data Quality mechanism is an improvement introduced in DSS 12\.6\.0 over the [checks](checks.html) system. Data quality rules allow you to specify expectations for datasets in a more streamlined way, and improve reporting of the results via specific dashboards.
Other flow objects (managed folders, saved models, model evaluation store) still use checks.



Examples of simple Data Quality rules include:


* The record count of a dataset is above 0 (i.e., the dataset is not empty)
* The most frequent value of a column is ‘Y’
* A column’s values are at most 10% empty


Data Quality rules are configured in the *Data Quality* tab of a dataset, where you can also easily track the evolution of your dataset’s data quality over time.



[Data Quality rule types](#id4)[¶](#data-quality-rule-types "Permalink to this heading")
----------------------------------------------------------------------------------------



### [Column min in range](#id5)[¶](#column-min-in-range "Permalink to this heading")


Ensures that a column’s minimum value falls within a given range.


Options:


* the column(s) to check
* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Column avg in range](#id6)[¶](#column-avg-in-range "Permalink to this heading")


Ensures that a column’s average value falls within a numeric range.


Options:


* the column(s) to check
* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Column max in range](#id7)[¶](#column-max-in-range "Permalink to this heading")


Ensures that a column’s maximum value falls within a given range.


Options:


* the column(s) to check
* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Column sum in range](#id8)[¶](#column-sum-in-range "Permalink to this heading")


Ensures that a column’s sum falls within a given range.


Options:


* the column(s) to check
* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Column median in range](#id9)[¶](#column-median-in-range "Permalink to this heading")


Ensures that a column’s median falls within a given range.


Options:


* the column(s) to check
* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Column std dev in range](#id10)[¶](#column-std-dev-in-range "Permalink to this heading")


Ensures that a column’s standard deviation falls within a given range.


Options:


* the column(s) to check
* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Column values are not empty](#id11)[¶](#column-values-are-not-empty "Permalink to this heading")


Ensures that a column does not contain empty values.


Options:


* the column(s) to check
* the threshold type \- you can verify that all values are non\-empty, or that at most a certain number / proportion are empty
* the [expected soft maximum / maximum](#expected-range) for empty values (if threshold type is not all values)




### [Column values are empty](#id12)[¶](#column-values-are-empty "Permalink to this heading")


Ensures that a column contains empty values.


Options:


* the column(s) to check
* the threshold type: you can verify that all values / at least a certain number of values / at least a certain proportion of values are empty
* the [expected soft minimum / minimum](#expected-range) for empty values (if threshold type is not all values)




### [Column values are unique](#id13)[¶](#column-values-are-unique "Permalink to this heading")


Ensures that a column’s values are unique (no duplicates).
Empty values are ignored (e.g. a column with 50% empty values will only check the uniqueness of the non\-empty values).


Options:


* the column(s) to check
* the threshold type: you can verify that all values / at least a certain number of values / at least a certain proportion of values are unique
* the [expected soft minimum / minimum](#expected-range) for unique values (if threshold type is not all values)




### [Column top N values in set](#id14)[¶](#column-top-n-values-in-set "Permalink to this heading")


Ensures that a column’s N most frequent values fall into a given set.
Empty values are ignored (the rule will check the N most frequent non\-empty values).


Options:


* the column(s) to check
* the number of top values to check (must be less than 100\)
* the list of values that are expected to contain the N most frequent values from each selected column of the dataset




### [Column most frequent value in set](#id15)[¶](#column-most-frequent-value-in-set "Permalink to this heading")


Ensures that a column’s most common value is in a given set.
Empty values are ignored (e.g. most frequent value cannot be empty).


Options:


* the column(s) to check
* the list of values that are expected to contain the most frequent value from each selected column of the dataset




### [Column values are valid according to meaning](#id16)[¶](#column-values-are-valid-according-to-meaning "Permalink to this heading")


Ensures that a column’s values are consistent with a [meaning](../schemas/meanings-list.html)


Options:


* the column(s) to check
* for each selected column, the meaning to use to assert validity. You can either:



> + use the option “Use meaning from schema” that will use the meaning specified by the dataset’s schema. This option allows the rule to adapt to changes to the column’s meaning, but requires the meaning to be locked in the schema, which you can do by manually selecting it from the dropdown in the Explore tab
> 	+ explicitly select a meaning in the list. The rule will always check validity according to the selected meaning
* the threshold type \- you can verify that all values / at least a certain number / at least a certain proportion are valid
* consider empty as valid \- by default, empty cells are considered as invalid. If this option is checked, they will be considered as valid
* the [expected soft minimum / minimum](#expected-range) for valid values (if threshold type is not all values)




### [Metric value in range](#id17)[¶](#metric-value-in-range "Permalink to this heading")


Ensures that a DSS metric’s value falls within a given range.


Options:


* the metric to test
* auto\-compute metric \- if checked, when the rule is run, it will recompute the metric value. Otherwise, it will use the most recent value
* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Metric value in set](#id18)[¶](#metric-value-in-set "Permalink to this heading")


Ensures that a DSS metric’s value is in a given set of values.


Options:


* the metric to test
* auto\-compute metric \- if checked, when the rule is run, it will recompute the metric value. Otherwise, it will use the most recent value
* the list of allowed values




### [File size in range](#id19)[¶](#file-size-in-range "Permalink to this heading")


Ensures that a dataset’s file size (in bytes) falls within a given range.
Only available for a file\-based dataset.


Options:


* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Record count in range](#id20)[¶](#record-count-in-range "Permalink to this heading")


Ensures that a dataset’s row count falls within a given range.


Options:


* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Column count in range](#id21)[¶](#column-count-in-range "Permalink to this heading")


Ensures that a dataset’s column count falls within a given range.


Options:


* the [expected range](#expected-range) (minimum / soft minimum / soft maximum / maximum)




### [Python code](#id22)[¶](#python-code "Permalink to this heading")


You can also write a custom rule in Python.
This rule is equivalent to the “Python check”, so the same code can be used.


The Python method must return a tuple of two strings:


* the first value is the outcome ‘Ok’, ‘Warning’ or ‘Error’
* the second value is the optional observed value message


If there are any errors during the Python code execution, the rule will return an “Error” status.


Options:
\- The code env to use to run the python code
\- the python code itself




### [Plugin rules](#id23)[¶](#plugin-rules "Permalink to this heading")


You can use a plugin to define rules via Python code, using a similar syntax to the Python rule.
Existing plugin checks are valid plugin rules.
See [custom metrics and checks](custom_metrics_and_checks.html)





[Rule configuration](#id24)[¶](#rule-configuration "Permalink to this heading")
-------------------------------------------------------------------------------


The below settings are available for both partitioned and non\-partitioned datasets. Note that partitioned datasets have additional settings which you can read about [below](#dq-partitioned-settings).



### [Testing the rule](#id25)[¶](#testing-the-rule "Permalink to this heading")


The Test button in the rule edition panel allows you to check the rule outcome, but does not save the result or update the status of the rule.




### [Hard and soft minimums and maximums](#id26)[¶](#hard-and-soft-minimums-and-maximums "Permalink to this heading")


Some rules check whether a specific numeric value falls within a given range.
For these rules, you can configure up to four values: minimum, soft minimum, soft maximum and maximum.
The rule outcome is defined as follows:


* value below minimum : “Error”
* value below soft minimum : “Warning”
* value above soft maximum : “Warning”
* value above maximum : “Error”
* value in range : “Ok”




### [Enable / disable](#id27)[¶](#enable-disable "Permalink to this heading")


Rules can be enabled or disabled individually.
A disabled rule is ignored when computing the rules and when updating the status of the dataset.




### [Auto\-run after build](#id28)[¶](#auto-run-after-build "Permalink to this heading")


When the “Auto\-run after build” option is set, the rule will be computed automatically after each build of the dataset.
This ensures that the rule status is always updated alongside the dataset content.


This setting is ignored for input datasets (dataset that are not the output of any recipe), as they cannot be built within DSS.


Rules computed as part of a dataset build and returning an “Error” status will cause the build job to fail.





[Data Quality monitoring views](#id29)[¶](#data-quality-monitoring-views "Permalink to this heading")
-----------------------------------------------------------------------------------------------------


You can easily track the status of Data Quality rules at either the dataset, project, or instance level in Dataiku.


This makes it easy to quickly identify potential data quality issues at a high level and efficiently drill down into specific issues for further investigation.


The Data Quality views are available for both partitioned and non\-partitioned datasets. Partitioned dataset have some specificities related to how statuses are aggregated across partitions which you can read about [below](#dq-partitioned-views).



### [Dataset level view](#id30)[¶](#dataset-level-view "Permalink to this heading")


This view provides detail on a dataset’s Data Quality rules and computation results.


* the *Current status* tab provides the overall dataset status as well as the current status of each rule and run details.
Time information is displayed using the user’s timezone
* the *Timeline* tab enables you to explore the evolution of the dataset’s daily status and of each of the rules that influenced it, even if they have been disabled or deleted since.
Time information is displayed using the UTC timezone.



> + the *last status* of a rule is the outcome of its last computation before the end of the selected day
> 	+ the *worst daily status* of a rule is the worst outcome of all computations that happened throughout the selected day
* the *Rule History* tab allows you to see all past rule computations
Time information is displayed using the user’s timezone


You can also toggle the *Monitoring* flag from the Current Status tab.
When Monitoring is turned on, the dataset is included in the project\-level status.
Datasets are monitored by default as soon as any rules are added.




### [Project level view](#id31)[¶](#project-level-view "Permalink to this heading")


The project Data Quality tab provides an overview of the project status as well as the statuses of all included datasets.


* the *Current status* tab gives you an overview of the *current status* of the project as a whole as well as each dataset. The *current status* of the project is the worst *current status* of its monitored datasets.
Time information is displayed using the user’s timezone
* the *Timeline* tab enables you to explore the evolution of the status of the project and its datasets, even if they have been deleted since.
Time information is displayed using the UTC timezone.
Statuses are computed as follows:



> + the *last status* of a dataset is the worst outcome of the last computation of all enabled rules before the end of the selected day
> 	+ the *worst daily status* of a dataset is the worst outcome of all rule computations that happened throughout the selected day


By default, the project\-level views are filtered to only display monitored datasets.




### [Instance level view](#id32)[¶](#instance-level-view "Permalink to this heading")


The instance Data Quality view, available from the Navigation menu, gives you a high level view of Data Quality statuses of the *monitored projects* you have access to.


A *monitored project* is a project that contains at least one monitored dataset.


The *current status* of a project is the worst *current status* of its monitored datasets.




### [Timezone limitations](#id33)[¶](#timezone-limitations "Permalink to this heading")


Data Quality timelines and worst daily statuses require grouping rule outcomes per day.
Since this information is computed and shared at the instance level, it cannot adapt to the user’s current timezone.


All daily Data Quality data is computed based on the days in UTC timezone.





[Other data quality views](#id34)[¶](#other-data-quality-views "Permalink to this heading")
-------------------------------------------------------------------------------------------



### [Dataset right panel](#id35)[¶](#dataset-right-panel "Permalink to this heading")


The Data Quality right panel tab offers a quick view of the *current status* of all enabled rules.
You can access it from the right panel of datasets from the flow, from any dataset screen and from the Data Catalog.




### [Data Quality Flow view](#id36)[¶](#data-quality-flow-view "Permalink to this heading")


The Data Quality flow view provides a quick view of the *current status* of all datasets with Data Quality rules configured within a project.





[Data Quality on partitioned datasets](#id37)[¶](#data-quality-on-partitioned-datasets "Permalink to this heading")
-------------------------------------------------------------------------------------------------------------------



### [Computation scope](#id38)[¶](#computation-scope "Permalink to this heading")


On partitioned datasets, rules may be relevant to specific partitions and/or the whole dataset.
The “Computation scope” setting allows you to control whether a given rule should be computed on partitions, the whole dataset, or both, when performing a mass computation.


* “Partitions”: the rule will be computed individually on each selected partition only
* “Whole dataset”: the rule will be computed on the whole dataset only
* “Both”: the rule will be computed both on each selected partition and on the whole dataset


For example, if you have a dataset partitioned by Country
and you want to ensure that the median of `columnA` is at least 20 in every Country partition,
and that the average of `columnB` is at most 50 across the whole dataset (but not individually for each Country), you would use:


* a “Column median in range” rule on `ColumnA` with the setting “Partitions” and a minimum of 20
* a “Column avg in range” rule on `ColumnB` with the setting “Whole dataset” and a maximum of 50


If you clicked “Compute all” and selected “Whole dataset” and two Countries “Belgium” and “Canada” in the modal, the `ColumnA` rule would only actually be computed on the partitions “Belgium” and “Canada”, and the `ColumnB` rule would only actually be computed on the whole dataset.


This setting applies to any mass computation (auto\-run after build, from scenarios, with the “Compute all” button).
Manually computing a single rule, however, forces the computation on the selected partition regardless of the “Computation scope” setting.




### [Auto\-run after build](#id39)[¶](#id2 "Permalink to this heading")


For partitioned datasets, this option triggers the computation of the rule on each newly built partition and/or on the whole dataset, depending on the “Computation scope” option.
For example, if a job builds a single partition A, it will trigger:


* the computation on partition A of all rules that have “Partitions” or “Both” as computation scope
* the computation on the whole dataset of all rules that have “Whole dataset” or “Both” as computation scope




### [Data Quality monitoring views](#id40)[¶](#dq-partitioned-views "Permalink to this heading")


For partitioned datasets, the dataset level view shows information for either a single partition or for the whole dataset.


In the project level view, dataset statuses are defined as the worst status of all last computed partitions.
The status of each partition is the worst outcome of all enabled rules for that partition (same definition as the status of a non\-partitioned dataset)


The current and last status aggregations don’t necessarily include all partitions. They first identify the last day any rule computation happened and only include the partitions that had rule computations on that day.
For example, if a dataset has 3 partitions A, B, and C, and on June 5th rules are computed on partitions A and B,
then on June 7th rules are computed on partition B, C and on the whole dataset,
the dataset statuses will take into account:


* partitions A and B on the 5th and 6th
* partitions B, C and whole dataset on the 7th and later





[Retro\-compatibility with Checks](#id41)[¶](#retro-compatibility-with-checks "Permalink to this heading")
----------------------------------------------------------------------------------------------------------


Data Quality rules are a super\-set of checks, ensuring full retro\-compatibility.
Any existing checks will be displayed in the *Data Quality* panel as a rule of the corresponding type.


The Data Quality views, however, rely on data that did not exist previously, and will therefore suffer some limitations:


* timelines for periods before the introduction of Data Quality will stay empty
* current status for datasets will be missing until a single rule is computed on the dataset or the settings are changed
* external checks will not be taken into account in the dataset status until they receive a new value
* current status for projects will only consider dataset that have a status, eg that had a rule computed since the introduction of Data Quality rules