Exporting dashboards to PDF or images[¶](#exporting-dashboards-to-pdf-or-images "Permalink to this heading")
============================================================================================================


Dashboards can be exported to PDF or image (PNG, JPG) files in order to propagate information inside your organization more easily.


Dashboard exports can be:


* created and downloaded manually from the dashboard interface
* created automatically and sent by mail using the “mail reporters” mechanism in a scenario
* created automatically and stored in a managed folder using a dedicated scenario step


If the exported dashboard has filters applied to it, these filters will be re\-used to build the export.



Setup[¶](#setup "Permalink to this heading")
--------------------------------------------


The dashboards export feature must be setup prior to being usable.


Follow [Setting up DSS item exports to PDF or images](../installation/custom/graphics-export.html) to enable the export feature on your DSS instance.




Manual usage[¶](#manual-usage "Permalink to this heading")
----------------------------------------------------------


In dashboard tab, there are three ways to download it directly:


* Inside dashboard menu in edit and view mode. In view mode, any filter changes will be used to build the export even if they are not persisted in the dashboard itself.


![../_images/dashboard-exports-UI.png](../_images/dashboard-exports-UI.png)
* After selecting a dashboard in the list, go to actions tab.


![../_images/dashboard-exports-detail.png](../_images/dashboard-exports-detail.png)

Automatic usage[¶](#automatic-usage "Permalink to this heading")
----------------------------------------------------------------


In a scenario, there are two ways to create dashboard exports:


* Create a “dashboard export” step that allows you to store an export in a local managed folder.


![../_images/dashboard-exports-step.png](../_images/dashboard-exports-step.png)
* With a mail reporter and a valid mail channel, you can select a “dashboard export” attachment. The dashboard will be attached to the mail


![../_images/dashboard-exports-attachment.png](../_images/dashboard-exports-attachment.png)


Settings[¶](#settings "Permalink to this heading")
--------------------------------------------------


Files generated are fully customizable so users are fully in control over what they obtain. There are several parameters that will enable it:


* File type, to select the type of files to generate (PDF, PNG or JPEG).
* Export format, to determine images dimensions.
* If a standard format (A4 or US Letter) is chosen, images dimensions will be calculated based on your screen resolution and the chosen orientation (Landscape or Portrait). On the contrary, Custom format allow to set custom width and height.