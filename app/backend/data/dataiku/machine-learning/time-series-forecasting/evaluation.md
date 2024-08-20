Evaluation recipe[¶](#evaluation-recipe "Permalink to this heading")
====================================================================



* [Input dataset](#input-dataset)
* [Output datasets](#output-datasets)
* [Refitting for statistical models](#refitting-for-statistical-models)




Warning


*Model Evaluation Stores* (MES) are not supported for time series forecasting models.




[Input dataset](#id1)[¶](#input-dataset "Permalink to this heading")
--------------------------------------------------------------------


The input dataset for the evaluation recipe should contain at least:


* The time column
* The time series identifiers columns (if any)
* The target column
* The external features columns (if any)




[Output datasets](#id2)[¶](#output-datasets "Permalink to this heading")
------------------------------------------------------------------------



### Output dataset[¶](#output-dataset "Permalink to this heading")


The evaluation recipe computes the evaluation dataset by moving the forecast/evaluation window (of size *forecast horizon*) from the end of the input dataset to the beginning as many times as possible (given the size of the timeseries),
or a fixed number of times if the **Max. nb. forecast horizons** is set.




### Metrics dataset[¶](#metrics-dataset "Permalink to this heading")


The output metrics dataset contains the computed metrics. If the input dataset contains multiple time series, choose between aggregated metrics (one single row, default) or per time series metrics (one row per series).





[Refitting for statistical models](#id3)[¶](#refitting-for-statistical-models "Permalink to this heading")
----------------------------------------------------------------------------------------------------------


Statistical models (ARIMA and Seasonal LOESS) can be refit on the input data before evaluation.



Warning


Evaluation with Seasonal LOESS only works with refitting enabled.