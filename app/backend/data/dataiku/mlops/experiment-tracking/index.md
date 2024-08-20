Experiment Tracking[¶](#experiment-tracking "Permalink to this heading")
========================================================================


Experiment tracking is the process of saving all experiment\-related information that you care about for every experiment you run.
This may include parameters, performance metrics, models and any other data relevant to your project.


In Dataiku, this can be done:


* visually, without coding, in the Lab (see [Prediction (Supervised ML)](../../machine-learning/supervised/index.html))
* when coding, by calling specific APIs to log values of parameters, metrics, … and then being able to view all of your experiments and associated results.


This section focuses on code\-based Experiment Tracking. Code\-based Experiment Tracking in DSS uses the [MLflow Tracking](https://www.mlflow.org/docs/1.30.0/tracking.html) API.



* [Concepts](concepts.html)
* [Tracking experiments in code](tracking.html)
* [Viewing experiments and runs](viewing.html)
* [Deploying MLflow models](deploying.html)
* [Extensions](extensions.html)