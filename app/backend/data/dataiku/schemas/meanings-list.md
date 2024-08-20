List of recognized meanings[¶](#list-of-recognized-meanings "Permalink to this heading")
========================================================================================



* [Basic meanings](#basic-meanings)


	+ [Text](#text)
	+ [Decimal](#decimal)
	+ [Integer](#integer)
	+ [Boolean](#boolean)
	+ [Date / Dates (needs parsing)](#date-dates-needs-parsing)
	+ [Object / Array](#object-array)
	+ [Natural language](#natural-language)
* [Geospatial meanings](#geospatial-meanings)


	+ [Latitude / Longitude](#latitude-longitude)
	+ [Geopoint](#geopoint)
	+ [Geometry](#geometry)
	+ [Country](#country)
	+ [US State](#us-state)
* [Web\-specific meanings](#web-specific-meanings)
* [Other meanings](#other-meanings)



Here is the list of meanings that DSS recognizes.



[Basic meanings](#id1)[¶](#basic-meanings "Permalink to this heading")
----------------------------------------------------------------------



### [Text](#id2)[¶](#text "Permalink to this heading")


Anything is valid for the “Text” meaning.




### [Decimal](#id3)[¶](#decimal "Permalink to this heading")


Recognizes “raw” decimals (like: 1234\.32\). Accepts negative and scientific notation




### [Integer](#id4)[¶](#integer "Permalink to this heading")


Recognizes “raw” integers (like: 1234\). If the number is higher than 2147483647 or lower than \-2147483648, use bigint type.




### [Boolean](#id5)[¶](#boolean "Permalink to this heading")


This meaning recognizes a large number of possible values (true, false, yes, no, 1, 0, …)




### [Date / Dates (needs parsing)](#id6)[¶](#date-dates-needs-parsing "Permalink to this heading")


The Date meaning only recognizes dates in the ISO\-8601 format, ie dates like `2014-12-31T23:05:43.123Z`


Note that the timezone information is mandatory for a valid *Date*


For all other kinds of dates the “Date (needs parsing)” meaning will be recognized. For more information, see:


* [Handling and display of dates](dates.html)
* [Managing dates](../preparation/dates.html)




### [Object / Array](#id7)[¶](#object-array "Permalink to this heading")


Recognizes objects and arrays in JSON notation




### [Natural language](#id8)[¶](#natural-language "Permalink to this heading")


Recognizes “long text made of words”





[Geospatial meanings](#id9)[¶](#geospatial-meanings "Permalink to this heading")
--------------------------------------------------------------------------------



### [Latitude / Longitude](#id10)[¶](#latitude-longitude "Permalink to this heading")


This meaning recognizes a large number of formats for expressing geometric coordinates.




### [Geopoint](#id11)[¶](#geopoint "Permalink to this heading")


This meaning recognizes a large number of formats for expressing a point in geometric coordinates (notably WKT)




### [Geometry](#id12)[¶](#geometry "Permalink to this heading")


This meaning recognizes WKT format for geographic lines, polygons and multipolygons.




### [Country](#id13)[¶](#country "Permalink to this heading")


The Country meaning recognizes country names (in English) and ISO Country codes




### [US State](#id14)[¶](#us-state "Permalink to this heading")


This meaning recognizes both short codes and full names for USA states.





[Web\-specific meanings](#id15)[¶](#web-specific-meanings "Permalink to this heading")
--------------------------------------------------------------------------------------


* IP Address (IPv4 and IPv6\)
* URL
* HTTP Query String
* User Agent
* E\-Mail address




[Other meanings](#id16)[¶](#other-meanings "Permalink to this heading")
-----------------------------------------------------------------------


DSS recognizes a few other specific meanings