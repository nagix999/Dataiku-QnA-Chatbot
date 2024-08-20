Plugins[¶](#plugins "Permalink to this heading")
================================================


You can extend the scope of Dataiku DSS features by packaging reusable components into **plugins** and sharing them with others.


A single plugin contains one or more related **components**. Each component is a GUI wrapper around some custom code that exposes a single type of Dataiku element, such as a recipe, dataset, or web app.


For example, the following can be added through plugins:


* Datasets
* Recipes
* Processors
* Custom formula functions
* Visual Machine Learning algorithms
* and so much more


A plugin can only be installed by a user with administrative privileges. Any user with normal privileges can view the plugin store and the list of installed plugins, and use any plugins installed on the Dataiku DSS instance. Users with the [Develop plugins permission](../security/permissions.html) can contribute to the development of plugins.



* [Installing plugins](installing.html)
* [Managing installed plugins](installed.html)
* [Developing plugins](reference/index.html)