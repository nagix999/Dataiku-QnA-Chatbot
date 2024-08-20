Model Document Generator[¶](#model-document-generator "Permalink to this heading")
==================================================================================


You can use the Model Document Generator to create documentation associated with any trained model. It will generate a Microsoft Word™ .docx file that provide information regarding:


* What the model does
* How the model was built (algorithms, features, processing, …)
* How the model was tuned
* What are the model’s performances


It allows you to prove that you followed industry best practices to build your model.



Generate a model document[¶](#generate-a-model-document "Permalink to this heading")
------------------------------------------------------------------------------------



Note


To use this feature, the [graphical export library](https://doc.dataiku.com/dss/latest/installation/custom/graphics-export.html) must be activated on your DSS instance. Please check with your administrator.



Once a model has been trained, you can generate a document from it with the following steps:


* Go to the trained model you wish to document (either a model trained in a Visual Analysis of the Lab or a version of a saved model deployed in the Flow)
* Click the `Actions` button on the top\-right corner
* Select `Export model documentation`
* On the modal dialog, select the default template or upload your own template, and click `Export` to generate the document
* After the document is generated, you will be able to download your generated model document using the `Download` link



Warning


Any placeholders starting with the keyword `design` will be linked to the current status of your visual analysis. If you change parameters in your model, DSS will consider that placeholder values are outdated and will replace these placeholders with blanks in the generated documentation.
If you delete your visual analysis and then generate a document from a saved model, any placeholders starting with the keyword `design` will not provide any result.





Custom templates[¶](#custom-templates "Permalink to this heading")
------------------------------------------------------------------


If you want the document generator to use your own template, you need to use Microsoft Word™ to create a `.docx` file.


You can create your base document as you would create a normal Word document, and add placeholders when you want to retrieve information from your model.



### Sample templates[¶](#sample-templates "Permalink to this heading")


Instead of starting from scratch, you can modify the default templates:


* [`Download the default template for regression here`](../_downloads/dc276a55f4d3cd452b8bda2c16bfbee4/regression.docx)
* [`Download the default template for binary classification here`](../_downloads/ec38abb3522e8fb47d89a3eace78aaa5/binary_classification.docx)
* [`Download the default template for multiclass classification here`](../_downloads/2308772bf6b66b5236a1e87411de529e/multiclass_classification.docx)
* [`Download the default template for clustering here`](../_downloads/3e3f8417f7420176a9b86757290878e9/clustering.docx)
* [`Download the default template for time series forecasting here`](../_downloads/5d82c2d109c1d357425630b0a18a14bc/timeseries_forecast.docx)




### Placeholders[¶](#placeholders "Permalink to this heading")


A placeholder is defined by a placeholder name inside two brackets, like `{{design.prediction_type.name}}`. The generator will read the placeholder and replace it with the value retrieved from the model.


There are multiples types of placeholders, which can produce text, an image, or a table.


![../_images/mdg-text.png](../_images/mdg-text.png)
![../_images/mdg-image.png](../_images/mdg-image.png)

### Conditional placeholders[¶](#conditional-placeholders "Permalink to this heading")


If you want to build a single template able to handle several kinds of models, you may need to display information only when they are relevant. For example, you may want to describe what is a binary classification, but this description should only appear on your binary classification models. This can be achieved with a conditional placeholder.


A conditional placeholder contains three elements, each of them needs to be on a separate line:


* a condition
* a text to display if the condition is valid
* a closing element


Example:



```
{{if design.prediction_type.name == Binary classification}}

The model {{design.prediction_type.name}} is a binary classification.

{{endif design.prediction_type.name}}

```



```
{{if design.prediction_type.name != Binary classification}}

The model {{design.prediction_type.name}} is a not binary classification.

{{endif design.prediction_type.name}}

```


The condition itself is composed of three parts:


* a text placeholder
* an operator (`==` or `!=`)
* a reference value


Example:



```
{{if my.placeholder == myReferenceValue }}

```


During document generation, the placeholder is replaced by its value and compared to the reference value. If the condition is correct, the text is displayed, otherwise nothing will appear on the final document.




### List of placeholders[¶](#list-of-placeholders "Permalink to this heading")


Placeholders related to the dataset:




| Name | Compatibility | Description |
| --- | --- | --- |
| dataset.prepare\_steps.table | All | Preparation steps used on the dataset |
| dataset.prepare\_steps.status | All | Tell if preparation steps are used on the dataset |


Placeholders related to the design phase of a model:




| Name | Compatibility | Description |
| --- | --- | --- |
| design.mltask.name | All | Name of the modeling task |
| design.visual\_analysis.name | All | Name of the visual analysis |
| design.algorithm.name | All | Name of the algorithm used to compute the model |
| design.target.name | Prediction | Name of the target variable |
| design.features\_count.value | All | Number of columns in the train set |
| design.model\_type.name | All | Type of model (Prediction or Clustering) |
| design.prediction\_type.name | Prediction | Type of prediction (Regression, Binary classification or Multi\-class classification) |
| design.target\_proportion.plot | Classification | Proportions of classes in the guess sample |
| design.training\_and\_testing\_strategy.table | Prediction | Strategy used to train and test the model |
| design.training\_and\_testing\_strategy.policy.value | Prediction | Name of the policy used to train and test the model |
| design.sampling\_method.value | Prediction | Sampling method named used to train and test the model |
| design.k\_fold\_cross\_testing.value | Prediction | Tell if the K\-fold strategy was used to train and test the model |
| design.sampling\_and\_splitting.image | Prediction | Sampling and splitting strategy used to train and test the model |
| design.sampling.image | Time series forecasting | Sampling strategy used to train and test the model |
| design.splitting.image | Time series forecasting | Splitting strategy used to train and test the model |
| design.train\_set.image | Prediction | Explicit train set strategy |
| design.test\_set.image | Prediction | Explicit test set strategy |
| design.test\_metrics.name | Prediction | Metric used to optimize model hyperparameters |
| design.input\_feature.table | All | Summary of input features |
| design.feature\_generation\_pairwise\_linear.value | Prediction | Display if pairwise linear combinations are used in the feature generation |
| design.feature\_generation\_pairwise\_polynomial.value | Prediction | Display if pairwise polynomial combinations are used in the feature generation |
| design.feature\_generation\_explicit\_pairwise.status | Prediction | Display if the model contains explicit pairwise interactions used in the feature generation |
| design.feature\_generation\_explicit\_pairwise.table | Prediction | Display explicit pairwise interactions used in the feature generation |
| design.feature\_reduction.image | Prediction | Reduction method applied to the model |
| design.feature\_reduction.name | Prediction | Name of the feature reduction applied to the model |
| design.chosen\_algorithm\_search\_strategy.table | All | List the parameters used to configure the chosen algorithm |
| design.chosen\_algorithm\_search\_strategy.text | All | Description of the chosen algorithm |
| design.other\_algorithms\_search\_strategy.table | All | Parameters and description of the other computed algorithms |
| design.hyperparameter\_search\_strategy.image | Prediction | Hyperparameter search strategy used to compute the model |
| design.hyperparameter\_search\_strategy.table | Prediction | Summary of the hyperparameter search strategy |
| design.cross\_validation\_strategy.value | Prediction | Name of cross\-validation strategy used on hyperparameters |
| design.dimensionality\_reduction.table | Clustering | Dimensionality reduction used to compute the model |
| design.dimensionality\_reduction.status | Clustering | Tell if a dimensionality reduction was used to compute the model |
| design.outliers\_detection.table | Clustering | Outliers detection strategy used to compute the model |
| design.outliers\_detection.status | Clustering | Tell if an outliers detection strategy was used to compute the model |
| design.weighting\_strategy.method.name | Prediction | Name of the weighting strategy |
| design.weighting\_strategy.variable.name | Prediction | Name of the weighting strategy associated variable |
| design.weighting\_strategy.text | Prediction | Description of a weighting strategy |
| design.calibration\_strategy.name | Classification | Name of the probability calibration method |
| design.calibration\_strategy.text | Classification | Description of a probability calibration strategy |
| design.backend.name | All | Name of the backend engine |
| design.partitioned\_model.status | All | Tell if the current model is a partitioned model |
| design.time\_variable.name | Time series forecasting | Name of the time variable |
| design.num\_timeseries.value | Time series forecasting | Number of time series to forecast |
| design.timeseries\_identifiers.value | Time series forecasting | List of columns containing time series identifier values |
| design.has\_multiple\_timeseries.value | Time series forecasting | Whether the model has multiple time series |
| design.time\_step.value | Time series forecasting | Time step including its unit |
| design.forecast\_horizon.in\_units.value | Time series forecasting | Forecast horizon including its unit |
| design.forecast\_horizon.time\_steps.value | Time series forecasting | Number of time steps in one forecast horizon |
| design.timeseries\_num\_external\_features.value | Time series forecasting | Number of external features provided to the model |
| design.timeseries\_external\_features.value | Time series forecasting | List of external features columns |
| design.timeseries\_scoring\_data\_length.value | Time series forecasting | How much past data must be provided for scoring |
| design.timeseries\_algorithm\_can\_score\_new\_series.value | Time series forecasting | Whether the current model can score time series unseen during training |
| design.timeseries\_general\_settings.table | Time series forecasting | List the general time series specific settings used to configure the model |
| design.timeseries\_forecasting.table | Time series forecasting | List the settings used to configure the forecast horizon |
| design.forecasting\_parameters.image | Time series forecasting | Forecasting parameters shown visually in a diagram |


Placeholders related to the result of a model computation:




| Name | Compatibility | Description |
| --- | --- | --- |
| result.chosen\_algorithm.name | All | Name of the algorithm selected for the mode used in the current document generation |
| result.train\_set.sample\_rows\_count.value | All | Number of rows in the train set |
| result.test\_metrics.value | Prediction | Value of the test metrics |
| result.target\_value.positive\_class.value | Binary classification | Name of the target value representing the positive class |
| result.target\_value.negative\_class.value | Binary classification | Name of the target value representing the negative class |
| result.threshold\_metric.name | Binary classification | Name of the threshold (cut off) metric |
| result.classification\_threshold.current.value | Binary classification | Current value of the threshold metric |
| result.classification\_threshold.optimal.value | Binary classification | Optimal value of the threshold metric |
| result.chosen\_algorithm\_details.image | All but partitioned models | Summary of the prediction computation |
| result.chosen\_algorithm\_details.table | All but partitioned models | Summary of the current model selected hyperparameters |
| result.cluster\_summary.image | Clustering | Summary of the clustering computation |
| result.cluster\_description.image | Clustering | Description of each category of the clustering |
| result.partitioned.summary.image | Prediction | Summary of the partitioned model execution |
| result.decision\_trees.image | Prediction | Random forest decision tree visualisation |
| result.decision\_trees.status | All | Tell if the model is compatible with a decision tree visualisation |
| result.regression\_coefficients.image | Regression and binary classification | Regression coefficient chart |
| result.regression\_coefficients.status | All | Tell if the model has a regression coefficient chart |
| result.feature\_importance.plot | Prediction | Feature importance chart |
| result.feature\_importance.status | All | Does the model have feature importance charts |
| result.absolute\_importance.plot | Prediction | Absolute importance chart |
| result.feature\_effects.plot | Regression and binary classification | Feature effects chart |
| result.absolute\_importance.status | All | Does the model had an absolute importance chart |
| result.individual\_explanations.image | Prediction | Individual explanation chart |
| result.individual\_explanations.text | Prediction | Description of the individual explanation chart |
| result.individual\_explanations.status | All | Tell if the model contains an individual explanation chart |
| result.hyperparameter\_search.plot | Prediction | Hyperparameter search results as a chart |
| result.hyperparameter\_search.table | Prediction | Displays data associated to the hyperparameter search as an table |
| result.hyperparameter\_search.status | All | Tell if the model had a hyperparameter search results chart |
| result.confusion\_matrix.image | Classification | Confusion matrix results as a table |
| result.confusion\_matrix\_table.text | Binary classification | Description of the confusion matrix |
| result.confusion\_matrix\_metrics.plot | Classification | Metrics associated to the confusion matrix |
| result.confusion\_matrix\_metrics.text | Classification | Description of the different metrics |
| result.cost\_matrix.image | Binary classification | Cost matrix as a table |
| result.cost\_matrix.image | Binary classification | Cost matrix as a table |
| result.cost\_matrix.text | Binary classification | Description of the cost matrix |
| result.decision\_chart.plot | Binary classification | Decision chart |
| result.decision\_chart.text | Binary classification | Description of the decision chart |
| result.lift\_curve.plot | Binary classification | Lift curve charts |
| result.lift\_curve.text | Binary classification | Description of the lift curve charts |
| result.calibration.plot | Classification | Calibration curve chart |
| result.calibration.text | Classification | Description of the calibration curve chart |
| result.roc\_curve.plot | Classification | ROC curve chart |
| result.roc\_curve.text | Classification | Description of the ROC curve chart |
| result.pr\_curve.plot | Classification | PR curve chart |
| result.pr\_curve.text | Classification | Description of the PR curve chart |
| result.density\_chart.plot | Classification | Density chart |
| result.density\_chart.text | Classification | Description of the density chart |
| result.hierarchy.plot | Clustering | Hierarchy of the interactive clustering model |
| result.anomalies.plot | Clustering | Anomalies detected displayed as a heatmap |
| result.cluster\_heat\_map.plot | Clustering | Features heatmap |
| result.scatter.plot | Regression and clustering | Scatter plot chart |
| result.error\_distribution.table | Regression | Error distribution as a table |
| result.error\_distribution.plot | Regression | Error distribution as a chart |
| result.error\_distribution.text | Regression | Description of the error distribution |
| result.detailed\_metrics.table | All | Detailed summary of the model computation |
| result.ml\_assertions.table | Prediction | Assertions definitions and metrics |
| result.ml\_overrides.definition.table | Prediction | Model overrides definitions |
| result.ml\_overrides.metrics.table | Prediction | Model overrides metrics |
| result.timings.table | All | Time of the different execution steps |
| result.diagnostics.table | All | All Diagnostics for the current model |
| result.diagnostics.table.dataset\_sanity\_checks | All | Diagnostics of type dataset sanity checks for the current model |
| result.diagnostics.table.modeling\_parameters | All | Diagnostics of type modeling parameters for the current model |
| result.diagnostics.table.runtime | All | Diagnostics of type runtime that check the model training speed |
| result.diagnostics.table.training\_overfit | All | Diagnostics of type training overfit for the current model |
| result.diagnostics.table.leakage\_detection | All | Diagnostics of type leakage detection for the current model |
| result.diagnostics.table.model\_check | All | Diagnostics of type model check for the current model |
| result.diagnostics.table.reproduciblity | All | Diagnostics of type training reproducibility for the current model |
| result.diagnostics.table.ml\_assertions | All | Diagnostics of type ML assertions for the current model |
| result.diagnostics.table.abnormal\_predictions\_detection | All | Diagnostics of type abnormal predictions detection for the current model |
| result.diagnostics.table.timeseries\_resampling\_checks | Time series forecasting | Diagnostics of type resampling checks for the current model |
| result.full\_log.link | All | URL to download the model’s logs |
| result.training\_date.name | All | Date of the training |
| result.leaderboard.image | All | Image of the default leaderboard of the computed models |
| result.leaderboard.accuracy.image | Classification | Image of the leaderboard of the computed models for the metric accuracy |
| result.leaderboard.precision.image | Classification | Image of the leaderboard of the computed models for the metric precision |
| result.leaderboard.recall.image | Classification | Image of the leaderboard of the computed models for the metric recall |
| result.leaderboard.f1\.image | Classification | Image of the leaderboard of the computed models for the metric F1 score |
| result.leaderboard.cost\_matrix.image | Classification | Image of the leaderboard of the computed models for the metric cost matrix gain |
| result.leaderboard.log\_loss.image | Classification | Image of the leaderboard of the computed models for the metric log loss |
| result.leaderboard.roc\_auc.image | Classification | Image of the leaderboard of the computed models for the metric ROC AUC |
| result.leaderboard.average\_precision.image | Classification | Image of the leaderboard of the computed models for the metric Average Precision score |
| result.leaderboard.calibration\_loss.image | Binary classification | Image of the leaderboard of the computed models for the metric calibration loss |
| result.leaderboard.lift.image | Binary classification | Image of the leaderboard of the computed models for the metric lift |
| result.leaderboard.evs.image | Regression | Image of the leaderboard of the computed models for the metric EVS |
| result.leaderboard.mape.image | Regression and time series forecasting | Image of the leaderboard of the computed models for the metric MAPE |
| result.leaderboard.mae.image | Regression and time series forecasting | Image of the leaderboard of the computed models for the metric MAE |
| result.leaderboard.mse.image | Regression and time series forecasting | Image of the leaderboard of the computed models for the metric MSE |
| result.leaderboard.rmse.image | Regression and time series forecasting | Image of the leaderboard of the computed models for the metric RMSE |
| result.leaderboard.rmsle.image | Regression | Image of the leaderboard of the computed models for the metric RMSLE |
| result.leaderboard.r2\.image | Regression | Image of the leaderboard of the computed models for the metric R2 score |
| result.leaderboard.correlation.image | Regression | Image of the leaderboard of the computed models for the metric correlation |
| result.leaderboard.mase.image | Time series forecasting | Image of the leaderboard of the computed models for the metric MASE |
| result.leaderboard.smape.image | Time series forecasting | Image of the leaderboard of the computed models for the metric SMAPE |
| result.leaderboard.mean\_absolute\_quantile\_loss.image | Time series forecasting | Image of the leaderboard of the computed models for the metric Mean absolute quantile loss |
| result.leaderboard.mean\_weighted\_quantile\_loss.image | Time series forecasting | Image of the leaderboard of the computed models for the metric Mean weighted quantile loss |
| result.leaderboard.msis.image | Time series forecasting | Image of the leaderboard of the computed models for the metric MSIS |
| result.leaderboard.nd.image | Time series forecasting | Image of the leaderboard of the computed models for the metric ND |
| result.leaderboard.silhouette.image | Clustering | Image of the leaderboard of the computed models for the metric silhouette |
| result.leaderboard.inertia.image | Clustering | Image of the leaderboard of the computed models for the metric inertia |
| result.leaderboard.clusters.image | Clustering | Image of the leaderboard of the computed models for the metric clusters number |
| result.timeseries\_resampling.table | Time series forecasting | Parameters defining how the time series is resampled |
| result.per\_timeseries\_metrics.table | Time series forecasting | For a multi time series model, the metrics for each time series |
| result.autoarima\_orders\_single.table | Time series forecasting | For a single time series model trained with the AutoARIMA algorithm, the ARIMA orders |
| result.autoarima\_orders\_multi.table | Time series forecasting | For a multi time series model trained with the AutoARIMA algorithm, the ARIMA orders for each time series |
| result.timeseries\_single\_forecast.plot | Time series forecasting | For a single time series model, the forecast chart |
| result.timeseries\_multi\_forecast.plot | Time series forecasting | For a multi time series model, the first five forecast charts |


Placeholders related to the DSS configuration:




| Name | Compatibility | Description |
| --- | --- | --- |
| config.author.name | All | Name of the user that launched the generation |
| config.author.email | All | E\-mail of the user that launched the generation |
| config.environment.name | All | Name of the DSS environment |
| config.dss.version | All | Current version of DSS |
| config.is\_saved\_model.value | All | Yes when documenting a model exported into the Flow, No otherwise |
| config.generation\_date.name | All | Generation date of the output document |
| config.project.link | All | URL to access the project |
| config.output\_file.name | All | Name of the generated file |




### List of conditional placeholders[¶](#list-of-conditional-placeholders "Permalink to this heading")


Placeholders that can be used as conditional placeholders:


* dataset.prepare\_steps.status
* design.mltask.name
* design.visual\_analysis.name
* design.algorithm.name
* design.target.name
* design.features\_count.value
* design.model\_type.name
* design.prediction\_type.name
* design.training\_and\_validation\_strategy.policy.value
* design.sampling\_method.value
* design.k\_fold\_cross\_testing.value
* design.feature\_generation\_pairwise\_linear.value
* design.feature\_generation\_pairwise\_polynomial.value
* design.feature\_generation\_explicit\_pairwise.status
* design.feature\_reduction.name
* design.chosen\_algorithm\_search\_strategy.text
* design.cross\_validation\_strategy.value
* design.dimensionality\_reduction.status
* design.outliers\_detection.status
* design.weighting\_strategy.method.name
* design.weighting\_strategy.variable.name
* design.calibration\_strategy.name
* design.backend.name
* design.partitioned\_model.status
* design.has\_multiple\_timeseries.value
* design.timeseries\_algorithm\_can\_score\_new\_series.value
* result.chosen\_algorithm.name
* result.train\_set.sample\_rows\_count.value
* result.target\_value.positive\_class.value
* result.target\_value.negative\_class.value
* result.threshold\_metric.name
* result.classification\_threshold.current.value
* result.classification\_threshold.optimal.value
* result.decision\_trees.status
* result.regression\_coefficients.status
* result.feature\_importance.status
* result.individual\_explanations.status
* result.hyperparameter\_search.status
* result.training\_date.name
* config.author.name
* config.author.email
* config.environment.name
* config.dss.version
* config.is\_saved\_model.value
* config.generation\_date.name
* config.output\_file.name




### Deprecated placeholders[¶](#deprecated-placeholders "Permalink to this heading")




| Name | Compatibility | Description | Replaced by |
| --- | --- | --- | --- |
| result.detailed\_metrics.image | All | Detailed summary of the model computation | result.detailed\_metrics.table |
| design.other\_algorithms\_search\_strategy.image | All | Image of the parameters and description of the other computed algorithms | design.other\_algorithms\_search\_strategy.table |
| design.chosen\_algorithm\_search\_strategy.image | All | Image of the parameters used to configure the chosen algorithm | design.chosen\_algorithm\_search\_strategy.table |





Limitations[¶](#limitations "Permalink to this heading")
--------------------------------------------------------


* You need to upgrade the table of contents manually after a document generation
* The Model Document Generator is currently not compatible with ensemble models
* The Model Document Generator is currently not compatible with Keras nor computer vision models
* The Model Document Generator is currently not compatible with models imported from MLflow
* The Model Document Generator is not compatible with plugin algorithms
* When generating a document from a visual analysis, the model document generator will not display outdated design information. To fix this issue, you can either run a new analysis or revert the design to match the analysis
* When generating a document from a saved model version, some information may be extracted from the original Visual Analysis Design settings. As a result, any placeholders starting with `design` will be empty when the Visual Analysis was modified or erased
* Each part of a conditional placeholder must necessarily be in a new line
* Table and conditional placeholders are not supported on headers and footers