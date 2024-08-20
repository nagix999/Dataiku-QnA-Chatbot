Charts[¶](#charts "Permalink to this heading")
==============================================


Charts are visual aggregations of data that provide insight into the relationships in your datasets.


DSS delivers an advanced data visualization engine through the Charts tab of a dataset or visual analysis. The chart\-building interface is essentially the same in both locations, with the following important caveats.


* Charts in a visual analysis can work in real\-time on the output of a data preparation Script. Instead of rebuilding a dataset, simply add a step to the script and view the result immediately.
* Charts in a dataset can be published as insights for inclusion in dashboards, while charts in a visual analysis cannot. However, when a visual analysis is deployed as a Prepare recipe, its charts can be transferred during deployment to the output dataset.
* Charts in a dataset can make use of the in\-database [execution engine](sampling.html), while charts in a visual analysis are always run in the DSS engine.



See also


For more information, see the [Charts](https://knowledge.dataiku.com/latest/data-viz/charts/index.html) section in the Knowledge Base.





---



* [The Charts Interface](interface.html)
* [Sampling \& Engine](sampling.html)
	+ [Charts Execution Engines](sampling.html#charts-execution-engines)
		- [DSS](sampling.html#dss)
		- [In\-database](sampling.html#in-database)
	+ [Sampling](sampling.html#sampling)
	+ [Limit Memory Usage](sampling.html#limit-memory-usage)
		- [RAM](sampling.html#ram)
		- [Number of bins](sampling.html#number-of-bins)
* [Basic Charts](charts-basics.html)
	+ [Chart Layouts](charts-basics.html#chart-layouts)
		- [Bar](charts-basics.html#bar)
		- [Lines \& Curves](charts-basics.html#lines-curves)
		- [Pie \& Donuts](charts-basics.html#pie-donuts)
	+ [Column Processing Options](charts-basics.html#column-processing-options)
		- [Binning Column](charts-basics.html#binning-column)
		- [Summary Column](charts-basics.html#summary-column)
		- [Grouping Column](charts-basics.html#grouping-column)
* [Tables](charts-tables.html)
* [Scatter Charts](charts-scatters.html)
	+ [Chart Layouts](charts-scatters.html#chart-layouts)
		- [Basic](charts-scatters.html#basic)
		- [Multi\-pair](charts-scatters.html#multi-pair)
		- [Grouped](charts-scatters.html#grouped)
		- [Binned](charts-scatters.html#binned)
	+ [Regression line](charts-scatters.html#regression-line)
* [Map Charts](charts-maps.html)
	+ [Chart Layouts](charts-maps.html#chart-layouts)
		- [Scatter](charts-maps.html#scatter)
		- [Geometry](charts-maps.html#geometry)
			* [Choose the order of the geo layers](charts-maps.html#choose-the-order-of-the-geo-layers)
			* [Set the colors](charts-maps.html#set-the-colors)
			* [Aggregate geometries](charts-maps.html#aggregate-geometries)
		- [Density](charts-maps.html#density)
		- [Binned](charts-maps.html#binned)
		- [Administrative](charts-maps.html#administrative)
	+ [Geographic columns](charts-maps.html#geographic-columns)
	+ [Map backgrounds](charts-maps.html#map-backgrounds)
* [Other Charts](charts-other.html)
	+ [Boxplot](charts-other.html#boxplot)
	+ [2D Distribution](charts-other.html#d-distribution)
	+ [Lift Chart](charts-other.html#lift-chart)
	+ [Treemap](charts-other.html#treemap)
	+ [KPI](charts-other.html#kpi)
	+ [Radar](charts-other.html#radar)
	+ [Sankey](charts-other.html#sankey)
	+ [Gauge](charts-other.html#gauge)
* [Common Chart Elements](common.html)
* [Color palettes](palettes.html)
	+ [Palette types](palettes.html#palette-types)
		- [Discrete palettes](palettes.html#discrete-palettes)
		- [Continuous palettes](palettes.html#continuous-palettes)
		- [Diverging palettes](palettes.html#diverging-palettes)
	+ [Custom palettes](palettes.html#custom-palettes)
	+ [Meaning\-associated palettes](palettes.html#meaning-associated-palettes)
	+ [Color assignations](palettes.html#color-assignations)
* [Formatting](formatting.html)
	+ [Number Formatting](formatting.html#number-formatting)
	+ [Display labels](formatting.html#display-labels)
	+ [Display values/labels in chart](formatting.html#display-values-labels-in-chart)
	+ [Axes formatting](formatting.html#axes-formatting)
	+ [Legend formatting](formatting.html#legend-formatting)
* [Filter settings](filter-settings.html)
	+ [Include/Exclude other values](filter-settings.html#include-exclude-other-values)
	+ [Only relevant values/All values in sample](filter-settings.html#only-relevant-values-all-values-in-sample)
* [Custom aggregations](custom-aggregations.html)
	+ [Creating and using custom aggregations](custom-aggregations.html#creating-and-using-custom-aggregations)
	+ [Limitations](custom-aggregations.html#limitations)
* [Reference lines](reference-lines.html)
* [Copy/paste charts](copy-paste.html)
* [Third\-party BI tools](third-party-bi-tools.html)
	+ [Tableau](third-party-bi-tools.html#tableau)
	+ [Microsoft PowerBI](third-party-bi-tools.html#microsoft-powerbi)
	+ [Qlik](third-party-bi-tools.html#qlik)
	+ [Microstrategy](third-party-bi-tools.html#microstrategy)