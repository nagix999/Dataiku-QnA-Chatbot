Drift analysis[¶](#drift-analysis "Permalink to this heading")
==============================================================


When models are deployed and used in production, over time, the conditions in real life may drift compared to what was the reality at train time and thus have a possibly negative impact on how the model behaves. This is known as Model Drift.


There can be data drift, i.e. change in the statistic distribution of features, or concept drift, which is due to a modification of the relationship between features and the target.


To monitor model drift, it is necessary to gather new data from the production environments and possibly have ground truth associated with it. See [Automating model evaluations and drift analysis](../model-evaluations/automating.html) for more details.


When you are viewing a [Model Evaluation in a Model Evaluation Store](../model-evaluations/analyzing-evaluations.html), in addition to the normal result screens, you have access to a “Drift” section, allowing you to perform three kind of drift analysis:


Drift analysis is always about comparing data on the current Model Evaluation compared to a *reference*.



* [Drift reference](reference.html)
* [Sampling strategies for drift analysis](sampling.html)
	+ [Definitions](sampling.html#definitions)
	+ [Data drift](sampling.html#data-drift)
	+ [Prediction drift](sampling.html#prediction-drift)
	+ [Performance drift](sampling.html#performance-drift)
* [Input Data Drift](input-data-drift.html)
	+ [Generating Input Data Drift](input-data-drift.html#generating-input-data-drift)
	+ [Global Drift Score](input-data-drift.html#global-drift-score)
	+ [Univariate Data Drift](input-data-drift.html#univariate-data-drift)
	+ [Feature Drift Importance](input-data-drift.html#feature-drift-importance)
* [Prediction Drift](prediction-drift.html)
* [Performance Drift](performance-drift.html)