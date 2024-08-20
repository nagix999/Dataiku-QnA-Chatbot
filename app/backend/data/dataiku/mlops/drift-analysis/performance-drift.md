Performance Drift[¶](#performance-drift "Permalink to this heading")
====================================================================


Performance Drift is in a sense the “most straightforward” kind of drift analysis. It analyses whether the actual performance of the model changes.


However, having ground truth / labels is naturally required for Performance Drift, which is not always possible. See [Automating model evaluations and drift analysis](../model-evaluations/automating.html) for a discussion on this.


When Ground truth is not available, [Input Data Drift](input-data-drift.html) and [Prediction Drift](prediction-drift.html) can provide insights into whether you have a concept drift.