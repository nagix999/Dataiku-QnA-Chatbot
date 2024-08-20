External Models[¶](#external-models "Permalink to this heading")
================================================================


External Models are a way to surface, evaluate and use in DSS Models that are already deployed on Amazon SageMaker, Azure Machine Learning, Google Vertex AI or Databricks.


Using External Models, you can create a DSS Saved Model from an endpoint deployed on the infrastructures of one of those supported cloud vendors.


This allows you to benefit from the ML management capabilities of DSS on your existing External Models:


* Scoring datasets using a [scoring recipe](../../machine-learning/supervised/explanations.html#explanations-scoring-recipe-label)
* Managing multiple versions of the models
* Evaluating the performance of a classification or regression model on a labeled dataset, including all results screens
* Comparing multiple models or multiple versions of the model, using [Model Comparisons](../model-comparisons/index.html)
* Analyzing performance and evaluating models [on other datasets](../model-evaluations/index.html)
* [Analyzing drift](../drift-analysis/index.html) on the External Model



Creating an External Model[¶](#creating-an-external-model "Permalink to this heading")
--------------------------------------------------------------------------------------


Before creating an External Model, you must create the “External Models” code
environment. To do so, as an Administrator, go to “Administration \> Settings \>
Misc”, look for “External Models code environment”, and click on “Create code
environment”.


You can then create an External Model by going to a project, click on the
“Saved Models” link in the navigation bar, and, from the saved models page,
click on the “New External Saved Model” button.


You can also create an External Saved Model using the public Python API, with
`dataikuapi.dss.DSSProject.create_external_model()` and
`dataikuapi.dss.DSSSavedModel.create_external_model_version()`.



Note


Most cloud vendors impose few constraints on models, and endpoints are
allowed to behave in arbitrary ways and most noticeably to return any kind of data.


It is thus not possible to guarantee compatibility or unfettered ability to
use all features (notably advanced features such as performance evaluation,
model comparison or drift analysis) for all models.


See [Input and output formats](input-output-formats.html) for more details.




Warning


External Models can not be included in an API package. External Models can not be exported.




* [Input and output formats](input-output-formats.html)
	+ [Amazon SageMaker](input-output-formats.html#amazon-sagemaker)
	+ [Azure Machine Learning](input-output-formats.html#azure-machine-learning)
	+ [Google Vertex AI](input-output-formats.html#google-vertex-ai)
	+ [Databricks](input-output-formats.html#databricks)