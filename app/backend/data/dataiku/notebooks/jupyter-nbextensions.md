Installing Jupyter Extensions[¶](#installing-jupyter-extensions "Permalink to this heading")
============================================================================================


You can install any extensions from [Jupyter contrib extensions](https://jupyter-contrib-nbextensions.readthedocs.io/en/stable/nbextensions.html) that do not require a server extension.
You do not need to stop DSS to perform these actions.


When an extension is enabled, it is for all users on the platform, you cannot enable an extension for specific users.



Important


Some extensions need a specific package installed in the code env of the notebook to be able to run.
Always refer to the documentation of the extension.




List available extensions[¶](#list-available-extensions "Permalink to this heading")
------------------------------------------------------------------------------------


To list all available extensions, open a terminal and type



```
DATA_DIR/bin/dssadmin jupyter-nbextensions available

```



Warning


Even though they are listed, extensions requiring a server extension are not supported.





List enabled extensions[¶](#list-enabled-extensions "Permalink to this heading")
--------------------------------------------------------------------------------


To list all extensions enabled, open a terminal and type



```
DATA_DIR/bin/dssadmin jupyter-nbextensions list

```




Enable an extension[¶](#enable-an-extension "Permalink to this heading")
------------------------------------------------------------------------


To enable an extension, open a terminal and type



```
DATA_DIR/bin/dssadmin jupyter-nbextensions enable EXTENSION_NAME

```


For example if you want to enable the extension [Codefolding](https://jupyter-contrib-nbextensions.readthedocs.io/en/stable/nbextensions/codefolding/readme.html) :



```
DATA_DIR/bin/dssadmin jupyter-nbextensions enable codefolding/main

```




Disable an extension[¶](#disable-an-extension "Permalink to this heading")
--------------------------------------------------------------------------


To disable an extension, open a terminal and type



```
DATA_DIR/bin/dssadmin jupyter-nbextensions disable EXTENSION_NAME

```


For example if you want to disable the extension [Collapsible Headings](https://jupyter-contrib-nbextensions.readthedocs.io/en/stable/nbextensions/collapsible_headings/readme.html) :



```
DATA_DIR/bin/dssadmin jupyter-nbextensions disable collapsible_headings/main

```




Customize an extension[¶](#customize-an-extension "Permalink to this heading")
------------------------------------------------------------------------------


Refer to the documentation of the extension to know the options and types supported.
You can also find them in the `Parameters` section of the extension’s yaml file.


You need to edit the file on `DSS_HOME/jupyter-run/jupyter/config/nbconfig/notebook.json` and have an entry for the extension


Example using the extension Table of Contents (2\):



```
{
    "load_extensions": {
        "toc2/main": true,
    },
    "toc2": {
        "skip_h1_title": true,
        "toc_cell": true
    }
}

```