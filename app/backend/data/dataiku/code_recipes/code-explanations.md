Code explanations[¶](#code-explanations "Permalink to this heading")
====================================================================


Dataiku DSS can generate explanations of code used in code recipes. The feature
leverages a Large Language Model (LLM) to do this.



Enabling AI Explain[¶](#enabling-ai-explain "Permalink to this heading")
------------------------------------------------------------------------


In order to start using code explanations, the AI Explain feature needs to be
enabled by an admin.


* Go to Administration \> Settings \> OTHER \> AI Services
* Make sure **Enable AI Explain** is checked
* Click **Save**


To enable the feature in Dataiku Cloud you need to be a member of the space\_administrators group:


* Go to the Launchpad \> Extensions \> AI Services
* Accept the **Dataiku AI Services Terms of Use**
* Make sure **Enable AI Explain** is checked
* Click **Add**




Generating code explanations[¶](#generating-code-explanations "Permalink to this heading")
------------------------------------------------------------------------------------------


* Select the **Explain** tab in the left\-hand side pane on the code recipe
screen
* Click **Explain**


You can choose to generate an explanation of a code selection only by making a
code selection first.




Explanation options[¶](#explanation-options "Permalink to this heading")
------------------------------------------------------------------------


After clicking **Settings** it is possible to adjust the generated explanations
using these options:


* Language: the natural language of the explanation
* Purpose: the intended audience of the explanation
* Length: the verbosity of the explanation



Note


The explanations are AI\-generated and as such are subject to errors.