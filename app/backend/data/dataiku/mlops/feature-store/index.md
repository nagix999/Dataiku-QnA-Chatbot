Feature Store[¶](#feature-store "Permalink to this heading")
============================================================


A core expectation of MLOps is to accelerate the deployment of models. A key part of this acceleration is to build efficient models faster.
This can be achieved by using the most relevant data without heavy preparation, especially if this preparation is repeated.
Helping Data Scientists to build, find and use this relevant data is the core notion of a *Feature Store*.


In order to implement such an approach in DSS, there are many capabilities at hand:


* Feature Storage is handled by Dataiku extensive [Connections Library](../../connecting/connections.html)
* Data Ingestion and Curation is performed using [Recipes in the Flow](../../flow/index.html)
* Offline serving for batch processing is done using [Join Recipes](../../other_recipes/join.html) in [projects deployed on an Automation node](../../deployment/index.html)
* Online serving for realtime processing is done using [Dataset Lookups](../../apinode/endpoint-dataset-lookup.html) in API services
* Data monitoring is implemented using [Metrics \& Checks](../../metrics-check-data-quality/index.html)
* Automated building and maintenance is managed by [Scenarios and Triggers](../../scenarios/index.html)


In DSS, the *Feature Store* section is actually the central registry of all *Feature Groups*, a *Feature Group* being a curated and promoted Dataset containing valuable *Features*.



Note


If you are interested in building a complete Feature Store solution within Dataiku, you can read [our hands\-on article in our knowledge base](https://knowledge.dataiku.com/latest/kb/o16n/feature-store/features-store-overview.html).




Creating a Feature Group[¶](#creating-a-feature-group "Permalink to this heading")
----------------------------------------------------------------------------------


A Feature Group is a curated DSS Dataset that is shared across your entire instance. In order to create Feature Groups:


* Create a dataset containing the features, either by direct definition or using recipes
* Set this dataset as a feature group


![../../_images/promote_as_feature_group.png](../../_images/promote_as_feature_group.png)

Note


Defining Feature Groups requires the “Manage Feature Store” permission.


In order to streamline the usage of Feature groups by other teams and projects, it is recommend to have as often as possible the underlying Datasets be either *Quickly Shareable* or with *Request access* activated (see [Shared Objects](../../security/shared-objects.html)).





Feature Store[¶](#id1 "Permalink to this heading")
--------------------------------------------------


The Feature Store is available through the “nine dots” menu.


![../../_images/menu_feature_store.png](../../_images/menu_feature_store.png)
From this main screen, you can search and see information on the Feature Groups:


* The left panel allows to refine the search on various criteria
* The central panel shows the Feature Groups with the main data
* When clicking on a line in this central panel, the right panel shows details on the Feature Group such as its description, details on its content and its usage


![../../_images/feature_store.png](../../_images/feature_store.png)

Note


You may experience a latency of a few seconds before a Feature Group appears in the Feature Store and is usable.





Using a Feature Group[¶](#using-a-feature-group "Permalink to this heading")
----------------------------------------------------------------------------


As a user of the Feature Store, you have a “Use” button in the right panel when the Feature Group is selected. This button allows to add this specific Feature Group into your project.


You will then be invited to select the target project(s) in which the Feature Group should be added as a dataset.
As explained above, leveraging the Request Access and Quick Share options makes this easier.


The Feature Group can then be used as any other dataset. It appears in the flow with a medal overlay in the lower right corner.


![../../_images/feature_group_in_the_flow.png](../../_images/feature_group_in_the_flow.png)


Removing a Feature Group[¶](#removing-a-feature-group "Permalink to this heading")
----------------------------------------------------------------------------------


To remove a Feature Group, click on the “Remove” button. This action will not delete the underlying Dataset. Similarly, all existing sharings of the underlying dataset will remain fully working. Removing a Feature Group essentially means that it will not be available in the Feature Store for future users.