Manually importing bundles[¶](#manually-importing-bundles "Permalink to this heading")
======================================================================================


Even if you are not using the Project Deployer, you can still import and activate bundles directly on the Automation node.



Uploading a bundle[¶](#uploading-a-bundle "Permalink to this heading")
----------------------------------------------------------------------


There are two ways to upload a new bundle:


* To create a new project from a bundle, use the ‘New project’ button on the Automation home page.
* To update an existing automation project to a more recent bundle, use the ‘Import bundle’ button in the bundles section of this project.


In Project \> Bundles \> Bundles list, you can see the list of uploaded bundles, their content and what commits / changes are included in this bundle compared to the previous bundle.




Connection remapping[¶](#connection-remapping "Permalink to this heading")
--------------------------------------------------------------------------


Before importing a bundle, make sure that the required connections are available on the Automation node. You can define how connections are mapped between the Design node and the Automation node in the ‘Activation settings’ tab. If no remapping is defined for a connection, DSS will automatically try to look for a connection with the same name on the Automation node.


When using Dataiku Cloud, you can make your connections available in the Automation node when defining them in Launchpad.




Activating a bundle[¶](#activating-a-bundle "Permalink to this heading")
------------------------------------------------------------------------


Activating a bundle refers to the process of extracting the metadata and additional data of a bundle to make it the current state of the project on the Automation node. This is done by clicking the ‘Activate’ button when a bundle is selected.


Before activating the bundle, DSS will perform various checks to make sure the bundle is ready to be imported. If some of the connections used in the bundle are missing, a fatal error will be returned, and you will need to go add a connection remapping to fix it. You will see a warning in case of conflict between the current [User\-defined meanings](../schemas/user-defined-meanings.html) and the ones in your bundle, or if there were installed plugins that were not found.




Local states and items on Automation node[¶](#local-states-and-items-on-automation-node "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------


The Automation node remembers which scenarios are currently activated in a project and keeps these activation states on new bundle activation.


Even though Automation nodes are dedicated to the recomputing of bundles coming from the Design node, in some situations it may be useful to add scenarios and notebooks beside those items coming from bundle activation. This functionality is particularly interesting when different teams are responsible for the design of the workflows and their automation.


In most cases, local scenarios and notebooks are kept when you activate a new bundle. However, an existing scenario in the Automation node will be overwritten by a bundle scenario on activation if the two have the same ID.