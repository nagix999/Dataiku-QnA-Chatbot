Interval extraction[¶](#interval-extraction "Permalink to this heading")
========================================================================


It is sometimes useful to identify periods when time series values are within a given range. For example, a sensor reporting time series measurements may record values that fall outside an acceptable range, thus making it necessary to extract segments of the data.



Interval extraction recipe[¶](#interval-extraction-recipe "Permalink to this heading")
--------------------------------------------------------------------------------------


The interval extraction recipe identifies segments of the time series where the values fall within a given range. See [Algorithms](#interval-algorithms-label) for more information.


This recipe works on all numerical columns (*int* or *float*) in your time series data.



* [Input Data](#input-data)
* [Parameters](#parameters)
* [Output Data](#output-data)
* [Algorithms](#algorithms)
* [Tips](#tips)




### [Input Data](#id1)[¶](#input-data "Permalink to this heading")


Data that consists of equispaced *n*\-dimensional time series in [wide or long format](../data-formatting.html).


If input data is in the long format, then the recipe will separately extract the intervals of each time series that is in a column. See [Algorithms](#interval-algorithms-label) for more information.




### [Parameters](#id2)[¶](#parameters "Permalink to this heading")



#### Time column[¶](#time-column "Permalink to this heading")


Name of the column that contains the timestamps. Note that the timestamp column must have the date type as its [meaning](../../schemas/definitions.html#schema-type-meaning) (detected by DSS), and duplicate timestamps cannot exist for a given time series.




#### Long format checkbox[¶](#long-format-checkbox "Permalink to this heading")


Indicator that the input data is in the long format. See [Long format](../data-formatting.html#ts-long-format-label).




#### Time series identifiers[¶](#time-series-identifiers "Permalink to this heading")


The names of the columns that contain identifiers for the time series when the input data is in the long format. This parameter is available when you enable the “Long format” checkbox. You can select one or multiple columns.




#### Apply threshold to column[¶](#apply-threshold-to-column "Permalink to this heading")


Name of the column to which the recipe applies the threshold parameters.




#### Minimal valid value[¶](#minimal-valid-value "Permalink to this heading")


Minimum acceptable value in the time series interval, specified as a numerical value (*int* or *float*). The minimal valid value and the maximum valid value form the range of acceptable values.




#### Maximum valid value[¶](#maximum-valid-value "Permalink to this heading")


Maximum acceptable value in the time series interval, specified as a numerical value (*int* or *float*). The maximum valid value and the minimal valid value form the range of acceptable values.




#### Unit[¶](#unit "Permalink to this heading")


Unit of the [acceptable deviation](#interval-acceptable-deviation-label) and the [minimal segment duration](#interval-minimal-duration-label), specified as one of these values:


* Days
* Hours
* Minutes
* Seconds
* Milliseconds
* Microseconds
* Nanoseconds




#### Acceptable deviation[¶](#acceptable-deviation "Permalink to this heading")


Maximum duration of the specified [unit](#interval-unit-label), for which values within a valid time segment can deviate from the range of acceptable values.


For example, if you specify 400 \- 600 as a range of acceptable values, and an acceptable deviation of 30 seconds, then the recipe can return a valid time segment that includes values outside the specified range, provided that those values last for a time duration that is less than 30 seconds.




#### Minimal segment duration[¶](#minimal-segment-duration "Permalink to this heading")


The minimum duration for a time segment to be valid, specified as a numerical value of the [unit](#interval-unit-label) parameter.


For example, you can specify 400 \- 600 as a range of acceptable values, and a minimal segment duration of 3 minutes. If all the values in a time segment are between 400 and 600 (or satisfy the acceptable deviation), but the segment lasts less than 3 minutes, then the time segment would be invalid.





### [Output Data](#id3)[¶](#output-data "Permalink to this heading")


Data consisting of equispaced and *discontinuous* time series. Each interval in the output data will have an id (“interval\_id”).




### [Algorithms](#id4)[¶](#algorithms "Permalink to this heading")


For values of the [minimal segment duration](#interval-minimal-duration-label) and [acceptable deviation](#interval-acceptable-deviation-label), the recipe implements the following steps.



> 1. Evaluate if consecutive values of a time series satisfy at least one of these conditions:
> 
> 
> 
> > 1. the values are in the range of acceptable values (between the [minimal valid value](#min-value-label) and the [maximum valid value](#max-value-label))
> > 	2. the values deviate from the range of acceptable values but last for a time period that is smaller than the acceptable deviation
> 
> 
> 
> > * If yes, then these values form a segment and the recipe proceeds to step 2\.
> > * If no, then the values are not acceptable, and the recipe repeats step 1 for successive values in the time series.
> 
> 
> 2. Evaluate if the segment lasts for a time duration that is greater than the *minimal segment duration*.
> 
> 
> 
> > * If yes, then keep this segment as an acceptable interval
> > * If no, then this segment is not an acceptable time interval
> > 
> > 
> > Return to step 1 to evaluate successive values in the time series.



Note


If the input data is in the long format, then for each time series in a [specified column](#interval-column-label), the recipe will perform the interval extraction algorithm separately.





### [Tips](#id5)[¶](#tips "Permalink to this heading")


* If you have irregular timestamp intervals, first resample your data, using the [resampling recipe](resampling.html#tsresampling-recipe-label). Then you can apply the interval extraction recipe to the resampled data.
* The interval extraction recipe works on all numerical columns of a dataset. To apply the recipe on select columns, you must first prepare your data by removing the unwanted columns.





Related pages[¶](#related-pages "Permalink to this heading")
------------------------------------------------------------


* [Extrema extraction](extrema-extraction.html)
* [Windowing](windowing.html)
* [Resampling](resampling.html)
* [Trend/seasonal decomposition](decomposition.html)