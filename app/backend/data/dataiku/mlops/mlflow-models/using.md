Using MLflow models in DSS[¶](#using-mlflow-models-in-dss "Permalink to this heading")
======================================================================================



Scoring[¶](#scoring "Permalink to this heading")
------------------------------------------------


[Scoring recipe](../../machine-learning/supervised/explanations.html#explanations-scoring-recipe-label) is available for MLflow saved models.


Two modes are available for scoring with an MLflow Saved Model:


1. Direct output mode where DSS outputs directly what the MLflow model outputs.
2. Restructure mode where DSS tries to interpret the model output.




Evaluation[¶](#evaluation "Permalink to this heading")
------------------------------------------------------


You can evaluate versions of MLflow Saved Models on any valid DSS dataset. Related functionalities are available:


* Performance analysis
* [Model Evaluation Store](../model-evaluations/index.html)
* [Model Comparison](../model-comparisons/index.html)