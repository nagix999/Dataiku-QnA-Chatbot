Time Series Forecasting Results[¶](#time-series-forecasting-results "Permalink to this heading")
================================================================================================


When a model finishes training, click on the model to see the results.



* [Forecast charts](#forecast-charts)
* [Performance: Metrics](#performance-metrics)
* [Performance: Per time series metrics](#performance-per-time-series-metrics)
* [Model Information: Algorithm](#model-information-algorithm)




[Forecast charts](#id2)[¶](#forecast-charts "Permalink to this heading")
------------------------------------------------------------------------


The model report contains a visualization of the time series forecast vs. the ground truth of the target variable. If quantiles were specified, this graph also contains the forecast intervals.


If K\-Fold cross\-test is used for evaluation, the forecast and forecast intervals are shown for every fold.


For multiple time series datasets, one visualization per time series is provided.




[Performance: Metrics](#id3)[¶](#performance-metrics "Permalink to this heading")
---------------------------------------------------------------------------------


For multiple time series datasets, metrics are aggregated over all time series.


If at least one time series has an undefined metric, then the aggregated metric is also undefined.


If K\-Fold cross\-test is used for evaluation, these aggregated metrics are then averaged over all folds, ignoring folds that yield undefined metric values.




Time series aggregation methods by metric[¶](#id1 "Permalink to this table")




| Metric | Aggregation method |
| --- | --- |
| Mean Absolute Scaled Error (MASE) | Average across all time series |
| Mean Absolute Percentage Error (MAPE) | Average across all time series |
| Symmetric MAPE | Average across all time series |
| Mean Absolute Error (MAE) | Average across all time series |
| Mean Squared Error (MSE) | Average across all time series |
| Mean Scaled Interval Score (MSIS) | Average across all time series |
| Mean Absolute Quantile Loss (MAQL) | First compute the mean of each quantile loss across time series then compute the mean across all quantiles |
| Mean Weighted Quantile Loss (MWQL) | First compute the mean of each quantile loss across time series then compute the mean across all quantiles. Finally divide by the sum of the absolute target value across all time series |
| Root Mean Squared Error (RMSE) | Square\-root of the aggregated Mean Squared Error (MSE) |
| Normalized Deviation (ND) | Sum of the absolute error across all time series, divided by the sum of the absolute target value across all time series |




[Performance: Per time series metrics](#id4)[¶](#performance-per-time-series-metrics "Permalink to this heading")
-----------------------------------------------------------------------------------------------------------------


For multiple time series datasets, DSS also shows the metrics of each individual time series.


If K\-Fold cross\-test is used for evaluation, per time series metrics are aggregated over each fold for each time series, ignoring folds that yield undefined metric values.




[Model Information: Algorithm](#id5)[¶](#model-information-algorithm "Permalink to this heading")
-------------------------------------------------------------------------------------------------


For multiple time series datasets, some models train one algorithm per time series under the hood (mainly ARIMA and Seasonal LOESS). The resulting per times series hyperparameters are shown in this tab, if any.