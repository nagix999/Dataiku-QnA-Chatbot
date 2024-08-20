Dataiku Applications[¶](#dataiku-applications "Permalink to this heading")
==========================================================================



* [Application tiles](tiles.html)
	+ [Introduction](tiles.html#introduction)
	+ [Tiles](tiles.html#tiles)
		- [Upload file in dataset](tiles.html#upload-file-in-dataset)
		- [Edit dataset](tiles.html#edit-dataset)
		- [Edit dataset settings](tiles.html#edit-dataset-settings)
		- [Select dataset files](tiles.html#select-dataset-files)
		- [Select SQL table](tiles.html#select-sql-table)
		- [Upload file in folder](tiles.html#upload-file-in-folder)
		- [Select folder files](tiles.html#select-folder-files)
		- [Edit project variables](tiles.html#edit-project-variables)
			* [Runtime interactions](tiles.html#runtime-interactions)
			* [Runtime form](tiles.html#runtime-form)
				+ [Auto\-generated form](tiles.html#auto-generated-form)
				+ [Custom form](tiles.html#custom-form)
		- [Run scenario](tiles.html#run-scenario)
		- [Propagate schema](tiles.html#propagate-schema)
			* [Update options for Group](tiles.html#update-options-for-group)
			* [Update options for Window](tiles.html#update-options-for-window)
			* [Update options for Join](tiles.html#update-options-for-join)
			* [Update options to generate features](tiles.html#update-options-to-generate-features)
		- [View dashboard](tiles.html#view-dashboard)
		- [View folder](tiles.html#view-folder)
		- [Download dataset](tiles.html#download-dataset)
		- [Download report](tiles.html#download-report)
		- [Download file](tiles.html#download-file)
		- [Download dashboard](tiles.html#download-dashboard)
		- [Variable display](tiles.html#variable-display)
* [Application\-as\-recipe](application-as-recipe.html)
	+ [Introduction](application-as-recipe.html#introduction)
	+ [Using an Application\-as\-recipe](application-as-recipe.html#using-an-application-as-recipe)
	+ [Developing an Application\-as\-recipe](application-as-recipe.html#developing-an-application-as-recipe)
		- [Application header](application-as-recipe.html#application-header)
		- [Included content](application-as-recipe.html#included-content)
		- [Recipe definition](application-as-recipe.html#recipe-definition)
			* [Icon](application-as-recipe.html#icon)
			* [Category](application-as-recipe.html#category)
			* [Inputs/Outputs](application-as-recipe.html#inputs-outputs)
			* [Scenario](application-as-recipe.html#scenario)
			* [Settings](application-as-recipe.html#settings)
	+ [Sharing an Application\-as\-recipe](application-as-recipe.html#sharing-an-application-as-recipe)
		- [Plugin component](application-as-recipe.html#plugin-component)
	+ [Code recipes in Application\-as\-recipe](application-as-recipe.html#code-recipes-in-application-as-recipe)
	+ [Limitations](application-as-recipe.html#limitations)




Introduction[¶](#introduction "Permalink to this heading")
----------------------------------------------------------


You can design and package your project as a reusable application with:


* customizable inputs (datasets, managed folders, project variables, …)
* pre\-defined actions allowing you for example to build the results
* access to pre\-defined results (datasets, file/folder downloads, dashboards, …)




Using a Dataiku application[¶](#using-a-dataiku-application "Permalink to this heading")
----------------------------------------------------------------------------------------


A **Dataiku application** can be configured to allow instances to be created by any user. In this case any user will be able
to access the application and create a new instance.
If the **Dataiku application** is configured to allow instantiation only for users with execute permission the specific
[Execute app](../security/permissions.html) permission must be configured on the project containing the application.


**Dataiku applications** are listed on the main home page in a dedicated **Applications** section or from the applications
menu.


From the application home page, you will:


* see the existing instances;
* be able to create a new instance;
* access one of the existing instances by clicking on the corresponding instance tile.




Developing a Dataiku application[¶](#developing-a-dataiku-application "Permalink to this heading")
--------------------------------------------------------------------------------------------------


Only users that are [administrator of the project](../security/permissions.html) can contribute to the development of
an application. But only users with the **Develop plugins** permission are allowed to configure project variable tiles with
custom code.


To convert a project into a **Dataiku application**, click on **Application designer** from the project menu. A project can
be converted either into a **Dataiku application** or into an [Application\-as\-recipe](application-as-recipe.html). Once the project is converted, the
project menu will open the **Application designer** directly.



### Application header[¶](#application-header "Permalink to this heading")


The **Application header** panel allows to configure:


* the application image;
* the application title and description;
* which user can instantiate the application;
* whether users without the permission to instantiate the application should still be able to discover it;
* the tags.




### Application features[¶](#application-features "Permalink to this heading")


The **Application features** panel allows toggling the display of some items on the application instances. The impacted
sections are:


* Flow top menu
* Lab top menu
* Code top menu
* Version control top menu
* “Switch back to project view” button (present on the instance’s home)


Note that these options only apply to instances that are created from now on. If you want to apply any change to an existing instance, you’ll have to delete and re\-create the instance.




### Included content[¶](#included-content "Permalink to this heading")


The **Included content** panel allows to configure the additional data — from the original project containing the
application — to include into the application instances.




### Application instance home[¶](#application-instance-home "Permalink to this heading")


The **Application instance home** panel allows you to configure the user interface of the application instances.
It is possible to add many tiles in many sections.


You can find more information about the available tiles in [Application tiles](tiles.html).




### Advanced settings[¶](#advanced-settings "Permalink to this heading")


From the **Advanced** tab in an **Application designer** you can:


* convert a **Dataiku application** into an **Application\-as\-recipe** and vice versa
* map connection and code environment
* visualize the raw JSON manifest corresponding to the application (for advanced usage)




### Application instance names[¶](#application-instance-names "Permalink to this heading")


When using a **Dataiku application**, the user can choose any name for the instance they create.
But since the name is arbitrary, some applications can meet trouble if they use it in places where the name is constrained,
such as names of tables in SQL databases, since these often enforce maximum lengths on identifiers.
Same with application\-as\-recipe, because the name of the project created by a run of the recipe is built from the recipe name.


To alleviate this issue, all application instances receive a project variable named projectRandomKey which is a short (8 characters)
random string of alphanumerical characters. This can for example be used to build table names for SQL datasets.
To use it in your application, first define a projectRandomKey variable in your application, then use it wherever it is needed.
This way you can still execute your application flow while building the application content while the variable content
will be overwritten when the application is instantiated.


Note that, as projectRandomKey is a random alphanumerical string, it can start with a number: since many SQL databases
reject identifiers starting with numbers, it is advised to prefix ${projectRandomKey} with some letters if this variable
is used to prefix a table name. E.g. p${projectRandomKey}\_table\_name.





Application\-as\-recipe[¶](#application-as-recipe "Permalink to this heading")
------------------------------------------------------------------------------


You can instead build a reusable recipe: see [Application\-as\-recipe](application-as-recipe.html).




Sharing a Dataiku application[¶](#sharing-a-dataiku-application "Permalink to this heading")
--------------------------------------------------------------------------------------------


You can share a **Dataiku application** either by [copying this project](../concepts/projects/duplicate.html) or by creating a
plugin component from your application. To create a plugin component from your application, click on the
**Create or update plugin application** action from the **Actions** menu in the **Application designer**.



### Plugin component[¶](#plugin-component "Permalink to this heading")


From the component descriptor you can configure :


* the application name with the **meta.label** field
* the application description with the **meta.description** field
* the application image with **appImageFilename** field referring to an image uploaded in the **resource** folder of the plugin (at the root of the plugin)




### Connection and code environment mapping[¶](#connection-and-code-environment-mapping "Permalink to this heading")


It is possible to specify connection and code environment mapping.



#### For an application inside a project[¶](#for-an-application-inside-a-project "Permalink to this heading")


Go to the **Advanced** tab in the application designer.




#### For an application inside a plugin[¶](#for-an-application-inside-a-plugin "Permalink to this heading")


Go to the **Settings** tab of the plugin: for each application, a tab to configure these mappings will be available.




#### For an application inside a bundle[¶](#for-an-application-inside-a-bundle "Permalink to this heading")


Go to the **Activation settings** tab in the bundles management. See [Production deployments and bundles](../deployment/index.html).






Initiating an application instantiation request[¶](#initiating-an-application-instantiation-request "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------------


Only users without any permissions on the application will be able to initiate an application instantiation request. They will be able to do so through a modal that will be displayed when landing on the application URL.
For example, for discoverable applications, users can discover applications through the interface and request access.
In the case of private applications, this will most likely happen if one of the application contributors shares the application URL with another user.




Managing an application execution request[¶](#managing-an-application-execution-request "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------


Application administrators can manage execution requests from within the project’s security section or by handling the request in the requests inbox.


If they manage the request via the requests inbox, they will be able to select which user or group they are granting the Execute App permission.



Note


Automatic updates of the request:


In the requests inbox, the request status can be automatically updated in the following cases:


* Request is considered approved if the requester is given “Execute App” right via the app’s project security page
* Request is rejected if the requester is deleted
* Request is deleted if the project is deleted