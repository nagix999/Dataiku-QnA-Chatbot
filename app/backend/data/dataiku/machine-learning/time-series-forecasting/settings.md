Time Series Forecasting Settings[¶](#time-series-forecasting-settings "Permalink to this heading")
==================================================================================================


The “Settings” tab allows you to fully customize all aspects of your time series forecasting task.



* [Settings: General settings](#settings-general-settings)
* [Settings: Train / Test set](#settings-train-test-set)
* [Settings: External features](#settings-external-features)
* [Settings: Algorithms](#settings-algorithms)
* [Additional information](#additional-information)




[Settings: General settings](#id1)[¶](#settings-general-settings "Permalink to this heading")
---------------------------------------------------------------------------------------------


Set the base settings for time series forecasting (target variable, time variable, time series identifiers (if multiple time series in the dataset))



### Time step parameters[¶](#time-step-parameters "Permalink to this heading")


Define what time step will be used for time series resampling. Indeed, forecasting models require the dataset to be sampled with equally spaced time steps.
A default setting is guessed by DSS, based on the input data.




### Forecasting parameters[¶](#forecasting-parameters "Permalink to this heading")


Specify how many time steps will be forecast by the models (a.k.a forecasting horizon), as well as the number of skipped time steps for model evaluation (a.k.a gap).


You can also choose what quantiles will be forecasted by the models (also used for some evaluation metrics).




### Partitioned Models[¶](#partitioned-models "Permalink to this heading")



Warning


DSS support for partitioned time series forecasting models is experimental



This allows you to train partitioned prediction models on partitioned datasets. In that case, DSS creates one sub model (or model partition) per partition of your dataset.


For more information, see [Partitioned Models](../partitioned.html)





[Settings: Train / Test set](#id2)[¶](#settings-train-test-set "Permalink to this heading")
-------------------------------------------------------------------------------------------


When training a model, it is important to test the performance of the model on a “test set”. During the training phase, DSS “holds out” on the test set, and the model is only trained on the train set.


Once the model is trained, DSS evaluates its performance on the test set. This ensures that the evaluation is done on data that the model has “never seen before”.



### Splitting the dataset[¶](#splitting-the-dataset "Permalink to this heading")


By default, DSS splits the input dataset (sorted by time) into a train and a test set. For time series forecasting, the size of the test set is the number of step in the forecasting horizon, minus the number of skipped steps (a.k.a gap).



#### Subsampling[¶](#subsampling "Permalink to this heading")


DSS defaults to using the first 100’000 rows of the dataset, but other options are available.


For more details, see the documentation on [Sampling](../../explore/sampling.html).




#### K\-Fold cross\-test[¶](#k-fold-cross-test "Permalink to this heading")


A variant of the single train/test split method is called “K\-Fold cross\-test”: DSS uses the last forecasting horizon as a test set (while skipping the gap), and all time steps before as a train set.
It then shifts the test set backwards by one forecasting horizon, and takes all time steps before as a train set. This is repeated until we have **K** {train, gap, test} sets, or evaluation folds.


This method strongly increases training time (roughly speaking, it multiplies it by **K**). However, it allows for two interesting features:



> * It provides a more accurate estimation of model performance, by averaging over K estimations (one per split) and by providing “error margins” on the performance metrics, computed as twice the standard deviation over the K estimations. When K\-Fold cross\-test is enabled, all performance metrics will have tolerance information.
> * Once the scores have been computed on each fold, DSS can retrain the model on 100% of the dataset’s data. This is useful if you don’t have much training data.





### Time series resampling[¶](#time-series-resampling "Permalink to this heading")


As mentioned above, forecasting models require the dataset to be sampled with equally spaced time steps.


To do so, DSS needs to impute missing values for missing time steps in the dataset. You can set which method to use for numerical and non\-numerical features interpolation (missing time steps in the middle of the time series) and extrapolation (missing time steps before the start, or after the end of the time series).


A few example of imputation methods are: linear, quadratic, cubic, mean, constant value, same as previous/next/nearest, most common (for non\-numerical), or no imputation at all.





[Settings: External features](#id3)[¶](#settings-external-features "Permalink to this heading")
-----------------------------------------------------------------------------------------------



Note


Some models do not support the usage of external features for time series forecasting




Warning


If external features are selected, “future” values of those features are required when forecasting.



While time series forecasting model can only work with a time variable and a target variable, having external time\-dependent features can improve some models’ performance. You can select those that should be used by the model, along with handling settings for each.


See [Features handling](../features-handling/index.html)




[Settings: Algorithms](#id4)[¶](#settings-algorithms "Permalink to this heading")
---------------------------------------------------------------------------------


DSS supports several algorithms that can be used to train time series forecasting models. We recommend trying several different algorithms before deciding on one particular modeling method.


See [Time series forecasting algorithms](../algorithms/in-memory-python.html#timeseries-forecasting-algorithms) for details.


You can choose among three types of forecasting algorithms:



> * **Baseline** algorithms (*Trivial identity*, *Seasonal naive*) and the *NPTS* algorithm: no parameters are learned, each time series is forecasted based on its past values only.
> * **Statistical** algorithms (*Seasonal trend*, *AutoARIMA*, *Prophet*): one model is trained for each separate time series.
> * **Deep learning** algorithms (*Simple Feed Forward*, *DeepAR*, *Transformer*, *MQ\-CNN*): a single model is trained on all time series simultaneously. The model produces one forecast per input time series.




[Additional information](#id5)[¶](#additional-information "Permalink to this heading")
--------------------------------------------------------------------------------------



### Minimum required length per time series[¶](#minimum-required-length-per-time-series "Permalink to this heading")



#### Training[¶](#training "Permalink to this heading")


During training, all time series must be longer than a minimum required length that depends on the session settings and on the algorithm and its hyperparameters.


Models require the input time series to be of a minimum length to be able to train.


Because models are trained separately on each fold during both the hyperparameter search and the final evaluation, what matters is the time series length in the first fold.
The first fold is the fold with the shortest train set (see the Splitting and Hyperparameters explanation schemas in the blue info box of the Design page to visually understand the folds).


The minimum required length depends on multiple settings:



> * **Forecasting horizon**: a longer horizon increases the required length.
> * **Models hyperparameters**: some hyperparameters like the **context length** of Deep Learning models or the **season length** of Statistical models require the input time series to be longer.


There are multiple ways to make the training session work when encountering the minimum required length error:



> * Decrease the number of folds of the hyperparameter search (or even don’t do search at all).
> * Decrease the number of folds of the evaluation.
> * Decrease the forecast horizon and/or the number of horizons in evaluation.
> * Decrease the maximum context length or season length set for Deep Learning and Statistical models.
> * Use extrapolation in the resampling: if some time series are shorter than others, then extrapolation will align all time series to the longest one.




#### Scoring and evaluation[¶](#scoring-and-evaluation "Permalink to this heading")


During scoring and evaluation, time series shorter than the minimum required length for scoring are completely ignored (these ignored time series can be found in the logs).


Models require the input time series to be of a minimum length to be able to score (note that this required length is usually shorter than the required length for training).


During evaluation, time series are evaluated on the range of time steps that are after the minimum required length for scoring.
This means that some time series may be evaluated on fewer time steps than others.
Aggregated metrics over all time series are then weighted on the evaluation length of each time series.