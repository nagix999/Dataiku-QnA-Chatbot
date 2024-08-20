Data Quality[¶](#data-quality "Permalink to this heading")
==========================================================


The Data Quality insight allows you to publish dataset or project level aggregated information about your [Data Quality rules](../../metrics-check-data-quality/data-quality-rules.html).



Publishing a Data Quality insight[¶](#publishing-a-data-quality-insight "Permalink to this heading")
----------------------------------------------------------------------------------------------------


You can publish a Data Quality insight from several locations:



### From the Data Quality current status page[¶](#from-the-data-quality-current-status-page "Permalink to this heading")


From the Dataset *Data Quality* tab, you can click the action buttons, in the *Current dataset status* tile, or in the *Status breakdown* tile.
Each will allow you to publish the corresponding dataset view to a dashboard.


![../../_images/publish-dq.png](../../_images/publish-dq.png)

Note


The breakdown view will provide a per\-rule breakdown for a non\-partitioned dataset, or a per\-partition breakdown for partitioned datasets.
If some rules are computed on the full dataset, ‘Whole dataset’ it is considered as a partition in the breakdown.



Similarly, in the project Data Quality page, the *Current project status* and *Status breakdown* tiles allow you to publish the corresponding project view to a dashboard.




### From the dashboard[¶](#from-the-dashboard "Permalink to this heading")


Click on the \+ button to add tiles. Select *Data quality*, then select the data source for which you want to display the Data quality status.
If you only have dashboard access, you will only see the datasets that have previously been [dashboard\-authorized](../../security/authorized-objects.html).


Choose the view mode (Current status or Status breakdown) and a title.





Tile display[¶](#tile-display "Permalink to this heading")
----------------------------------------------------------


The tile can display either:


* The current status of the dataset / project
* The dataset / project status breakdown


![../../_images/dq-display.png](../../_images/dq-display.png)