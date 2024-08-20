Formatting[¶](#formatting "Permalink to this heading")
======================================================


Formatting options are options that does not change how the chart data is computed but rather how it is displayed.




---



* [Number Formatting](#number-formatting)
* [Display labels](#display-labels)
* [Display values/labels in chart](#display-values-labels-in-chart)
* [Axes formatting](#axes-formatting)
* [Legend formatting](#legend-formatting)




[Number Formatting](#id1)[¶](#number-formatting "Permalink to this heading")
----------------------------------------------------------------------------


By default, DSS chooses how to format numbers based on available data for both axes and measures/numerical dimensions.


In order to give you more control over how these values are formatted, several formatting options are available:


* multiplier (thousands, millions, billions)
* decimal places
* digit grouping
* prefix
* suffix


Number formatting can be applied to:


* axes: the formatting is applied to the axis tick labels;


![../_images/axis-number-formatting.png](../_images/axis-number-formatting.png)
* measures/numerical dimensions: the formatting is applied everywhere a value of this measure/dimension is displayed (eg in tooltips and in the legend).


![../_images/measure-number-formatting.png](../_images/measure-number-formatting.png)


*Note: axes and measures/dimensions are independent, meaning that if you want consistency between the axes tick labels and the measure/dimension values you have to apply the same options to the axes and the measures/dimensions from their dedicated configuration menus.*




[Display labels](#id2)[¶](#display-labels "Permalink to this heading")
----------------------------------------------------------------------


The “Display label” option allows you to change how the field name displays in the chart


Editing the “Display label” field will affect how that label is displayed in the chart:
\- for measures: tooltips and color label will be updated;
\- for dimensions: tooltips will be updated.


This option is available for most charts as soon as the measure/dimension name is displayed.


![../_images/display-label.png](../_images/display-label.png)


[Display values/labels in chart](#id3)[¶](#display-values-labels-in-chart "Permalink to this heading")
------------------------------------------------------------------------------------------------------


The “Display value in chart” and “Display labels in chart” options allow you to have the values and/or labels shown directly in the chart.
These options are checkboxes that are placed on the left side of the chart, in the “Values” section.


The “Display value in chart” option is available on the following charts:
\- Vertical bars
\- Vertical stacked bars
\- Vertical stacked bars 100%
\- Horizontal stacked bars
\- Horizonal stacked bars 100%
\- Pie
\- Donut
\- Treemap


*Note: on the treemap chart, this option is present both in the “Values” section (concerns the column used as “Value”), and in each dimension’s contextual menu (concerns the columns used as “Group”).*


The “Display labels in chart” option is available for Pie and Donut charts.


Additionally, the values and labels displayed in chart can be customised. For all of the charts mentioned above, you can choose a font color, font size, add a background and change its color and opacity.
The exception is the treemap chart, where you can only customise the font size. Additionally, for all bar charts, both vertical and horizontal, you can select an overlapping strategy, specifically whether to hide overlapping values or display all of them.


![../_images/values-in-chart-formatting.png](../_images/values-in-chart-formatting.png)


[Axes formatting](#id4)[¶](#axes-formatting "Permalink to this heading")
------------------------------------------------------------------------


The axis formatting options concern axis ticks and titles. They allow you to change the font size and font color of axis ticks and titles (if shown in the chart)
These customisation options are applicable for all the charts that have axes, excluding the x axis on the boxplot chart. For the charts that allow multiple y axes, it is possible to format each axis separately.
These settings can be found in the Format tab.


![../_images/axis-formatting-1.png](../_images/axis-formatting-1.png)
![../_images/axis-formatting-2.png](../_images/axis-formatting-2.png)


[Legend formatting](#id5)[¶](#legend-formatting "Permalink to this heading")
----------------------------------------------------------------------------


The legend formatting options are available for all the charts that have legends. They allow you to change the font size and font color of the items in the legend.


![../_images/legend-formatting.png](../_images/legend-formatting.png)