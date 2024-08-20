SharePoint Online[¶](#sharepoint-online "Permalink to this heading")
====================================================================


Dataiku can interact with SharePoint Online to:


* read and write datasets based on SharePoint Online lists
* read and write datasets based on SharePoint Online stored documents
* read and write managed folders


There are two types of SharePoint objects that can be leveraged: documents libraries and lists.


To interact with document, you will need to know its SharePoint site, the drive in which it is stored, and its path within this drive.


Dataiku uses the same filesystem\-like mechanism when accessing SharePoint Online: when you specify
a site and drive, you can browse it to quickly find your data, or you can set the
prefix in which Dataiku may output datasets. Datasets on SharePoint thus must be in one of
the supported [filesystem formats](connections.html#file-formats).


To interact with SharePoint lists, you will need to know the site, and the name of the list.



Creating a SharePoint Online connection[¶](#creating-a-sharepoint-online-connection "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------


Before connecting to SharePoint Online with Dataiku you need to :


* create at least one site SharePoint
* define an app on Azure portal and retrieve its client id and client secret




Connecting to SharePoint Online using OAuth2[¶](#connecting-to-sharepoint-online-using-oauth2 "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------


Dataiku access SharePoint Online using OAuth2 as a per\-user credentials.


* create a new App registration (Azure Portal \> Microsoft Entra ID \> App registrations). Dataiku will connect with the identity of this app
* in the Overview tab, note the Application (client) ID and the Directory (tenant) ID
* in the Authentication tab, add a new Platform



> + choose the “Web” platform
> 	+ add a redirect URI of DSS\_BASE\_URL/dip/api/oauth2\-callback



Note


For example if Dataiku is accessed at <https://dss.mycompany.corp/>, the OAuth2 redirect URL is [https://dss.mycompany.corp/dip/api/oauth2\-callback](https://dss.mycompany.corp/dip/api/oauth2-callback)



* if you selected the “Web” platform earlier, create a client secret for this application (App registration \> Certificates \& Secrets), note the client (app) secret
* create a new SharePoint Online connection in Dataiku
* fill the “Tenant id”, “App id”, and “App secret” fields with the fields you noted earlier in the Azure App
* “Authorization endpoint” should be https://login.microsoftonline.com/common/oauth2/v2\.0/authorize for multitenant apps, or https://login.microsoftonline.com/\<\<your tenant id\>\>/oauth2/v2\.0/authorize for single tenant
* “Token endpoint” should be https://login.microsoftonline.com/common/oauth2/v2\.0/token for multitenant apps, or https://login.microsoftonline.com/\<\<your tenant id\>\>/oauth2/v2\.0/token for single tenant
* “Scope” should be offline\_access User.Read Files.ReadWrite.All Sites.ReadWrite.All Sites.Manage.All
* “Default site” should contain the name for an existing SharePoint site where new managed datasets will be created by default. To find the site name, browse to that site and copy the section of the URL following /sites/. For instance, if the URL looks like https://my\-corp.sharepoint.com/sites/myproject/\_layouts/15/viewlsts.aspx?view\=14, the site name is myproject.
* “Default drive” should contain the name of an existing drive where new managed datasets will be created by default. This drive must belong to the default site. To find the drive name, go to the “Site contents” section and copy the name of the document library containing your drive.
* “Default path” is the path to the directory within the default drive where managed folders will be created
* create the connection (you can’t test it yet)


Then for each user:


* go to **user profile \> Credentials**
* click the “Edit” button next to the new connection name
* follow the instructions that appear




Creating SharePoint Online datasets[¶](#creating-sharepoint-online-datasets "Permalink to this heading")
--------------------------------------------------------------------------------------------------------



### From a SharePoint document[¶](#from-a-sharepoint-document "Permalink to this heading")


After creating your SharePoint Online connection in Administration, you can create datasets from documents stored on SharePoint.


From either the Flow or the datasets list, click on **\+Dataset \> Cloud Storage \& Social \> SharePoint Document**.


* select the connection
* select the SharePoint site and the drive in which your files are located
* click on “Browse” to locate your files




### From a SharePoint list[¶](#from-a-sharepoint-list "Permalink to this heading")


After creating your SharePoint Online connection in Administration, you can create datasets from a SharePoint list.


From either the Flow or the datasets list, click on **\+Dataset \> Cloud Storage \& Social \> SharePoint List**.


* select the connection in which your lists are located
* select the SharePoint site and the list





Location of managed datasets and folders[¶](#location-of-managed-datasets-and-folders "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


When you create a managed dataset or folder in a SharePoint Online connection, Dataiku will automatically create it within the “Default site”, “Default drive” and the “Default path”.


Below that root path, the “naming rule” applies. See [Making relocatable managed datasets](relocation.html) for more information.