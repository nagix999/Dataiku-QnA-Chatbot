Display settings[¶](#display-settings "Permalink to this heading")
==================================================================



Tile display settings[¶](#tile-display-settings "Permalink to this heading")
----------------------------------------------------------------------------


Each [tile](concepts.html) on the dashboard has display settings.


Some of these settings are specific to the specific type of tile (for example, on a tile showing a chart insight, you can select whether the vertical axis must be displayed). For more information on the tile\-specific settings, see [Insights reference](insights/index.html)


Other settings are common to all tiles



### Title display[¶](#title-display "Permalink to this heading")


Each tile has a title (which is by default the name of the insight, but can be edited). You can choose whether the title is displayed:


* Never
* Permanently
* Only if you hover on the tile


Note that while you are on the dashboard edit view, even if you choose “on mouseover”, the title will remain visible. This option only takes effect on the “View” tab.


If you don’t display at all the title, the space for the title is reused to leave more space for the content of the tile. However, in that case, it’s not possible anymore to click on the “Go” icon to go to the insight




### Behavior on click[¶](#behavior-on-click "Permalink to this heading")


By default, when you click on a tile, nothing “generic” happens. Each tile kind handles clicks differently.


For example, on a chart or dataset, click will do nothing. On a webapp, the webapp itself can handle clicks. On a model report, it depends on the specific page you’re viewing.


If you want to go to the insight that the tile shows, you can click on the small Go icon in the tile header


![../_images/tile-go-to-insight.png](../_images/tile-go-to-insight.png)
You can also select to capture all clicks on the tile to automatically go to the insight. In that case, if you click anywhere on the tile, it will open the insight. This disables all possible mouse interaction with the tile itself.


A third option is “Open another insight”. In that case, opening on the tile will go to an insight, but not the one that the tile is displaying. You’ll need to select the other insight. A use case for this could be: a [metric insight](insights/metric.html) is showing a value on a dataset, and when you click, you want to open the full\-width view of a [dataset table insight](insights/dataset-table.html) showing the content of the dataset, or a [dataset chart insight](insights/chart.html) showing a chart on the dataset, relevant to the metric.