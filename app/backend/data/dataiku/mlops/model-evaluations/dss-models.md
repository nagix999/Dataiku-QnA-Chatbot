Evaluating DSS models[¶](#evaluating-dss-models "Permalink to this heading")
============================================================================



* [Configuration of the evaluation recipe](#configuration-of-the-evaluation-recipe)


	+ [Labels](#labels)
	+ [Sampling](#sampling)
* [Limitations](#limitations)



To evaluate a DSS model, you must create an Evaluation recipe.


An Evaluation recipe takes as inputs:


* an evaluation dataset
* a model


![../../_images/evaluation-recipe-flow.png](../../_images/evaluation-recipe-flow.png)
An Evaluation Recipe can have up to three outputs:


* an Evaluation Store, containing the main Model Evaluation and all associated result screens
* an output dataset, containing the input features, prediction and correctness of prediction for each record
* a metrics dataset, containing just the performance metrics for this evaluation (i.e. it’s a subset of the Evaluation Store)


Any combination of those three outputs is valid.


Each time the evaluation recipe runs, a new Model Evaluation is added into the Evaluation Store.



Note


This applies both to models trained using [DSS visual machine learning](../../machine-learning/supervised/index.html) and [imported MLflow models](../mlflow-models/index.html)




[Configuration of the evaluation recipe](#id1)[¶](#configuration-of-the-evaluation-recipe "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------


![../../_images/evaluation-recipe.png](../../_images/evaluation-recipe.png)

[Limitations](#id4)[¶](#limitations "Permalink to this heading")
----------------------------------------------------------------


* The model must be a non\-partitioned classification or regression model
* Non\-tabular MLflow inputs are not supported
* Computer vision models are not supported
* Deep Learning models are not supported
* Time series forecasting models are not supported