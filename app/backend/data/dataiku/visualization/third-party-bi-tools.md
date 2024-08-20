Third\-party BI tools[¶](#third-party-bi-tools "Permalink to this heading")
===========================================================================


In addition to its native charting capabilities, Dataiku supports integrations with several third\-party BI tools



* [Tableau](#tableau)
* [Microsoft PowerBI](#microsoft-powerbi)
* [Qlik](#qlik)
* [Microstrategy](#microstrategy)




[Tableau](#id1)[¶](#tableau "Permalink to this heading")
--------------------------------------------------------


Tableau and Dataiku are complementary solution. In a typical usage scenario:


* Users build workflows in DSS to create complex data transformation pipelines and build machine learning models
* Users can then push the output of these workflows directly to Tableau to be consumed by end users, using its interactive visualization and dashboarding features.


Dataiku can export datasets to a Tableau Server. This makes them directly available for charting in Tableau.


In addition, Dataiku can directly produce a .hyper file for load in Tableau Desktop.


Dataiku can also read .hyper files as datasets.


This capability is provided by the [Tableau Hyper Export plugin](https://www.dataiku.com/product/plugins/tableau-hyper-export/). This plugin is not supported




[Microsoft PowerBI](#id2)[¶](#microsoft-powerbi "Permalink to this heading")
----------------------------------------------------------------------------


Microsoft Power BI and Dataiku DSS are 2 complementary solutions. In a typical usage scenario:


* Users build workflows in DSS to create complex data transformation pipelines and build machine learning models, possibly relying on other Microsoft technologies (such as Azure Blob Storage, Azure Data Lake Store, Azure HDInsight or SQL Server)
* Users can then push the output of these workflows directly to Power BI to be consumed by end users, using its interactive visualization and dashboarding features.


Dataiku can export datasets to PowerBI. This makes them directly available for charting in PowerBI.


This capability is provided by the [PowerBI plugin](https://www.dataiku.com/product/plugins/microsoft-power-bi-v2). This plugin is not supported.




[Qlik](#id3)[¶](#qlik "Permalink to this heading")
--------------------------------------------------


Dataiku can export datasets to Qlik QVX files that can be downloaded by users.


This capability is provided by the [Qlik QVX plugin](https://www.dataiku.com/product/plugins/qlik-qvx). This plugin is not supported.




[Microstrategy](#id4)[¶](#microstrategy "Permalink to this heading")
--------------------------------------------------------------------


Dataiku can export datasets to a MicroStrategy cube.


This capability is provided by the [Microstrategy plugin](https://www.dataiku.com/product/plugins/microstrategy). This plugin is not supported.