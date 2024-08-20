SAP HANA[¶](#sap-hana "Permalink to this heading")
==================================================



Warning


**Tier 2 support**: Connection to SAP HANA is covered by [Tier 2 support](../../troubleshooting/support-tiers.html)



DSS supports the full range of features for SAP HANA:


* Reading and writing datasets
* Executing SQL recipes
* Performing visual recipes in\-database
* Using live engine for charts


DSS has been tested on HANA SPS 11\.



Caveats[¶](#caveats "Permalink to this heading")
------------------------------------------------


* In charts (live mode), filtering by date in “free range” mode is not supported
* In charts (live mode), aggregating with a date in “quarter”, “month”, “week”, “day” or “hour” is not supported.
* SQL Pipelines are not guaranteed to work