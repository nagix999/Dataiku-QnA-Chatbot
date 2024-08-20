Excel Templater[¶](#excel-templater "Permalink to this heading")
================================================================



* [Overview](#overview)
* [How to](#how-to)




[Overview](#id1)[¶](#overview "Permalink to this heading")
----------------------------------------------------------


Export Dataiku datasets into a pre\-built Excel template



Note


This capability is provided by the “excel\-templater” plugin, which you need to install. Please see [Installing plugins](../../plugins/installing.html).


This plugin is [Not supported](../../troubleshooting/support-tiers.html)





[How to](#id2)[¶](#how-to "Permalink to this heading")
------------------------------------------------------


1. Create an Excel template:



> * In an Excel spreadsheet, choose a cell where you want a dataset to start writing its values (it will be the top left cell of the dataset).
> * In this cell, add a reference to the wanted dataset, using the following naming convention: `DATASET.<my dataset in a flow>`, where `DATASET` is the keyword defined in the plugin to locate the cell in which to import the dataset, and `<my dataset in a flow>` is the name of a dataset in your flow.
> * If the dataset is shared from another project, you can reference it with: `DATASET.<my other project>.<my shared dataset>` where `<my other project>` is the project id from which the `<my shared dataset>` is defined.
> * The reference `DATASET.<my dataset in a flow>` can be written on the first row of an Excel table to automatically format the written dataset columns that are located inside the Excel table. The Excel table will be extended vertically to fit all the datasets rows.


![../../_images/excel-templater_input-template-excel.png](../../_images/excel-templater_input-template-excel.png)

Note


Building pivot tables from exported Dataiku datasets? In your Excel template, set them to `refresh on open` for up\-to\-date data.



2. Upload the Excel template in a managed folder.
3. Create the recipe:



> * Select the folder, on the right hand panel click on `Actions` \> `Plugin recipes` \> `Excel Templater`. Or click on `+RECIPE` \> `Excel` \> `Excel Templater`.
> * Click on the component `Populate Excel Template from Dataiku Datasets`.
> * Add the input datasets whose names correspond to the references contained in the template excel (for ex `my_dataset_report`), and set your output folder.


![../../_images/excel-templater_plugin-component-init.png](../../_images/excel-templater_plugin-component-init.png)