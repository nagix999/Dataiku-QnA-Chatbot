Join: joining datasets[¶](#join-joining-datasets "Permalink to this heading")
=============================================================================



* [Building a simple join](#building-a-simple-join)


	+ [Adding output datasets for unmatched rows](#adding-output-datasets-for-unmatched-rows)
* [Filtering](#filtering)
* [Columns in the output](#columns-in-the-output)
* [Engines](#engines)
* [Database\-specific notes](#database-specific-notes)


	+ [Vertica](#vertica)



The “join” recipe is dedicated to joins between two or more datasets. DSS handles inner, left outer, right outer, full outer, cross and advanced joins.
Unmatched rows can be collected with the special left and right anti join types, or as an option for the regular inner, left outer, right outer joins.



See also


For more information, see also the following articles in the Knowledge Base:


* [Concept \| Join recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/concept-join-recipe.html)
* [Tutorial \| Join recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/tutorial-enrich-dataset.html)




[Building a simple join](#id1)[¶](#building-a-simple-join "Permalink to this heading")
--------------------------------------------------------------------------------------


Adding join is a process involving several configuration steps.


You can add one or two datasets in the recipe creation modal and can add additional datasets from the “Join” section of the recipe.


In the “Join” section of the recipe:


* Use the “\+” button to add additional datasets (if necessary)
* Select the join type, between “Left join”, “Inner join”, “Outer join”, “Right join”, “Left anti join”, “Right anti join”, “Cross join”, and “Advanced join”
* Review or add join conditions. If the datasets share column names, those columns will be selected by default. Click “ADD A CONDITION” if nothing has been auto\-selected, or click on the join keys or operator to edit.


Once the join definition is ready, go to the “Selected columns” section of the recipe and select the columns of each dataset whose values you want to include in the output dataset.


Finally, review the execution specs in the “Output” section.



### [Adding output datasets for unmatched rows](#id2)[¶](#adding-output-datasets-for-unmatched-rows "Permalink to this heading")


You can optionally add additional output datasets to capture unmatched rows resulting from your join. You can do this by clicking on the “Drop unmatched rows” dropdown, and selecting “Send unmatched rows to other output dataset(s)” and then clicking the “\+ADD DATASET” button to add associated output datasets.


This functionality is supported for left, right, and inner joins between two datasets.





[Filtering](#id3)[¶](#filtering "Permalink to this heading")
------------------------------------------------------------


You can apply pre\-filters and post\-filters (on the main output only, not unmatched datasets). The filters documentation is available [here](sampling.html).




[Columns in the output](#id4)[¶](#columns-in-the-output "Permalink to this heading")
------------------------------------------------------------------------------------


Since datasets routinely have columns with identical names, it is possible to disambiguate column names in the “Selected columns” section, either by aliasing a given column (using the “pencil” button next to the given column), or by assigning a prefix to apply to all columns of the table.


You can generate additional output columns by writing custom expressions in the “Post\-join computed columns” section.




[Engines](#id5)[¶](#engines "Permalink to this heading")
--------------------------------------------------------


Depending on the input dataset types, DSS will adjust the engine it uses to execute the recipe, and choose between Hive, Impala, SparkSQL, plain SQL, and internal DSS. The available engines can be seen and selected by clicking on the cog below the “Run” button.




[Database\-specific notes](#id6)[¶](#database-specific-notes "Permalink to this heading")
-----------------------------------------------------------------------------------------



### [Vertica](#id7)[¶](#vertica "Permalink to this heading")


Due to the way Vertica handles the lowercasing and string normalization operations, if you want to use the join recipe with these options enabled, each join column must be below 8192 chars. You can set the width of string columns in the schema of the input datasets.


If you use lowercase only, the width must be below 32K.