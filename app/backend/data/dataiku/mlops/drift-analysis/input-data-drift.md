Input Data Drift[¶](#input-data-drift "Permalink to this heading")
==================================================================


Input Data Drift analyzes the distribution of features in the evaluated data. If the distribution of features changes significantly, this likely indicates that the underlying data has significantly changed, which could signal a concept drift.


You do not need to have the ground truth / labels to compute Input Data Drift.



Generating Input Data Drift[¶](#generating-input-data-drift "Permalink to this heading")
----------------------------------------------------------------------------------------


Input Data drift is computed and stored in a Model Evaluation within a Model Evaluation Store.
In order to create this Model Evaluation, there are 2 options: using an Evaluate recipe or using a Standalone Evaluate recipe. The Evaluate recipe takes two inputs: a dataset containing the most recent data (also called Evaluation Dataset) and a Saved Model. The Standalone Evaluation recipe takes two datasets: an evaluation dataset, as the Evaluate recipe, and a Reference dataset.
The Evaluate recipe is the most commonly used for model monitoring. The Standalone Evaluate recipe is used to compute pure data drift, without model involved, or to perform drift analysis of models unknown to Dataiku.


In the case of the Evaluate Recipe, the drift is computed between the Evaluation dataset and the test set of the Saved Model Version indicated in the recipe configuration.
In the case of the Standalone Evaluate Recipe, the drift is computed between the Evaluation dataset and the Reference dataset.


![../../_images/me-flow-er.png](../../_images/me-flow-er.png)
![../../_images/me-flow-ser.png](../../_images/me-flow-ser.png)

Global Drift Score[¶](#global-drift-score "Permalink to this heading")
----------------------------------------------------------------------


Global drift score features the same drift model used to compute the “data drift” metric displayed in the “Evaluations” tab of an Evaluation store. In addition to the accuracy of the drift model are also available:


* a lower and upper bound
* a binomial test on drift detection


![../../_images/drift-model.png](../../_images/drift-model.png)
The drift model is trained on the concatenation of the samples from the related model version training and from the evaluated dataset. Those samples may be truncated to match the size of the other sample to obtain 50% of data from each dataset. The drift model predicts whether a row belongs to one or another sample. The higher the accuracy is, the better the drift model can recognize where a row comes from, and so the more likely has the data.




Univariate Data Drift[¶](#univariate-data-drift "Permalink to this heading")
----------------------------------------------------------------------------


Univariate data drift performs this operation per feature. Several standard feature drifting metrics are computed by Dataiku and added to the Model Evaluation Store metrics. Additionally, the Model Evaluation will show you the graphical distribution of data and help you spot the features that are subject to drifting.


![../../_images/univariate-data-drift.png](../../_images/univariate-data-drift.png)
When running, the recipe will automatically detect the type of drift to use. Dataiku natively supports three handlings: numerical, categorical or textual.


![../../_images/er-feature-handling.png](../../_images/er-feature-handling.png)
If you want to force a specific handling for a column, this can be done in the recipe configuration, in the ‘Advanced’ tab. In this tab, you can force a type or exclude a specific feature from the drift computation.


**Note on textual drift**


Text drifting is not processed similarly as numerical \& categorical features in Drift computation.


As a start, text drifting works only with the Standalone Evaluate Recipe. It needs to be explicitly activated and configured in the recipe with an Embeddings model.


![../../_images/ser-text-drift.png](../../_images/ser-text-drift.png)
When computing metrics, the following rules are applied:


* Univariate text drift metrics are computed on text features using specific metrics: Euclidian distance \<https://www.kaggle.com/code/adityasingh3519/distance\-measures\-for\-machine\-learning\#Euclidean\-Distance\>, Cosine similarity \<https://www.sciencedirect.com/topics/computer\-science/cosine\-similarity\> and a dedicated Classifier
* The text columns are NOT counted for the global data drift score, due to their specific nature




Feature Drift Importance[¶](#feature-drift-importance "Permalink to this heading")
----------------------------------------------------------------------------------


Lastly, the Feature drift importance scatter plot shows feature importance for the original model versus feature importance for the (data classifying) drift model.


![../../_images/feature-drift-importance.png](../../_images/feature-drift-importance.png)