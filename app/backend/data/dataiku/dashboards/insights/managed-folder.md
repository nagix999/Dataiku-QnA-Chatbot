Managed folder[¶](#managed-folder "Permalink to this heading")
==============================================================


A “managed folder” insight shows the content of a [DSS managed folder](../../connecting/managed_folders.html).


There actually two kinds of insights depending on what you want to display:


* Display the listing of the files in the folder (with preview). This gives the ability to download each file or the whole folder content, as a .zip file
* Display the preview of a single file. This gives the ability to download the file. Note that downloading other files is not exposed but still technically feasible: the permissions granularity is the managed folder, not the file.



Publishing a managed folder insight[¶](#publishing-a-managed-folder-insight "Permalink to this heading")
--------------------------------------------------------------------------------------------------------


You can publish a managed folder insight from several locations:



### From the managed folder[¶](#from-the-managed-folder "Permalink to this heading")



Note


This method is only possible if you have at least the “Read project content” permission.




#### To publish a “whole folder insight”[¶](#to-publish-a-whole-folder-insight "Permalink to this heading")


Either from the folders’s view, or from the Flow, click on the “Publish” button in the Actions column of the folder.


This creates a new insight pointing to the folder.




#### To publish a “single file insight”[¶](#to-publish-a-single-file-insight "Permalink to this heading")


From the folder’s view, select the file to display, and click on the Publish button next to the file name. This creates a new insight pointing to the file.





### From the dashboard[¶](#from-the-dashboard "Permalink to this heading")


Click on the \+ button to add tiles. Select folder, then select the folder you want to display. If you only have dashboard access, you will only see the datasets that have previously been [dashboard\-authorized](../../security/authorized-objects.html).


Select whether you want to publish a “whole folder insight” or a “single file insight”. In the latter case, select the file.





Tile display[¶](#tile-display "Permalink to this heading")
----------------------------------------------------------


There are no tile display specific options for the managed folder insight.




View and edit insight[¶](#view-and-edit-insight "Permalink to this heading")
----------------------------------------------------------------------------


The “View” tab of the insight offers the additional download options. It is not possible to modify anything in the insight. All editions must be done in the source managed folder.