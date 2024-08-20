Basic Charts[¶](#basic-charts "Permalink to this heading")
==========================================================


The Basic charts build visualizations based on the following types of columns:


* A required binning column, whose values are broken down into discrete values, or bins.
* A required summary column, whose values are aggregated for each bin. Some basics charts allow multiple summary columns.
* An optional grouping column to produce subgroups of bins.




---



* [Chart Layouts](#chart-layouts)


	+ [Bar](#bar)
	+ [Lines \& Curves](#lines-curves)
	+ [Pie \& Donuts](#pie-donuts)
* [Column Processing Options](#column-processing-options)


	+ [Binning Column](#binning-column)
	+ [Summary Column](#summary-column)
	+ [Grouping Column](#grouping-column)




[Chart Layouts](#id2)[¶](#chart-layouts "Permalink to this heading")
--------------------------------------------------------------------



### [Bar](#id3)[¶](#bar "Permalink to this heading")


* The **Histogram** layout puts the binning column on the X axis, the summary column on the Y axis, and creates separate bars for each subgroup for each bin.


![../_images/histogram.png](../_images/histogram.png)
* The **Stacked** layout puts the binning column on the X axis, the summary column on the Y axis, and stacks each subgroup within each bin.


![../_images/stacked.png](../_images/stacked.png)

### [Lines \& Curves](#id4)[¶](#lines-curves "Permalink to this heading")


Lines \& curves charts are generally most useful for comparing multiple subgroups or summary columns.


* The **Lines** layout puts the binning column on the X axis, the line height column on the Y axis, and creates separate lines for each subgroup for each bin.


![../_images/lines.png](../_images/lines.png)
* The **Mixed** layout puts the binning column on the X axis, for each height column on the Y axis and creates separate bars for each subgroup for each bin. You can choose whether to display it as a bar or line.


![../_images/mixed.png](../_images/mixed.png)
* The **Stacked Area** layout works roughly like a Stacked Bar chart, but it will create a smooth area instead of columns.


![../_images/stacked-area.png](../_images/stacked-area.png)
* The **Stacked Area 100%** layout works roughly like a Stacked 100% Bar chart, but it will create a smooth area instead of columns.


![../_images/stacked-area100.png](../_images/stacked-area100.png)


### [Pie \& Donuts](#id5)[¶](#pie-donuts "Permalink to this heading")


Pie \& donut charts are generally most appropriate when there is no inherent ordering of the bins.


* **Pie** charts are like bar charts, but each bin is represented by a wedge in a circle, like a slice of pie. The size of each wedge is proportional to the sum total of all wedges. There is no subgrouping of wedges.


![../_images/pie.png](../_images/pie.png)
* **Donut** charts are like pie charts, but with the middle removed.


![../_images/donut.png](../_images/donut.png)



[Column Processing Options](#id6)[¶](#column-processing-options "Permalink to this heading")
--------------------------------------------------------------------------------------------



### [Binning Column](#id7)[¶](#binning-column "Permalink to this heading")


Set the binning rules by clicking on the name of the binning column.


[![../_images/binning-column.png](../_images/binning-column.png)](../_images/binning-column.png)


### [Summary Column](#id8)[¶](#summary-column "Permalink to this heading")


Set the aggregation rules by clicking on the name of the summary column.


[![../_images/summary-column.png](../_images/summary-column.png)](../_images/summary-column.png)


### [Grouping Column](#id9)[¶](#grouping-column "Permalink to this heading")


Set the subgroup sorting rules by clicking on the name of the grouping column.


[![../_images/grouping-column.png](../_images/grouping-column.png)](../_images/grouping-column.png)

Note


It generally does not make sense to use the “AVERAGE” aggregation when creating subgroups of of bars. Only aggregations that “naturally stack” should be used: SUM and COUNT.