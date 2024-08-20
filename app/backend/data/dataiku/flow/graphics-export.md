Exporting the Flow to PDF or images[¶](#exporting-the-flow-to-pdf-or-images "Permalink to this heading")
========================================================================================================



* [Setup](#setup)
* [Manual usage](#manual-usage)
* [Settings](#settings)



The Flow can be exported to PDF or image (PNG, JPG) files in order to propagate information inside your organization more easily.



[Setup](#id1)[¶](#setup "Permalink to this heading")
----------------------------------------------------


The Dashboards and Flow export feature must be setup prior to being usable.


Follow [Setting up DSS item exports to PDF or images](../installation/custom/graphics-export.html) to enable the export feature on your DSS instance.




[Manual usage](#id2)[¶](#manual-usage "Permalink to this heading")
------------------------------------------------------------------


In project Flow view, open Flow Actions menu and select Export to PDF/Image.


![../_images/flow-export.png](../_images/flow-export.png)


[Settings](#id3)[¶](#settings "Permalink to this heading")
----------------------------------------------------------


Files generated are fully customizable so users are fully in control over what they obtain. There are several parameters that will enable it:


* File type, to select the type of files to generate (PDF, PNG or JPEG).
* Export format, to determine images dimensions.



> + If a standard format (A4 or US Letter) is chosen, images dimensions will be calculated based on the size of your Flow and the chosen orientation (Landscape or Portrait). On the contrary, Custom format allow to set custom width and height.
* Tiling, to generate multiple images from the Flow. It is useful if you want to print the large Flow over multiple sheets.



> + A value of 200% will zoom the Flow twice and generate up to 4 images (2 x 2\).
> 	+ A value of 300% will zoom the Flow three times and generate up to 9 images (3 x 3\).