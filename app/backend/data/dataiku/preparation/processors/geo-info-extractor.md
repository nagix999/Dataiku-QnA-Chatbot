Extract from geo column[¶](#extract-from-geo-column "Permalink to this heading")
================================================================================


This processor extracts data from a geometry column.


Extracts:


* Centroid point
* Length (if input is not a point)
* Area (if input is a polygon)


Warning: Length and area are expressed in the unit of the CRS, so often
in degrees instead of meters.