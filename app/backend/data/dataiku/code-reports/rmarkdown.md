R Markdown reports[¶](#r-markdown-reports "Permalink to this heading")
======================================================================


R Markdown reports can be used to generate documents based on your project’s data.



Note


We have a tutorial on creating [your first R Markdown report](https://knowledge.dataiku.com/latest/code/r/tutorial-r-markdown.html).




* [Technical Requirements](#technical-requirements)
* [Creating an R Markdown report](#creating-an-r-markdown-report)
* [Writing R Markdown in DSS](#writing-r-markdown-in-dss)


	+ [Including Images](#including-images)
	+ [Using Python blocks](#using-python-blocks)




[Technical Requirements](#id1)[¶](#technical-requirements "Permalink to this heading")
--------------------------------------------------------------------------------------


R Markdown reports can be built in any R code environment that includes the `rmarkdown` package. The builtin R environment has the `rmarkdown` package preinstalled.


Many export formats of R Markdown require the `pandoc` system package to be installed on your Linux server. This package pulls a large number of additional dependencies and is not installed by default. Ask your system administrator to install the `pandoc` system package (pandoc version 1\.12\.3 or higher). You will also need the the `adjustbox`, `collectbox`, `ucs`, `collection-fontsrecommended`, and `titling` LaTeX packages to produce PDF documents.




[Creating an R Markdown report](#id2)[¶](#creating-an-r-markdown-report "Permalink to this heading")
----------------------------------------------------------------------------------------------------


You can create a report from the “RMarkdown reports” tab of the “Notebooks” section of DSS.


![../_images/rmarkdown_tab.png](../_images/rmarkdown_tab.png)


[Writing R Markdown in DSS](#id3)[¶](#writing-r-markdown-in-dss "Permalink to this heading")
--------------------------------------------------------------------------------------------


[R Markdown](http://rmarkdown.rstudio.com/) is an extension of the [markdown](https://en.wikipedia.org/wiki/Markdown) language that enables you to mix formatted text with code written in several languages (in particular R or Python).


When editing your R Markdown report, you can “build” it to generate the output document. This document can be displayed as HTML and published into a dashboard. You can download the output document in various formats including:



> * HTML
> * PDF
> * Microsoft Word (docx)
> * OpenDocument (odt)
> * Markdown (or plain text)



### [Including Images](#id4)[¶](#including-images "Permalink to this heading")


One method is to use markdown image syntax. The sample code below references the image `image_name.png` in the specified path.



```
![](DATADIR/managed_folders/YOUR_PROJ/YOUR_FOLDER/image_name.png)

```


Another method is to use the `knitr` package’s `include_graphics()` function. Below is an example of an R Markdown block that includes an image in a Dataiku DSS folder.


* the value assigned to `folder` is the unique ID of the Dataiku folder; this can be found, for example, in the URL when you have the folder open
* the value assigned to `pathWithinFolder` is simply the path to the file you want to use; in the example, the image is in a subfolder of the main folder
* the `paste()` function concatenates the pieces of the path, and
* the `include_graphics()` function inserts the image in the report



```
```{r}
library(dataiku)
folder = "9672PoPB"
pathWithinFolder = "/testing/0/10.png"
fullPath = paste(dkuManagedFolderPath(folder),pathWithinFolder,sep="")
knitr::include_graphics(fullPath)
```

```




### [Using Python blocks](#id5)[¶](#using-python-blocks "Permalink to this heading")


Be aware that Python blocks in R Markdown reports are not run by the built\-in DSS Python environment. We recommend that you create a [Python code environment](../code-envs/operations-python.html) in DSS and set it as the Python environment used by R Markdown. For example:



```
```{r global_options, include=FALSE}
library(knitr)
library(reticulate)
use_python("[data-dir]/code-envs/python/[code-env-name]/bin/python")
knitr::knit_engines$set(python = reticulate::eng_python)
matplotlib <- import("matplotlib")
matplotlib$use('Agg')
```

```{python, engine.path="[data-dir]/code-envs/python/[code-env-name]/bin/python", echo=FALSE}
import seaborn
import pandas as pd
print(dir(seaborn))
```

```