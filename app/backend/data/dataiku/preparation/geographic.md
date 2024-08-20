Geographic processors[¶](#geographic-processors "Permalink to this heading")
============================================================================


The prepare recipe provides a variety of processors to work with geographic information.


For an overview of all geographic capabilities in DSS, please see [Geographic data](../geographic/index.html)


DSS also provides a set of formulas to compute geographic operations (see [Formula language](../formula/index.html))



* [Geopoint converters](#geopoint-converters)
* [Resolve GeoIP](#resolve-geoip)
* [Reverse geocoding](#reverse-geocoding)
* [Zipcode geocoding](#zipcode-geocoding)
* [Change coordinates system](#change-coordinates-system)
* [Compute distances between geospatial objects](#compute-distances-between-geospatial-objects)
* [Create area around a geopoint](#create-area-around-a-geopoint)
* [Extract from geo column](#extract-from-geo-column)




[Geopoint converters](#id1)[¶](#geopoint-converters "Permalink to this heading")
--------------------------------------------------------------------------------


DSS provides two processors to convert between a Geopoint column and latitude/longitude columns:


* [Create GeoPoint from lat/lon](processors/geopoint-create.html)
* [Extract lat/lon from GeoPoint](processors/geopoint-extract.html)




[Resolve GeoIP](#id2)[¶](#resolve-geoip "Permalink to this heading")
--------------------------------------------------------------------


The [Resolve GeoIP](processors/geoip.html) processor uses the GeoIP database (<https://www.maxmind.com>) to resolve an IP address to the associated geographic coordinates.


![../_images/geoip-processor.png](../_images/geoip-processor.png)
It produces two kinds of information:


* Administrative data (country, region, city, …)
* Geographic data (latitude, longitude)


The output GeoPoint can be used for [Map Charts](../visualization/charts-maps.html).




[Reverse geocoding](#id3)[¶](#reverse-geocoding "Permalink to this heading")
----------------------------------------------------------------------------


Please see [Geocoding and reverse geocoding](../geographic/geocoding.html)




[Zipcode geocoding](#id4)[¶](#zipcode-geocoding "Permalink to this heading")
----------------------------------------------------------------------------


Please see [Geocoding and reverse geocoding](../geographic/geocoding.html)




[Change coordinates system](#id5)[¶](#change-coordinates-system "Permalink to this heading")
--------------------------------------------------------------------------------------------


This processor changes the Coordinates Reference System (CRS) of a geometry or geopoint column.


Source and target CRS can be given either as a EPSG code (e.g., “EPSG:4326”) or as a projected coordinate system WKT (e.g., “PROJCS\[…]”).


Use this processor to convert data projected in a different CRS to the WGS84 (EPSG:4326\) coordinates system.


![../_images/change-crs-processor.png](../_images/change-crs-processor.png)


[Compute distances between geospatial objects](#id6)[¶](#compute-distances-between-geospatial-objects "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------------


The [Compute distance between geospatial objects](processors/geo-distance.html) processor allows you to compute distance between geospatial objects




[Create area around a geopoint](#id7)[¶](#create-area-around-a-geopoint "Permalink to this heading")
----------------------------------------------------------------------------------------------------


The [Create area around a geopoint](processors/geopoint-buffer.html) processor performs creation of polygons centered on input geopoints. For each input geospatial point, a spatial polygon is created around it, delimiting the area of influence covered by the point (all the points that fall within a given distance from the geopoint). The shape area of the polygon can be either rectangular or circular (using an approximation) and the size will depend on the selected parameters.




[Extract from geo column](#id8)[¶](#extract-from-geo-column "Permalink to this heading")
----------------------------------------------------------------------------------------


The [Extract from geo column](processors/geo-info-extractor.html) processor extracts data from a geometry column:


* centroid point,
* length (if input is not a point),
* area (if input is a polygon).