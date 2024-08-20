Additional APIs[¶](#additional-apis "Permalink to this heading")
================================================================


This page lists reference for some API exposed by DSS.


These additional APIs come in addition to:


* [The Python APIs](https://developer.dataiku.com/latest/api-reference/python/index.html "(in Developer Guide)")
* [The R API](../R-api/index.html)
* [The REST API](../publicapi/index.html)


The additional APIs are a Javascript API for webapps and a Scala API for Scala recipes.



* [The Javascript API](js/index.html)
	+ [Fetching dataset data](js/index.html#fetching-dataset-data)
		- [`dataiku.fetch()`](js/index.html#dataiku.fetch)
	+ [The DataFrame object](js/index.html#the-dataframe-object)
		- [`DataFrame`](js/index.html#DataFrame)
			* [`DataFrame.getNbRows()`](js/index.html#DataFrame.getNbRows)
			* [`DataFrame.getRow()`](js/index.html#DataFrame.getRow)
			* [`DataFrame.getColumnNames()`](js/index.html#DataFrame.getColumnNames)
			* [`DataFrame.getRows()`](js/index.html#DataFrame.getRows)
			* [`DataFrame.getRecord()`](js/index.html#DataFrame.getRecord)
			* [`DataFrame.getColumnValues()`](js/index.html#DataFrame.getColumnValues)
			* [`DataFrame.getColumnIdx()`](js/index.html#DataFrame.getColumnIdx)
			* [`DataFrame.mapRows()`](js/index.html#DataFrame.mapRows)
			* [`DataFrame.mapRecords()`](js/index.html#DataFrame.mapRecords)
		- [`dataiku.setAPIKey()`](js/index.html#dataiku.setAPIKey)
		- [`dataiku.setDefaultProjectKey()`](js/index.html#dataiku.setDefaultProjectKey)
	+ [Sampling](js/index.html#sampling)
		- [sampling \= ‘head’](js/index.html#sampling-head)
		- [sampling \= ‘random’](js/index.html#sampling-random)
		- [sampling \= ‘full’](js/index.html#sampling-full)
		- [sampling \= ‘random\-column’](js/index.html#sampling-random-column)
		- [sampling \= ‘sort\-column’](js/index.html#sampling-sort-column)
	+ [Partitions selection](js/index.html#partitions-selection)
	+ [Columns selection](js/index.html#columns-selection)
	+ [Rows filtering](js/index.html#rows-filtering)
* [The Scala API](scala/index.html)
	+ [Reference documentation](scala/index.html#reference-documentation)
	+ [Example usage](scala/index.html#example-usage)