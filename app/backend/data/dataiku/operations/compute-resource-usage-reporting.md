Compute resource usage reporting[¶](#compute-resource-usage-reporting "Permalink to this heading")
==================================================================================================


DSS acts as the central orchestrator of many computation resources, from SQL databases to Kubernetes. Through DSS, users can leverage these elastic computation resources and consume them. It is thus very important to be able to monitor and report on the usage of computation resources, for total governance and cost control of your Elastic AI stack.


DSS includes a complete stack for reporting and tagging compute resources. The data gathered through this stack is sent through the [audit centralization mechanism](audit-trail/index.html) and can be analyzed centrally (across multiple DSS instances) using DSS. Dashboards can be built from there.


DSS makes granular / processable format, so that you can build your own dashboards. Typical requirement for that is you may want to be able to join usage data with an internal HRIS or similar software in order to provide dashboards by “team” / “BU” / “department”.



Concepts[¶](#concepts "Permalink to this heading")
--------------------------------------------------


DSS creates and emits *Compute Resource Usage* items (CRU). A CRU represents a granular usage of one compute resource within a specific context.


A CRU has:


* A start/end time
* A type: what is the resource that we are consuming. CRU types:
	+ SINGLE\_K8S\_JOB: Execution of a pod or deployment on a K8S cluster
	+ SPARK\_K8S\_JOB: Execution of a Spark job on K8S
	+ LOCAL\_PROCESS: a process running locally on the DSS machine
	+ SQL\_CONNECTION: a connection established to a SQL database
	+ SQL\_QUERY: a query on a SQL connection
* A *context*: what is consuming this resource. Each context has a type and type\-specific data. The contexts are:
	+ Related to jobs
		- JOB\_MAIN\_PROCESS: The main process running a single job
		- JOB\_DEPS\_COMPUTATION: The phase during which dependencies are computed for the job, before activities start
		- JOB\_ACTIVITY: An activity in the job. Type\-specific data includes project, job id, activity id, initiator. This notably includes all recipes.
	+ Related to Machine Learning
		- ANALYSIS\_ML\_TRAIN: A train of a machine learning in the visual ML
	+ Related to notebooks:
		- SQL\_NOTEBOOK: A query in a SQL notebook
		- JUPYTER\_NOTEBOOK\_KERNEL: A Jupyter notebook running
	+ Related to Webapps
		- WEBAPP\_BACKEND: The backend for a webapp
	+ API deployer
		- API\_DEPLOYER\_DEPLOYMENT: A single deployment of an API service on a Kubernetes infrastructure
	+ Other
		- EDA: The process that runs Visual Statistics computation
		- POOLED\_SPARKSQL\_CONNECTION: When using SparkSQL notebooks and charts, connections to the Spark cluster are maintained in a pool
* Type\-specific data. For example, for a local process will have a pid and various information on resources consumption.


CRU are started, updated and completed by DSS. Each of these events on CRUs (start, update, complete) are sent to the DSS [audit log](audit-trail/index.html) (and can thus be centralized using audit log centralization).


These CRU events can then be processed using a DSS project in order to produce the dashboards.


CRUs are by design very low\-level information that must be aggregated. In particular, in the case of Kubernetes, it must be joined with cluster\-level reporting in order to actually provide data.




Enabling CRU generation and audit[¶](#enabling-cru-generation-and-audit "Permalink to this heading")
----------------------------------------------------------------------------------------------------


Generation of CRUs and their events and sending them to the audit log is automatic. No action is required.


All CRU events are reported to the audit log with the `compute-resource-usage` topic. You can choose to direct this particular audit topic to a specific location (please see [Audit trail](audit-trail/index.html) for more details), or you can filter events from the main audit destination using a filter recipe.




Cluster\-level reporting for Kubernetes jobs[¶](#cluster-level-reporting-for-kubernetes-jobs "Permalink to this heading")
-------------------------------------------------------------------------------------------------------------------------


In the case of Kubernetes jobs, just the CRU at the DSS level are not sufficient to know how much resources were actually consumed. This is because DSS does not always know or control which pods are running.



### Labeling of pods[¶](#labeling-of-pods "Permalink to this heading")


Every pod created directly or indirectly by DSS will carry a number of Kubernetes labels that can be used to trace the source of the resource usage.


The main labels are:


* `dataiku.com/dku-exec-submitter`: login of the user who submitted the Kubernetes object
* `dataiku.com/dku-execution-id`: A unique identifier of this particular submission. You’ll find this execution id in the matching CRU object (of type SINGLE\_K8S\_JOB or SPARK\_K8S\_JOB)
* `dataiku.com/dku-install-id`: Installation identifier of the DSS node which made the submission (can be found in install.ini)
* `dataiku.com/dku-execution-type`: A CRU context type (JOB\_ACTIVITY, WEBAPP\_BACKEND, …) which identifies the type of execution


These additional labels may or may not be available depending on the execution type:


* `dataiku.com/dku-project-key`
* `dataiku.com/dku-analysis-id`
* `dataiku.com/dku-mltask-id`
* `dataiku.com/dku-mltask-session-id`
* `dataiku.com/dku-webapp-id`
* `dataiku.com/dku-job-id`
* `dataiku.com/dku-activity-id`
* `dataiku.com/dku-apideployer-infra-id`
* `dataiku.com/dku-apideployer-service-id`
* `dataiku.com/dku-apideployer-deployment-id`


There are then two mechanisms for reporting of compute resource usage on Kubernetes:




### Method 1: builtin reporting[¶](#method-1-builtin-reporting "Permalink to this heading")


Depending on your cloud provider, your cluster may have builtin capabilities to centrally reporting on usage. For example, on GCP, GKE clusters can output their metrics (including labels) directly to BigQuery.




### Method 2: periodic reporting[¶](#method-2-periodic-reporting "Permalink to this heading")


If your cluster does not already have reporting of usage per pod, you can enable DSS periodic reporting.


Go to Administration \> Settings \> Misc and enable periodic reporting. You need to restart DSS for these changes to take effect.


DSS will then periodically query each Kubernetes cluster for list of pods and current resource consumption of each pod, and will emit a dedicated audit message containing the list of pods with their current resource consumption. The report will include the labels for each pod




### Joining data[¶](#joining-data "Permalink to this heading")


Whether you use builtin reporting or periodic reporting, you will usually want to join the data of the pods reporting with the data of the CRU.


This can be useful for example, in the case of Spark jobs that will have both `LOCAL_PROCESS` kind of CRU for the Spark driver and `SPARK_K8S_JOB` for the executors on Kubernetes.


The join key is the `executionId` which is present both on the `SPARK_K8S_JOB` CRU and on the pods labels.





Examples[¶](#examples "Permalink to this heading")
--------------------------------------------------


* This is the CRU audit message for the completion of a local webapp backend



```
{"msgType":"compute-resource-usage-complete","computeResourceUsage":{"localProcess":{"cmajorFaults":0,"vmHWMMB":89,"userTimeMS":4260,"csystemTimeMS":10,"rssMBSeconds":8186,"rssAnonMB":77,"pid":26171,"cuserTimeMS":0,"commandName":"/home/clement/data-702/bin/python","currentCPUUsage":0,"systemTimeMS":720,"majorFaults":0,"vmPeakMB":734,"vmSizeMB":674,"vmRSSMB":89,"vmDataMB":260},"context":{"projectKey":"DKU_CUSTOMER_LIFETIME_VALUE","type":"WEBAPP_BACKEND","authIdentifier":"admin","webappId":"hbVxkV9"},"startTime":1589188902662,"id":"BHUBDIdlaScYnC0A","endTime":1589188995709,"type":"LOCAL_PROCESS"}}

```


* This is the CRU audit message for the start of a Bokeh webapp backend on Kubernetes



```
{"msgType":"compute-resource-usage-start","computeResourceUsage":{"singleK8SJob":{"executionId":"bokeh-nko9a5dh","k8sClusterId":"__builtin__"},"context":{"projectKey":"DKU_CUSTOMER_LIFETIME_VALUE","type":"WEBAPP_BACKEND","authIdentifier":"admin","webappId":"hbVxkV9"},"startTime":1589190307086,"id":"gOQVLPfEJzJDTIhC","type":"SINGLE_K8S_JOB"}}

```


* This is a periodic Kubernetes status report



```
{"podsStatus":{"pods":[{"memoryMB":0,"cpuRequestMillis":1000,"name":"dssvprepcomputekddcuppreparedn-yakrbhk0-exec-1","namespace":"default","memoryLimitMB":3000,"annotations":{},"memoryRequestMB":3000,"cpuMillis":0,"labels":{"spark-exec-id":"1","dataiku.com/dku-job-id":"build_kddcup_prepared_2020-05-12t09-06-23.681","dataiku.com/dku-execution-type":"JOB_ACTIVITY","dataiku.com/dku-install-id":"2NeUCr7zmzBzRfY458M0xXB0","spark-app-selector":"spark-application-1589274392722","dataiku.com/dku-activity-id":"compute_kddcup_prepared_np","spark-role":"executor","dataiku.com/dku-execution-id":"shaker-v58i2ck","dataiku.com/dku-project-key":"kdd","dataiku.com/dku-exec-submitter":"admin"}},{"memoryMB":0,"cpuRequestMillis":1000,"name":"dssvprepcomputekddcuppreparedn-yakrbhk0-exec-2","namespace":"default","memoryLimitMB":3000,"annotations":{},"memoryRequestMB":3000,"cpuMillis":0,"labels":{"spark-exec-id":"2","dataiku.com/dku-job-id":"build_kddcup_prepared_2020-05-12t09-06-23.681","dataiku.com/dku-execution-type":"JOB_ACTIVITY","dataiku.com/dku-install-id":"2NeUCr7zmzBzRfY458M0xXB0","spark-app-selector":"spark-application-1589274392722","dataiku.com/dku-activity-id":"compute_kddcup_prepared_np","spark-role":"executor","dataiku.com/dku-execution-id":"shaker-v58i2ck","dataiku.com/dku-project-key":"kdd","dataiku.com/dku-exec-submitter":"admin"}},{"memoryMB":0,"cpuRequestMillis":100,"name":"dataiku-exec-remote-notebook-ntjtnnhc-z27lw","namespace":"default","annotations":{"kubernetes.io/limit-ranger":"LimitRanger plugin set: cpu request for container c"},"cpuMillis":0,"labels":{"job-name":"dataiku-exec-remote-notebook-ntjtnnhc","dataiku.com/dku-execution-type":"JUPYTER_NOTEBOOK_KERNEL","dataiku.com/dku-install-id":"2NeUCr7zmzBzRfY458M0xXB0","dataiku.com/dku-execution-id":"remote-notebook-ntjtnnhc","dataiku.com/dku-project-key":"dku_customer_lifetime_value","controller-uid":"2334b649-9386-11ea-893a-42010af0006a","jobgroup":"dataiku-exec","dataiku.com/dku-exec-submitter":"admin"}}]},"msgType":"kubernetes-cluster-usage-status","clusterId":"DKU_INSTANCE_DEFAULT"}

```