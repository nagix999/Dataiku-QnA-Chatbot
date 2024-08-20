Introduction to Govern[¶](#introduction-to-govern "Permalink to this heading")
==============================================================================



* [Govern licenses](#govern-licenses)
* [Items and artifacts](#items-and-artifacts)
* [Dataiku Govern pages](#dataiku-govern-pages)
* [Governance actions](#governance-actions)
* [Govern hierarchy](#govern-hierarchy)




[Govern licenses](#id1)[¶](#govern-licenses "Permalink to this heading")
------------------------------------------------------------------------


Depending on which license you have, you will be able to use the Govern node differently in your Dataiku cluster.


1. **Standard license**: The standard license will give you access to all core features and pages.
2. **Advanced license**: Advanced Dataiku Govern allows you to customize your instance. In other words, it empowers you to create custom pages, workflows, sign\-offs, and more.



Note


Reach out to your Dataiku Account Manager or Customer Success Manager to learn more about licenses, features, and profiles.





[Items and artifacts](#id2)[¶](#items-and-artifacts "Permalink to this heading")
--------------------------------------------------------------------------------


Items in Dataiku Govern correspond to components called **artifacts**.


An artifact is defined as an object with a fixed structure. Artifacts have properties for which values are either computed automatically or filled manually by users. For example, a **Govern model** is a type of artifact that contains information.


They are essential because most of the actions in Dataiku Govern are related to creating and managing collections of items.




[Dataiku Govern pages](#id3)[¶](#dataiku-govern-pages "Permalink to this heading")
----------------------------------------------------------------------------------


After connecting Dataiku Govern to your existing Dataiku instance(s), Dataiku Govern will automatically provide views of all your items (projects, saved models, saved model versions, and bundles) within the following standard pages:


* Governable items
* Model registry
* Bundle registry


Other standard pages will be manually populated by creating items directly or by adding a governance layer to existing items:


* Business initiatives
* Governed projects


From the Applications menu, the Timeline page centralizes events such as updates, deletions, and creations linked to items. You will be able to filter by:


* Date and Time, Users, Items type, and Items.
* Actions on Items, Templates, Sign\-off, and others.




[Governance actions](#id4)[¶](#governance-actions "Permalink to this heading")
------------------------------------------------------------------------------


From Dataiku Govern, a layer of governance can be added to each item.


Once this optional layer has been applied to projects, models, model versions or bundles, they become Govern projects, Govern models, Govern model versions and Govern bundles.
This layer can embed specific definitions, metrics, attachments, workflows, sign\-offs, and more.



See also


To learn more, see [Concept \| Governance layers](https://knowledge.dataiku.com/latest/mlops-o16n/govern/concept-create-governance-layer.html).



You can also choose to hide any synced items that will not be governed.
This will hide the item in Dataiku Govern, but it will not affect the item visibility in other instances.


These actions are performed in the **Governable items page**. This page is your inbox to view projects and models that have not been governed.



See also


For more information, visit [Concept \| Governable items](https://knowledge.dataiku.com/latest/mlops-o16n/govern/concept-governable-items.html).





[Govern hierarchy](#id5)[¶](#govern-hierarchy "Permalink to this heading")
--------------------------------------------------------------------------


Dataiku Govern employs inheritance throughout its architecture, and therefore relies on an information hierarchy. You can see the layers of governance applied here in the tree.


![../_images/info-hierarchy.png](../_images/info-hierarchy.png)