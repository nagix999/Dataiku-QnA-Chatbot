Main project permissions[¶](#main-project-permissions "Permalink to this heading")
==================================================================================



* [Per\-project group permissions](#per-project-group-permissions)


	+ [Admin](#admin)
	+ [Read project content](#read-project-content)
	+ [Write project content](#write-project-content)
	+ [Publish to Data Collections](#publish-to-data-collections)
	+ [Publish on workspaces](#publish-on-workspaces)
	+ [Export datasets](#export-datasets)
	+ [Run scenarios](#run-scenarios)
	+ [Read dashboards](#read-dashboards)
	+ [Write dashboards](#write-dashboards)
	+ [Manage authorized objects](#manage-authorized-objects)
	+ [Manage shared objects](#manage-shared-objects)
	+ [Execute app](#execute-app)
* [Project owner](#project-owner)
* [Project visibility](#project-visibility)
* [Per\-project single user permissions](#per-project-single-user-permissions)
* [Global group permissions](#global-group-permissions)


	+ [Projects creation](#projects-creation)
	+ [Workspaces](#workspaces)
	+ [Data Collections](#data-collections)
	+ [Code execution](#code-execution)
	+ [Code envs \& Dynamic clusters](#code-envs-dynamic-clusters)
	+ [Advanced permissions](#advanced-permissions)
	+ [Write unisolated code: details](#write-unisolated-code-details)
* [Multiple group membership](#multiple-group-membership)



DSS uses a groups\-based model to allow users to perform actions through it.


The basic principle is that users are added to groups, and groups have permissions on each project.



[Per\-project group permissions](#id3)[¶](#per-project-group-permissions "Permalink to this heading")
-----------------------------------------------------------------------------------------------------


On each project, you can configure an arbitrary number of groups who have access to this project.
Adding permissions to projects is done in the Permissions pane of the Security menu.


Each group can have one or several of the following permissions. By default, groups don’t have any kind of access to a project.



### [Admin](#id4)[¶](#admin "Permalink to this heading")


This group may perform any action on the project, including:


* change the permissions and owner of the project
* create project bundles


This permission implies all other permissions.




### [Read project content](#id5)[¶](#read-project-content "Permalink to this heading")


This group may see the Flow, access the datasets, read the recipes, … More generally speaking, this group may read every configuration and data in this project.


This permission implies the “Read dashboards” permission




### [Write project content](#id6)[¶](#write-project-content "Permalink to this heading")


This group may read and write every configuration and data in this project. This includes the ability to create new datasets, recipes, …


This also includes the ability to run all jobs in this project.



Note


This permission is the “default” permission that you may want to give to your data team.



This permission implies the “Read project content”, “Read dashboards”, “Run scenarios” and “Write dashboards” permissions




### [Publish to Data Collections](#id7)[¶](#publish-to-data-collections "Permalink to this heading")


This group may be able to publish datasets to [Data Collections](../data-catalog/data-collections/index.html).
Note that DSS administrators must separately grant the global group permission to Publish to Data Collections, regardless of permission on the source project.




### [Publish on workspaces](#id8)[¶](#publish-on-workspaces "Permalink to this heading")


This group may be able to share objects (Dashboards, Datasets, Wiki pages) to [workspaces](../workspaces/index.html).
Note that DSS administrators must separately grant the group permission to [share content](../workspaces/managing.html) into workspaces, regardless of source project.




### [Export datasets](#id9)[¶](#export-datasets "Permalink to this heading")


This group may click on the “Download” button to retrieve the content of a dataset.



Warning


Disabling this permission removes the most obvious way to download whole datasets, but through various means, users who have at least “Read project content” will still be able to download datasets.


If you absolutely want your users not to be able to retrieve the full content of datasets, do not give them access to the project.





### [Run scenarios](#id10)[¶](#run-scenarios "Permalink to this heading")


This group may run scenarios. They may not run jobs that are not part of a scenario. Only scenarios that have a “Run As” user may be run by users who only have this permission.


This permission is generally not very useful without the “Read project content” permission.




### [Read dashboards](#id11)[¶](#read-dashboards "Permalink to this heading")


This group may read dashboards that have been created. They may not modify anything. They can only read dashboard insights that use project objects that have been shared with them using [Authorized objects](authorized-objects.html).




### [Write dashboards](#id12)[¶](#write-dashboards "Permalink to this heading")


This group may create their own dashboards, using the project objects that have been shared with them using [Authorized objects](authorized-objects.html).


This permission implies “Read dashboards”.




### [Manage authorized objects](#id13)[¶](#manage-authorized-objects "Permalink to this heading")


This group may modify which objects of the project are usable by dashboard\-only users through the [Authorized objects](authorized-objects.html) and accessible through a workspace or a Data Collection.


This permission is generally not very useful without the “Read project content” permission. This permission is implied by the “Publish on workspaces” and “Publish to Data Collections” permissions.


The main use case for this permission is the following:


* A group of analysts and data scientists creates a Flow
* The data is of medium sensitivity so all dashboard users could use any of the Flow
* However, the dashboard users must not be able to break or modify the Flow
* Thus, the dashboard users (or a subgroup of them) has this permission to gain access to source datasets




### [Manage shared objects](#id14)[¶](#manage-shared-objects "Permalink to this heading")


This group may modify which objects of the project are available in other projects through the [Shared objects](shared-objects.html).


This permission is generally not very useful without the “Read project content” permission.


The main use case for this permission is the following:


* A group of analysts and data scientists creates a Flow
* The data is of medium sensitivity so all or some DSS users should be able to reuse it on other projects
* However, the other projects’ users must not be able to break or modify the Flow
* Thus, a group of other project’s users has permission to go in the project, and “pick” datasets to use in other projects.




### [Execute app](#id15)[¶](#execute-app "Permalink to this heading")


This permission is only exposed on projects converted into a [Dataiku application](../applications/index.html) or an [application\-as\-recipe](../applications/application-as-recipe.html).


This group may execute the corresponding application if the application is configured to be instantiated only by user with
this permission. Else this permission is not needed.





[Project owner](#id16)[¶](#project-owner "Permalink to this heading")
---------------------------------------------------------------------


In addition to the per\-group access, each project has a single user who “owns” the project. Being the owner of a project does not grant any additional permissions compared to being in a group who has Administrator access to this project.


This owner status is used mainly to actually grant access to a project to the user who just created it.




[Project visibility](#id17)[¶](#project-visibility "Permalink to this heading")
-------------------------------------------------------------------------------


It is possible to allow all users to access a project’s page displaying a limited amount of information about the project regardless of the users’ permissions.
The information displayed in this case includes the project image, name, short description, owner, tags and status.


This feature can be enabled on a per\-project basis or for all projects on the DSS instance on the **Administration \> Settings \> Misc** page.
Discoverable projects appear in the Projects and Project Folders view, in the Catalog, and in the “Search DSS Items” page for all users making them easily discoverable. If a user doesn’t have access to a discoverable project, the project is denoted with a padlock symbol.




[Per\-project single user permissions](#id18)[¶](#per-project-single-user-permissions "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


In addition to the per\-group access, on each project, you can configure an arbitrary number of individual users who have access to this project.
Adding permissions to projects is done in the Permissions pane of the Security menu.


Each user can be granted the same kind of project permissions than groups above.
This is useful for a non\-administrator to give access to a project to some users individually, without the need for those users to belong to specific groups.



Warning


When using [User Isolation](../user-isolation/index.html) in “DSS\-managed ACL” mode,
HDFS ACLs are not supported for individual user permissions on projects.
See [Hadoop Impersonation (HDFS, YARN, Hive, Impala)](../user-isolation/capabilities/hadoop-impersonation.html).





[Global group permissions](#id19)[¶](#global-group-permissions "Permalink to this heading")
-------------------------------------------------------------------------------------------


In addition to the per\-project permissions, groups can also be granted several global permissions that apply to all DSS.


These permissions are configured in the settings screen of the group.


* Administrator: members of a group with this permission can perform any action on DSS. DSS administrators are implicitly administrators of all DSS projects and may access any project, even without explicitly being granted access through a project\-group grant.



### [Projects creation](#id20)[¶](#projects-creation "Permalink to this heading")


* Create projects: members of a group with this permission can create their own projects, using a blank project, project duplication of project import
* Create projects using macros: members of a group with this permission can create projects using a [project creation macro](../concepts/projects/creating-through-macros.html)
* Create projects using templates: members of a group with this permission can create projects using predefined templates (Dataiku samples and tutorials)
* “Write in root project folder”: members of a group with this permission can create folders and projects in the root folder, or move them to the root.




### [Workspaces](#id21)[¶](#workspaces "Permalink to this heading")


* Create workspaces: members of a group with this permission can create their own workspaces.
* Publish on workspaces: members of a group with this permission can share objects to workspaces.




### [Data Collections](#id22)[¶](#data-collections "Permalink to this heading")


* Create Data Collections: members of a group with this permission can create Data Collections.
* Publish to Data Collections: members of a group with this permission can publish datasets to Data Collections.




### [Code execution](#id23)[¶](#code-execution "Permalink to this heading")


* “Write isolated code”: members of a group with this permission can write code which will run with impersonated rights. This permission is only available when [User Isolation Framework](../user-isolation/index.html) is enabled.
* “Write unisolated code”: members of a group with this permission can write code which will be executed with the UNIX privileges of the DSS UNIX user.
* “Create active Web content”: members of a group with this permission can author Web content that is able to execute Javascript when viewed by other users. This includes webapps, Jupyter notebooks and RMarkdown reports




### [Code envs \& Dynamic clusters](#id24)[¶](#code-envs-dynamic-clusters "Permalink to this heading")


* “Manage all/own code envs”: members of a group with this permission can create and manage [code environments](../code-envs/index.html); their own, those they’ve been given administrative access to, and even others, if given the ‘all’ permission.
* “Manage all/own clusters”: members of a group with this permission can create and manage clusters; their own, those they’ve been given administrative access to, and even others, if given the ‘all’ permission.




### [Advanced permissions](#id25)[¶](#advanced-permissions "Permalink to this heading")


* “Develop plugins”: members of a group with this permission can create and edit [development plugins](../plugins/reference/index.html). Be aware that this permission could allow a hostile user to circumvent the permissions system.
* “Edit lib folders”: members of a group with this permission can edit the Python \& R libraries and the static web resources in the DSS instance.
* “Create personal connections”: members of a group with this permission can create new connections to SQL, NoSQL, and Cloud storage.
* “View indexed Hive connections”: members of a group with this permission can use the Data Catalog to view indexed Hive connections.
* “Manage user\-defined meanings”: members of a group with this permission can create instance\-wide user\-defined meanings, which will be accessible and usable by all DSS projects.
* “Create published API services”: members of a group with this permission can create an API service endpoint and [publish it to a DSS API node through the DSS API Deployer](../apinode/index.html).




### [Write unisolated code: details](#id26)[¶](#write-unisolated-code-details "Permalink to this heading")


For more information about enabling user isolation, see [User Isolation Framework](../user-isolation/index.html)



#### Regular security mode[¶](#regular-security-mode "Permalink to this heading")


When UIF is disabled, DSS runs as a single UNIX user. All code which is written through the interface and executed locally is therefore ran with the permissions of this said user.


This includes notably:


* Python and R recipes
* Python and R notebooks
* PySpark and SparkR recipes
* Custom Python code in preparation recipes
* Custom Python code for machine learning models


No user (even with the Data Scientist profile) may write such code if they are not granted the “Write unisolated code” permission.


It is important to note that since the DSS Unix user has filesystem access to the DSS configuration, a user who has the “write unisolated code” permission is able to alter the DSS configuration, including security\-related controls. This means that a hostile user with these privileges would be able to bypass DSS authorization mechanisms.




#### User isolation enabled[¶](#user-isolation-enabled "Permalink to this heading")


When UIF is enabled, most of the aforementioned code runs with end\-user permissions. The “write unisolated code” permission only applies to the following specific locations where the code is not ran using end\-user impersonation:


* Write custom partition dependency functions
* Write Python UDF in data preparation






[Multiple group membership](#id27)[¶](#multiple-group-membership "Permalink to this heading")
---------------------------------------------------------------------------------------------


Users may belong to several groups. All permissions are cumulative: being a member of a group who has a given permission grants it, even if you are also member of a group who doesn’t have said permission.


DSS does not have negative permissions.