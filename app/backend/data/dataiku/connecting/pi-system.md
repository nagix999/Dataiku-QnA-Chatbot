PI System / PIWebAPI server[¶](#pi-system-piwebapi-server "Permalink to this heading")
======================================================================================


You can create datasets based on data located in an OSIsoft PI System.



Note


This capability is provided by the “pi\-system” plugin, which you need to install. Please see [Installing plugins](../plugins/installing.html).


The PI System servers you want to access must have PIWebAPI enabled.


This plugin is [Not supported](../troubleshooting/support-tiers.html)




Setup the authentication preset[¶](#setup-the-authentication-preset "Permalink to this heading")
------------------------------------------------------------------------------------------------


* Choose an authentication method : Basic or NTLM
* Define a default server. Note that this setting can be overwritten later on by Dataiku users.
* Select Users can override server URL to allow Dataiku users to use another server than the default one defined for this preset.
* Select Users can disable SSL checks to allow Dataiku users to disable the SSL checks for this preset.
* If your PI Server WebApi use a custom SSL certificate, set the path to a it. The certificate file and its containing directory must be readable by all system users of the Dataiku instance.




Setup authentication per user[¶](#setup-authentication-per-user "Permalink to this heading")
--------------------------------------------------------------------------------------------


Go to your Dataiku profile page \> Credentials \> Name of the preset. Click on the corresponding edit button and enter your PI System username / password.




Attribute search Dataset[¶](#attribute-search-dataset "Permalink to this heading")
----------------------------------------------------------------------------------


Select the server and database you want to search attributes on. Attributes can be searched based on their name or description. Wildcards (“\*”, “?”) can be used in the search box.


Two types of datasets can be produced:


* A list of assets paths, which can be used later on to download the actual assets metrics (using the [Asset metrics downloader recipe](#assets-metrics-downloader))
* A list of assets and metrics:


	+ Select Retrieve metrics
	+ Select the [type of data](#data-types) expected
	+ Fill in the necessary Start / End time / Interval / Sync time as apply, using the available [time formats](#time-formats)




Event frames search Dataset[¶](#event-frames-search-dataset "Permalink to this heading")
----------------------------------------------------------------------------------------


Select a server and a database. Event frames can be search based on:


* their name. Wildcards (“\*”, “?”) can be used in the search box.
* start / end time, using the available [time formats](#time-formats)


Two types of datasets can be produced:


* A list of Event frames, which can be used later on to download the linked assets and metrics (using the [Event frames downloader Recipe](#event-frames-downloader) recipe)
* A list of assets and metrics linked to the event frame. To do so:


	+ Select Retrieve metrics
	+ Select the [type of data](#data-types) expected
	+ Select one or several events from in the ‘Event frame to retrieve’ box. If none are selected, all events matching the search will be retrieved.




PIWebAPI Toolbox Dataset[¶](#piwebapi-toolbox-dataset "Permalink to this heading")
----------------------------------------------------------------------------------


This dataset allows a quick and direct access to a database, an element, an attribute or a tag, provided its full path is known. With knowledge of PIWebAPI, partial paths can be used for exploration. If the preset used has writing credentials to the attribute, the obtained dataset can also be used to write information back from Dataiku to PI System.


In the ‘Object path / Tag’ box, set either:


* the path to a database (\\\\server\_name\\database)
* the path to an element (\\\\server\_name\\database\\element\_1 .. \\element\_n)
* the path to an attribute (\\\\server\_name\\database\\element\_1 .. \\element\_n\|attribute)
* an attribute tag (\\\\server\_name\\tag.name)


Select the [type of data](#data-types) expected. Complete the missing element (Start / end times, interval, sync time…) accordingly.




Assets metrics downloader Recipe[¶](#assets-metrics-downloader-recipe "Permalink to this heading")
--------------------------------------------------------------------------------------------------


The recipe outputs a dataset containing all the values for each of the attributes present in the input. Select the input dataset’s column containing the list of paths.


The start/end time of the period to recover can be specified using the available [time formats](#time-formats) and [type of data](#data-types).




Event frames downloader Recipe[¶](#event-frames-downloader-recipe "Permalink to this heading")
----------------------------------------------------------------------------------------------


The recipe outputs the dataset with all the assets involved in the event, as well as all the metrics for the duration of the event.


Select the column containing the webids and the [type of data](#data-types) expected.




Transpose \& Synchronize Recipe[¶](#transpose-synchronize-recipe "Permalink to this heading")
---------------------------------------------------------------------------------------------


Data retrieved from PI server may contain timelines of several attributes stacked one after another (also called “long format”). To perform some analyses, it can be necessary to convert from long format to a timestamp/path array. Also, timestamps are probably slightly out of sync with one another, and in order to compare the values, they first have to be temporally aligned. Both these steps can be done in one go using the Transpose \& Synchronize recipe.


Select the columns containing the timestamps, the assets paths, and the metric’s values. Type in the full path of the asset to use as a time reference.


The recipe outputs the dataset with:


* a timestamp column which contains the timestamps of the time reference asset
* a column per asset, containing the last available measure at the time indicated by the reference timestamp




Advanced parameters[¶](#advanced-parameters "Permalink to this heading")
------------------------------------------------------------------------


Activating the “Show advanced parameters” option let you:


* Disable the SSL check, if this is allowed by the [preset’s configuration](#setup-the-authentication-preset)
* Point to a .pem file containing an SSL certificate. Note that this file and its containing directory must be visible to all accounts on the Dataiku server.
* Speed up values retrieval by activating the batch mode. The default value for the batches size is 500 rows. Increasing this number will speed up transfer but also increase the risk of getting a ratio error from the PI\-System server.




Data types[¶](#data-types "Permalink to this heading")
------------------------------------------------------


* [Interpolated](https://docs.osisoft.com/bundle/pi-web-api-reference/page/help/controllers/stream/actions/getinterpolated.html) returns the interpolated values across the specified time range with a chosen sampling interval. A start time anchor can also be set.
* [Plot](https://docs.osisoft.com/bundle/pi-web-api-reference/page/help/controllers/stream/actions/getplot.html) returns the values across a specified time range
* [Recorded](https://docs.osisoft.com/bundle/pi-web-api-reference/page/help/controllers/stream/actions/getrecorded.html) returns the compressed values for the selected time range.
* **Value** returns the current value.
* **Summary** returns the time weighted data summary across the last day.



Note


The maximum number of points that can be retrieved for a given attribute is limited by PiWebAPI. The default limit is usually set to 1000 elements. Once this number of rows is reached, the search time span has to be reduced or split across several search operations.





Time formats[¶](#time-formats "Permalink to this heading")
----------------------------------------------------------


Date and time can be entered using two different formats:


* Absolute dates are using the ISO 8601 format, and should follow this pattern: YYYY\-MM\-DDThh:mm:ssZ
* Relative times and dates are also possible using the OSIsoft’s [Time String format](https://docs.osisoft.com/bundle/pi-web-api-reference/page/help/topics/time-strings.html)