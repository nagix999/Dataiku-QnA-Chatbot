Model Settings Reusability[¶](#model-settings-reusability "Permalink to this heading")
======================================================================================


Dataiku provides several ways to reuse model settings. This allows you to create custom model settings to use as templates.



Duplicating a Modeling Task[¶](#duplicating-a-modeling-task "Permalink to this heading")
----------------------------------------------------------------------------------------


Within the Visual ML tool, select **Duplicate** from a Modeling Task’s dropdown.


![../_images/mltask-dropdown.png](../_images/mltask-dropdown.png)
You can duplicate an existing Modeling Task, and create the copy in any project, attached to an analysis on any dataset.


![../_images/mltask-duplicate.png](../_images/mltask-duplicate.png)

Retaining Settings When Changing the Target Settings[¶](#retaining-settings-when-changing-the-target-settings "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------------------------------


In the [Target settings](supervised/settings.html) of a predictive Modeling Task, you can change the target of the Modeling Task. At that time, you can choose to keep the current model settings. This allows you to immediately reuse model settings between similar targets. By contrast, re\-detecting the settings returns all settings to their default values, based upon the type of target.



Note


If you change the **Prediction type**, some model settings must be reset.





Copying Settings[¶](#copying-settings "Permalink to this heading")
------------------------------------------------------------------


You can copy algorithms and feature handling settings from one Modeling Task to another.


In the [“Features handling”](features-handling/index.html) or [“Algorithms”](algorithms/index.html) settings of a Modeling Task, click **Copy To…** to copy the settings from the current Modeling Task to another, and click **Copy From…** to copy the settings from another Modeling Task to the current one.


![../_images/mltask-copy-settings.png](../_images/mltask-copy-settings.png)