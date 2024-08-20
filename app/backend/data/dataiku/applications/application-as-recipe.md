Application\-as\-recipe[¶](#application-as-recipe "Permalink to this heading")
==============================================================================



Introduction[¶](#introduction "Permalink to this heading")
----------------------------------------------------------


You can design and package a Dataiku flow into a reusable recipe for other projects.




Using an Application\-as\-recipe[¶](#using-an-application-as-recipe "Permalink to this heading")
------------------------------------------------------------------------------------------------


To create a recipe from an existing **Application\-as\-recipe**, click on the **New recipe** button from the **Flow**.
**Application\-as\-recipes** are grouped by category in this menu.


**Application\-as\-recipes** can only be run by users that:


1. are allowed to instantiate the corresponding **Application\-as\-recipe** (see [Using a Dataiku application](index.html))
2. have the [Write project content](../security/permissions.html) permission on the project using the **Application\-as\-recipe**




Developing an Application\-as\-recipe[¶](#developing-an-application-as-recipe "Permalink to this heading")
----------------------------------------------------------------------------------------------------------


Only users that are [administrator of the project](../security/permissions.html) can contribute to the development of
an **Application\-as\-recipe**. But only users with the **Develop plugins** permission are allowed to configure project
variables through the recipe settings with custom code.


To convert a project into an **Application\-as\-recipe**, click on **Application designer** from the project menu. A project can
be converted either into a **Dataiku application** or into an **Application\-as\-recipe**. Once the project is converted, the
project menu will open the **Application designer** directly.



### Application header[¶](#application-header "Permalink to this heading")


The **Application header** panel allows to configure:


* the recipe name and description;
* which user can instantiate the application.




### Included content[¶](#included-content "Permalink to this heading")


The **Included content** panel allows to configure the additional data — from the original project containing the
application — to include into the application instances.




### Recipe definition[¶](#recipe-definition "Permalink to this heading")



#### Icon[¶](#icon "Permalink to this heading")


The **icon** defines the icon for the **Application\-as\-recipe**. Available icons can be found
in [Font Awesome v3\.2\.1](https://fontawesome.com/v3.2.1/icons/).




#### Category[¶](#category "Permalink to this heading")


**Application\-as\-recipes** with the same **category** are grouped under the same section in the **New recipe** menu.




#### Inputs/Outputs[¶](#inputs-outputs "Permalink to this heading")


This panel allows to define the inputs and outputs of the recipe that is to say a mapping between elements of the
project using the **Application\-as\-recipe** and the corresponding elements in the **Application\-as\-recipe** flow. Each
element is made of:


* a **label**: this label is displayed in the recipe editor to identify the element
* a **type**: an element can be a **Dataset**, a **Managed folder** or a **Saved model**
* the corresponding element in the **Application\-as\-recipe** flow




#### Scenario[¶](#scenario "Permalink to this heading")


It is mandatory to specify the **Scenario** to build the outputs of the recipe. This scenario will be executed when
running the **Application\-as\-recipe**.




#### Settings[¶](#settings "Permalink to this heading")


This panel allows to configure the form displayed in the recipe settings. See the section
**Edit project variables \> Runtime form** from the [Dataiku application tiles](tiles.html) for more details.






Sharing an Application\-as\-recipe[¶](#sharing-an-application-as-recipe "Permalink to this heading")
----------------------------------------------------------------------------------------------------


You can share an **Application\-as\-recipe** either by [copying this project](../concepts/projects/duplicate.html) or by creating a
plugin component from your application. To create a plugin component from your application, click on the
**Create or update plugin application** action from the **Actions** menu in the **Application designer**.



### Plugin component[¶](#plugin-component "Permalink to this heading")


From the component descriptor you can configure :


* the recipe name with the **meta.label** field
* the recipe description with the **meta.description** field
* the recipe category with the **meta.category** field
* the recipe icon with the **meta.icon** field. Available icons can be found in [Font Awesome v3\.2\.1](https://fontawesome.com/v3.2.1/icons/).





Code recipes in Application\-as\-recipe[¶](#code-recipes-in-application-as-recipe "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------


When DSS runs the **Application\-as\-recipe**, it makes a copy of the project where it is defined and swaps the datasets/managed folders/saved models that where defined as inputs in the **Application designer** for the ones selected by the user in the instance of the **Application\-as\-recipe**, inside the copy project. For visual recipes like Prepare or Join, this is transparent, and DSS will automatically adjust to the changes in the copy project. But code recipes like Python or SQL are run as is, without any change to their code.


In the case of Python recipes to run, it is advised to have them refer to their input by index in the Input/Output tab (see [Python recipes](../code_recipes/python.html)):



```
from dataiku import recipe
inputA = recipe.get_input(0, object_type="DATASET")
# even simpler for a recipe with a single dataset as input:
inputA = recipe.get_input()

```


Another option is to adjust the code of these recipes using a “Execute python code” step in the scenario of the **Application\-as\-recipe** using the public API.



```
client = dataiku.api_client()
current_project = client.get_project(dataiku.default_project_key())
current_recipe = current_project.get_recipe("the_recipe_name")
recipe_settings = current_recipe.get_settings()
# get dataset currently used as input
first_input_dataset_name = recipe_settings.get_recipe_inputs()['main']['items'][0]['ref']
# adjust code
code = recipe_settings.get_code()
# ... modify code
recipe_settings.set_code(...modified code)
recipe_settings.save()

```




Limitations[¶](#limitations "Permalink to this heading")
--------------------------------------------------------


* Partitioned inputs and outputs are not supported.
* Outputs must be writable by DSS (e.g. should not be a BigQuery or Redshift dataset)