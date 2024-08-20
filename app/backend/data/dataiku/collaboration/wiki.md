Wikis[¶](#wikis "Permalink to this heading")
============================================



* [Taxonomy](#taxonomy)
* [Attachments and links](#attachments-and-links)


	+ [Attaching files](#attaching-files)
	+ [Directly linking to a DSS object](#directly-linking-to-a-dss-object)
	+ [Attaching DSS objects](#attaching-dss-objects)
	+ [Referencing attachments](#referencing-attachments)
	+ [Folder layout](#folder-layout)
* [Promoted wikis](#promoted-wikis)
* [Home articles](#home-articles)
* [Publishing an article on the dashboard](#publishing-an-article-on-the-dashboard)
* [Wiki Export](#wiki-export)


	+ [Setup](#setup)
	+ [Interactive usage](#interactive-usage)
	+ [Options](#options)
	+ [Automatic usage](#automatic-usage)
	+ [Page break](#page-break)



Each DSS project contains a Wiki.


You can use the Wiki of a project:


* To document the project’s goals
* To document the project’s inputs and outputs
* To document the inner workings of the project
* As a way to organize your work with your colleagues
* To keep track of planned future enhancements


The DSS wiki is based on the well\-known [Markdown](markdown.html) language.


In addition to writing Wiki pages, the DSS wiki features powerful capabilities.



[Taxonomy](#id1)[¶](#taxonomy "Permalink to this heading")
----------------------------------------------------------


All the pages of the Wiki are organized in a hierarchical taxonomy. Each article can have a “Parent” article (articles can also have no parent and be attached to the root of the hierarchy).


The taxonomy can be browsed in order to get a quick overview of your Wiki




[Attachments and links](#id2)[¶](#attachments-and-links "Permalink to this heading")
------------------------------------------------------------------------------------



### [Attaching files](#id3)[¶](#attaching-files "Permalink to this heading")


You can attach multiple files to each Wiki article. Simply click the “Add attachment” button, and go to the “File” tab




### [Directly linking to a DSS object](#id4)[¶](#directly-linking-to-a-dss-object "Permalink to this heading")


In your Wiki article, you can create clickable links to any DSS object (dataset, recipe, notebook, ….) in the project or in another project. See [the documentation about Markdown](markdown.html) for details on the syntax to create links to DSS objects




### [Attaching DSS objects](#id5)[¶](#attaching-dss-objects "Permalink to this heading")


In addition to links inline in the Wiki article, you can “attach” a DSS object to a Wiki article. This object will always appear in the list of attachments.




### [Referencing attachments](#id6)[¶](#referencing-attachments "Permalink to this heading")


To add a reference to an attachment in the body of an article, click the attachment name while you are in “Edit” mode for the Article




### [Folder layout](#id7)[¶](#folder-layout "Permalink to this heading")


Articles can be switched to a “Folder\-oriented” layout where the article text appears at the top, followed by a detailed list of all attachments, including both files and DSS objects.


To switch between layouts, use the “Actions \> Switch to folder layout” or “Actions \> Switch to article layout” buttons in the Actions menu.





[Promoted wikis](#id8)[¶](#promoted-wikis "Permalink to this heading")
----------------------------------------------------------------------


The administrator of a DSS project can “promote” the Wiki of a project by going to Settings \> Wiki.


Wikis that are promoted will appear in the DSS\-wide “wikis list” and on the “Wikis” line on the personal homepage of all DSS users who have access to the project




[Home articles](#id9)[¶](#home-articles "Permalink to this heading")
--------------------------------------------------------------------


Selected articles can be made available in the “Getting started with DSS” sliding panel on the homepage of DSS users. It is recommended to use this feature to put on the homepage a few articles related to your particular onboarding / getting started (for example: where is the data, who to ask for help, …)


Home articles are controlled by global DSS administrators, from the “Administration \> Settings \> Theme \& Customization” page




[Publishing an article on the dashboard](#id10)[¶](#publishing-an-article-on-the-dashboard "Permalink to this heading")
-----------------------------------------------------------------------------------------------------------------------


There is a [specific dashboard insight](../dashboards/insights/wiki-article.html) to show a Wiki article on the dashboard.




[Wiki Export](#id11)[¶](#wiki-export "Permalink to this heading")
-----------------------------------------------------------------


Wiki articles can be exported to PDF files in order to propagate information inside your organization more easily.


Wiki exports can be:



> * Created and downloaded interactively through the wiki user interface
> * Created automatically and sent by mail using the “mail reporters” mechanism in a scenario
> * Created automatically and stored in a managed folder using a dedicated scenario step



### [Setup](#id12)[¶](#setup "Permalink to this heading")


The graphics export feature must be setup prior to being usable.


If you are running Custom Dataiku, follow [Setting up DSS item exports to PDF or images](../installation/custom/graphics-export.html) to enable the export feature on your DSS instance. If you are running Dataiku Cloud Stacks, you do not need any setup.




### [Interactive usage](#id13)[¶](#interactive-usage "Permalink to this heading")


Export an article directly from a wiki article.


![../_images/manual-wiki-export.png](../_images/manual-wiki-export.png)


### [Options](#id14)[¶](#options "Permalink to this heading")


![../_images/wiki-export-modal.png](../_images/wiki-export-modal.png)
The following options are available:


* Export :


	+ Whole wiki : export the entire wiki of the project.
	+ Article and its children : export the current article and the entire hierarchy beneath it.
	+ Article only : export the current article.
* Page size : determines the dimensions of the page.
* Export attachments : generates a zip file containing the selected articles as a PDF, along with any attachments. Linked DSS items are not exported.




### [Automatic usage](#id15)[¶](#automatic-usage "Permalink to this heading")


In a scenario, there are two ways to create wiki exports, with the same options available as the interactive export:


* Create a “wiki export” step that allows you to store an export in a local managed folder.


![../_images/wiki-export-scenario-step.png](../_images/wiki-export-scenario-step.png)
* With a mail reporter and a valid mail channel, you can select a “wiki export” attachment. The wiki will be attached to the mail


![../_images/wiki-export-mail-reporter-attachment.png](../_images/wiki-export-mail-reporter-attachment.png)


### [Page break](#id16)[¶](#page-break "Permalink to this heading")


There will be a page break between each article in the exported document.


It is also possible to manually insert page breaks in specific places by using the thematic break markers `---` or `<hr>`.