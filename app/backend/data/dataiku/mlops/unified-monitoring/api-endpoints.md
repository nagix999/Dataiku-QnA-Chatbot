API Endpoints[¶](#api-endpoints "Permalink to this heading")
============================================================


The *API Endpoints* screen lists all endpoints that Unified Monitoring can detect.


Unified Monitoring can monitor:


* **Endpoints of API Services**: API Services deployed to an infrastructure defined in the Deployer, including third\-party infrastructures (Amazon SageMaker, Google Vertex AI, Microsoft Azure Machine Learning, Databricks or Snowflake Snowpark Container Services). Also see [First API (with API Deployer)](../../apinode/first-service-apideployer.html).
* **External Endpoints**: Endpoints deployed to third\-party infrastructures, not managed by Dataiku. In order to see those endpoints, you need to declare additional “Monitoring Scopes” (only available to administrators) as detailed in [Unified Monitoring Settings](unified-monitoring-settings.html).


Every API Endpoint has a “Global Status”, a “Deployment Status” and may have a “Model Status”, if Unified Monitoring was able to link this endpoint to a DSS Saved Model.


Unified Monitoring may also be able to display “Response time”, “Volume” and “Activity”, if available for the endpoint.



Deployment Status[¶](#deployment-status "Permalink to this heading")
--------------------------------------------------------------------


The Deployment Status of an API Endpoint is the health status of the endpoint, as reported by the underlying infrastructure.




Model Status[¶](#model-status "Permalink to this heading")
----------------------------------------------------------


The Model Status of an API Endpoint is the worst model status from all models
that could be matched to this API Endpoint.


Please see [Understanding Model Status](model-status.html) for more details.



Note


For External Endpoints, the Model Status can be computed only if this endpoint has a corresponding [External Model](../external-models/index.html)





Global Status[¶](#global-status "Permalink to this heading")
------------------------------------------------------------


In addition to the two statuses detailed in the previous sections, every API Endpoint has a “Global status”,
which is computed by taking the worst of “Deployment Status” and “Model Status”.




Activity Metrics[¶](#activity-metrics "Permalink to this heading")
------------------------------------------------------------------


For every API Endpoint, Unified Monitoring will display activity metrics, if available.



Note


Activity metrics are retrieved on a best\-effort basis, as there are a number of scenarios where DSS might
not be able to retrieve anything, including (but not limited to):


* Permission issues with the monitoring solution of the third\-party cloud provider.
* For Dataiku endpoints, disabling or not correctly configuring the “Monitoring” section of the infrastructure.
* For External endpoints, disabling or not correctly configuring the monitoring solution of the third\-party cloud provider.





No longer available External Endpoints[¶](#no-longer-available-external-endpoints "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------


If an External Endpoint, once monitored, is no longer detectable by Unified
Monitoring (possibly due to its deletion from the cloud provider), it will be
displayed in an error state.


To remove such API Endpoints from Unified Monitoring, click on the relevant row
and click on the “Remove” button in the modal window that appears (only
available to administrators).