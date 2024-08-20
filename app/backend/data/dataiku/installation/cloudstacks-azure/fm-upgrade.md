Upgrading FM[¶](#upgrading-fm "Permalink to this heading")
==========================================================



Description[¶](#description "Permalink to this heading")
--------------------------------------------------------


This guided setup allows you to upgrade an existing Dataiku Cloud Stacks for Azure.
It assumes you had followed [the guided setup example](guided-setup-new-vnet-elastic-compute.html) to build
your initial setup.




Steps[¶](#steps "Permalink to this heading")
--------------------------------------------



Warning


For any upgrade to Fleet Manager version 12\.6\.0 or higher, it is required to previously stop the virtual
machine hosting Fleet Manager, or the upgrade process could fail.




### Stop Fleet Manager server[¶](#stop-fleet-manager-server "Permalink to this heading")


* Go into the resource group into which the deployment was made. We call it `<resource-group>`
* Find the machine hosting Fleet Manager. Its name should be `<resource-group>-instance`
* Click on its name, the instance blade opens
* In *Properties* tab, section *Networking*, find the *Private IP address* of the instance and make a note of it
* Click on the *Stop* button
* Wait for the machine the reach the state *Stopped (deallocated)*




### Backup Fleet Manager’s data disk[¶](#backup-fleet-manager-s-data-disk "Permalink to this heading")


* Find the data disk, its name should be `<resource-group>-instance-data-disk`
* Click on its name, the volume blade opens
* Click on *\+ Create snapshot*
* Choose an identifiable name, for instance `fm-backup-YYYYMMDD`, and click on *Review\+Create*
* Click on *Create*
* Wait for the deployment to finish, and click on *Go to resource*
* Click on *Properties* in the left menu and make a note of *Resource ID* value




### Delete the existing server[¶](#delete-the-existing-server "Permalink to this heading")


* Go back to the instance of step *Stop Fleet Manager server*
* Click on *Delete*
* On the blade opening from the right hand side, select *OS disk* and *Data disks*, do not select the network resources
* Tick the deletion disclaimer then click on *Delete* at the bottom of the blade
* Wait for the resources (machine and disks) to disappear from the resource group even after multiple refreshes of the resources list




### Create the new stack[¶](#create-the-new-stack "Permalink to this heading")


* Follow [the guided setup example](guided-setup-new-vnet-elastic-compute.html) to deploy the new version of Fleet Manager


	+ Populate the *Private Ip Address* field with the previous FM IP address previously noted
	+ Populate the *Snapshot* field with the snapshot *Resource ID* previously noted





Troubleshooting[¶](#troubleshooting "Permalink to this heading")
----------------------------------------------------------------



### PostgreSQL related error messages[¶](#postgresql-related-error-messages "Permalink to this heading")


If you are troubleshooting a non\-responsive Fleet Manager after an upgrade, you might want to observe the logs
displayed by `sudo journalctl -u fm-setup`. If you see the message `Postgres server cannot be upgraded because it was not stopped properly. Please consult documentation.`
or `PostgreSQL upgrade failed`, it is likely the machine hosting Fleet Manager was not properly
stopped before the upgrade. You can fix it by upgrading to an intermediate version first. Follow these instructions:


* Replay steps *Stop Fleet Manager server*, *Backup Fleet Manager’s data disk* and *Delete the existing server*
* Replay *Create the new stack* but use the following button instead


[![Deploy to Azure](../../_images/azure-deploy.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fdkutemplates.blob.core.windows.net%2Ffleet-manager-templates%2F12.5.2%2Ffleet-manager-network-fixed.json)
* Restart the upgrade process




### DSS machines seem unresponsive[¶](#dss-machines-seem-unresponsive "Permalink to this heading")


In case the DSS machines seem unresponsive in the FM UI following the upgrade, reprovision the different DSS machines for them to be able to communicate again with FM.