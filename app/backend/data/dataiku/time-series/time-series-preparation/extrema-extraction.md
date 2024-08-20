Extrema extraction[¶](#extrema-extraction "Permalink to this heading")
======================================================================


Time series extrema are the minimum and maximum values in time series data. It can be useful to compute aggregates of a time series around extrema values to understand trends around those values.



Extrema extraction recipe[¶](#extrema-extraction-recipe "Permalink to this heading")
------------------------------------------------------------------------------------


The extrema extraction recipe allows you to extract aggregates of time series values around a global extremum (global maximum or global minimum).


Using this recipe, you can find a global extremum in one dimension of a time series and perform windowing functions around the timestamp of the extremum on all dimensions. See [Windowing](windowing.html) for more details about the windowing operations.


This recipe works on all numerical columns (*int* or *float*) in your time series data.



* [Input Data](#input-data)
* [Parameters](#parameters)
* [Output Data](#output-data)
* [Algorithms](#algorithms)
* [Tips](#tips)




### [Input Data](#id1)[¶](#input-data "Permalink to this heading")


Data that consists of equispaced *n*\-dimensional time series in [wide or long format](../data-formatting.html).


If input data is in the long format, then the recipe will find the extremum of each time series in the column on which you operate. See [Algorithms](#extrema-algorithms-label) for more details.




### [Parameters](#id2)[¶](#parameters "Permalink to this heading")



#### Time column[¶](#time-column "Permalink to this heading")


Name of the column that contains the timestamps. Note that the timestamp column must have the date type as its [meaning](../../schemas/definitions.html#schema-type-meaning) (detected by DSS), and duplicate timestamps cannot exist for a given time series.




#### Long format checkbox[¶](#long-format-checkbox "Permalink to this heading")


Indicator that the input data is in the long format. See [Long format](../data-formatting.html#ts-long-format-label).




#### Time series identifiers[¶](#time-series-identifiers "Permalink to this heading")


The names of the columns that contain identifiers for the time series when the input data is in the long format. This parameter is available when you enable the “Long format” checkbox. You can select one or multiple columns.




#### Find extremum in column[¶](#find-extremum-in-column "Permalink to this heading")


Name of column from which to extract the extremum value.




#### Extremum type[¶](#extremum-type "Permalink to this heading")


Type of extremum to find, specified as “Global minimum” or “Global maximum”.




#### Causal window[¶](#causal-window "Permalink to this heading")


Option to use a causal window, that is, a window that contains only past (and optionally, present) observations. The timestamp for the extremum point will be at the right border of the window.


If you deselect this option, Dataiku DSS uses a bilateral window, that is, a window that places the timestamp for the extremum point at its center.




#### Shape[¶](#shape "Permalink to this heading")


Window shape applied to the *Sum* and *Average* operations. The shape can take on one of these values:


* Rectangular: simple rectangular window with a flat profile
* Triangle: triangle window (with nonzero values at the endpoints)
* Bartlett: triangle window (with zero values at the endpoints)
* Gaussian: nonlinear window in the shape of a Gaussian distribution
* Parzen: nonlinear window made of connected polynomials of the third degree
* Hamming: nonlinear window generated as a sum of cosines (trigonometric polynomial of order 1\)
* Blackman: nonlinear window generated as a sum of cosines (trigonometric polynomial of order 2\)




#### Width[¶](#width "Permalink to this heading")


Width of the window, specified as a numerical value (*int* or *float*).


The window width cannot be smaller than the frequency of the time series. For example, if your timestamp intervals equal 5 minutes, you cannot specify a window width smaller than 5 minutes.




#### Unit[¶](#unit "Permalink to this heading")


Unit of the window width, specified as one of these values:


* Years
* Months
* Weeks
* Days
* Hours
* Minutes
* Seconds
* Milliseconds
* Microseconds
* Nanoseconds




#### Include window bounds[¶](#include-window-bounds "Permalink to this heading")


Edges of the window to include when computing aggregations. This parameter is active only when you use a causal window. Choose from one of these values:


* Yes, left only
* Yes, right only
* Yes, both
* No




#### Aggregations[¶](#aggregations "Permalink to this heading")


Operations to perform on a window of time series data. Select one or more of these options:


* Retrieve
* Min
* Max
* Average
* Sum
* Standard deviation
* 25th percentile
* Median
* 75th percentile
* First order derivative
* Second order derivative





### [Output Data](#id3)[¶](#output-data "Permalink to this heading")


Data consisting of the results of extrema extraction, one row for each time series. Each row contains the timestamp of the extremum and the computed [aggregations](#extrema-aggregations-label) for a window of data around the extremum.




### [Algorithms](#id4)[¶](#algorithms "Permalink to this heading")


If the input data is in the wide format, the recipe works as follows:



> 1. Find the global extremum and corresponding timestamp for a [specific column](#extrema-column-label).
> 2. For all columns, apply a window around the timestamp and compute [aggregations](#extrema-aggregations-label).


If the input data is in the long format, then the recipe implements slightly different steps, as follows:



> 1. Find the global extremum and corresponding timestamp for *each* time series in a [specific column](#extrema-column-label).
> 2. For all columns, apply a window around the timestamps found in step 1 and then compute aggregations.




### [Tips](#id5)[¶](#tips "Permalink to this heading")


* If you have irregular timestamp intervals, first resample your data using the [resampling recipe](resampling.html#tsresampling-recipe-label). Then you can apply the extrema extraction recipe to the resampled data.
* The extrema extraction recipe works on all numerical columns of a dataset. To apply the recipe to select columns, you must first prepare your data by removing the unwanted columns.





Related pages[¶](#related-pages "Permalink to this heading")
------------------------------------------------------------


* [Interval extraction](interval-extraction.html)
* [Windowing](windowing.html)
* [Resampling](resampling.html)
* [Trend/seasonal decomposition](decomposition.html)