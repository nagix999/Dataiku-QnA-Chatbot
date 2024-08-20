DSS and R[¶](#dss-and-r "Permalink to this heading")
====================================================


DSS includes deep integration with R. In many parts of DSS, you can write R code:


* In recipes (both regular R, SparkR and Sparklyr)
* In Jupyter notebooks
* For Shiny webapps
* In plugins
* In API node, for [custom prediction models](../apinode/endpoint-r-prediction.html) or [custom functions](../apinode/endpoint-r-function.html) endpoints


Any R package may be used in DSS.


In addition, DSS features a complete R API, which has its own [documentation](../R-api/index.html).


The following highlights how a few specific R packages can be used in DSS. DSS features advanced integration with most of the packages described below.


DSS also has [integration with RStudio](rstudio.html)


On Dataiku Cloud, R can be installed by activating the R integration extension in the Extension tab of the Launchpad. For more details see [see the dedicated documentation](https://knowledge.dataiku.com/latest/cloud-code/reference-r.html).



* [Installing R packages](packages.html)
	+ [Installing in a specific code environment (recommended)](packages.html#installing-in-a-specific-code-environment-recommended)
	+ [Installing in the root DSS environment (not recommended)](packages.html#installing-in-the-root-dss-environment-not-recommended)
		- [Installing without Internet access](packages.html#installing-without-internet-access)
* [Reusing R code](reusing-code.html)
	+ [Sharing R code within a project](reusing-code.html#sharing-r-code-within-a-project)
		- [Working with multiple source folders](reusing-code.html#working-with-multiple-source-folders)
	+ [Importing libraries from other projects](reusing-code.html#importing-libraries-from-other-projects)
	+ [Sharing R code globally](reusing-code.html#sharing-r-code-globally)
		- [Permissions](reusing-code.html#permissions)
	+ [Manual editing of the R code library folder](reusing-code.html#manual-editing-of-the-r-code-library-folder)
	+ [Packaging code as plugins](reusing-code.html#packaging-code-as-plugins)
	+ [Packaging your R code as a package](reusing-code.html#packaging-your-r-code-as-a-package)
* [Using ggplot2](ggplot2.html)
	+ [Installing ggplot2](ggplot2.html#installing-ggplot2)
	+ [Displaying charts in a Jupyter notebook](ggplot2.html#displaying-charts-in-a-jupyter-notebook)
	+ [Displaying charts on a dashboard](ggplot2.html#displaying-charts-on-a-dashboard)
		- [Refreshing charts on a dashboard](ggplot2.html#refreshing-charts-on-a-dashboard)
	+ [Using in Shiny](ggplot2.html#using-in-shiny)
* [Using Dygraphs](dygraphs.html)
	+ [Installing dygraphs](dygraphs.html#installing-dygraphs)
	+ [Displaying charts in a Jupyter notebook](dygraphs.html#displaying-charts-in-a-jupyter-notebook)
		- [Converting a date column to a time\-series](dygraphs.html#converting-a-date-column-to-a-time-series)
	+ [Displaying charts on a dashboard](dygraphs.html#displaying-charts-on-a-dashboard)
		- [Refreshing charts on a dashboard](dygraphs.html#refreshing-charts-on-a-dashboard)
	+ [Using in Shiny](dygraphs.html#using-in-shiny)
* [Using googleVis](googlevis.html)
	+ [Installing googleVis](googlevis.html#installing-googlevis)
	+ [Displaying charts in a Jupyter notebook](googlevis.html#displaying-charts-in-a-jupyter-notebook)
	+ [Displaying charts on a dashboard](googlevis.html#displaying-charts-on-a-dashboard)
		- [Refreshing charts on a dashboard](googlevis.html#refreshing-charts-on-a-dashboard)
* [Using ggvis](ggvis.html)
	+ [Installing ggvis](ggvis.html#installing-ggvis)
		- [Installing the ggvis package](ggvis.html#installing-the-ggvis-package)
		- [Installing the frontend dependencies](ggvis.html#installing-the-frontend-dependencies)
	+ [Displaying charts in a Jupyter notebook](ggvis.html#displaying-charts-in-a-jupyter-notebook)
	+ [Displaying charts on a dashboard](ggvis.html#displaying-charts-on-a-dashboard)
		- [Refreshing charts on a dashboard](ggvis.html#refreshing-charts-on-a-dashboard)
* [Installing STAN or Prophet](prophet.html)
	+ [Common errors](prophet.html#common-errors)
	+ [Installing on RedHat 7 or Centos 7](prophet.html#installing-on-redhat-7-or-centos-7)
* [RStudio integration](rstudio.html)
	+ [RStudio Server in a Code Studio](rstudio.html#rstudio-server-in-a-code-studio)
	+ [RStudio Desktop](rstudio.html#rstudio-desktop)
	+ [RStudio Server (running on a separate server)](rstudio.html#rstudio-server-running-on-a-separate-server)
		- [Embedding the RStudio Server UI in DSS](rstudio.html#embedding-the-rstudio-server-ui-in-dss)
	+ [RStudio Server (running on the DSS server)](rstudio.html#rstudio-server-running-on-the-dss-server)
		- [Installing the R package](rstudio.html#installing-the-r-package)
		- [Setup connectivity](rstudio.html#setup-connectivity)
		- [Create RStudio project](rstudio.html#create-rstudio-project)