Other topics[¶](#other-topics "Permalink to this heading")
==========================================================



* [Managing dependencies](#managing-dependencies)


	+ [Packages](#packages)
	+ [Code environments](#code-environments)
	+ [Shared code](#shared-code)
	+ [Resource files](#resource-files)
* [Categorizing recipes and datasets](#categorizing-recipes-and-datasets)
* [Custom settings UI](#custom-settings-ui)


	+ [Fully custom forms](#fully-custom-forms)
	
	
		- [Including additional files](#including-additional-files)
	+ [Fetching data for custom forms](#fetching-data-for-custom-forms)




[Managing dependencies](#id2)[¶](#managing-dependencies "Permalink to this heading")
------------------------------------------------------------------------------------



### [Packages](#id3)[¶](#packages "Permalink to this heading")


Python and R dependencies (packages) are not managed by DSS: the user must ensure that the DSS Python or R environment has the necessary packages.


DSS can however inform the user about dependencies: to do so, add a `requirements.json` file at the root of the plugin (besides the `plugin.json` file). This file is simply a declaration of the required packages, which is presented to the administrator as soon as he installs the plugin.


A requirements.json file looks like this:



```
{
    "python" : [
        {"name":"pandas", "version":">=0.16.2"},
        {"name":"sqlalchemy", "version":">=0.1"}
    ],
    "R" : [
        {"name":"dplyr", "version":"1.0.0"}
    ]
}

```




### [Code environments](#id4)[¶](#code-environments "Permalink to this heading")


A plugin can contain the definition of a code environment to hold the list of packages it requires for its execution. There is only one such definition in a plugin, either Python or R. For a Python code environment, one should setup the following hierarchy in the plugin (use “Add components” on the Definition tab of your development plugin):



```
plugin root
+---code-env
    +---python
        |   desc.json
        +---spec
            |   environment.spec  (optional, Conda spec)
            |   requirements.txt
            |   resources_init.py  (optional, code environment resources)

```


* The `environment.spec` and `requirements.txt` contain the list of desired packages.
* The resources initialization script `resources_init.py` contains the python code to initialize the code environment resources directory. See [Managed code environment resources directory](../../code-envs/operations-python.html#code-env-resources-directory) for more information.
* The `desc.json` file contains the environment characteristics:



```
{
    "acceptedPythonInterpreters": ["PYTHON27"],
    "installCorePackages": false,
    "installJupyterSupport": false,
    "basePackagesInstallMethod": "PRE_BUILT",
    "conda": false
}

```




### [Shared code](#id5)[¶](#shared-code "Permalink to this heading")


requirements.json work for “standard” packages that are available in repositories. However, you also often want to share some code between multiple datasets and recipes of the same plugin.


For these files, you can create a `python-lib/` folder at the root of the plugin. This folder is automatically added to the PYTHONPATH of all custom recipes and datasets of this plugin. For an example of that, you can have a look at the code of our [Pipedrive connector](https://github.com/dataiku/dataiku-contrib/tree/master/pipedrive-import) .


Code from this folder can also be imported from regular python recipes or notebooks using the following functions. This makes it possible to package python module inside plugins.




dataiku.use\_plugin\_libs(*plugin\_id*)[¶](#dataiku.use_plugin_libs "Permalink to this definition")
Add the lib/ folder of the plugin to PYTHONPATH





dataiku.import\_from\_plugin(*plugin\_id*, *package\_name*)[¶](#dataiku.import_from_plugin "Permalink to this definition")
Import a package from the lib/ folder of the plugin and returns the module





### [Resource files](#id6)[¶](#resource-files "Permalink to this heading")


You may also create a `resource` folder at the root of your plugin (besides the plugin.json file) to hold resource files of your plugin (for example, data files).


This resource folder is meant to be read\-only. To get the path of the resource folder:


* Python datasets call the [`dataiku.connector.Connector.get_connector_resource()`](https://developer.dataiku.com/latest/api-reference/python/plugin-components/custom_datasets.html#dataiku.connector.Connector.get_connector_resource "(in Developer Guide)") method on `self`
* Python recipes call the `dataiku.customrecipe.get_recipe_resource()` function
* R recipes call the `dataiku.dkuCustomRecipeResource()` function





[Categorizing recipes and datasets](#id7)[¶](#categorizing-recipes-and-datasets "Permalink to this heading")
------------------------------------------------------------------------------------------------------------


You can group your custom recipes and datasets in categories, so that they appear in folders in the recipe and dataset menus.


Add this category in the meta field of your `plugin.json` file:



```
"meta": {
    "label": "Geocoder - internal API",
    "author": "admin",
    "icon": "icon-globe",
    "licenseInfo": "Apache Software License",
    "category": "Geospatial"
}

```




[Custom settings UI](#id8)[¶](#custom-settings-ui "Permalink to this heading")
------------------------------------------------------------------------------


By default, DSS will present a form with a field for each parameter defined in the .json of the custom recipe/dataset, but it is possible to have a more elaborate and interactive interface.



### [Fully custom forms](#id9)[¶](#fully-custom-forms "Permalink to this heading")


The more advanced option is to have a completely custom form by providing 2 parameters in the custom recipe/dataset JSON descriptor :


* in paramsTemplate : a .html file in the resource/ folder at the plugin root
* in paramsModule : an optional Angular module, defined in a .js file in the js/ folder at the plugin root (the name of the file doesn’t matter)


The html is loaded with Angular, and the parameter values should be set in the object config.


For example, the form from the previous section could be done in a fully custom way with



```
<div ng-controller="MyCustomFormController" style="margin: 10px 0px;">
    <input name="useToken" type="checkbox" ng-model="config.useToken">Use token</input>
    <label for="login" ng-if="!config.useToken">
        <div style="width: 80px; display: inline-block;">Login</div>
        <input name="login" type="text" ng-model="config.login" style="width: 80px;" />
    </label>
    <label for="password" ng-if="!config.useToken">
        <div style="width: 80px; display: inline-block;">Password</div>
        <input name="password" type="password" ng-model="config.password" style="width: 80px;"/>
    </label>
    <label for="token" ng-if="config.useToken">
        <div style="width: 80px; display: inline-block;">Token</div>
        <input name="token" type="text" ng-model="config.token" style="width: 80px;"/>
    </label>
    <label for="fetchSize" >
        <div style="width: 80px; display: inline-block;">Fetch size</div>
        <input name="fetchSize" type="number" ng-model="config.fetchSize" style="width: 80px;"/>
    </label>
    <div>
        <span>{{checkResult.hasAuthentication == null ? 'Not checked' : (checkResult.hasAuthentication ? 'Form complete' : 'Fill credentials')}}</span>
        <button ng-click="check()" class="btn btn-default">Recheck</button>
    </div>
</div>

```


and



```
var app = angular.module('myplugin.module', []);

app.controller('MyCustomFormController', function($scope) {
    $scope.checkResult = {};
    $scope.check = function() {
        var hasAuthentication = function(config) {
            return config.useToken ? config.token : (config.login && config.password);
        };
        $scope.checkResult = {
            hasAuthentication : hasAuthentication($scope.config)
        };
    };
    $scope.check();
});

```


where the setup in the custom dataset JSON is



```
"paramsTemplate" : "form.html",
"paramsModule" : "myplugin.module",

```


and these parameters can be retrieved in the Python file as usual:



```
recipe_config = get_recipe_config()
use_token = recipe_config.get('useToken', False)
login = recipe_config.get('login', None)
password = recipe_config.get('password', None)
token = recipe_config.get('token', None)
fetch_size = recipe_config.get('fetchSize', 0)

```


This produces a form like :


![../../_images/custom_form.png](../../_images/custom_form.png)

Warning


When using this method, your custom code is loaded in the same frontend namespace as the rest of the DSS UI.



> * Erroneous code may lead to making the DSS UI unusable, which may require administrator intervention.
> * Compatibility between DSS versions is not guaranteed as Dataiku regularly updates its libraries.
> * Importing in your custom code your own versions of some core libraries (AngularJS, jQuery, bootstrap, …) may
> lead to making the DSS UI unusable, which may require administrator intervention.




#### [Including additional files](#id10)[¶](#including-additional-files "Permalink to this heading")


Additional files from the plugin’s resource folder can be accessed by referencing them with `/plugins/__plugin_name__/resource/__file_to_get__`.


This is useful to load CSS stylesheets, images, or html files to use as Angular templates. Typically, one can add a `<link />` element to load some CSS rules, like :



```
<link href="/plugins/my_plugin/resource/my_form.css" rel="stylesheet" type="text/css">

```





### [Fetching data for custom forms](#id11)[¶](#fetching-data-for-custom-forms "Permalink to this heading")


A fully custom form will often need to fetch data to be presented. A simple example would be a way to select one of the values of a given column in the input dataset of a recipe. For this example, code able to read the dataset and compute the list of distinct values is needed.


A custom form can call a `do()` method defined in a python file that will get executed on the backend’s machine, and will thus have access to the project’s data. This `do()` method is called from the javascript running in the browser by using the `callPythonDo()` method on the Angular scope of the form. The Python file containing the code for the `do()` method needs to be in the plugin’s resource folder, and referenced from the .json in a paramsPythonSetup field.


For example, a form asking to choose a column and a value from this column could be done with:



```
<div ng-controller="FoobarController">
    <div class="control-group" >
        <label class="control-label">Column</label>
        <div class="controls" > <!-- basic text field with typeahead for the column selection, as you would get for a COLUMN parameter in a generated form -->
            <input type="text" ng-model="config.filterColumn" ng-required="true" bs-typeahead="columnsPerInputRole['input_role']"/>
            <span class="help-inline">Column to filter on</span>
        </div>
    </div>
    <div class="control-group" >
        <label class="control-label">Value</label>
        <div class="controls" >
            <select dku-bs-select="{liveSearch:true}" ng-model="config.filterValue" ng-options="v for v in choices" />
            <span class="help-inline">Value to keep</span>
        </div>
    </div>
</div>

```



```
var app = angular.module('foobar', []);

app.controller('FoobarController', function($scope) {
    var updateChoices = function() {
        // the parameter to callPythonDo() is passed to the do() method as the payload
        // the return value of the do() method comes back as the data parameter of the fist function()
        $scope.callPythonDo({}).then(function(data) {
            // success
            $scope.choices = data.choices;
        }, function(data) {
            // failure
            $scope.choices = [];
        });
    };
    updateChoices();
    $scope.$watch('config.filterColumn', updateChoices);
});

```


and a Python callback



```
from dataiku import Dataset
from sets import Set

# payload is sent from the javascript's callPythonDo()
# config and plugin_config are the recipe/dataset and plugin configured values
# inputs is the list of input roles (in case of a recipe)
def do(payload, config, plugin_config, inputs):
    role_name = 'input_role'
    # get dataset name then dataset handle
    dataset_full_names = [i['fullName'] for i in inputs if i['role'] == role_name]
    if len(dataset_full_names) == 0:
        return {'choices' : []}
    dataset = Dataset(dataset_full_names[0])
    # get name of column providing the choices
    column_name = config.get('filterColumn', '')
    if len(column_name) == 0:
        return {'choices' : []}
    # check that the column is in the schema
    schema = dataset.read_schema()
    schema_columns = [col for col in schema if col['name'] == column_name]
    if len(schema_columns) != 1:
        return {'choices' : []}
    schema_column = schema_columns[0]
    # get the data and build the set of values
    choices = Set()
    for row in dataset.iter_tuples(sampling='head', limit=10000, columns=[column_name]):
        choices.add(row[0])
    return {'choices' : list(choices)}

```