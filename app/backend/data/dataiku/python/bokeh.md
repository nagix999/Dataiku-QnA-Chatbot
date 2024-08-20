Using Bokeh[¶](#using-bokeh "Permalink to this heading")
========================================================


Bokeh is a Python interactive visualization library that provides interactive plots and dashboards. There are several ways you can use Bokeh in DSS:


* For fully\-interactive interaction (multiple charts, various controls, …), by creating a [Bokeh webapp](../webapps/index.html)
* To display interactive (pan/zoom/…) charts within a Jupyter notebook
* To display interactive (pan/zoom/…) charts on a Dashboard


Documentation for Bokeh is available at <https://bokeh.pydata.org>



Installing Bokeh[¶](#installing-bokeh "Permalink to this heading")
------------------------------------------------------------------


You need to install the Bokeh package in a [code environment](../code-envs/index.html).




Creating a Bokeh interactive web application[¶](#creating-a-bokeh-interactive-web-application "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------


See [Webapps](../webapps/index.html)




Displaying charts in a Jupyter notebook[¶](#displaying-charts-in-a-jupyter-notebook "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------


To display plot.ly charts in a Jupyter notebook, use this cell once in the notebook:



```
from bokeh.io import output_notebook, show
output_notebook()

```


You can then use `show()` to show Bokeh figures


For example, to display a chart showing simple circles:



```
from bokeh.plotting import figure

f = figure()
f.circle([1,2,3], [4,5,6], size=10)

show(f)

```


A complete documentation for the usage of Bokeh in a Jupyter notebook can be found at <https://bokeh.pydata.org/en/latest/docs/user_guide/notebook.html>



### Using interactive controls in the Jupyter notebook[¶](#using-interactive-controls-in-the-jupyter-notebook "Permalink to this heading")


You can use interactive controls (sliders, inputs, …) that are displayed in the notebook. When you change these controls, the Bokeh chart can react dynamically.


Documentation for this is available here: [https://bokeh.pydata.org/en/latest/docs/user\_guide/notebook.html\#jupyter\-interactors](https://bokeh.pydata.org/en/latest/docs/user_guide/notebook.html#jupyter-interactors)





Displaying Bokeh charts on a dashboard[¶](#displaying-bokeh-charts-on-a-dashboard "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------


Bokeh charts generated using Python code can be shared on a DSS dashboard using the “static insights” system. This does not include the capability to include controls. If you want to use Bokeh controls on a DSS Dashboard, use a Bokeh webapp.


Each Bokeh figure can become a single insight in the dashboard. Each chart will retain full zoom/pan/select/export capabilities;


To do so, create [static insights](https://developer.dataiku.com/latest/api-reference/python/static-insights.html "(in Developer Guide)")



```
from dataiku import insights

# f is a Bokeh figure, or any object that can be passed to show()

insights.save_bokeh("my-bokeh-plot", f)

```


From the Dashboard, you can then add a new “Static” insight, select the `my-bokeh-plot` insight



### Refreshing charts on a dashboard[¶](#refreshing-charts-on-a-dashboard "Permalink to this heading")


You can refresh the charts automatically on a dashboard by using a scenario to re\-run the above piece of code.


This call to `dataiku.insights` code can be:


* In a DSS recipe (use a regular “Build” scenario step)
* In a Jupyter notebook (use a “Export notebook” scenario step)
* As a custom Python scenario step





Displaying images in Bokeh[¶](#displaying-images-in-bokeh "Permalink to this heading")
--------------------------------------------------------------------------------------


To plot images in Bokeh, the image path specified must be relative to your “current location”.


You can plot images in a Jupyter notebook or display them in a webapp.


Images can be stored in `DATADIR/local/static`. An administrator can upload images to the DSS UI by going to Global Shared Code \> Static Web Resources \> \+Add.



### In a Jupyter notebook[¶](#in-a-jupyter-notebook "Permalink to this heading")


Here’s an example of displaying an image in a Jupyter notebook:



```
import dataiku
from bokeh.plotting import figure, show
from bokeh.io import output_notebook

path = '/local/static/cat-image.jpg'
f = figure(x_range=(0,1), y_range=(0,1), width=1000, height=500)
f.image_url(url=[path], x=0, y=0, w=1, h=1, anchor='bottom_left')
output_notebook()
show(f)

```




### In a webapp[¶](#in-a-webapp "Permalink to this heading")


From a webapp, you’ll need to refer to the relative path to your image.


To refer to the image saved in `DATADIR/local/static` from a Bokeh webapp, you can use the relative path from the webapp directory:



```
import os
from bokeh.plotting import figure
from bokeh.layouts import row, widgetbox
from bokeh.io import curdoc

# get the full path to the image, and convert it to a relative path for the webapp
full_path = os.path.join(os.environ["DIP_HOME"], 'local/static/cat-image.jpg')
relative_path = os.path.relpath(full_path)

plot = figure(x_range=(0,1), y_range=(0,1), width=1000, height=500)
plot.image_url(url=[relative_path], x=0, y=0, w=1, h=1, anchor='bottom_left')
curdoc().add_root(row(plot, width=800))

```


For webapps, the image should be small enough to ensure a reasonable load time.