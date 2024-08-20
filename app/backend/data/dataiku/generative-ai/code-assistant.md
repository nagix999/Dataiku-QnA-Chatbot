AI Code Assistant[¶](#ai-code-assistant "Permalink to this heading")
====================================================================


The AI Code Assistant is a powerful tool enhancing the coding experience in Jupyter Notebooks and Visual Studio Code ([in Code Studio](../code-studios/code-studio-ides/vs-code.html)).



Enabling AI Code Assistant[¶](#enabling-ai-code-assistant "Permalink to this heading")
--------------------------------------------------------------------------------------


In order to start using the AI Code Assistant, the feature needs to be enabled by an admin.
It also requires a connection to an LLM.


* Go to Administration \> Settings \> OTHER \> AI Services
* Make sure **Enable AI Code Assistant** is checked
* Select which LLM connection to use as default
* Click **Save**


To enable the feature in Dataiku Cloud you need to be a member of the space\_administrators group:


* Go to the Launchpad \> Extensions \> AI Services
* Accept the **Dataiku AI Services Terms of Use**
* Make sure **Enable AI Code Assistant** is checked
* Select which LLM connection to use as default
* Click **Add**




Using AI Code Assistant in Jupyter notebooks[¶](#using-ai-code-assistant-in-jupyter-notebooks "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------


There is only one step needed to enable AI Code Assistant in Jupyter notebooks:


* Copy the following code in a cell and execute it:



```
%load_ext ai_code_assistant

```




Using AI Code Assistant in Visual Studio Code[¶](#using-ai-code-assistant-in-visual-studio-code "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------



Warning


Using a self\-signed certificate may prevent the feature from being fully functional on all browsers.



To use AI Code Assistant in Visual Studio Code, an admin must enable it in the [Code Studio Template](../code-studios/code-studio-templates.html):


* Ensure the **Install AI Code Assistant** option is enabled in the Visual Code Studio block (it is enabled by default)
* Rebuild the template and restart the Code Studio to apply changes


You will find a new side panel in VSCode.


![../_images/code-assistant-left-menu.png](../_images/code-assistant-left-menu.png)
You will also have some new actions in the right\-click menu when launched from inside a file (some are only available once you have made a selection in the file).


![../_images/code-assistant-context-menu.png](../_images/code-assistant-context-menu.png)