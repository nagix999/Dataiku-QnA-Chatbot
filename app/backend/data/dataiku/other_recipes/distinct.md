Distinct: get unique rows[¶](#distinct-get-unique-rows "Permalink to this heading")
===================================================================================



* [Engines](#engines)



The “distinct” recipe allows you to deduplicate rows in a dataset by retrieving unique rows. The rows are compared using the columns you specify. You can also choose to get the number of duplicates for each combination. It can be performed on any dataset in DSS, whether it’s a SQL dataset or not. The recipe offers visual tools to setup the specifications and aliases.


The “distinct” recipe can have pre\-filters and post\-filters. The filters documentation is available [here](sampling.html).



See also


For more information, see also the following articles in the Knowledge Base:


* [Concept \| Distinct recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/concept-distinct-recipe.html)
* [Tutorial \| Distinct recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/tutorial-distinct-recipe.html)




[Engines](#id1)[¶](#engines "Permalink to this heading")
--------------------------------------------------------


Depending on the input dataset types, DSS will adjust the engine it uses to execute the recipe, and choose between Hive, Impala, SparkSQL, plain SQL, and internal DSS. The available engines can be seen and selected by clicking on the cog below the “Run” button.