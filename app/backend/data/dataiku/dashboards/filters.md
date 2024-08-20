Filters[¶](#filters "Permalink to this heading")
================================================



Filters can be applied to a dashboard page to refine its insights.
They remove data from all filterable insights on the page, enabling you to explore the data and focus on what matters.

Filterable insights are:


* charts
* dataset tables



Note


Chart and dataset insights can be filtered themselves. Dashboard filters are applied on top of insight filters.




The filters panel[¶](#the-filters-panel "Permalink to this heading")
--------------------------------------------------------------------


You can add filters to the filters panel in edit mode, or through cross\-filtering from the chart and dataset table insights in view mode.


For more information about cross\-filtering, see the [Cross\-filtering](#cross-filtering) section below.


The filters panel offers different options depending on the mode you are in.


* In View mode, you can interact with any filters that already exist in the panel. You can only add new filters using cross\-filtering (if enabled).
* In Edit mode, you can add and remove filters as well as configure their default states. You can also access the individual filter settings or the panel configuration options.



Note


Both modes allow disabling all the filters in the panel as well as expanding or collapsing all the filters at once. Please note that these options won’t be saved, even in Edit mode.




### Filters in View mode[¶](#filters-in-view-mode "Permalink to this heading")


In View mode, you can explore the data by interacting with the filters created by the dashboard owner. If cross\-filtering is enabled, you can also create new filters from chart and dataset table insights.


You are only modifying your local instance of the dashboard page. Any changes made in View mode will be lost when exiting the dashboard.
If you want to save or share the modifications you applied on filters, see [Filtering a dashboard using a query parameter in the URL](url-filters-query-param.html).




### Filters in Edit mode[¶](#filters-in-edit-mode "Permalink to this heading")


In Edit mode, you can define which filters will be applied to the dashboard page as well as how they will be presented on the page.


When adding your first filters on a page, you will need to select a dataset. You can either pick an existing tile to automatically reuse its underlying dataset, or manually search for a dataset.


![../_images/dataset-selection.png](../_images/dataset-selection.png)
The columns of the chosen dataset can then be selected to create filters.


When adding filters on a page that already had filters, you will only need to choose from which columns.


![../_images/columns-selection.png](../_images/columns-selection.png)


Cross\-filtering[¶](#cross-filtering "Permalink to this heading")
-----------------------------------------------------------------


In view mode, you can create filters from chart and dataset insights. This action is called cross\-filtering.
Filters created using cross\-filtering are added to the filters panel and applied to all filterable tiles on the dashboard page.


Two kinds of filters can be created using cross\-filtering:
\- “Include only”: only the filtered value will be kept and displayed in the filterable tiles.
\- “Exclude”: the filtered value will be discarded from the filterable tiles.


If your chart is multidimensional you’ll be able to choose between including/excluding all dimensions at once and selecting which dimension to include/exclude.



Note


Using the multidimensional “Include only” will give the same result as using the unidimensional “Include only” on all the dimensions.
However, using the multidimensional “Exclude” will discard the rows satisfying all the conditions, while using the unidimensional “Exclude” on all the dimensions will discard the rows satisfying at least one of the conditions.




### From a chart insight[¶](#from-a-chart-insight "Permalink to this heading")


To cross\-filter from a chart insight, you can hover the data point of interest and then either:


1. right\-click to open a contextual menu from which all filtering actions are available.


![../_images/include-only-from-chart-contextual-menu.png](../_images/include-only-from-chart-contextual-menu.png)
2. click on the data point to pin the tooltip. Once the tooltip is pinned, a filter icon will appear next to each dimension, allowing cross\-filtering.


![../_images/include-only-from-chart-tooltip.png](../_images/include-only-from-chart-tooltip.png)


### From a dataset insight[¶](#from-a-dataset-insight "Permalink to this heading")


To cross\-filter from a dataset insight, hover the cell of interest and open the contextual menu by right\-clicking on it.
In the contextual menu, click on the “Include only” entry to cross\-filter.


![../_images/include-only-from-dataset.png](../_images/include-only-from-dataset.png)


### Filters created using cross\-filtering[¶](#filters-created-using-cross-filtering "Permalink to this heading")


When possible, cross\-filtering updates the filters present in the filters panel.
For example, suppose the filters panel contains a filter on the numerical column “Age” and the filter is created using cross\-filtering on the same column. In that case, the cross\-filtering value will be applied to the existing filter.


When updating an existing filter is impossible, either because there is no matching filter in the filters panel or because of a filter type incompatibility, a new filter with a minimal UI will be created. In this case, the filter’s value won’t be editable, but the filter will be deactivatable and removable.


![../_images/filter-vs-cross-filter.png](../_images/filter-vs-cross-filter.png)


### Turning cross\-filtering on or off[¶](#turning-cross-filtering-on-or-off "Permalink to this heading")


Cross\-filtering is enabled by default for dashboard pages containing a filters panel. To disable cross\-filtering in this case, switch to edit mode, and in the “Slide” tab, uncheck the “Cross\-Filtering” option under the “Filters” section.


![../_images/cross-filtering-checkbox.png](../_images/cross-filtering-checkbox.png)
If a dashboard page doesn’t contain a filters panel, cross\-filtering is disabled, and a filters panel needs to be added to enable cross\-filtering.