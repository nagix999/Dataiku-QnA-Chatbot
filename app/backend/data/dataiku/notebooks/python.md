Python notebooks[¶](#python-notebooks "Permalink to this heading")
==================================================================



* [Creating a Python notebook](#creating-a-python-notebook)


	+ [From a dataset](#from-a-dataset)
	+ [From the notebooks list](#from-the-notebooks-list)
* [Using the Python notebook](#using-the-python-notebook)


	+ [Available APIs](#available-apis)
	+ [Spark](#spark)
	+ [Unloading](#unloading)



Python notebooks allow you to write and evaluate interactively Python code. Python notebooks in DSS are based on the Jupyter project.


Python notebooks can either be created directly from the notebooks list, or from a dataset’s Lab modal. Notebooks created using both methods are functionally equivalent.


However, if you create a notebook directly from a dataset’s lab modal:



> * This notebook will remain associated to this dataset, so you can find it easily from the Lab modal later on, or from the dataset’s details view.
> * You can automatically create your notebook from templates that take the dataset name into account, allowing you to start faster.



[Creating a Python notebook](#id2)[¶](#creating-a-python-notebook "Permalink to this heading")
----------------------------------------------------------------------------------------------



### [From a dataset](#id3)[¶](#from-a-dataset "Permalink to this heading")


This is the recommended method if the main goal of your notebook is to analyze and study a dataset.


* From the dataset’s Actions menu, click on “Lab”
* Choose Notebook \> Python
* Choose the template to use. This will populate your notebook with starter code. DSS provides several templates to read data from your dataset in various ways, and you can also create your own templates.




### [From the notebooks list](#id4)[¶](#from-the-notebooks-list "Permalink to this heading")


* From the notebook list, click on new menu, and select Python
* Choose the template to use. This will populate your notebook with starter code. DSS provides several templates for performing various tasks. You can also create your own templates.





[Using the Python notebook](#id5)[¶](#using-the-python-notebook "Permalink to this heading")
--------------------------------------------------------------------------------------------


The Python notebook’s user interface is mostly the Jupyter one so we recommend that you read the Jupyter documentation.



### [Available APIs](#id6)[¶](#available-apis "Permalink to this heading")


All DSS Python APIs are available in the code of a Python notebook. Please see [Python](https://developer.dataiku.com/latest/api-reference/python/index.html "(in Developer Guide)")


Note that in a Python notebook, you do not need an API key to create a public API client. You can create a public API client which will inherit your personal access rights using `dataiku.api_client()`.




### [Spark](#id7)[¶](#spark "Permalink to this heading")


You can use Spark from within a Python notebook. DSS provides templates to start using Pyspark, both when creating a notebook from a dataset or from the notebooks list.




### [Unloading](#id8)[¶](#unloading "Permalink to this heading")


A core concept of the Jupyter notebook is that the actual process running the code that you interactively type remains loaded in memory even if you leave the Jupyter interface. This allows you to start long\-running computations while you are away.


Thus, it is important to understand that until you explicitly unload it, a Jupyter notebook keeps consuming resource (memory, possibly CPU). When you unload a notebook from memory, the process running the code and all its state is destroyed, but the code itself in the notebook is preserved.


DSS provides several ways to unload a notebook:


* From the notebook UI interface, choose File \> Close and Halt
* From the notebooks list in the project, click on the yellow cross to unload the notebook
* From your personal activity drawer, find the item corresponding to the notebook and click on the cross to unload it
* For administrators, go to Administration \> Monitoring \> Background tasks, where you’ll see all notebooks running for all users (together with their identifiers) and choose which ones to unload