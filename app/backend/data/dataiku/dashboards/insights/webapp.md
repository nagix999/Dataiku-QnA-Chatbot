Webapp[¶](#webapp "Permalink to this heading")
==============================================


A “webapp” insight displays the content of a [DSS webapp](../../webapps/index.html).


The insight is a read\-only view of the webapp. For a webapp to be displayable in the dashboard, it must have been “run” at least once in the webapp editor.



Publishing a webapp insight[¶](#publishing-a-webapp-insight "Permalink to this heading")
----------------------------------------------------------------------------------------


You can publish a webapp insight from several locations:



### From the webapp[¶](#from-the-webapp "Permalink to this heading")



Note


This method is only possible if you have at least the “Read project content” permission.



From the Webapp’s view, click on Actions \> Publish.


This creates a new insight pointing to the webapp.




### From the dashboard[¶](#from-the-dashboard "Permalink to this heading")


Click on the \+ button to add tiles. Select “Webapp”, then select the webapp that you want to display. If you only have dashboard access, you will only see the datasets that have previously been [dashboard\-authorized](../../security/authorized-objects.html).





Tile and insight display[¶](#tile-and-insight-display "Permalink to this heading")
----------------------------------------------------------------------------------


Both the tile view and the full insight view display the content of the webapp. It is not possible to modify anything in the insight. All editions must be done in the webapp editor.




Accessing dashboard filters[¶](#accessing-dashboard-filters "Permalink to this heading")
----------------------------------------------------------------------------------------


[“Standard” web apps](../../webapps/standard.html) can access the dashboard filters by listening for messages sent from the dashboard. This allows to dynamically adjust the content of the webapp based on the filters applied in the dashboard.


Here is an example of how to access the dashboard filters using JavaScript:



```
window.addEventListener('message', function(event) {
  const data = event.data;
  if (data && data.type === 'filters') {
      console.log(data.filters); // the filters
  }
});

```


This code listens for messages sent to the webapp. When a message of type ‘filters’ is received, it logs the filters and their parameters to the console. You can use this information to update the webapp’s display dynamically.