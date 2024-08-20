Time series preparation[¶](#time-series-preparation "Permalink to this heading")
================================================================================


Before using time series data for analysis or forecasting, it is often necessary to perform one or more preparation steps on the data.


For example, given time series data with missing or irregular timestamps, you may consider performing preparation steps such as resampling and interpolation. You may also want to perform smoothing, extrema extraction, or segmentation on the data.



Time series preparation plugin[¶](#time-series-preparation-plugin "Permalink to this heading")
----------------------------------------------------------------------------------------------


Dataiku DSS provides a preparation plugin that includes visual recipes for performing the following operations on time series data:



* [Resampling](resampling.html)
* [Windowing](windowing.html)
* [Extrema extraction](extrema-extraction.html)
* [Interval extraction](interval-extraction.html)
* [Trend/seasonal decomposition](decomposition.html)




Note


The time series preparation plugin is fully supported by Dataiku.




### Plugin installation[¶](#plugin-installation "Permalink to this heading")


You can install the time series preparation plugin (and other plugins) if you are a user with administrative privileges. See [Installing plugins](../../plugins/installing.html) for more details.


Once the plugin is installed, users with normal privileges can view the plugin store and the list of installed plugins, and use any plugins installed on the Dataiku DSS instance. See [Managing installed plugins](../../plugins/installed.html) for more details.




### Upgrade note[¶](#upgrade-note "Permalink to this heading")


From its version 2\.0\.0, this plugin only supports Python 3\.6\. If you already installed the plugin and want to use its latest features, it should run on a
Python 3\.6 code\-env.