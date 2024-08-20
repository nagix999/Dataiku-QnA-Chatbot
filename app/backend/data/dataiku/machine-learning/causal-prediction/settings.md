Causal Prediction Settings[¶](#causal-prediction-settings "Permalink to this heading")
======================================================================================


The “Settings” tab allows you to configure important aspects of your Causal Prediction task.



* [Settings: Outcome \& Treatment](#settings-outcome-treatment)
* [Settings: Train / Test set](#settings-train-test-set)
* [Settings: Metrics](#settings-metrics)
* [Settings: Algorithms](#settings-algorithms)
* [Settings: Hyperparameters optimization](#settings-hyperparameters-optimization)
* [Settings: Treatment Analysis](#settings-treatment-analysis)




[Settings: Outcome \& Treatment](#id1)[¶](#settings-outcome-treatment "Permalink to this heading")
--------------------------------------------------------------------------------------------------


Set the base settings for causal prediction:


* outcome variable
* preferred class if the outcome variable is a binary category
* treatment variable
* control value, i.e. the value of the treatment variable representing the control group
* option for multi\-valued treatment, if the treatment variable has more than one value that in addition of the control value.



Note



When the multi\-valued treatment option is enabled, each treatment value `t` (except the control value) yields a causal model:* based on a binary treatment value (`control` and `t`)
* trained on the relevant data: treatment variable equal `control` or `t`.





DSS displays an estimation of the average treatment effect (ATE) on the sample dataset to help set these parameters (ATE is usually expected to be positive).




[Settings: Train / Test set](#id2)[¶](#settings-train-test-set "Permalink to this heading")
-------------------------------------------------------------------------------------------


When training a model, it is important to test the performance of the model on a “test set”. During the training phase, DSS “holds out” on the test set, and the model is only trained on the train set.


Once the model is trained, DSS evaluates its performance on the test set. This ensures that the evaluation is done on data that the model has “never seen before”.



### Splitting the dataset[¶](#splitting-the-dataset "Permalink to this heading")


DSS splits the input dataset into a train and a test set.



Warning


Causal prediction does not support K\-Fold cross\-test.




#### Subsampling[¶](#subsampling "Permalink to this heading")


DSS defaults to using the first 100’000 rows of the dataset, but other options are available.


For more details, see the documentation on [Sampling](../../explore/sampling.html).






[Settings: Metrics](#id3)[¶](#settings-metrics "Permalink to this heading")
---------------------------------------------------------------------------


As with all machine learning tasks, performance metrics will be used both for hyperparameter search (metrics computed on the evaluation folds and averaged) and the final performance result (metrics computed on the test set).


Several metrics are available, all based on the [Uplift Qini curves](results.html#uplift-curve):


* the **Area under the uplift curve (AUUC)**.
* the **Qini coefficient**: the area under the Qini curve.
* the **Net uplift** at specified point: the value of the uplift curve at a fixed ratio of the population to be treated (defaults to 50%).


If [Treatment Analysis](#treatment-analysis)
is enabled, the weighting method option offers the possibility to compute the causal metrics (Uplift and Qini curves and their derivatives) using [inverse probability weighting](https://en.wikipedia.org/wiki/Inverse_probability_weighting) . Such weighted metrics offer a level of mitigation against misleading metrics in the case of non\-random or imbalanced treatments.




[Settings: Algorithms](#id4)[¶](#settings-algorithms "Permalink to this heading")
---------------------------------------------------------------------------------


Dataiku supports several algorithms to train causal prediction models. We recommend trying several different algorithms before deciding on one particular modeling method.


See [Causal prediction algorithms](causal-prediction-algorithms.html) for details.




[Settings: Hyperparameters optimization](#id5)[¶](#settings-hyperparameters-optimization "Permalink to this heading")
---------------------------------------------------------------------------------------------------------------------


Except for the use of specific causal performance metrics, hyperparameter search is identical to machine learning prediction tasks, see [models optimization](../advanced-optimization.html) for details.




[Settings: Treatment Analysis](#id6)[¶](#settings-treatment-analysis "Permalink to this heading")
-------------------------------------------------------------------------------------------------


The treatment variable plays a crucial role in causal predictions, and all causal prediction methodologies make implicit assumptions on the treatment variable:


* **Unconfoundedness**: for each example in the dataset, the joint outcome under control and outcome under treatment (one of which is always a counterfactual i.e. unobserved) does not depend on the treatment assignment (control or treatment). This hypothesis cannot be tested statistically.
* **Randomization**: the treatment variable is perfectly randomized, i.e. all examples have the exact same probability of belonging to the treatment and control groups, e.g. from the assignment of an A/B test.
* **Positivity** (a weaker alternative to Randomization): this hypothesis states that both treatment values, treated and control, are likely (with non\-zero probability), for all relevant combinations of other variables.


The **propensity model** predicts the treatment variable. Enabling it helps assess whether or not the *Randomization* and *Positivity* assumptions are violated.


On top the the propensity model, you can opt in to use a calibration model to make the predicted probabilities as well calibrated as possible. This is recommended for a more robust [positivity analysis](results.html#positivity).