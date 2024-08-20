Flow explanations[¶](#flow-explanations "Permalink to this heading")
====================================================================


Dataiku DSS can generate explanations of project Flows. The feature leverages a
Large Language Model (LLM) to do this.



Enabling AI Explain[¶](#enabling-ai-explain "Permalink to this heading")
------------------------------------------------------------------------


In order to start using Flow explanations, the AI Explain feature needs to be
enabled by an admin.


* Go to Administration \> Settings \> OTHER \> AI Services
* Make sure **Enable AI Explain** is checked
* Click **Save**


To enable the feature in Dataiku Cloud you need to be a member of the space\_administrators group:


* Go to the Launchpad \> Extensions \> AI Services
* Accept the **Dataiku AI Services Terms of Use**
* Make sure **Enable AI Explain** is checked
* Click **Add**




Generating project Flow explanations[¶](#generating-project-flow-explanations "Permalink to this heading")
----------------------------------------------------------------------------------------------------------


* On the Flow screen open the **Flow Actions** menu
* Select **Explain Flow**




Generating Flow zone explanations[¶](#generating-flow-zone-explanations "Permalink to this heading")
----------------------------------------------------------------------------------------------------


* On the Flow screen select a zone
* Select the **Actions** tab in the right\-hand side panel
* Click **Explain**



Note


You can generate explanations of project Flows which do not use zones
or you can generate explanations of Flow zones. It is currently not
possible to generate explanations of Flows with zones.





Explanation options[¶](#explanation-options "Permalink to this heading")
------------------------------------------------------------------------


It is possible to adjust the generated explanations using these options:


* Language: the natural language of the explanation
* Purpose: the intended audience of the explanation
* Length: the verbosity of the explanation


If editing a project or a Flow zone long description you can also choose to let
the AI Explain feature generate it and then save it.



Note


The explanations are AI\-generated and as such are subject to errors.