Dashboard concepts[¶](#dashboard-concepts "Permalink to this heading")
======================================================================



Dashboards, tiles and insights[¶](#dashboards-tiles-and-insights "Permalink to this heading")
---------------------------------------------------------------------------------------------



A DSS project can contain multiple dashboards and each dashboard can be made of multiple pages.
Tiles can be added to pages, and the content of some can be refined directly from the dashboard using filters.

There are three kinds of tiles:


* “Simple” tiles (static text, image, embedded page)
* “Insight” tiles. Each of this tiles displays a single insight.
* “Filters panel” tile. See [Filters](filters.html) for more information.



### Insights[¶](#insights "Permalink to this heading")


An insight is a piece of information that can be shared on a dashboard. There are many kinds of insights:


* [A dataset, as a tabular representation](insights/dataset-table.html)
* [A chart](insights/chart.html)
* [The report of a machine learning model](insights/model-report.html)
* [The contents of a DSS managed folder](insights/managed-folder.html)
* [A DSS metric](insights/metric.html)
* [The report of a scenario](insights/scenario.html)
* [A button to run a scenario](insights/scenario.html)
* [An export from a Jupyter notebook](insights/jupyter-notebook.html)
* [The display of a webapp](insights/webapp.html)
* Activity \& comments feed of any DSS object
* Activity summary reports of a DSS project
* A button to run a DSS macro


Each insight lives independently from dashboards and can be attached on multiple dashboards. By default, DSS always creates new insights when adding something to the dashboard, but you can also choose to reattach an existing insight.


Most insights *reference* DSS objects:


* A dataset table references a dataset
* A chart references a dataset
* A machine learning model report references the machine learning model
* A DSS metric insights references a dataset, model or folder


Security is owned by the referenced objects, through the [Authorized objects](../security/authorized-objects.html) mechanism. In other words, if a dataset added as an authorized object with the READ mode, it is considered as ‘dashboard\-authorized’, and the dashboard\-only users of the project will be able to create dataset tables, charts and comment insights based on this dataset.


Insights live independently from their referenced objects. In most cases, modifying anything on the insight will either be impossible, or will not reflect in the original object.


When you are on the dashboard, you can go to a full\-size view of the insight by clicking on the Go button


![../_images/tile-go-to-insight.png](../_images/tile-go-to-insight.png)



Permissions[¶](#permissions "Permalink to this heading")
--------------------------------------------------------



### Owners[¶](#owners "Permalink to this heading")


Each dashboard (and each insight) has an owner, who is the person who created this dashboard (resp insight).


The following people (apart from the owner) can modify a dashboard created by a given user:


* People who have “Write Dashboard” access to the project (See [Main project permissions](../security/permissions.html))
* DSS administrators




### Dashboard visibility[¶](#dashboard-visibility "Permalink to this heading")


Everybody who has “Read dashboards” permission to the project can view a dashboard, regardless of who created it: dashboards don’t carry access restrictions. However, by default, dashboards are unpromoted. An unpromoted dashboard is readable but not visible to users with “Read dashboards”.


To view an unpromoted dashboard, you need to know its URL. This makes it easy to share dashboards with colleagues by sending them the URL.
People who have “Write dashboards” permission on the project can see and edit all dashboards in the list (even unpromoted ones of which they are not the owner). They can also promote a dashboard and make it visible to “Read dashboards” users.




### Editing the dashboard as an analyst[¶](#editing-the-dashboard-as-an-analyst "Permalink to this heading")


When you have “Read project content” on the project, you may add every item to the dashboard, not only items which are previously dashboard\-authorized.


Each time you add an item to the dashboard (either directly from the item, or from the dashboard), if this object is not already in the dashboard authorizations, you will get a warning that dashboard\-only users will not be able to see this insight, since the source is not dashboard\-authorized.


* If you have “Manage authorized objects” permission, you’ll get a prompt to add it automatically
* If you don’t have “Manage authorized objects” permission, you’ll only have a warning indicating that you must ask your project administrator