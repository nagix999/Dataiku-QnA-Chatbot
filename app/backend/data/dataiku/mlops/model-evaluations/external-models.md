Evaluating other models[¶](#evaluating-other-models "Permalink to this heading")
================================================================================



* [Configuration of the standalone evaluation recipe](#configuration-of-the-standalone-evaluation-recipe)


	+ [Labels](#labels)
	+ [Sampling](#sampling)




Note


This is a very advanced topic



It can happen that you have models that are completely custom, i.e. they are neither trained using [DSS Visual Machine Learning](../../machine-learning/supervised/index.html) nor [imported from MLflow models](../mlflow-models/index.html).


You can still benefit from the Model Evaluation framework of DSS for these models, and hence benefit from:


* Models results screens
* Drift analysis


Those models must be evaluated using a Standalone Evaluation Recipe (SER).


A SER has one input, the evaluation dataset, and one output, an Evaluation Store.


![../../_images/standalone-evaluation-recipe-flow.png](../../_images/standalone-evaluation-recipe-flow.png)
Each time the evaluation recipe runs, a new Model Evaluation is added into the Evaluation Store.


Since there is no model for a Standalone Evaluation Recipe, the evaluation dataset (input of the SER) must have a column containing the predicted values. In most cases, it also needs to have a column containing the “ground truth” (also known as the labels). However, even if you don’t have the ground truth, you can still use the Standalone Evaluation Recipe. In this case, results screens will not be available (because there is no ground truth to compare to), but input data drift analysis and prediction drift analysis remain possible.



[Configuration of the standalone evaluation recipe](#id1)[¶](#configuration-of-the-standalone-evaluation-recipe "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------------------------


![../../_images/standalone-evaluation-recipe.png](../../_images/standalone-evaluation-recipe.png)