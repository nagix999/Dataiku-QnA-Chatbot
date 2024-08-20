Publishing webapps on the dashboard[¶](#publishing-webapps-on-the-dashboard "Permalink to this heading")
========================================================================================================


Once you have created your webapp, you can publish it on the DSS dashboard, by clicking on “Actions \> Publish”.


This creates an insight of type “webapp” and adds it to the selected dashboard(s).


The dashboard always shows the latest version of the webapp (if you save the webapp, the dashboard will be updated immediately).



Accessing dashboard filters[¶](#accessing-dashboard-filters "Permalink to this heading")
----------------------------------------------------------------------------------------


[“Standard” web apps](standard.html) can access the dashboard filters by listening for messages sent from the dashboard. This allows to dynamically adjust the content of the webapp based on the filters applied in the dashboard.


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