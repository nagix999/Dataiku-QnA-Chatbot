Training MLflow models[¶](#training-mlflow-models "Permalink to this heading")
==============================================================================


Just like any Python packages, you can use MLflow and the related frameworks in any DSS recipe, notebook, scenario, …


This allows you to train and save a MLflow model directly in DSS, which you can then [import as a saved model](importing.html) in order to leverage visual scoring, evaluation, drift analysis, …


Dataiku also features an integration of MLflow Experiment Tracking. When leveraging it, trained models are automatically stored in a configurable managed folder (see [Deploying MLflow models](../experiment-tracking/deploying.html)).



Training a model[¶](#training-a-model "Permalink to this heading")
------------------------------------------------------------------


You can train the MLflow model either outside of DSS, in a [python recipe](../../code_recipes/python.html), in a [python notebook](../../notebooks/python.html), or using [Experiment Tracking](../experiment-tracking/index.html)…


The list of frameworks supported by MLflow is available in the [MLflow documentation](https://mlflow.org/docs/1.30.0/models.html#built-in-model-flavors). These include the most common libraries such as PyTorch, TensorFlow, Scikit\-learn, etc.




Saving the MLflow model[¶](#saving-the-mlflow-model "Permalink to this heading")
--------------------------------------------------------------------------------


You need to export your model in a standard format, provided by MLflow Models, compatible with DSS.


MLflow provides a *save\_model* function for each supported [machine learning framework](https://mlflow.org/docs/1.30.0/models.html#built-in-model-flavors).


For instance, saving a Keras model using MLflow in a *model\_directory* will look like this:



```
... ommitted Keras model training code

import mlflow
mlflow.keras.save_model(model, model_directory)

```


You can then [import the exported model in DSS as a Saved Model](importing.html)




Python recipe[¶](#python-recipe "Permalink to this heading")
------------------------------------------------------------


The following snippet is a draft of a python recipe:


* taking a train and an evaluation dataset as inputs
* training a model
* saving it in MLflow format
* adding it as a new version to the saved model defined as output



```
import os
import shutil
import dataiku

from dataiku import recipe

client = dataiku.api_client()

project = client.get_project('PROJECT_ID')

# get train dataset
train_dataset = recipe.get_inputs_as_datasets()[0]
evaluation_dataset = recipe.get_inputs_as_datasets()[1]

# get output saved model
sm = project.get_saved_model(recipe.get_output_names()[0])

# get train dataset as a pandas dataframe
df = train_dataset.get_dataframe()

# get the path of a local managed folder where to temporarily save the trained model
mf = dataiku.Folder("local_managed_folder")
path = mf.get_path()

model_subdir = "my_subdir"
model_dir = os.path.join(path, model_subdir)

if os.path.exists(model_dir):
    shutil.rmtree(model_dir)

try:
    # ...train your model...

    # ...save it with package specific MLflow method (here, SKlearn)...
    mlflow.sklearn.save_model(my_model, model_dir)

    # import the model, creating a new version
    mlflow_version = sm.import_mlflow_version_from_managed_folder("version_name", "local_managed_folder", model_subdir, "code-env-with-mlflow-name")
finally:
    shutil.rmtree(model_dir)

# setting metadata (target name, classes,...)
mlflow_version.set_core_metadata(target_column, ["class0", "class1",...] , get_features_from_dataset=evaluation_dataset.name)

# evaluate the performance of this new version, to populate the performance screens of the saved model version in DSS
mlflow_version.evaluate(evaluation_dataset.name)

```



Note


[Experiment Tracking](../experiment-tracking/index.html) features logging of models in a configurable, and not necessarily local, managed folder.




Note


*local\_managed\_folder* should be a filesystem managed folder, on the DSS host, as we use the [`dataiku.Folder.get_path()`](https://developer.dataiku.com/latest/api-reference/python/managed-folders.html#dataiku.Folder.get_path "(in Developer Guide)") method to retrieve
its path on the local filesystem then compute a directory path where the ML package can save the trained model.




Note


As this recipe uses a local managed folder, it should not be executed in a container.




Note


The 4th parameter of the [`dataikuapi.dss.savedmodel.DSSSavedModel.import_mlflow_version_from_managed_folder()`](https://developer.dataiku.com/latest/api-reference/python/ml.html#dataikuapi.dss.savedmodel.DSSSavedModel.import_mlflow_version_from_managed_folder "(in Developer Guide)") is the name of the code environment to use when scoring the model.
If not specified, the code environment of the project will be resolved and used.


This code environment must contain the mlflow package and the packages of the machine learning library of your choice.




Note


A “Run checks” scenario step must be used to run the checks defined for the saved model on the metrics evaluated on the new version.




Warning


Recent versions of MLflow feature an ``mlflow.evaluate`` function. This function is different from `dataikuapi.dss.savedmodel.MLFlowVersionHandler.evaluate()`. Only the later will populate the interpretation screens of a saved model version in DSS.