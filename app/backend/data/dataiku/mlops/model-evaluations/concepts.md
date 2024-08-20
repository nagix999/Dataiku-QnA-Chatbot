Concepts[¶](#concepts "Permalink to this heading")
==================================================



When training[¶](#when-training "Permalink to this heading")
------------------------------------------------------------


When you train a machine learning model, a portion of the data is held out in order to *evaluate* the performance of the machine learning model (this “held\-out” data is then called the test set).


The result of this evaluation operation is what can be seen in the Results screens of the models:


* Performance metrics
* Confusion matrix
* Decision charts
* Density charts
* Lift charts
* Error deciles
* Partial dependences
* Subpopulation analysis
* …


For more details on all possible result screens, see [Prediction Results](../../machine-learning/supervised/results.html)


Each time you train a model in the visual analysis, and each time you retrain a saved model through a training recipe, this produces a new version of the model and its associated evaluation.




Subsequent evaluations[¶](#subsequent-evaluations "Permalink to this heading")
------------------------------------------------------------------------------


In addition to the evaluation that is automatically generated when training a model, it can be useful to evaluate a model on a different dataset, at a later time.


This is especially useful to detect [Drift](../drift-analysis/index.html), i.e. when a model does not perform as well anymore, usually because the external conditions have changed.


In DSS, creating subsequent evaluations is done using an *Evaluation recipe*. These evaluations are stored in a *Model Evaluation Store*