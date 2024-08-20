DSS and Python[¶](#dss-and-python "Permalink to this heading")
==============================================================


DSS includes deep integration with Python. In many parts of DSS, you can write Python code:


* In recipes
* In Jupyter notebooks
* In standard webapp backends
* In scenarios, metrics and checks
* In plugins
* For custom models in visual ML
* In API node, for [custom prediction models](../apinode/endpoint-python-prediction.html) or [custom functions](../apinode/endpoint-python-function.html) endpoints


Any Python package may be used in DSS.


In addition, DSS features a complete Python API, which has its own [complete documentation](https://developer.dataiku.com/latest/api-reference/python/index.html "(in Developer Guide)").


The following highlights how a few specific Python packages can be used in DSS. DSS features advanced integration with most of the packages described below.



* [Installing Python packages](packages.html)
	+ [Additional prerequisites](packages.html#additional-prerequisites)
	+ [Installing in a specific code environment (recommended)](packages.html#installing-in-a-specific-code-environment-recommended)
	+ [Making custom Python packages available](packages.html#making-custom-python-packages-available)
* [Reusing Python code](reusing-code.html)
	+ [Sharing Python code within a project](reusing-code.html#sharing-python-code-within-a-project)
		- [Working with multiple source folders](reusing-code.html#working-with-multiple-source-folders)
	+ [Importing libraries from other projects](reusing-code.html#importing-libraries-from-other-projects)
	+ [Sharing Python code globally](reusing-code.html#sharing-python-code-globally)
		- [Permissions](reusing-code.html#permissions)
	+ [Manual editing of code library folders](reusing-code.html#manual-editing-of-code-library-folders)
	+ [Packaging code as plugins](reusing-code.html#packaging-code-as-plugins)
* [Using Matplotlib](matplotlib.html)
	+ [Installing Matplotlib](matplotlib.html#installing-matplotlib)
	+ [Displaying charts in a Jupyter notebook](matplotlib.html#displaying-charts-in-a-jupyter-notebook)
	+ [Displaying Matplotlib charts on a dashboard](matplotlib.html#displaying-matplotlib-charts-on-a-dashboard)
		- [Refreshing charts on a dashboard](matplotlib.html#refreshing-charts-on-a-dashboard)
	+ [Using matplotlib in a recipe](matplotlib.html#using-matplotlib-in-a-recipe)
* [Using SpaCy](spacy.html)
	+ [Installing SpaCy](spacy.html#installing-spacy)
	+ [Using SpaCy models](spacy.html#using-spacy-models)
* [Using Bokeh](bokeh.html)
	+ [Installing Bokeh](bokeh.html#installing-bokeh)
	+ [Creating a Bokeh interactive web application](bokeh.html#creating-a-bokeh-interactive-web-application)
	+ [Displaying charts in a Jupyter notebook](bokeh.html#displaying-charts-in-a-jupyter-notebook)
		- [Using interactive controls in the Jupyter notebook](bokeh.html#using-interactive-controls-in-the-jupyter-notebook)
	+ [Displaying Bokeh charts on a dashboard](bokeh.html#displaying-bokeh-charts-on-a-dashboard)
		- [Refreshing charts on a dashboard](bokeh.html#refreshing-charts-on-a-dashboard)
	+ [Displaying images in Bokeh](bokeh.html#displaying-images-in-bokeh)
		- [In a Jupyter notebook](bokeh.html#in-a-jupyter-notebook)
		- [In a webapp](bokeh.html#in-a-webapp)
* [Using Plot.ly](plotly.html)
	+ [Installing plot.ly](plotly.html#installing-plot-ly)
	+ [Displaying charts in a Jupyter notebook](plotly.html#displaying-charts-in-a-jupyter-notebook)
	+ [Displaying charts on a dashboard](plotly.html#displaying-charts-on-a-dashboard)
		- [Refreshing charts on a dashboard](plotly.html#refreshing-charts-on-a-dashboard)
* [Using Ggplot](ggplot.html)
* [Using Jupyter Widgets](ipywidgets.html)
	+ [Setup](ipywidgets.html#setup)
	+ [Using widgets](ipywidgets.html#using-widgets)