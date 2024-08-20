Variables in scenarios[¶](#variables-in-scenarios "Permalink to this heading")
==============================================================================


When run, scenarios setup a supplementary level of variables, to define or redefine instance\- or project\-wide variables. These definitions and redefinitions of variables are then accessible to all actions during the scenario run, and to all reporters executed at the end of the run.



(Re)defining new variables[¶](#re-defining-new-variables "Permalink to this heading")
-------------------------------------------------------------------------------------


In a step\-based scenario, the user can insert a **Define variables** step to add new variables. This type of step evaluates a DSS formula and stores the result as a variable. Subsequent steps and variable definitions will then be able to use the newly defined variable. The formulas in a **Define variables** step have access to all instance\- and project\-wide variables, and to the parameters of the trigger that initiated the scenario run.


In a Python script scenario, variables are made available through a `Scenario` object, both for getting and setting.




Usage in partition identifiers[¶](#usage-in-partition-identifiers "Permalink to this heading")
----------------------------------------------------------------------------------------------


When a step\-based scenario is used, it is commonplace to have actions on given datasets, and if the dataset is partitioned, then specifying the partition targeted by the action is needed. This is done by setting a partition identifier in the corresponding parameter of the step. Variables are available in these fields, making it possible to use expressions to pick a specific partition.


For time partitioning, you can use special keywords. For example, “CURRENT\_DAY” will be replaced by the current date when the scheduler runs the task. The complete list of time partitioning keywords is:


* CURRENT\_HOUR
* CURRENT\_DAY
* CURRENT\_MONTH
* CURRENT\_YEAR
* PREVIOUS\_HOUR
* PREVIOUS\_DAY
* PREVIOUS\_MONTH
* PREVIOUS\_YEAR




Examples[¶](#examples "Permalink to this heading")
--------------------------------------------------



### Using the current date to refresh a partition[¶](#using-the-current-date-to-refresh-a-partition "Permalink to this heading")


Selecting the partition corresponding to the current date can be done using the *CURRENT\_DAY* and *CURRENT\_MONTH* keywords as partition identifier. In the context of scenarios, a more flexible approach is to build the partition identifier with variables. For example, to build the partition identifier corresponding the previous month:


* add a *Define scenario variables* step
* add a first variable `today` whose expression is `now()`
* add a second variable `last_month` whose expression is `today.inc(-1, 'month')`
* finally, prepare the date as a partition identifier with a third variable `last_month_id` whose expression is `last_month.substring(0,7)`


And in a `Build` step, the partition for a dataset can be set to `${last_month_id}` . A natural extension is to launch the building of several partitions at once, ie. doing dynamic partitioning. A list of partitions to build would then be a comma\-separated list of partition identifiers. For more advanced usage of partitions, see [Partition identifiers](../partitions/identifiers.html).




### Using the date from a time\-based trigger[¶](#using-the-date-from-a-time-based-trigger "Permalink to this heading")


Triggers produce parameters that can be used in expressions. To build a variable whose value is the date of the scenario launch minus 5 days:


* add a *Define scenario variables* step
* add a first variable `start` whose expression is `asDate(scenarioTriggerParam_expectedStart)`
* add a second variable `five_days_before_start` whose expression is `start.trunc('day').inc(-5, 'day')`


In case the scenario can be launched manually, the second variable should have as expression: `if(isNull(start), now(), start).trunc('day').inc(-5, 'day')`




### Using the results of a previous SQL step[¶](#using-the-results-of-a-previous-sql-step "Permalink to this heading")


Steps produce results, which can be used to define variables. In order to access the step’s result, the step must have a name. For example, if the *Define scenario variables* comes after a *the\_sql* step of type *Execute SQL*, whose query is `select max(order_date) as m from orders`, then building a variable from the maximum date of orders can be done:


* add a *Define scenario variables* step
* add a first variable `max_orderdate` whose expression is `parseJson(stepOutput_the_sql)['rows'][0][0].asDate()`




### Retrieving the message of a check[¶](#retrieving-the-message-of-a-check "Permalink to this heading")


The *Run checks* step keeps the results of the checks it has run for subsequent steps. A typical use is to insert checks results in reports sent at the end of the run.


For example, after a *Run checks* step named *the\_checks*, the variable ${stepOutput\_the\_checks} contains the JSON of the checks’ output. If one is interested by the checks on a dataset named *checked* in the project *PROJ*, then the checks’ results for that dataset is a variable parseJson(stepOutput\_the\_checks)\[‘PROJ.checked’].results .


If the goal is to retrieve the status of a check *checkX*, with a bit of filtering one obtain this status with ${filter(parseJson(stepOutput\_the\_checks)\[‘PROJ.checked’].results, x, x.check.meta.label \=\= ‘checkX’)\[0].value.outcome}




### Retrieving the value of a metric[¶](#retrieving-the-value-of-a-metric "Permalink to this heading")


The *Compute metrics* step keeps the results of the metrics it has run for subsequent steps.


For example, after a *Compute metrics* step named *the\_metrics*, the variable ${stepOutput\_the\_metrics} contains the JSON of the metrics’ computation output, indicating which metrics got computed and their value, and which metrics were skipped. If one is interested by the value of the metrics on a dataset named *computed* in the project *PROJ*, then the metrics’ results for that dataset is a variable parseJson(stepOutput\_the\_metrics)\[‘PROJ.computed’].results .


If the goal is to retrieve the value of the metric *col\_stats:MIN:cost*, with a bit of filtering one obtains this status with ${filter(parseJson(stepOutput\_the\_metrics)\[‘PROJ.computed’].computed, x, x.metricId \=\= ‘col\_stats:MIN:cost’)\[0].value}