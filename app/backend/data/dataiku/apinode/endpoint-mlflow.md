Exposing a MLflow model[¶](#exposing-a-mlflow-model "Permalink to this heading")
================================================================================



Note


See [Exposing a Visual Model](endpoint-std.html) to learn about exposing a visual model. Exposing a MLflow model relies on the same basis as a virtual model.




Deploying the model[¶](#deploying-the-model "Permalink to this heading")
------------------------------------------------------------------------


A MLflow model can be deployed using the API, as described in [Importing MLflow models](../mlops/mlflow-models/importing.html). It can also be deployed from an [Experiment Tracking](../mlops/experiment-tracking/index.html) run. See [Deploying MLflow models](../mlops/experiment-tracking/deploying.html) for more information.




Exposing the model[¶](#exposing-the-model "Permalink to this heading")
----------------------------------------------------------------------


Once deployed, a MLflow model can be exposed nearly like a visual model. Even so, the *MLflow Model output* is to be set in the endpoint settings. It can be either *raw data* or *restructured*. The first outputs directly what the MLflow model outputs while the second makes DSS try to restructure it (disable this in case of compatibility issues).


For example, a *SKLearn binary classification* typically outputs a prediction probability. *Restructure* enriches it to a prediction and probabilities for both label.


See [Using MLflow models in DSS](../mlops/mlflow-models/using.html).