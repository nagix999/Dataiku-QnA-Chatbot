Visual Grammar[¶](#visual-grammar "Permalink to this heading")
==============================================================



* [Datasets](#datasets)
* [Visual Recipes](#visual-recipes)
* [Machine Learning](#machine-learning)
* [Code Recipes](#code-recipes)
* [Plugin Recipes](#plugin-recipes)



Here’s an example of a complete project Flow in DSS:


![../_images/Pipeline_DSS_1.png](../_images/Pipeline_DSS_1.png)

[Datasets](#id1)[¶](#datasets "Permalink to this heading")
----------------------------------------------------------


**Datasets** in DSS appear as **blue squares**. The icon in the center of each square represents the type of dataset. For example, an upward pointing arrow indicates that the dataset was uploaded; two cubes represent Amazon S3; and an elephant represents HDFS.


![../_images/dataset_icons.png](../_images/dataset_icons.png)

[Visual Recipes](#id2)[¶](#visual-recipes "Permalink to this heading")
----------------------------------------------------------------------


**Visual recipes** in DSS appear as **yellow circles**. The icon inside of the visual recipe indicates the type of recipe. For example, the broom icon represents a Prepare recipe; a funnel represents a Filter recipe; and a pile of squares represents a Stack recipe.


![../_images/visual_recipes.png](../_images/visual_recipes.png)
See [Data preparation](../preparation/index.html) for an explanation of visual recipes and the transformations that they can accomplish.




[Machine Learning](#id3)[¶](#machine-learning "Permalink to this heading")
--------------------------------------------------------------------------


Processes related to **machine learning** are shown in **green**. Here, a barbell represents a model training event; a scatter plot represents model scoring; and the trophy shows an application of the model to a new dataset.


![../_images/ml_processes.png](../_images/ml_processes.png)
See [Machine learning](../machine-learning/index.html) for more information about the machine learning capabilities of DSS.




[Code Recipes](#id4)[¶](#code-recipes "Permalink to this heading")
------------------------------------------------------------------


DSS allows users to execute pieces of user\-defined code inside the Flow. These user\-defined scripts (in languages such as Python, R, SQL, Hive, …) are called code recipes.


**Code recipes** are represented by **orange circles**. The icon inside the circle indicates the programming language of the recipe. For example, the “two snakes” logo represents a Python recipe, and the honeycomb icon represents a Hive recipe.


![../_images/code_recipes.png](../_images/code_recipes.png)
See [Recipes based on code](../code_recipes/index.html) for more information on capturing user\-defined code in R, Python, SQL, Hive recipes.




[Plugin Recipes](#id5)[¶](#plugin-recipes "Permalink to this heading")
----------------------------------------------------------------------


The visual capabilities of DSS can be extended through the Plugins system. Code recipes can be made into reusable components with a visual interface by creating plugin recipes. **Plugin recipes** are represented by **red circles**.


![../_images/plugin_recipes.png](../_images/plugin_recipes.png)
See [Plugins](../plugins/index.html) for more information on extending the features of DSS with plugins.