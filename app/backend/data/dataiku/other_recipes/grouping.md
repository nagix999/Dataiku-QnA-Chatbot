Grouping: aggregating data[¶](#grouping-aggregating-data "Permalink to this heading")
=====================================================================================



* [Engines](#engines)



The “grouping” recipe allows you to perform aggregations on any dataset in DSS, whether it’s a SQL dataset or not. This is the equivalent of a SQL “group by” statement. The recipe offers visual tools to setup the (custom) aggregations and aliases.


The “grouping” recipe can have pre\-filters and post\-filters. The filters documentation is available [here](sampling.html).



See also


For more information, see also the following articles in the Knowledge Base:


* [Concept \| Group recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/concept-group-recipe.html)
* [Tutorial \| Group recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/tutorial-group-data.html)




[Engines](#id1)[¶](#engines "Permalink to this heading")
--------------------------------------------------------


Depending on the input dataset types, DSS will adjust the engine it uses to execute the recipe, and choose between Hive, Impala, SparkSQL, plain SQL, and internal DSS. The available engines can be seen and selected by clicking on the cog below the “Run” button.