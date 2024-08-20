MLflow Models[¶](#mlflow-models "Permalink to this heading")
============================================================


[MLflow](https://www.mlflow.org) is an open\-source platform for managing the machine learning lifecycle.


MLflow offers a standard format for packaging trained machine learning models: [MLflow Models](https://www.mlflow.org/docs/latest/models.html).


You can import MLflow models in DSS, as DSS saved models. This allows you to benefit from all of the ML management capabilities of DSS on your existing MLflow models:


* Scoring datasets using a [scoring recipe](../../machine-learning/supervised/explanations.html#explanations-scoring-recipe-label)
* Deploying the model in a bundle on an automation node. See [Production deployments and bundles](../../deployment/index.html)
* Deploying the model for real\-time scoring, using the [API node](../../apinode/index.html)
* Managing multiple versions of the models
* Evaluating the performance of a classification or regression model on a labeled dataset, including all results screens
* Comparing multiple models or multiple versions of the model, using [Model Comparisons](../model-comparisons/index.html)
* Analyzing performance and evaluating models [on other datasets](../model-evaluations/index.html)
* [Analyzing drift](../drift-analysis/index.html) on the MLflow model
* [Governing the MLflow model using the Govern Node](../../governance/index.html)



Note


The MLflow model import feature is supported, and Dataiku tests it with a variety of different MLflow models.
Dataiku makes best effort to ensure that the advanced capabilities of its MLflow import support are compatible with
the widest possible variety of MLflow models.


However, MLflow imposes extremely few constraints on models, and different MLflow models are allowed to behave in arbitrary non\-standard ways and to return completely different kind of data.


It is thus not possible to guarantee unfettered ability to use all features (notably advanced features such as performance evaluation, model comparison or drift analysis) with all types of models.




* [Importing MLflow models](importing.html)
* [Using MLflow models in DSS](using.html)
* [Training MLflow models](training.html)
* [Limitations and supported versions](limitations.html)