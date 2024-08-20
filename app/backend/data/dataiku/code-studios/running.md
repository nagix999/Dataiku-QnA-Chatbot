Running Code Studios[¶](#running-code-studios "Permalink to this heading")
==========================================================================


Code Studios are created from template in projects.


After having built a Code Studio template as described in [Preparing Code Studio templates](code-studio-templates.html):


* ensure the project is associated to a cluster, either by setting a default cluster in “Administration \> Settings \> Containerized execution” or by setting a cluster for the project in its “Settings \> Cluster selection”
* in the “Code Studios” section, click **New Code Studio**, select a Code Studio template, fill a name and create the Code Studio
* once in the Code Studio, click **Start**


Work done in the Code Studio will usually materialize as modified files in the container. These would disappear when the Code Studio is stopped, so in order to safekeep them, synchronizing them back to the DSS server’s filesystem is needed, with the **Sync files with DSS** button (see [Editing files with Code Studio](code-studio-operations.html#synchronized-files)).