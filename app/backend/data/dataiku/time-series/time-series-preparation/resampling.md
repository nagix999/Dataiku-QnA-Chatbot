Resampling[¶](#resampling "Permalink to this heading")
======================================================


Time series data can occur in irregular time intervals. However, to
be useful for analytics, the time intervals need to be equispaced.



Resampling recipe[¶](#resampling-recipe "Permalink to this heading")
--------------------------------------------------------------------


The resampling recipe transforms time series data occurring in irregular time intervals into equispaced data. The recipe is also useful for transforming equispaced data from one frequency level to another (for example, minutes to hours).


This recipe resamples all numerical columns (type *int* or *float*) and imputes categorical columns (type *object* or *bool*) in your data.



* [Input Data](#input-data)
* [Parameters](#parameters)
* [Output Data](#output-data)
* [Algorithms](#algorithms)
* [Tip](#tip)




### [Input Data](#id1)[¶](#input-data "Permalink to this heading")


Data that consists of *n*\-dimensional time series in [wide or long format](../data-formatting.html).




### [Parameters](#id2)[¶](#parameters "Permalink to this heading")



#### Time column[¶](#time-column "Permalink to this heading")


Name of the column that contains the timestamps. Note that the timestamp column must have the date type as its [meaning](../../schemas/definitions.html#schema-type-meaning), and duplicate timestamps cannot exist for a given time series.




#### Long format checkbox[¶](#long-format-checkbox "Permalink to this heading")


Indicator that the input data is in the long format. See [Long format](../data-formatting.html#ts-long-format-label).




#### Time series identifiers[¶](#time-series-identifiers "Permalink to this heading")


The names of the columns that contain identifiers for the time series when the input data is in the long format. This parameter is available when you enable the “Long format” checkbox. You can select one or multiple columns.




#### Time step[¶](#time-step "Permalink to this heading")


Number of steps between timestamps of the resampled (output) data, specified as a numerical value.




#### Unit[¶](#unit "Permalink to this heading")


Unit of the time step used for resampling, specified as one of these values:


* Years
* Semi\-annual
* Quarters
* Months
* Weeks
* Business days (Mon\-Fri)
* Days
* Hours
* Minutes
* Seconds
* Milliseconds
* Microseconds
* Nanoseconds




#### Interpolate[¶](#interpolate "Permalink to this heading")


Method used for inferring missing values for timestamps, where the missing values do not begin or end the time series. The available interpolation methods are:


* Nearest: nearest value
* Previous: previous value
* Next: next value
* Mean: average value
* Linear: linear interpolation
* Quadratic: spline interpolation of second order
* Cubic: spline interpolation of third order
* Constant: replace missing values with a constant
* Don’t interpolate (impute null): retrieve missing dates and leave missing values empty


Interpolation methods are based on the [scipy implementation](https://docs.scipy.org/doc/scipy-1.2.1/reference/generated/scipy.interpolate.interp1d.html#scipy-interpolate-interp1d).




#### Extrapolate[¶](#extrapolate "Permalink to this heading")


Method used for prolonging time series that stop earlier than others or start later than others. Extrapolation infers time series values that are located before the first available value or after the last available value. The available extrapolation methods are:


* Previous/next: set to previous available value or next available value (if previous values are missing)
* Same as interpolation
* Don’t extrapolate (impute null): retrieve missing dates and leave missing values empty
* Don’t extrapolate (no imputation): don’t extrapolate missing dates




#### Impute category data[¶](#impute-category-data "Permalink to this heading")


Method used to fill in categorical values during interpolation and extrapolation. The available methods are:


* Empty : leave the categorical values of the inferred rows empty
* Constant: replace missing categorical data with a constant value
* Most common: set to the most common value of the time series
* Previous/next : set to previous available value or next available value (if previous values are missing)
* Previous: set to previous available value
* Next: set to next available value




#### Clip start[¶](#clip-start "Permalink to this heading")


Number of time steps to remove from the beginning of the time series, specified as a numerical value of the [unit](#resampling-unit-label) parameter.




#### Clip end[¶](#clip-end "Permalink to this heading")


Number of time steps to remove from the end of the time series, specified as a numerical value of the [unit](#resampling-unit-label) parameter.




#### Shift value[¶](#shift-value "Permalink to this heading")


Amount by which to shift (or offset) all timestamps, specified as a positive or negative numerical value of the [unit](#resampling-unit-label) parameter.





### [Output Data](#id3)[¶](#output-data "Permalink to this heading")


Data consisting of equispaced time series, and having the same number of columns as the input data.




### [Algorithms](#id4)[¶](#algorithms "Permalink to this heading")


The resampling recipe upsamples or downsamples time series in your data so that the length of all the time series are aligned. When you specify a given time step (for example, 30 seconds), the recipe will upsample or downsample the time series by an integer multiple of the time step.


The recipe also performs both interpolation (See [Interpolate](#resampling-interpolation-label)) and extrapolation (See [Extrapolate](#resampling-extrapolation-label)) to infer missing values.




### [Tip](#id5)[¶](#tip "Permalink to this heading")


* The resampling recipe works on all numerical columns in your input dataset. To apply the recipe on select columns, you must first prepare your data by removing the unwanted columns.





Related pages[¶](#related-pages "Permalink to this heading")
------------------------------------------------------------


* [Windowing](windowing.html)
* [Interval extraction](interval-extraction.html)
* [Extrema extraction](extrema-extraction.html)
* [Trend/seasonal decomposition](decomposition.html)