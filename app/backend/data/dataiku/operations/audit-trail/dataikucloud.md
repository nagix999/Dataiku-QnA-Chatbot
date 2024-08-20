Audit trail on Dataiku Cloud[¶](#audit-trail-on-dataiku-cloud "Permalink to this heading")
==========================================================================================



* [Access API node queries](#access-api-node-queries)
* [Access instances’ audit logs](#access-instances-audit-logs)



On Dataiku Cloud, audit logs will be automatically served through connections installed on your DSS, so you can leverage them directly in your instance.


The audit trail in the DSS UI is not available on Dataiku Cloud.



[Access API node queries](#id1)[¶](#access-api-node-queries "Permalink to this heading")
----------------------------------------------------------------------------------------


An Amazon S3 connection named “customer\-audit\-log” hosting your API Nodes logs queries is automatically added to your instance when you activate the API nodes. No further action is required.


To import your logs as a dataset in your Dataiku’s instance:


1. Add a Dataset \> Cloud storages \& Social \> Amazon S3
2. Select the corresponding S3 connection and the path in bucket


![../../_images/connection_selection.png](../../_images/connection_selection.png)
4. In the “Format / Preview” tab, select “One record per line” as Type and “utf8” as Charset


![../../_images/format_selection.png](../../_images/format_selection.png)

[Access instances’ audit logs](#id2)[¶](#access-instances-audit-logs "Permalink to this heading")
-------------------------------------------------------------------------------------------------


This feature is only available for customers.


Activate the extension “dku\-audit\-log” in your Launchpad to add an Amazon S3 connection named “dku\-audit\-log” hosting your audit trail accessible from your Dataiku instance.


By default only space\-administrators can access this connection, you can edit this behavior in the Launchpad’s connections tab.


Once the connection is available, to import the logs as a dataset in your Dataiku’s instance:


1. Add a Dataset \> Cloud storages \& Social \> Amazon S3
2. Select the corresponding S3 connection and the path in bucket


![../../_images/select_auditlogs.png](../../_images/select_auditlogs.png)
4. In the “Format / Preview” tab, select “One record per line” as Type and “utf8” as Charset


![../../_images/format_selection.png](../../_images/format_selection.png)
5\. In the “Partitioning” tab, activate the partitioning: add a discreet dimension called “node\_type”,
and add a time dimension corresponding to the period you want to partition on, in the example below we partition per day


![../../_images/partitioning_settings.png](../../_images/partitioning_settings.png)
6. Create the Dataset and access it in the Flow