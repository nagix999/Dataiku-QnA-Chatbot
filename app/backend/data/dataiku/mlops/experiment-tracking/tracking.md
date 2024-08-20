Tracking experiments in code[¶](#tracking-experiments-in-code "Permalink to this heading")
==========================================================================================



* [Initial setup](#initial-setup)
* [Quick start sample](#quick-start-sample)
* [Tracking API](#tracking-api)
* [Autologging](#autologging)
* [Other topics](#other-topics)


	+ [Logging into another project](#logging-into-another-project)
	+ [Experiment tracking outside DSS](#experiment-tracking-outside-dss)
	+ [Usage without context manager](#usage-without-context-manager)
	+ [Cautions](#cautions)
	+ [Supported versions](#supported-versions)




[Initial setup](#id1)[¶](#initial-setup "Permalink to this heading")
--------------------------------------------------------------------


Before you can track experiments, you need to create a [Managed Folder](../../connecting/managed_folders.html) in the project. The managed folder will be used to store artefacts. Take note of the managed folder id (8 alphanum characters, visible in the URL).




[Quick start sample](#id2)[¶](#quick-start-sample "Permalink to this heading")
------------------------------------------------------------------------------



```
import dataiku

project = dataiku.api_client().get_default_project()
managed_folder = project.get_managed_folder('A_MANAGED_FOLDER_ID')

with project.setup_mlflow(managed_folder=managed_folder) as mlflow_handle:

    # Note: if you don't call this (i.e. when no experiment is specified), the default one is used
    mlflow_handle.set_experiment("My first experiment")

    with mlflow_handle.start_run(run_name="my_run"):
        # ...your MLflow code...
        mlflow_handle.log_param("a", 1)
        mlflow_handle.log_metric("b", 2)

        # This uses the regular MLflow APIs

```




[Tracking API](#id3)[¶](#tracking-api "Permalink to this heading")
------------------------------------------------------------------


DSS uses the [MLflow Tracking](https://www.mlflow.org/docs/1.30.0/tracking.html) API. Please refer to the MLflow Tracking documentation.




[Autologging](#id4)[¶](#autologging "Permalink to this heading")
----------------------------------------------------------------


MLflow Tracking comes with a very useful feature: autologging, which automatically logs metrics, parameters, and models for common machine\-learning packages without the need for explicit log statements.


Leveraging MLflow autologging requires no additional configuration of the DSS integration. Some machine learning packages, such as PyTorch, may however [require additional packages](https://www.mlflow.org/docs/1.30.0/python_api/mlflow.pytorch.html).


In the following sample, we activate MLflow autologging for a SKlearn model. Metrics and artifacts are automatically logged.



```
import dataiku
import mlflow
import sklearn.linear_model.ElasticNet

project = dataiku.api_client().get_default_project()
managed_folder = project.get_managed_folder('A_MANAGED_FOLDER_ID')

with project.setup_mlflow(managed_folder=managed_folder) as mlflow_handle:
    mlflow_handle.set_experiment("Let's autolog")

    # activate Mflow autologging
    mlflow_handle.sklearn.autolog()

    with mlflow_handle.start_run(run_name="my_run"):
        lr = ElasticNet(alpha=alpha, l1_ratio=l1_ratio, random_state=42)
        lr.fit(train_x, train_y)

```




[Other topics](#id5)[¶](#other-topics "Permalink to this heading")
------------------------------------------------------------------



### [Logging into another project](#id6)[¶](#logging-into-another-project "Permalink to this heading")


You can log experiments into another project than the current one by using:



```
project = dataiku.api_client().get_project("MYOTHERPROJECT")

```




### [Experiment tracking outside DSS](#id7)[¶](#experiment-tracking-outside-dss "Permalink to this heading")


MLflow Tracking integration is configured through the `dataikuapi` package. See [Using the APIs outside of DSS](https://developer.dataiku.com/latest/getting-started/outside-usage.html "(in Developer Guide)") for how to use it from outside of DSS




### [Usage without context manager](#id8)[¶](#usage-without-context-manager "Permalink to this heading")


While the usage of the context manager (“with” statement) is recommended, it is not mandatory. You can use this instead:



```
import dataiku
import mlflow

project = dataiku.api_client().get_default_project()
managed_folder = project.get_managed_folder('A_MANAGED_FOLDER_ID')

mlflow_handle = project.setup_mlflow(managed_folder=managed_folder)

mlflow.set_experiment("My first experiment")

with mlflow.start_run(run_name="my_run"):
    # ...your MLflow code...
    mlflow.log_param("a", 1)
    mlflow.log_metric("b", 2)

mlflow_handle.clear()

```




### [Cautions](#id9)[¶](#cautions "Permalink to this heading")


If you do not set up the integration before using the MLflow client, or use the client after clearing the integration, it may fall back to its default mode: writing experiment data as the current user, on the filesystem of the host of the DSS server.




### [Supported versions](#id10)[¶](#supported-versions "Permalink to this heading")


See [Limitations and supported versions](../mlflow-models/limitations.html) for supported MLflow versions.