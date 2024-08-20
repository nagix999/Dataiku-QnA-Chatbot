Extensions[¶](#extensions "Permalink to this heading")
======================================================


Dataiku’s experiment tracking features *extensions* to the MLflow Python API.


Some of those extensions are allowing actions that can only be performed through the CLI in standard MLflow.


In order to interact with these extensions, you must first obtain a reference to the [`dataikuapi.dss.mlflow.DSSMLflowExtension`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension "(in Developer Guide)") through [`dataikuapi.dss.project.DSSProject.get_mlflow_extension()`](https://developer.dataiku.com/latest/api-reference/python/projects.html#dataikuapi.dss.project.DSSProject.get_mlflow_extension "(in Developer Guide)")



```
import dataiku
import mlflow

project = dataiku.api_client().get_default_project()
mlflow_extension = project.get_mlflow_extension()

```


You can then use the following methods:


* list models and experiments: [`dataikuapi.dss.mlflow.DSSMLflowExtension.list_models()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.list_models "(in Developer Guide)") and [`dataikuapi.dss.mlflow.DSSMLflowExtension.list_experiments()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.list_experiments "(in Developer Guide)")
* rename experiments: [`dataikuapi.dss.mlflow.DSSMLflowExtension.rename_experiment()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.rename_experiment "(in Developer Guide)")
* restore experiments and runs: [`dataikuapi.dss.mlflow.DSSMLflowExtension.restore_experiment()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.restore_experiment "(in Developer Guide)") and [`dataikuapi.dss.mlflow.DSSMLflowExtension.restore_run()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.restore_run "(in Developer Guide)")
* clear experiments marked for deletion (*garbage collect*): [`dataikuapi.dss.mlflow.DSSMLflowExtension.garbage_collect()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.garbage_collect "(in Developer Guide)")


Others are more DSS specific:


* clean the runtime experiment db for a DSS project: [`dataikuapi.dss.mlflow.DSSMLflowExtension.clean_experiment_tracking_db()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.clean_experiment_tracking_db "(in Developer Guide)")
* set the inference info of a run (to make scoring or evaluation of a model easier): [`dataikuapi.dss.mlflow.DSSMLflowExtension.set_run_inference_info()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.set_run_inference_info "(in Developer Guide)")
* create a DSS dataset of the experiment tracking runs of a project: [`dataikuapi.dss.mlflow.DSSMLflowExtension.create_experiment_tracking_dataset()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.create_experiment_tracking_dataset "(in Developer Guide)")
* deploy a model from a run: [`dataikuapi.dss.mlflow.DSSMLflowExtension.deploy_run_model()`](https://developer.dataiku.com/latest/api-reference/python/experiment-tracking.html#dataikuapi.dss.mlflow.DSSMLflowExtension.deploy_run_model "(in Developer Guide)")