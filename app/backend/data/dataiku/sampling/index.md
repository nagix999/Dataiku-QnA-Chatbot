Sampling methods[¶](#sampling-methods "Permalink to this heading")
==================================================================



* [Generic sampling methods](#generic-sampling-methods)


	+ [No sampling](#no-sampling)
	+ [First records](#first-records)
	+ [Random sampling (fixed number of records)](#random-sampling-fixed-number-of-records)
	+ [Random sampling (approximate ratio)](#random-sampling-approximate-ratio)
	+ [Random sampling (approximate number of records)](#random-sampling-approximate-number-of-records)
	+ [Column values subset](#column-values-subset)
	+ [Stratified (fixed number of records)](#stratified-fixed-number-of-records)
	+ [Stratified (approximate ratio)](#stratified-approximate-ratio)
	+ [Class rebalancing (approximate number of records)](#class-rebalancing-approximate-number-of-records)
	+ [Class rebalancing (approximate ratio)](#class-rebalancing-approximate-ratio)
	+ [Last records](#last-records)
	+ [First records sorted by a column](#first-records-sorted-by-a-column)
* [Sampling methods availability](#sampling-methods-availability)



Many parts of DSS support sampling data to extract subsets and/or reduce the size of data to process


Sampling can be configured in the following locations in DSS:


* Exploration
* Visual data preparation
* Charts
* Sampling recipe
* Machine learning
* API



[Generic sampling methods](#id1)[¶](#generic-sampling-methods "Permalink to this heading")
------------------------------------------------------------------------------------------


DSS provides a variety of sampling methods, listed below.



### [No sampling](#id2)[¶](#no-sampling "Permalink to this heading")


All data is taken, sampling does not happen.




### [First records](#id3)[¶](#first-records "Permalink to this heading")


This method takes the first N rows of the dataset. It is very fast, as it only reads N rows, but may result in a very biased view of the dataset.




### [Random sampling (fixed number of records)](#id4)[¶](#random-sampling-fixed-number-of-records "Permalink to this heading")


This method randomly selects N records within the whole dataset. This method requires a full pass reading the data. The time taken by this method is thus linear with the size of the dataset.




### [Random sampling (approximate ratio)](#id5)[¶](#random-sampling-approximate-ratio "Permalink to this heading")


This method randomly selects approximately X% of the rows. The target count of records is approximate, and will be more precise with large input datasets.


This method requires a full pass reading the data.




### [Random sampling (approximate number of records)](#id6)[¶](#random-sampling-approximate-number-of-records "Permalink to this heading")


This method randomly selects approximately N records. The target count of records is approximate, and will be more precise with large input datasets.


This method requires 2 full passes reading the data.




### [Column values subset](#id7)[¶](#column-values-subset "Permalink to this heading")


This method randomly selects a subset of values and chooses all rows with these values, in order to obtain approximately N rows. This is useful for selecting a subset of customers, for example.


This sampling method requires 2 full passes reading the data. The time taken by this method is thus linear with the size of the dataset.


This method is useful if you want to have all records for some values of the column, for your analysis. For example, if your dataset is a log of user actions, it is more interesting to have “all actions for a sample of the users” rather than “a sample of all actions”, as it allows you to really study the sequences of actions of these users.


“Column values subset” sampling will only provide interesting results if the selected column has a sufficiently large number of values. A user id would generally be a good choice for the sampling column.




### [Stratified (fixed number of records)](#id8)[¶](#stratified-fixed-number-of-records "Permalink to this heading")


This method randomly selects N rows, ensuring that the distribution of values in a column is respected in the sampling. Ensures that all values of the column appear in the output.


This method may return a few more than N rows.


This sampling method requires 2 full passes reading the data. The time taken by this method is thus linear with the size of the dataset.




### [Stratified (approximate ratio)](#id9)[¶](#stratified-approximate-ratio "Permalink to this heading")


This method randomly selects X% of the rows, ensuring that the distribution of values in a column is respected in the sampling. Ensures that all values of the column appear in the output.


This method may return a bit more than X% rows.


This sampling method requires 2 full passes reading the data. The time taken by this method is thus linear with the size of the dataset.




### [Class rebalancing (approximate number of records)](#id10)[¶](#class-rebalancing-approximate-number-of-records "Permalink to this heading")


This method randomly selects approximately N rows, trying to rebalance equally all modalities of a column. This method does not oversample, only undersample (so some rare modalities may remain under\-represented).In all cases, rebalancing is approximative.


This sampling method requires 2 full passes reading the data. The time taken by this method is thus linear with the size of the dataset.




### [Class rebalancing (approximate ratio)](#id11)[¶](#class-rebalancing-approximate-ratio "Permalink to this heading")


This method randomly selects approximately X% of the rows, trying to rebalance equally all modalities of a column.


This method does not oversample, only undersample (so some rare modalities may remain under\-represented). In all cases, rebalancing is approximative.


This sampling method requires 2 full passes reading the data. The time taken by this method is thus linear with the size of the dataset.




### [Last records](#id12)[¶](#last-records "Permalink to this heading")


This method takes the last N rows of the dataset.


This method requires a full pass reading the data. The time taken by this method is thus linear with the size of the dataset.




### [First records sorted by a column](#id13)[¶](#first-records-sorted-by-a-column "Permalink to this heading")


This method retrieves the first N rows (sorted by a column, ascending or descending) from the dataset.


This method requires to write all data on disk for sorting.





[Sampling methods availability](#id14)[¶](#sampling-methods-availability "Permalink to this heading")
-----------------------------------------------------------------------------------------------------


Not all sampling methods are available in the different locations.


For **Exploration** and **Visual data preparation**, the available sampling methods are:


* First records
* Random sampling (fixed number of records)
* Random sampling (approximate ratio)
* Random sampling (approximate number of records)
* Column values subset
* Stratified (fixed number of records)
* Stratified (approximate ratio)
* Class rebalancing (approximate number of records)
* Class rebalancing (approximate ratio)
* Last records


See [Sampling in explore](../explore/sampling.html) for more information.


For **Charts**, the **Sampling recipe**, **Machine learning** and the **API**, the available sampling methods are:


* No sampling
* First records
* Random sampling (approximate ratio)
* Random sampling (approximate number of records)
* Column values subset
* Class rebalancing (approximate number of records)
* Class rebalancing (approximate ratio)
* First records sorted by a column