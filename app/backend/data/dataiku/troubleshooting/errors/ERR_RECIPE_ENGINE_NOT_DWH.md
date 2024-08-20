ERR\_RECIPE\_ENGINE\_NOT\_DWH: Error in recipe engine: SQLServer is not Data Warehouse edition[¶](#err-recipe-engine-not-dwh-error-in-recipe-engine-sqlserver-is-not-data-warehouse-edition "Permalink to this heading")
========================================================================================================================================================================================================================


DSS attempted to use an Azure Data Warehouse engine on a standard SQLServer database.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


* If the Azure database is indeed a Data Warehouse edition, go to its connection settings in the administration section, and check the “Azure Data Warehouse” box.
* If the Azure database is not a Datawarehouse edition, choose the DSS Recipe engine instead of Azure to SQLServer