Projects and Project Folders View[¶](#projects-and-project-folders-view "Permalink to this heading")
====================================================================================================


The Projects view is shared with the Project Folders view. Here you can create and manage project folders, and organize projects into folders.


![Projects and Project Folders View](../../_images/homepage-projects-with-folder.png)
Folders can be nested within other folders, and the folder hierarchy is common for all users across the DSS instance.



Moving Projects and Folders[¶](#moving-projects-and-folders "Permalink to this heading")
----------------------------------------------------------------------------------------


Simply drag a project (or folder) into a folder.


Alternatively, click on the ellipsis in the corner of the project (or folder), and select **Move to**. You can also select multiple projects by holding Shift and clicking each project, then clicking on the ellipsis.



Note


Project capabilities are only available on the projects list, not on the homepage





Security[¶](#security "Permalink to this heading")
--------------------------------------------------


Folders have Read, Write, and Admin permissions, which can be granted to any groups defined on the instance. Simply click on the ellipsis in the corner of the folder and select **Permissions**.


When a folder is created within another folder, its default permissions are those of the parent folder; these can later be changed.



Note


Any user with permissions on a project will always have implicit read access to the folder structure containing that project. For example, if user *viewer* has no explicit access to *folder\-1*, then normally *viewer* will not see *folder\-1* in the Projects view. However, if *viewer* has read access to *project\-1*, and *project\-1* is contained within *folder\-1*, then *viewer* will see *folder\-1* in the Projects view.




Note


Suppose there is a [discoverable](../../security/permissions.html#project-access) project contained in *folder\-2* or any of its descendants. Any user will always have implicit read access to *folder\-2*.



In order to control permissions in the root folder, a new [permission “Write in root project folder”](../../security/permissions.html) has been added to each security group. This allows administrators to prevent folders and projects from being created in, or moved to, the root.