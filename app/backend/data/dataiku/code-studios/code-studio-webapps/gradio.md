Gradio[¶](#gradio "Permalink to this heading")
==============================================


Gradio is a Python package to build webapps for machine learning models, APIs, or Python functions.


Documentation for Gradio is available at <https://www.gradio.app>



Create a Code Studio template[¶](#create-a-code-studio-template "Permalink to this heading")
--------------------------------------------------------------------------------------------


* In “Administration \> Code Studios”, click **Create Code Studio template** and create a new template named `gradio-template`
* In the “Definition” tab, click on **Add a block** and select `Gradio`
* In the “Definition” tab, click on **Add a block** and select `Visual Studio Code`
* Click **Build**


Then in the **Permissions** tab, you can manage which user groups can use the template to create their own Code Studio instances in their projects.




Launch a Code Studio instance[¶](#launch-a-code-studio-instance "Permalink to this heading")
--------------------------------------------------------------------------------------------


Once the template is built, in a project with a cluster attached:


* In “Code Studios” click **New Code Studio**
* Select the `gradio-template` Code Studio template, and create a new Code Studio named `Hello Gradio`
* Start the Code Studio
* From the **VS Code** tab, you can edit the webapp. The starter file is located at `code_studio-versioned/gradio/app.py`. Click on **Sync files with DSS** to persist changes upon Code Studio restart.
* From the **Gradio** tab, visualize and interact with the webapp. Click on the refresh icon to apply changes made in the code editor.


![../../_images/gradio.png](../../_images/gradio.png)


Publish your Code Studio as a webapp[¶](#publish-your-code-studio-as-a-webapp "Permalink to this heading")
----------------------------------------------------------------------------------------------------------


* In “Code Studios”, select the `Hello Gradio` Code Studio, and in its action panel, click **Publish**, then **Create**
* Start the webapp and go to the “View” tab


See [Publish a Code Studio as a webapp](../code-studios-as-webapps.html) for more details about how to configure a webapp from a Code Studio.