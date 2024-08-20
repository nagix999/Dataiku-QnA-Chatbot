Govern Installation and Setup[¶](#govern-installation-and-setup "Permalink to this heading")
============================================================================================



* [Installing Govern](#installing-govern)
* [User setup and authentication](#user-setup-and-authentication)
* [Connecting your Govern and Design, Automation or Deployer instances](#connecting-your-govern-and-design-automation-or-deployer-instances)


	+ [Setting up your node IDs](#setting-up-your-node-ids)
	+ [Generate an admin API key on Govern](#generate-an-admin-api-key-on-govern)
	+ [Setup the key on the Design / Automation / Deployer nodes](#setup-the-key-on-the-design-automation-deployer-nodes)
* [Making Govern aware of its external URL](#making-govern-aware-of-its-external-url)
* [Defining the Govern instance name](#defining-the-govern-instance-name)
* [Setting up email notifications](#setting-up-email-notifications)
* [Managing security](#managing-security)




[Installing Govern](#id1)[¶](#installing-govern "Permalink to this heading")
----------------------------------------------------------------------------


There are two modes for installing Govern:


* If you are using [Dataiku Cloud Stacks](../installation/cloudstacks-aws/index.html) , you simply need to create a new instance of type Govern.
* If you are using Dataiku Custom, please refer to [Installing a Govern node](../installation/custom/govern-node.html).




[User setup and authentication](#id2)[¶](#user-setup-and-authentication "Permalink to this heading")
----------------------------------------------------------------------------------------------------


It is recommended to have the same user logins between the different nodes of your Dataiku cluster. Users management on Govern node is the same as on other node types. Please see [Security](../security/index.html) for more details.




[Connecting your Govern and Design, Automation or Deployer instances](#id3)[¶](#connecting-your-govern-and-design-automation-or-deployer-instances "Permalink to this heading")
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Warning


We recommend that you keep the versions of the nodes connected to Govern in sync with the version of the Govern node.


Although it may work, connecting nodes to Govern with different software versions is not supported.




Note


If you are using Dataiku Cloud Stacks, and have enabled fleet management on your virtual network, this is done automatically, so you don’t need to do the following operations.



Next, you are going to configure:


* your Design / Automation nodes so that the different objects (projects, models, model versions) can be published to Govern
* your Deployer nodes so that they can check the governance status of projects or API services before deploying them



### [Setting up your node IDs](#id4)[¶](#setting-up-your-node-ids "Permalink to this heading")


For the Govern integration to work properly, you have to set the node ID of every DSS node that will connect to Govern.


You can configure a node ID by adding a `nodeid` configuration option to the `general` section of the `DATADIR/install.ini` file, as shown in the example below:



```
[general]
nodeid = YOUR_NODE_ID

```


After modifying that file, you will have to restart the DSS node in question.


You also have to make Govern aware of the node IDs you configured. In Govern, go to “Administration \> Settings \> Notifications \& Integrations” and add an entry per node to the “Fallback node references” section.




### [Generate an admin API key on Govern](#id5)[¶](#generate-an-admin-api-key-on-govern "Permalink to this heading")


On Govern, go to Administration \> Security \> Global API keys and generate a new API key. This key must have global admin privileges. Take note of the secret.




### [Setup the key on the Design / Automation / Deployer nodes](#id6)[¶](#setup-the-key-on-the-design-automation-deployer-nodes "Permalink to this heading")


On the Design, Automation or Deployer node:


* Go to “Administration \> Settings \> Dataiku Govern”
* Enable Dataiku Govern integration
* Enter the base URL (`http(s)://[host]:[port]`) of the Govern node that you installed
* Enter the secret of the API key


Repeat for each Design / Automation / Deployer node that you wish to connect to Govern.





[Making Govern aware of its external URL](#id7)[¶](#making-govern-aware-of-its-external-url "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------------


As any other node type, Govern cannot guess what its external URL is.


The external URL is used any time Govern needs to build an absolute URL for the user, for example when sending links to Govern in an [email](#governance-email).


To configure this setting, go to “Administration \> Settings \> Notifications \& Integrations” and click on the wand icon: it should automatically set the Govern external URL by looking at the current URL of your browser.




[Defining the Govern instance name](#id8)[¶](#defining-the-govern-instance-name "Permalink to this heading")
------------------------------------------------------------------------------------------------------------


You can set the name of your Govern node by going to “Administration \> Settings \> Instance”.


If you set an instance name, it will be displayed at the top right of every page of this instance, in the main navigation bar.


When defined, the instance name will also be included in audit trail messages when they are sent to an [event server](../operations/audit-trail/eventserver.html).




[Setting up email notifications](#id9)[¶](#setting-up-email-notifications "Permalink to this heading")
------------------------------------------------------------------------------------------------------


Govern can be configured to send email notifications when appropriate. Currently, this is mostly used to notify users about changes in the [sign\-off status of an item](governance-features.html#sign-off).


To enable email notifications:


* Go to “Administration \> Settings \> Notifications \& Integrations”.
* Enable the “Enable notification emails” checkbox.
* Fill\-in the SMTP server connection parameters (host, port, SSL, TLS, login, password).
* Click “Save”


In addition, you must make sure that users who wishes to receive email notifications have their email address correctly set in their user profiles.




[Managing security](#id10)[¶](#managing-security "Permalink to this heading")
-----------------------------------------------------------------------------


Please see [Govern Security: Roles and Permissions](../security/govern-permissions.html) for details on the Govern security model.