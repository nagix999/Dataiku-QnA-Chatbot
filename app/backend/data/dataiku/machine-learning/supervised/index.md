Prediction (Supervised ML)[¶](#prediction-supervised-ml "Permalink to this heading")
====================================================================================


Prediction (aka supervised machine learning) is used when you have a **target** variable that you want to predict. For instance, you may want to predict the price of apartments in New York City using the size of the apartments, their location and amenities in the building. In this case, the price of the apartments is the **target**, while the size of the apartments, their location and the amenities are the **features** used for prediction.



Note


Our [Machine Learning Basics tutorial](https://knowledge.dataiku.com/latest/ml-analytics/model-design/ml-basics/tutorial-index.html) provides a step\-by\-step explanation of how to create your first prediction model and deploy it for scoring of new records.


The rest of this document assumes that you have followed this tutorial.



Use the following steps to quickly start your first prediction model in DSS:


* Go to the Flow for your project
* Click on the dataset you want to use
* Select the *Lab*
* Select *Quick model* then *Prediction*
* Choose your target variable (one of the columns) and *Automated Machine Learning*
* Choose *Quick Prototypes* and click *Create*
* Click *Train*



* [Prediction settings](settings.html)
	+ [Target settings](settings.html#target-settings)
		- [Prediction type](settings.html#prediction-type)
		- [Multiclass classification](settings.html#multiclass-classification)
		- [Partitioned Models](settings.html#partitioned-models)
	+ [Settings: Train / Test set](settings.html#settings-train-test-set)
		- [Splitting the dataset](settings.html#splitting-the-dataset)
			* [Subsampling](settings.html#subsampling)
			* [Splitting](settings.html#splitting)
				+ [Time ordering](settings.html#time-ordering)
				+ [K\-fold cross\-test](settings.html#k-fold-cross-test)
		- [Explicit extracts](settings.html#explicit-extracts)
	+ [Settings: Metrics](settings.html#settings-metrics)
		- [Model optimization](settings.html#model-optimization)
			* [Custom](settings.html#custom)
			* [Multiclass ROC AUC](settings.html#multiclass-roc-auc)
		- [Threshold optimization](settings.html#threshold-optimization)
	+ [Settings: Features handling](settings.html#settings-features-handling)
	+ [Settings: Feature generation](settings.html#settings-feature-generation)
	+ [Settings: Feature reduction](settings.html#settings-feature-reduction)
	+ [Settings: Algorithms](settings.html#settings-algorithms)
	+ [Settings: Hyperparameters optimization](settings.html#settings-hyperparameters-optimization)
	+ [Setting: Weighting strategy](settings.html#setting-weighting-strategy)
	+ [Setting: Probability calibration](settings.html#setting-probability-calibration)
	+ [Misc: GPU support for XGBoost](settings.html#misc-gpu-support-for-xgboost)
* [Prediction Results](results.html)
	+ [Decision tree analysis](results.html#decision-tree-analysis)
	+ [Feature importance](results.html#feature-importance)
		- [Shapley feature importance](results.html#shapley-feature-importance)
			* [Limitations](results.html#limitations)
		- [Gini feature importance](results.html#gini-feature-importance)
	+ [Regression coefficients](results.html#regression-coefficients)
	+ [Partial dependence](results.html#partial-dependence)
	+ [Subpopulation analysis](results.html#subpopulation-analysis)
	+ [Individual explanations of predictions](results.html#individual-explanations-of-predictions)
	+ [Metrics and assertions](results.html#metrics-and-assertions)
		- [Learning Curves](results.html#learning-curves)
		- [Assertions](results.html#assertions)
* [Individual prediction explanations](explanations.html)
	+ [In the model results](explanations.html#in-the-model-results)
	+ [With the scoring recipe](explanations.html#with-the-scoring-recipe)
	+ [Computation methods](explanations.html#computation-methods)
		- [Method 1: Based on the Shapley values](explanations.html#method-1-based-on-the-shapley-values)
		- [Method 2: Based on ICE](explanations.html#method-2-based-on-ice)
		- [More about the computation methods](explanations.html#more-about-the-computation-methods)
	+ [Limitations](explanations.html#limitations)
* [Interactive scoring](interactive-scoring.html)
	+ [Edit feature values](interactive-scoring.html#edit-feature-values)
	+ [Comparator](interactive-scoring.html#comparator)
	+ [Publishing on a dashboard](interactive-scoring.html#publishing-on-a-dashboard)
	+ [Limitations](interactive-scoring.html#limitations)
* [Model exploration](model-exploration.html)
	+ [Counterfactual explanations (for classifiers)](model-exploration.html#counterfactual-explanations-for-classifiers)
		- [Introduction](model-exploration.html#introduction)
		- [What makes good counterfactual explanations?](model-exploration.html#what-makes-good-counterfactual-explanations)
		- [Setting a target](model-exploration.html#setting-a-target)
			* [Binary classification](model-exploration.html#binary-classification)
			* [Multiclass classification](model-exploration.html#multiclass-classification)
	+ [Outcome optimization (for regression models)](model-exploration.html#outcome-optimization-for-regression-models)
		- [Introduction](model-exploration.html#id1)
		- [Setting a target](model-exploration.html#id2)
	+ [Setting constraints](model-exploration.html#setting-constraints)
	+ [Interpreting results](model-exploration.html#interpreting-results)
		- [Plausibility](model-exploration.html#plausibility)
	+ [Limitations](model-exploration.html#limitations)
* [ML Assertions](ml-assertions.html)
	+ [Defining assertions](ml-assertions.html#defining-assertions)
	+ [Assertion’s result](ml-assertions.html#assertion-s-result)
	+ [No matching row](ml-assertions.html#no-matching-row)
	+ [Assertions’ metrics \& Checks](ml-assertions.html#assertions-metrics-checks)
	+ [Evaluation recipe](ml-assertions.html#evaluation-recipe)
	+ [Limitations](ml-assertions.html#limitations)
* [Model fairness report](model-fairness-report.html)
	+ [Setup](model-fairness-report.html#setup)
	+ [Using model fairness report](model-fairness-report.html#using-model-fairness-report)
		- [Inputs](model-fairness-report.html#inputs)
		- [Metrics and Charts](model-fairness-report.html#metrics-and-charts)
* [Model error analysis](model-error-analysis.html)
	+ [Principle](model-error-analysis.html#principle)
	+ [Setup](model-error-analysis.html#setup)
	+ [Using model error analysis](model-error-analysis.html#using-model-error-analysis)
		- [Error Tree](model-error-analysis.html#error-tree)
		- [Nodes and Charts](model-error-analysis.html#nodes-and-charts)
		- [Template Notebook](model-error-analysis.html#template-notebook)
* [Prediction Intervals](prediction-intervals.html)
	+ [Introduction](prediction-intervals.html#introduction)
	+ [How does it work](prediction-intervals.html#how-does-it-work)
		- [Coverage level](prediction-intervals.html#coverage-level)
* [Prediction Overrides](prediction-overrides.html)
	+ [Introduction](prediction-overrides.html#introduction)
	+ [Defining overrides](prediction-overrides.html#defining-overrides)
		- [The rule](prediction-overrides.html#the-rule)
		- [The outcome](prediction-overrides.html#the-outcome)
	+ [Override Metrics](prediction-overrides.html#override-metrics)
	+ [Overrides Extra Info Column](prediction-overrides.html#overrides-extra-info-column)
	+ [Limitations](prediction-overrides.html#limitations)