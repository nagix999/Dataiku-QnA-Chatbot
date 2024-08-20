Tuning and controlling memory usage[¶](#tuning-and-controlling-memory-usage "Permalink to this heading")
========================================================================================================



* [The backend](#the-backend)


	+ [Setting the backend Xmx](#setting-the-backend-xmx)
	+ [Investigate if a crash is related to memory](#investigate-if-a-crash-is-related-to-memory)
* [The JEK](#the-jek)


	+ [Setting the JEK Xmx](#setting-the-jek-xmx)
	+ [Investigate if a crash is related to memory](#id1)
* [The FEKs](#the-feks)


	+ [Setting the FEK Xmx](#setting-the-fek-xmx)
* [Jupyter notebook kernels](#jupyter-notebook-kernels)
* [Python and R recipes](#python-and-r-recipes)
* [SparkSQL and visual recipes with Spark engine](#sparksql-and-visual-recipes-with-spark-engine)
* [PySpark, SparkR and sparklyr recipes](#pyspark-sparkr-and-sparklyr-recipes)
* [In\-memory machine learning](#in-memory-machine-learning)
* [Webapps](#webapps)
* [API node](#api-node)
* [Govern node](#govern-node)




Note


It is strongly recommended that you get familiar with the different kind of processes in DSS to understand this section. See [Understanding and tracking DSS processes](processes.html) for more information




[The backend](#id2)[¶](#the-backend "Permalink to this heading")
----------------------------------------------------------------


The backend is a Java process that has a fixed memory allocation set by the `backend.xmx` ini parameter.


It is recommended to allocate ample Java memory to the backend. Backend memory requirement scales with:


* The number of users
* The number of projects, datasets, recipes, …
* Overall activity (automatically running scenarios, use of data preparation design)


For large production instances, we recommend allocating 12 to 20 GB of memory for the backend.


If the memory allocation is insufficient, the DSS backend may crash. This will result in the “Disconnected” overlay appearing for all users and running jobs/scenarios to be aborted. The backend restarts automatically after a few seconds.



### [Setting the backend Xmx](#id3)[¶](#setting-the-backend-xmx "Permalink to this heading")


In this example, we are setting the backend Xmx to 12g


* Go to the DSS data directory



Note


On macOS, the DATA\_DIR is always: `$HOME/Library/DataScienceStudio/dss_home`



* Stop DSS



> ```
> ./bin/dss stop
> 
> ```
* Edit the install.ini file
* If it does not exist, add a `[javaopts]` section
* Add a line: `backend.xmx = 12g`
* Regenerate the runtime config:



> ```
> ./bin/dssadmin regenerate-config
> 
> ```
* Start DSS



> ```
> ./bin/dss start
> 
> ```


For more details on how to tune Java processes settings, see [Advanced Java runtime configuration](../installation/custom/advanced-java-customization.html).




### [Investigate if a crash is related to memory](#id4)[¶](#investigate-if-a-crash-is-related-to-memory "Permalink to this heading")


If you experience the “Disconnected” overlay and want to know if it’s related to lack of backend memory:


* Open the `run/backend.log` file (or possibly one of the rotated files `backend.log.X`)
* Locate the latest “DSS startup: backend version” message
* Just before this, you’ll see the logs of the crash. If you see `OutOfMemoryError: Java heap space` or `OutOfMemoryError: GC Overhead limit exceeded`, then you need to increase `backend.xmx`





[The JEK](#id5)[¶](#the-jek "Permalink to this heading")
--------------------------------------------------------


The default Xmx of the JEK is 2g. This is enough for a large majority of jobs. However, some jobs with large number of partitions or large number of files to process may require more. This is configured by the `jek.xmx` ini parameter.


Note that:


* The `jek.xmx` setting is global, and cannot be set per\-job, per\-user or per\-project
* This memory allocation will be multiplied by the number of JEK (see [Understanding and tracking DSS processes](processes.html) for more details), so don’t put a huge amount for `jek.xmx` as it will also be multiplied.


If you see JEK crashes due to memory errors, we recommend that you increase progressively. For example, first to 3g then to 4g.



### [Setting the JEK Xmx](#id6)[¶](#setting-the-jek-xmx "Permalink to this heading")


In this example, we are setting the JEK Xmx to 3g


* Go to the DSS data directory



Note


On macOS, the DATA\_DIR is always: $HOME/Library/DataScienceStudio/dss\_home



* Stop DSS



> ```
> ./bin/dss stop
> 
> ```
* Edit the install.ini file
* If it does not exist, add a `[javaopts]` section
* Add a line: `jek.xmx = 3g`
* Regenerate the runtime config:



> ```
> ./bin/dssadmin regenerate-config
> 
> ```
* Start DSS



> ```
> ./bin/dss start
> 
> ```


For more details on how to tune Java processes settings, see [Advanced Java runtime configuration](../installation/custom/advanced-java-customization.html).




### [Investigate if a crash is related to memory](#id7)[¶](#id1 "Permalink to this heading")


If you experience job crashes without error messages and want to know if it’s related to lack of JEK memory:


* Open the “Full job log” from the Actions menu of the job page
* Scroll to the end of the log.
* You’ll see the logs of the crash. If you see `OutOfMemoryError: Java heap space` or `OutOfMemoryError: GC Overhead limit exceeded`, then you need to increase `jek.xmx`





[The FEKs](#id8)[¶](#the-feks "Permalink to this heading")
----------------------------------------------------------


The default Xmx of each FEK is 2g. This is enough for a large majority of tasks. There may be some rare cases where you’ll need to allocate more memory (generally at the direction of Dataiku Support). This is configured by the `fek.xmx` ini parameter.


Note that:


* The `fek.xmx` setting is global, and cannot be set per\-user or per\-project
* This memory allocation will be multiplied by the number of FEK (see [Understanding and tracking DSS processes](processes.html) for more details), so don’t put a huge amount for `fek.xmx` as it will also be multiplied.



### [Setting the FEK Xmx](#id9)[¶](#setting-the-fek-xmx "Permalink to this heading")


In this example, we are setting the FEK Xmx to 3g


* Go to the DSS data directory



Note


On macOS, the DATA\_DIR is always: `$HOME/Library/DataScienceStudio/dss_home`



* Stop DSS



> ```
> ./bin/dss stop
> 
> ```
* Edit the install.ini file
* If it does not exist, add a `[javaopts]` section
* Add a line: `fek.xmx = 3g`
* Regenerate the runtime config:



> ```
> ./bin/dssadmin regenerate-config
> 
> ```
* Start DSS



> ```
> ./bin/dss start
> 
> ```


For more details on how to tune Java processes settings, see [Advanced Java runtime configuration](../installation/custom/advanced-java-customization.html).





[Jupyter notebook kernels](#id10)[¶](#jupyter-notebook-kernels "Permalink to this heading")
-------------------------------------------------------------------------------------------


Memory allocation for Jupyter notebooks can be controlled using the [cgroups integration](cgroups.html)



Warning


Please note that Jupyter notebook sessions are not terminated automatically. This means that Jupyter notebooks will continue to consume memory until the Jupyter session is explicitly terminated. As a result, you may observe that jupyter processes are consuming memory for days or weeks.



To view currently active Jupyter notebook sessions from the DSS UI, an administrator can navigate to Administration \> Monitoring \> Running background tasks \> notebooks. You can manually unload notebooks to free up memory usage by following the options listed under [unloading jupyter notebooks](../notebooks/python.html#unloading).


To manage memory consumption from Jupyter notebooks on a more regular basis, you may want to consider setting up a scenario to run the “Kill Jupyter Sessions” macro to terminate Jupyter notebook sessions that have been open or idle for a long period of time (e.g. 15 days). Note that a notebook session may be triggering long\-running computation, so you will want to ensure that this automation doesn’t interfere with active work and that users are notified of this automation accordingly.




[Python and R recipes](#id11)[¶](#python-and-r-recipes "Permalink to this heading")
-----------------------------------------------------------------------------------


Memory allocation for Python and R recipes can be controlled using the [cgroups integration](cgroups.html)



Note


This does not apply if you used [containerized execution](../containers/index.html) for this recipe.
See containerized execution documentation for more information about processes and controlling memory usage for containers





[SparkSQL and visual recipes with Spark engine](#id12)[¶](#sparksql-and-visual-recipes-with-spark-engine "Permalink to this heading")
-------------------------------------------------------------------------------------------------------------------------------------


These recipes are made of a large number of processes:


* The Spark driver, a Java process that runs locally
* The Spark executors, Java processes that run in your cluster (usually through YARN)


Memory for both can be controlled using the usual Spark properties (`spark.driver.memory` and `spark.executory.memory`) which can be set in [Spark named configurations](../spark/configuration.html)




[PySpark, SparkR and sparklyr recipes](#id13)[¶](#pyspark-sparkr-and-sparklyr-recipes "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


The case of these recipes is a bit particular, because they are actually made of several processes:


* A Python or R process which runs your driver code
* The Spark driver, a Java process that runs locally
* The Spark executors, Java processes that run in your cluster (usually through YARN)


Memory for the Spark driver and executors can be controlled using the usual Spark properties (`spark.driver.memory` and `spark.executory.memory`) which can be set in [Spark named configurations](../spark/configuration.html)


Memory for the local Python or R process can be controlled using the [cgroups integration](cgroups.html)




[In\-memory machine learning](#id14)[¶](#in-memory-machine-learning "Permalink to this heading")
------------------------------------------------------------------------------------------------


Memory allocation for in\-memory machine learning processes can be controlled using the [cgroups integration](cgroups.html)



Note


This does not apply if you used [containerized execution](../containers/index.html) for this recipe.
See containerized execution documentation for more information about processes and controlling memory usage for containers





[Webapps](#id15)[¶](#webapps "Permalink to this heading")
---------------------------------------------------------


Memory allocation for webapps can be controlled using the [cgroups integration](cgroups.html)




[API node](#id16)[¶](#api-node "Permalink to this heading")
-----------------------------------------------------------


Memory consumption on the API node is generally light, so it’s unlikely that you’ll need to modify the API node memory allocation. If you do need to, memory allocation is set by the `apimain.xmx` property in the API node `install.ini` file. Here are the steps you would take to modify the `apimain.xmx` setting:


* In the API node DATADIR, add an entry in the `install.ini` file for `apimain.xmx`



```
[javaopts]
apimain.xmx = 4g

```


* Regenerate the runtime config:



```
./bin/dssadmin regenerate-config

```


* Start DSS



```
./bin/dss start

```




[Govern node](#id17)[¶](#govern-node "Permalink to this heading")
-----------------------------------------------------------------


The Govern node memory allocation is configured by the `governserver.xmx` setting.


In this example, we are setting the Xmx to 4g.


* Go to the Dataiku Govern data directory
* Stop Dataiku Govern



> ```
> ./bin/dss stop
> 
> ```
* Edit the install.ini file
* If it does not exist, add a `[javaopts]` section
* Add a line: `governserver.xmx = 4g`
* Regenerate the runtime config with the govern\-admin cli:



> ```
> ./bin/govern-admin regenerate-config
> 
> ```
* Start Dataiku Govern



> ```
> ./bin/dss start
> 
> ```


For more details on how to tune Java processes settings, see [Advanced Java runtime configuration](../installation/custom/advanced-java-customization.html).