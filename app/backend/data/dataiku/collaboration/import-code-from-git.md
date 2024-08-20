Importing code from Git in project libraries[¶](#importing-code-from-git-in-project-libraries "Permalink to this heading")
==========================================================================================================================



* [Overview](#overview)
* [Importing a new repository](#importing-a-new-repository)


	+ [Manage repositories](#manage-repositories)
* [Working with Git references](#working-with-git-references)


	+ [Push local changes to git](#push-local-changes-to-git)
	+ [Reset from remote HEAD](#reset-from-remote-head)
	+ [Edit a git reference](#edit-a-git-reference)
	+ [Unlink a reference](#unlink-a-reference)
	+ [Update all references](#update-all-references)




[Overview](#id2)[¶](#overview "Permalink to this heading")
----------------------------------------------------------


If you have code that has been developed outside of DSS and is available in a Git repository (for example, a library created by another team), you can import this repository (or a part of it) in the project libraries, and use it in any code capability of DSS (recipes, notebooks, webapps, …)


In the project libraries, you can import multiple external repositories, and declare which parts of said repositories should be treated as being part of the project source paths.


This mechanism is called “Git references”.




[Importing a new repository](#id3)[¶](#importing-a-new-repository "Permalink to this heading")
----------------------------------------------------------------------------------------------


* Go to the project’s library editor
* Click “Git” \> “Import from Git…”
* Enter the URL of the Git repository. Optionally, enter a branch name, tag name or commit id to import
* Optionally, enter a subpath if you only want to import a part of the repository
* Enter the “Target path”: where in the hierarchy of libraries you want to import this repository


When you click “Save and Retrieve”, the repository is fetched. The page will be reloaded, so it is advised that you save your unsaved work before importing a new repository.


For more details on working with Git remotes, see [Working with Git](git.html)



### [Manage repositories](#id4)[¶](#manage-repositories "Permalink to this heading")


You can manage your libraries in a dedicated window. To access this window, go to the project’s library editor and click “Git” \> “Manage repositories…” This window allows you to:


* [Push your local changes](#push-local)
* [Reset a library from remote HEAD](#reset)
* [Edit a git reference](#edit-ref)
* [Unlink a library](#unlink)
* [Add a new git reference](#import)
* [Update all references](#update)





[Working with Git references](#id5)[¶](#working-with-git-references "Permalink to this heading")
------------------------------------------------------------------------------------------------



### [Push local changes to git](#id6)[¶](#push-local-changes-to-git "Permalink to this heading")


You can push your local changes from DSS to git, using of the three possible actions:


* Use the [manage repositories](#manage-ref) window
* Right\-click on the library that contains your changes and select “Commit and push…”
* Click on “Git” \> “Commit and push all…”


Each of these actions allows you to commit your changes and push them to git. You will have the option to provide your own commit message.


In the event of a conflict, the conflicting files will be loaded into the editor, alongside the traditional git markers (\<\<\<\<, \=\=\=\=, \>\>\>\>).
For each conflicting file, you will have to resolve the conflict and mark the file as resolved (by clicking the appropriate button located at the top right).
Once all files have been marked, you can commit and push your changes.


In the event of a conflict, you can also choose to abandon the resolution of the conflict and revert to the version before the commit attempt.




### [Reset from remote HEAD](#id7)[¶](#reset-from-remote-head "Permalink to this heading")


Once the repository is retrieved, you can perform modifications to the files in DSS. Please note that if you are working on a library that is used in other projects, all changes to this library will be taken into account in all projects.


Once the repository has been retrieved, it can be imported in Python and R code. See [reusing Python code](../python/reusing-code.html) and [reusing R code](../R/reusing-code.html).


To update a reference, either use:


* “Git” \> “Manage repositories…” \> “Reset from remote HEAD”
* Right\-click on the root path of the Git reference and click “Reset from remote HEAD”


This action will perform a true git reset, so any local changes made will be lost.


If changes have been detected, you will see a confirmation window.
This happens when you (or some of your colleagues) have some “unpushed” changes.



![Reset from remote HEAD](../_images/reset-from-remote-HEAD.png)



Reset from remote HEAD[¶](#id1 "Permalink to this image")






Please note that any change made on a DSS version older than DSS 10\.0\.0 will not be detected. For example, if you have some unpushed changes from a previous version of DSS, and then migrate to a newer version, you will not be able to see this window until you make additional changes to your library.




### [Edit a git reference](#id8)[¶](#edit-a-git-reference "Permalink to this heading")


The edit reference window allows you to edit and update a git reference and then import a repository. You have to provide the same information as required for [importing a new repository](#import).


To edit a git reference, either use:


* “Git” \> “Manage repositories…” \> “Edit reference”
* Right\-click on the root path of the Git reference and click “Edit Git reference…”




### [Unlink a reference](#id9)[¶](#unlink-a-reference "Permalink to this heading")


By selecting this option, you can unlink a library and a git repository. Please note, that this will not delete the directory where the library is stored.
If you want to do both, you need to right\-click on the wanted library, and select “Delete”.


To unlink a library, either use:


* “Git” \> “Manage repositories…” \> “Unlink reference”
* Right\-click on the root path of the Git reference and click “Unlink remote repository…”




### [Update all references](#id10)[¶](#update-all-references "Permalink to this heading")


Selecting this option will reset from the remote HEAD all your libraries. Please note that if you select this option, it will override the mechanism that prevents you from pulling a library if you have made changes to a library.