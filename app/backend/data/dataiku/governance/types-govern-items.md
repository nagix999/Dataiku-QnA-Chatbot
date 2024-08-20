Types of Govern items[¶](#types-of-govern-items "Permalink to this heading")
============================================================================



* [Business initiatives](#business-initiatives)
* [Projects](#projects)
* [Models](#models)
* [Model Versions](#model-versions)
* [Bundles](#bundles)
* [Filtering capabilities](#filtering-capabilities)




[Business initiatives](#id1)[¶](#business-initiatives "Permalink to this heading")
----------------------------------------------------------------------------------


In Dataiku Govern, governed projects may be grouped into business initiatives.


* Business initiatives help you keep your instance organized and focused. They are created in Dataiku Govern and provide the ability to link multiple projects together based on shared business goals.
* A three\-step workflow is included to help track the progress.
* Visualisations are provided in the **Business initiatives page**: Matrix view and Kanban view.



See also


More information on Business initiatives can be found in [Concept \| Business initiatives](https://knowledge.dataiku.com/latest/mlops-o16n/govern/concept-business-initiatives.html).





[Projects](#id2)[¶](#projects "Permalink to this heading")
----------------------------------------------------------


Projects created in Dataiku and project metadata are synchronized to Dataiku Govern. You can see these projects in the following Dataiku Govern pages:


* Governable items
* Model registry
* Bundle registry


From the **Governable items** page, you can choose to add a governance layer on top of a project, which will create a Govern project visible in the **Governed projects** page.


You can also create a Govern project that is not linked to any Dataiku project directly from the **Governed projects page**. This can be used for the ideation phase of a project.


Additionally, two visualizations are provided in the **Governed projects page**:


* The Matrix view
* The Kanban view



See also


Learn more in [Concept \| Governed projects](https://knowledge.dataiku.com/latest/mlops-o16n/govern/concept-governed-projects.html).





[Models](#id3)[¶](#models "Permalink to this heading")
------------------------------------------------------


Models can only be governed if their parent project is also governed.


Therefore, if you choose to govern a model that is part of an ungoverned project, you will be alerted that the parent project will be automatically governed in addition to the selected model.


If you decide to govern a model, the default setting enables you to govern all of its model versions. You can decide to deactivate the automatic governance and govern model versions manually.




[Model Versions](#id4)[¶](#model-versions "Permalink to this heading")
----------------------------------------------------------------------


Model versions can only be governed if their parent project and model are also governed. They can be automatically governed when you choose to govern the parent model.


Model versions do not appear in the **Governable items page**. If you want to govern a specific model version, you will have to perform this action from the dedicated **Model registry page**.


Tracking exactly which models exist across a company’s many teams can be a challenge for organizations as they grow.


The **Model Registry page** is a central repository that lets you review the status, performance, and deployments metrics of all models across multiple Dataiku instances and projects. To be specific, you can:


1. View the high\-level status of models and their significant versions.
2. Track whether a model version is governed or not as well as its state (in production, waiting for approval, etc.).
3. Track simple input drift over time.
4. Drill\-down for further information about a Model version in Dataiku.


![../_images/model-registry.png](../_images/model-registry.png)


[Bundles](#id5)[¶](#bundles "Permalink to this heading")
--------------------------------------------------------


Bundles do not appear in the **Governable items page**, but can be governed from the dedicated **Bundle Registry page**.


You can either choose to govern directly a bundle or govern all its existing bundles when governing a project. Once a project has been governed, all new bundles of this project will automatically be governed when created.


The **Bundle Registry page** provides a central repository for bundles. It allows to review the status of bundles from multiple Dataiku instances and projects.


Bundle registry provides the central place to:


1. Review the high\-level status of bundles for each project.
2. Track whether a bundle is governed or not as well as its state (in production, waiting for approval, etc.).
3. Drill\-down for further information about a bundle in Dataiku.


![../_images/bundle-registry.png](../_images/bundle-registry.png)


[Filtering capabilities](#id6)[¶](#filtering-capabilities "Permalink to this heading")
--------------------------------------------------------------------------------------


Each page in Dataiku Govern with a table can be filtered with the page header.


In addition to the pre\-defined filters that you can use, there is an option [![CustomfilterIcon](../_images/custom-filter.png)](../_images/custom-filter.png) to refine your results further.


Using the filter button, you can define logical operations and conditions to meet your requirements. The conditions you create can filter field values, workflow steps, sign\-off statuses, and more.



See also


To review more about all of these pages, explore the various concepts on our [Dataiku Govern](https://knowledge.dataiku.com/latest/mlops-o16n/govern/index.html) knowledge base page.