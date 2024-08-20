Map Charts[¶](#map-charts "Permalink to this heading")
======================================================


Map charts let you display a dataset containing geographic features on a world map.


The Map charts build visualizations based a required Geo column, whose values can be geographic points or geometries.




---



* [Chart Layouts](#chart-layouts)


	+ [Scatter](#scatter)
	+ [Geometry](#geometry)
	
	
		- [Choose the order of the geo layers](#choose-the-order-of-the-geo-layers)
		- [Set the colors](#set-the-colors)
		- [Aggregate geometries](#aggregate-geometries)
	+ [Density](#density)
	+ [Binned](#binned)
	+ [Administrative](#administrative)
* [Geographic columns](#geographic-columns)
* [Map backgrounds](#map-backgrounds)




[Chart Layouts](#id1)[¶](#chart-layouts "Permalink to this heading")
--------------------------------------------------------------------



### [Scatter](#id2)[¶](#scatter "Permalink to this heading")


* The **Scatter Map** layout plots a point at each individual geopoint. It allows you to add optional Color and Size columns that change the color and size of the points based upon the column values. The Size column must be numeric, but the Color column can be text or numeric.


![../_images/scatter-map.png](../_images/scatter-map.png)


### [Geometry](#id3)[¶](#geometry "Permalink to this heading")


* The **Geometry Map** layout works best with geometries, but will work with geopoints, in which case it is like a Scatter Map with no Size column. A Geometry Map can display several geographical columns.


![../_images/geometry-map.png](../_images/geometry-map.png)

#### [Choose the order of the geo layers](#id4)[¶](#choose-the-order-of-the-geo-layers "Permalink to this heading")


The order of the dragged geo columns determines the order of appearance of the geo layers on a map. Hence,


* if a geo column “geometry” is added on the **right hand side** of another geo column, the chart will display the layer “geometry” on top.
* if a geo column “geometry” is added **under** another geo column, the chart will display the layer “geometry” on top.


Therefore, the chart below plots :


* the column “isochrone\_envelope” (orange) on top
* the column “city\_geom” (red) in between the two layers
* the column “geoenvelope\_walmart” (blue) in the background


![../_images/geometry-map-order.png](../_images/geometry-map-order.png)
To change the order of the displayed layers, you may change the order of the geo columns by dragging and dropping them.


![../_images/geometry-map-change-order.png](../_images/geometry-map-change-order.png)


#### [Set the colors](#id5)[¶](#set-the-colors "Permalink to this heading")


You can modify the colors by clicking on the “drop” button: [![drop](../_images/geometry-map-drop-icon.png)](../_images/geometry-map-drop-icon.png) of the geo column of your choice.


![../_images/geometry-map-color-settings.png](../_images/geometry-map-color-settings.png)
For each geographical layer, you can add a color column to change the colors of the displayed geometries according to their values. For example, the chart below colors each county based on their area.


![../_images/geometry-map-color-column.png](../_images/geometry-map-color-column.png)


#### [Aggregate geometries](#id6)[¶](#aggregate-geometries "Permalink to this heading")


If two geometries are equal, a Geometry map plots them twice. If you want to display duplicated geometries only once, set the **Aggregate** option to Make Unique.


![../_images/geom-map-aggregation.png](../_images/geom-map-aggregation.png)
The “Make unique” option is only available for geometry columns without a color column.





### [Density](#id7)[¶](#density "Permalink to this heading")


The **Density Map** layout displays the density of geopoints taking into accounts their spatial proximity and an optional quantitative metric.


The following parameters can be tuned:


* Details: Optional quantitative column of the input dataset used as an additional point weight based on its value in the column.
* Intensity (global for all points): A global parameter used as a multiplier for the weights of the points. Setting a high intensity will result in a less transparent chart.
* Radius (global for all points): A global parameter setting the radius of each point, a higher radius will result in more overlapping between points and higher intensity in high density zones.


![../_images/density-heatmap.png](../_images/density-heatmap.png)


### [Binned](#id8)[¶](#binned "Permalink to this heading")


The **Grid Map** layout plots the geographic locations as rectangular grids on the map. It allows you to add an optional Color column that changes the color of the points based upon the column values. The Color column can be text or numeric.


![../_images/grid-map.png](../_images/grid-map.png)

Note


Map charts cannot be downloaded as images. To share map charts, publish them to a dashboard or take a screenshot of the map to generate an image of the map chart.





### [Administrative](#id9)[¶](#administrative "Permalink to this heading")



Note


Administrative maps are considered a BETA feature. You might encounter issues while using it and we do not guarantee that this feature will keep working the same way in future versions.


To create Administrative maps, you must first install the [Reverse Geocoding plugin](https://www.dataiku.com/dss/plugins/info/geoadmin.html). See [Installing plugins](../plugins/installing.html) for details.



Administrative maps are aggregated charts: rows in your dataset are aggregated by administrative levels; for example:


* By country
* By region
* By city


You can change the “level of aggregation” by opening the settings of the Geo column.


![../_images/geo-levels.png](../_images/geo-levels.png)
Two kinds of Administrative maps are available:


* In the **Bubbles** layout, each administrative level is represented by a circle. You can assign measures to both color and size.


![../_images/bubbles.png](../_images/bubbles.png)
* In the **Filled** layout, each administrative level is represented by its real polygon. You can assign a measure to the color


![../_images/filled.png](../_images/filled.png)



[Geographic columns](#id10)[¶](#geographic-columns "Permalink to this heading")
-------------------------------------------------------------------------------


A geographic column is either a point or another kind of geometry. Valid geographic columns are detected as “Geopoint” or “Geometry” in the exploration component.


Geographic columns can be obtained in DSS:


* By reading a GeoJSON or Shapefile dataset
* By reading any dataset containing a column in [WKT format](http://en.wikipedia.org/wiki/Well-known_text)
* By applying a geocoding processor in a preparation script
* By applying a “Resolve GeoIP” processor in a preparation script




[Map backgrounds](#id11)[¶](#map-backgrounds "Permalink to this heading")
-------------------------------------------------------------------------


DSS comes pre\-bundled with map backgrounds provided by Carto. More map backgrounds can be added using DSS plugins:


* You can find in the Dataiku plugins [a plugin to add map backgrounds from Mapbox](https://www.dataiku.com/dss/plugins/info/mapbox-maps-backgrounds.html) (requires a Mapbox API key)
* In addition, you can [create your own plugins to add other backgrounds](../plugins/reference/charts-elements.html).