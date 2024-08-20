Change coordinates system[¶](#change-coordinates-system "Permalink to this heading")
====================================================================================


This processor changes the Coordinates Reference System (CRS) of a geometry or geopoint column.


Source and target CRS can be given either as a EPSG code (e.g., “EPSG:4326”) or as a projected coordinate system WKT (e.g., “PROJCS\[…]”).



Warning


Dataiku uses the WGS84 (EPSG:4326\) coordinates system when processing geometries. Before manipulating any geospatial data in Dataiku, make sure they are projected in the WGS84 (EPSG:4326\) coordinates system.



Use this processor to convert data projected in a different CRS to the WGS84 (EPSG:4326\) coordinates system.


![../../_images/change-crs-processor.png](../../_images/change-crs-processor.png)