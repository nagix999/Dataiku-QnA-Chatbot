Understanding time series data[¶](#understanding-time-series-data "Permalink to this heading")
==============================================================================================


A time series can record measurements of one or more variables that may be interrelated; for example, temperature and humidity levels of a city.


Depending on the relationships between variables in time series data, the data can be categorized as follows.



Univariate time series[¶](#univariate-time-series "Permalink to this heading")
------------------------------------------------------------------------------


A univariate time series consists of a single variable (or dimension) that depends on time.


For example, given the daily closing stock prices for a specific company, you have a one\-dimensional value (price) that changes with time. If you have to predict future prices, you can look at the past values of one variable (price) to build a prediction model.




Multivariate time series[¶](#multivariate-time-series "Permalink to this heading")
----------------------------------------------------------------------------------


A multivariate time series consists of two or more interrelated variables (or dimensions) that depend on time.


In the previous example, suppose the time series data also consists of the volume of stocks traded daily. Each day, you have a two\-dimensional value (price and volume) changing simultaneously with time. If you have to predict future prices, then you can use the past values of the two variables (price and volume) to build a prediction model.




Multiple time series[¶](#multiple-time-series "Permalink to this heading")
--------------------------------------------------------------------------


Time series data can also consist of multiple time series, where each observation is made up of values from distinct time series that are not related to each other.


Consider time series data that consists of the daily prices for a group of unrelated companies. In this case the daily prices for each company is a separate time series.




Related Pages[¶](#related-pages "Permalink to this heading")
------------------------------------------------------------


* [Time series preparation](time-series-preparation/index.html)
* [Time series forecasting](time-series-forecasting.html)
* [Format of time series data](data-formatting.html)
* [Time Series Analysis](../statistics/time-series.html)