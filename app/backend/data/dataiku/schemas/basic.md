Basic usage[¶](#basic-usage "Permalink to this heading")
========================================================


When you open a dataset in the “Explore” view, for each column, both the storage type (stored in the dataset metadata) and the meaning (inferred from data) are displayed.


![../_images/types-and-meanings-bar.png](../_images/types-and-meanings-bar.png)
In this example, we can see that the “location” column is stored as the basic “string” storage type, but DSS has inferred that the content is actually an URL, since most rows are *valid* for the “URL meaning”.


By default, the explore views shows a *data quality bar*, which shows which rows are valid for their *meaning*.
When you are in data exploration, meanings are mostly useful for informational purpose.


If you choose to *Filter* a column (click on Column header then on “Filter”), the filter shows a quality bar with checkboxes that allow you to focus on rows that are valid, invalid or empty for their meanings.


![../_images/filter-validity-facet.png](../_images/filter-validity-facet.png)