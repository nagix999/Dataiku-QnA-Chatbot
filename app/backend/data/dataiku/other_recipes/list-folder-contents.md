List Folder Contents[¶](#list-folder-contents "Permalink to this heading")
==========================================================================


The “List Folder Contents” recipe lets you list all the files contained in a folder into a dataset, along with some information about the file and possibly extracting parts of the path into extra columns.


This recipe is useful to create the input dataset for [Computer vision](../machine-learning/computer-vision/index.html) or [Labeling](../machine-learning/labeling.html) from the input images folder.



Output columns[¶](#output-columns "Permalink to this heading")
--------------------------------------------------------------


You can select the information to retrieve about each file in the folder:


* *path* to the file in the folder
* *basename* filename without the extension
* *extension* of the file
* *last\_modified* date
* *size* of the file in bytes




Folder level mapping[¶](#folder-level-mapping "Permalink to this heading")
--------------------------------------------------------------------------


Use this mapping to output extra columns containing the name of specific levels in the folder hierarchy.


Levels start at 1 and negative levels are relative to the end of the folder hierarchy.


For example:


![../_images/list_folder_contents_example.png](../_images/list_folder_contents_example.png)