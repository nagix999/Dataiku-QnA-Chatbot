Models evaluations[¶](#models-evaluations "Permalink to this heading")
======================================================================


Evaluating a machine learning model consists of computing its performance and behavior on a set of data called the Evaluation set. Model evaluations are the cornerstone of MLOps capabilities. They permit [Drift analysis](../drift-analysis/index.html), [Model Comparisons](../model-comparisons/index.html) and [automating retraining of models](automating.html)



* [Concepts](concepts.html)
	+ [When training](concepts.html#when-training)
	+ [Subsequent evaluations](concepts.html#subsequent-evaluations)
* [Evaluating DSS models](dss-models.html)
	+ [Configuration of the evaluation recipe](dss-models.html#configuration-of-the-evaluation-recipe)
		- [Labels](dss-models.html#labels)
		- [Sampling](dss-models.html#sampling)
	+ [Limitations](dss-models.html#limitations)
* [Evaluating other models](external-models.html)
	+ [Configuration of the standalone evaluation recipe](external-models.html#configuration-of-the-standalone-evaluation-recipe)
		- [Labels](external-models.html#labels)
		- [Sampling](external-models.html#sampling)
* [Analyzing evaluation results](analyzing-evaluations.html)
	+ [The evaluations comparison](analyzing-evaluations.html#the-evaluations-comparison)
	+ [Model Evaluation details](analyzing-evaluations.html#model-evaluation-details)
	+ [Using evaluation labels](analyzing-evaluations.html#using-evaluation-labels)
* [Automating model evaluations and drift analysis](automating.html)
	+ [Metrics and Checks](automating.html#metrics-and-checks)
	+ [Scenarios and feedback loop](automating.html#scenarios-and-feedback-loop)
	+ [Feedback loop](automating.html#feedback-loop)