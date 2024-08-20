Importing MLflow models[¶](#importing-mlflow-models "Permalink to this heading")
================================================================================


You can import an [MLflow Model](https://www.mlflow.org/docs/1.30.0/models.html) into DSS as a Saved Model:


* through the Python API (see [`dataikuapi.dss.project.DSSProject.create_mlflow_pyfunc_model()`](https://developer.dataiku.com/latest/api-reference/python/projects.html#dataikuapi.dss.project.DSSProject.create_mlflow_pyfunc_model "(in Developer Guide)"))
* using the “Deploy” action available for logged models in Experiment Tracking’s runs (see [Deploying MLflow models](../experiment-tracking/deploying.html))
* import an MLflow model from a Databricks registry ( [Workspace Registry](https://docs.databricks.com/en/mlflow/model-registry.html) or [Unity Catalog](https://docs.databricks.com/en/data-governance/unity-catalog/index.html) )



Importing an MLflow model through the Python API[¶](#importing-an-mlflow-model-through-the-python-api "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------------


This section focuses on the deployment through the API. It assumes that you already have a MLflow model in a *model\_directory*, i.e. a local folder on the local filesystem, or a *Managed Folder*.


This section also assumes that you already have a [code environment](../../code-envs/index.html) including core packages, MLflow, scikit\-learn, statsmodels, as well as the Machine Learning package you used to train your model, in the version recommended by MLflow. The Python version of this code environment should be 3\.7 or higher. Please refer to [Limitations and supported versions](limitations.html) for information on supported versions.


The steps are then:


1. Create a DSS Saved Model using [`dataikuapi.dss.project.DSSProject.create_mlflow_pyfunc_model()`](https://developer.dataiku.com/latest/api-reference/python/projects.html#dataikuapi.dss.project.DSSProject.create_mlflow_pyfunc_model "(in Developer Guide)")
2. Import the MLflow model into the Saved Model using [`dataikuapi.dss.savedmodel.DSSSavedModel.import_mlflow_version_from_path()`](https://developer.dataiku.com/latest/api-reference/python/ml.html#dataikuapi.dss.savedmodel.DSSSavedModel.import_mlflow_version_from_path "(in Developer Guide)") or [`dataikuapi.dss.savedmodel.DSSSavedModel.import_mlflow_version_from_managed_folder()`](https://developer.dataiku.com/latest/api-reference/python/ml.html#dataikuapi.dss.savedmodel.DSSSavedModel.import_mlflow_version_from_managed_folder "(in Developer Guide)")
3. Use the returned MLflow handler to set metadata and evaluate the DSS Saved Model: `dataikuapi.dss.savedmodel.MLFlowVersionHandler()`



Note


You may specify a code environment when importing a project. If not, the **current** code environment defined for the project will be resolved and used.




```
import dataiku

 # if using API from inside DSS
client = dataiku.api_client()

project = client.get_project("PROJECT_ID")

# 1. Create DSS Saved Model
saved_model = project.create_mlflow_pyfunc_model(name, prediction_type)

# 2. Load the MLflow Model as a new version of DSS Saved Model
## either from DSS host local filesystem:
mlflow_version = saved_model.import_mlflow_version_from_path('version_id', model_directory, 'code-environment-to-use')
## or from a DSS managed folder:
mlflow_version = saved_model.import_mlflow_version_from_managed_folder('version_id', 'managed_folder_id', path_of_model, 'code-environment-to-use')

# 3. Evaluate the saved model version
# (Optional, only for regression or classification models with tabular input data, mandatory to have access to the saved model performance tab)
mlflow_version.set_core_metadata(target_column, classes, evaluation_dataset_name)
mlflow_version.evaluate(evaluation_dataset_name)

```



Note


You may also use the API to import models trained in experiment runs, as any model stored in a managed folder.




Note


**Features Handling:** For MLflow Models, string and boolean features will be considered **Categorical**.





Importing an MLflow model from a Databricks registry[¶](#importing-an-mlflow-model-from-a-databricks-registry "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------------------------------


Another option to import an MLflow model is to select it directly in your Databricks registry from the Interface and ask Dataiku to import it for you.


Your first step is to ensure you have a valid connection to your Databricks workspace.
This is done by an administrator in the Administration \> Connections, by creating a connection of type “Databricks Model Depl.”.


![../../_images/dbx-import-conn.png](../../_images/dbx-import-conn.png)
Once this connection is created and working, you can go to any project, in the Saved Models section.
Click on the button ‘\+NEW SAVED MODEL’ and select the option to create a custom model.


Fill in the information and create the Saved Model.
At this point, you have an empty shell to add versions to. We are creating a version by importing it from Databricks, but you can mix any of the options mentioned at the top of this article (for example, the first version might be imported from Databricks but the next one might come from Dataiku Experiment Tracking).


Next, from the Saved Model screen, click on the button to create a Saved Model Version from a Databricks registry.


![../../_images/dbx-import-smv-create-start.png](../../_images/dbx-import-smv-create-start.png)