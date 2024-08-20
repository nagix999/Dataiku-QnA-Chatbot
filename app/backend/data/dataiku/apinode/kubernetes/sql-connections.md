Managing SQL connections[¶](#managing-sql-connections "Permalink to this heading")
==================================================================================


In order to use a Kubernetes deployment with:


* SQL query endpoints
* Dataset lookup endpoints
* Query enrichments in prediction endpoints


You need to setup the SQL connections that these endpoints will use. You need to declare the connection settings *as seen from the Kubernetes cluster*. You may need to pay special attention to firewall and authorization rules



Configuring the connection used for storage of bundled data[¶](#configuring-the-connection-used-for-storage-of-bundled-data "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------------------------------------


NB: this is not applicable to SQL Query endpoints


Please see [Enriching prediction queries](../enrich-prediction-queries.html) for more information


* Go to Infrastructure \> Settings \> Connections
* Fill in the “Connection for bundled” field with a DSS connection definition.
* In this UI, you can select an existing connection (defined on the API Deployer node). This will copy the definition to clipboard, which you can then paste into the definition field



Note


You must replace encrypted passwords by a decrypted version. Password encryption is not supported in Kubernetes deployments at the moment. It is not currently possible to hide the passwords in this screen





Configuring the “referenced” connections[¶](#configuring-the-referenced-connections "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------


Please see [Enriching prediction queries](../enrich-prediction-queries.html) for more information


* Go to Infrastructure \> Settings \> Connections
* Enter the name of the connection as it is defined in the API Designer
* Add and fill the definition field with a DSS connection definition.
* In this UI, you can select an existing connection (defined on the API Deployer node). This will copy the definition to clipboard, which you can then paste into the definition field



Note


You must replace encrypted passwords by a decrypted version. Password encryption is not supported in Kubernetes deployments at the moment. It is not currently possible to hide the passwords in this screen