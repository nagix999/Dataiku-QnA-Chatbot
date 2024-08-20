Dataiku Projects[¶](#dataiku-projects "Permalink to this heading")
==================================================================


The *Dataiku Projects* screen lists all deployed projects, i.e. project bundles that are deployed and active on an automation node.


By default, all project infrastructures are monitored. You can exclude an infrastructure from Unified Monitoring by going to *Settings* (only available to administrators). Also see [Unified Monitoring Settings](unified-monitoring-settings.html)


Every project has a *Deployment Status*, *Model Status*, *Execution Status* and *Global Status*



Deployment Status[¶](#deployment-status "Permalink to this heading")
--------------------------------------------------------------------


This is the health status of the deployment, as reported by the Deployer.




Model Status[¶](#model-status "Permalink to this heading")
----------------------------------------------------------


The Model Status of a project represents the worst model status aggregated from all models in this project.


Please see [Understanding Model Status](model-status.html) for more details.




Execution Status[¶](#execution-status "Permalink to this heading")
------------------------------------------------------------------


The Execution Status of a project represents the worst execution status of all **enabled** scenarios in this project.




Global Status[¶](#global-status "Permalink to this heading")
------------------------------------------------------------


In addition to the three statuses detailed in the previous sections, every project has a “Global status”,
which is computed by taking the worst of “Deployment Status”, “Model Status” and “Execution Status”.