Geographic data[¶](#geographic-data "Permalink to this heading")
================================================================


Dataiku DSS can connect to the following type of geographic data:



GeoJSON files[¶](#geojson-files "Permalink to this heading")
------------------------------------------------------------


DSS can read GeoJSON files stored on any filesystem.


DSS can also export any dataset containing a geographic column to GeoJSON




ESRI Shapefiles[¶](#esri-shapefiles "Permalink to this heading")
----------------------------------------------------------------


DSS can read ESRI Shapefiles. Please see [ESRI Shapefiles](../connecting/formats/shapefile.html) for more details




WKT[¶](#wkt "Permalink to this heading")
----------------------------------------


Any column containing [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) can be treated as geographic data




KML[¶](#kml "Permalink to this heading")
----------------------------------------


DSS can read KML/KMZ files.



Note


This capability is provided by the “KML Format extractor”, which you need to install. Please see [Installing plugins](../plugins/installing.html).


This plugin is [Not supported](../troubleshooting/support-tiers.html)





Snowflake[¶](#snowflake "Permalink to this heading")
----------------------------------------------------


DSS can natively read and write the Snowflake GEOGRAPHY data type, which is read as geometry DSS columns.


Please see [Snowflake](../connecting/sql/snowflake.html) for more details.


DSS can also push\-down some geographic computation to Snowflake




PostGIS[¶](#postgis "Permalink to this heading")
------------------------------------------------


[PostGIS](https://postgis.net/) is a widely used PostgreSQL database extension that allows to store and process geospatial data.


DSS can natively read and write PostGIS geo data types.


Please see [PostgreSQL](../connecting/sql/postgresql.html) for more details.


DSS can also push\-down some geographic computation to PostgreSQL / PostGIS