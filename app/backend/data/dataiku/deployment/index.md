Production deployments and bundles[¶](#production-deployments-and-bundles "Permalink to this heading")
======================================================================================================


Production deployments in DSS are managed from a central place: the Deployer. The Deployer is usually deployed as a dedicated node in your DSS cluster, but may also be run locally on a Design or Automation node. See below for instructions on how to install the Deployer in your environment.


The Deployer has two separate but similar components, the Project Deployer and the API Deployer, that handle the deployment of projects and API services respectively.
This section focuses on the former. To know more about the API Deployer, please see [API Node \& API Deployer: Real\-time APIs](../apinode/index.html).


The DSS Automation Node provides a way to separate your DSS development and production environments and makes it easy to deploy and update DSS projects in production.
The DSS Design Node is your development environment, it is the place where you can design your flow and build or improve your data logic. Once this logic has been tested and a new version is ready to be released and deployed, you can export it to your production environment and use production data as inputs in your flow, on the Automation node. Metrics and scenarios on the Automation node allow for better assessment of the performance of your models and more control over your production data.


Deploying projects built in the Design node to the Automation node is done at project\-level with project bundles. Bundles are archives that contain a given version of the flow you built in the Design node.


The Project Deployer allows you to:


* Manage all your Automation nodes
* Deploy bundles to your Automation nodes
* Monitor the health and status of your deployed Automation node projects



* [Setting up the Deployer](setup.html)
	+ [Using a local Deployer](setup.html#using-a-local-deployer)
	+ [Using a standalone Deployer](setup.html#using-a-standalone-deployer)
		- [Setup users](setup.html#setup-users)
		- [Connect your Design and Automation instances](setup.html#connect-your-design-and-automation-instances)
			* [Generate an admin API key on the Deployer](setup.html#generate-an-admin-api-key-on-the-deployer)
			* [Setup the key on the Design / Automation nodes](setup.html#setup-the-key-on-the-design-automation-nodes)
* [Creating a bundle](creating-bundles.html)
	+ [Bundle contents](creating-bundles.html#bundle-contents)
		- [Metadata](creating-bundles.html#metadata)
		- [Additional Data](creating-bundles.html#additional-data)
		- [Bundle release notes](creating-bundles.html#bundle-release-notes)
		- [Bundles that include shared objects](creating-bundles.html#bundles-that-include-shared-objects)
	+ [Publishing the bundle on the Project Deployer](creating-bundles.html#publishing-the-bundle-on-the-project-deployer)
	+ [Downloading a bundle](creating-bundles.html#downloading-a-bundle)
	+ [Reverting a bundle on the design node](creating-bundles.html#reverting-a-bundle-on-the-design-node)
* [Deployment infrastructures](project-deployment-infrastructures.html)
	+ [Creating Automation nodes](project-deployment-infrastructures.html#creating-automation-nodes)
		- [Custom Dataiku](project-deployment-infrastructures.html#custom-dataiku)
		- [Dataiku Cloud Stacks](project-deployment-infrastructures.html#dataiku-cloud-stacks)
		- [Dataiku Cloud](project-deployment-infrastructures.html#dataiku-cloud)
	+ [Creating Project Deployer Infrastructure](project-deployment-infrastructures.html#creating-project-deployer-infrastructure)
		- [Setting up stages](project-deployment-infrastructures.html#setting-up-stages)
		- [Basic configuration](project-deployment-infrastructures.html#basic-configuration)
	+ [Configuring an Automation infrastructure](project-deployment-infrastructures.html#configuring-an-automation-infrastructure)
		- [Permissions](project-deployment-infrastructures.html#permissions)
		- [Connection remapping](project-deployment-infrastructures.html#connection-remapping)
		- [Deployment policies](project-deployment-infrastructures.html#deployment-policies)
		- [Deployment hooks](project-deployment-infrastructures.html#deployment-hooks)
* [Deploying bundles with the Project Deployer](deploying-bundles.html)
	+ [Creating the bundle](deploying-bundles.html#creating-the-bundle)
	+ [Publishing the bundle on the Project Deployer](deploying-bundles.html#publishing-the-bundle-on-the-project-deployer)
	+ [Deploying the bundle](deploying-bundles.html#deploying-the-bundle)
	+ [Modifying deployment settings](deploying-bundles.html#modifying-deployment-settings)
		- [Scenarios](deploying-bundles.html#scenarios)
* [Manually importing bundles](manually-importing-bundles.html)
	+ [Uploading a bundle](manually-importing-bundles.html#uploading-a-bundle)
	+ [Connection remapping](manually-importing-bundles.html#connection-remapping)
	+ [Activating a bundle](manually-importing-bundles.html#activating-a-bundle)
	+ [Local states and items on Automation node](manually-importing-bundles.html#local-states-and-items-on-automation-node)