Pivot recipe[¶](#pivot-recipe "Permalink to this heading")
==========================================================



* [Defining the pivot table rows](#defining-the-pivot-table-rows)
* [Modality handling](#modality-handling)


	+ [Computation of the list of modalities](#computation-of-the-list-of-modalities)
	+ [Cleaning of the modalities’ name](#cleaning-of-the-modalities-name)
* [Aggregates](#aggregates)


	+ [Per row and modality](#per-row-and-modality)
	+ [Per row](#per-row)
* [Comparison to pivot processor](#comparison-to-pivot-processor)
* [Pre\-filtering](#pre-filtering)
* [Examples](#examples)


	+ [Pivoting country net revenue by product](#pivoting-country-net-revenue-by-product)
	+ [Dummifying](#dummifying)



The “pivot” recipe lets you build pivot tables, with more control over the rows, columns and aggregations than what the [pivot processor](../preparation/processors/pivot.html) offers. It also lets you run the pivoting natively on external systems, like SQL databases or Hive.



See also


For more information, see also the following articles in the Knowledge Base:


* [Concept \| Pivot recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/concept-pivot-recipe.html)
* [Tutorial \| Pivot recipe](https://knowledge.dataiku.com/latest/data-preparation/visual-recipes/tutorial-pivot-recipe.html)




[Defining the pivot table rows](#id1)[¶](#defining-the-pivot-table-rows "Permalink to this heading")
----------------------------------------------------------------------------------------------------


The rows in the output dataset are defined by the values of a tuple of columns, the row identifiers. This tuple can be specified explicitly, or implicitly as “all other columns”, in which case any column that is not used to define modalities nor is used in an aggregate will be used as row identifier.




| A | B | C | D | E |
| --- | --- | --- | --- | --- |
| x | 1 | a | 1 | 6 |
| y | 1 | b | 2 | 5 |
| x | 1 | a | 3 | 4 |
| y | 2 | b | 1 | 3 |
| x | 2 | b | 2 | 2 |


For the input columns {A, B, C, D, E}, giving {A, B} as explicit list of row identifiers will produce a pivot table where the rows are indexed by the pairs of values for A and B found in the input data.




| A | B | … |
| --- | --- | --- |
| x | 1 | … |
| y | 1 | … |
| x | 2 | … |
| y | 2 | … |


On the other hand, using “all other columns” while having the modalities defined by column B and aggregates on columns D and E will produce a pivot table where the rows are indexed by the tuples of values for A and C found in the input data.




| A | C | 1\_D\_sum | 1\_E\_sum | 2\_D\_sum | 2\_E\_sum |
| --- | --- | --- | --- | --- | --- |
| x | a | 4 | 10 |  |  |
| x | b |  |  | 2 | 2 |
| y | b | 2 | 5 | 1 | 3 |




[Modality handling](#id2)[¶](#modality-handling "Permalink to this heading")
----------------------------------------------------------------------------


The columns in the output are defined as the list aggregates times the list of modalities.



### [Computation of the list of modalities](#id3)[¶](#computation-of-the-list-of-modalities "Permalink to this heading")


The modalities themselves are the combinations of a non\-empty list of columns. Since the list of combinations can be huge, there are several options to bring it back to something more manageable:


* most frequent : keep only the N combinations appearing the most in the input data
* min occurrence cont : keep only the combination appearing at least N times in the input data
* explicit : specify the combinations explicitly


The effective list of modalities used to build the output is only known after the entire input dataset is scanned, so it’s not readily available at design\-time, but computed when the recipe is run. By default, the list of modalities for a given set of settings is computed only once, and kept for ulterior runs of the recipe. The option to “recompute schema at each run” on the “Output” section of the recipe lets you force a recompute of the list of modalities at each run. Note that in this case, the changes in the list of output columns are not automatically propagated to downstream datasets and recipes.




### [Cleaning of the modalities’ name](#id4)[¶](#cleaning-of-the-modalities-name "Permalink to this heading")


Since modalities are made up of a concatenation of the values of columns from the input data, their name is usually not directly usable as column name in SQL databases or Hive. The “Output” section of the recipe therefore offers options to simplify the names so that they become compatible with these systems:


* soft slugification : swaps out whitespace and punctuation with ‘\_’. This is sufficient for most SQL databases (PostgreSQL, Oracle…)
* hard slugification : only keep alphanumeric characters, ‘\_’ and ‘\-’. This is typically for Hive (i.e. when the output dataset is HDFS)
* numbering : completely ignores the original name of the modality and uses numbers instead. This is the safest of all schemes, and produces the shortest names.
* truncation : after the above simplifications have been applied, truncate the names. SQL databases natural limitations are natively taken into account (for example the 32 char limit on Oracle’s column names), but some limitations are not implicit in the nature of the output dataset; typically, if the output is HDFS and is to be used with Impala, a 128 char limit needs to be enforced.





[Aggregates](#id5)[¶](#aggregates "Permalink to this heading")
--------------------------------------------------------------


The recipe offers 2 levels of aggregates :


* aggregates per row and modality (i.e. per pivot table cell)
* aggregates per row (i.e. marginals)



### [Per row and modality](#id6)[¶](#per-row-and-modality "Permalink to this heading")


These are defined in the “Pivot” section of the recipe. “Add new” creates a new simple aggregate on a selected column, and the aggregate can be further setup by changing its aggregation, and if relevant, the aggregation settings.


For each aggregate defined in this section, and each modality, one column will be created in the output. The column name is made of the modality name concatenated with the aggregate’s column and aggregation type.




### [Per row](#id7)[¶](#per-row "Permalink to this heading")


The “Other columns” section of the recipe adds aggregates per row. There are 2 typical uses:


* to keep columns that are neither row identifiers nor aggregates in the pivot table. In this case the aggregates “First”, “Last” or “Concat” should be preferred.
* to compute marginals to compare the aggregates per row and modality to. For example, one can aggregate the average of column A for each row of X and modality of Y, and at the same time aggregate the average of column A for each row X (across modalities of Y).





[Comparison to pivot processor](#id8)[¶](#comparison-to-pivot-processor "Permalink to this heading")
----------------------------------------------------------------------------------------------------


The pivot processor is a stream\-oriented processor that pivots one row at a time and is available in the preparation scripts, and consequently in Prepare recipes.




|  | Pivot recipe | Pivot processor |
| --- | --- | --- |
| Modalities | computed by inspecting entire dataset. Not available at design\-time until the recipe has run once | computed by using the design\-time sample. A small sample or very imbalanced modalities implies that some modalities can be missed |
| Dynamic output schema | the list of modalities can optionally be computed at each run of the recipe | schema is fixed at design\-time |
| Aggregations | aggregates can be defined for each value | no aggregation |
| Output row definition | combinations of columns can be used to define a row. The data doesn’t need to be pre\-sorted | rows are defined by the value of one column. The data needs to be sorted on that column to have all rows with the same key squashed together |




[Pre\-filtering](#id9)[¶](#pre-filtering "Permalink to this heading")
---------------------------------------------------------------------


Pre\-filters can be applied. The filters documentation is available [here](sampling.html).




[Examples](#id10)[¶](#examples "Permalink to this heading")
-----------------------------------------------------------



### [Pivoting country net revenue by product](#id11)[¶](#pivoting-country-net-revenue-by-product "Permalink to this heading")


For the input:




| Product | Country | net | Year |
| --- | --- | --- | --- |
| Toothpaste | FR | 40 | 2015 |
| Toothpaste | GB | 80 | 2015 |
| Toothpaste | US | 60 | 2015 |
| Toothpaste | GB | 75 | 2017 |
| Toothpaste | US | 55 | 2017 |
| Chocolate | FR | 110 | 2015 |
| Chocolate | FR | 120 | 2017 |
| Chocolate | GB | 70 | 2017 |
| Peanut butter | US | 200 | 2017 |
| Peanut butter | GB | 30 | 2017 |


A pivot recipe using Product as row identifier, Country to create columns with, and with an aggregate of sum of Net will yield




| Product | FR\_Net\_sum | GB\_Net\_sum | US\_Net\_sum |
| --- | --- | --- | --- |
| Toothpaste | 40 | 155 | 115 |
| Chocolate | 230 | 70 |  |
| Peanut butter |  | 30 | 200 |


Adding an aggregate of sum of Net in the ‘Other columns’ section will yield




| Product | FR\_Net\_sum | GB\_Net\_sum | US\_Net\_sum | Net\_sum |
| --- | --- | --- | --- | --- |
| Toothpaste | 40 | 155 | 115 | 310 |
| Chocolate | 230 | 70 |  | 300 |
| Peanut butter |  | 30 | 200 | 230 |




### [Dummifying](#id12)[¶](#dummifying "Permalink to this heading")


The use of the Count of records aggregate allows for an easy and controlled way of dummifying columns. On the input:




| Country | Product | Year |
| --- | --- | --- |
| FR | Chocolate | 2017 |
| FR | Sugar | 2016 |
| FR | Apples | 2017 |
| GB | Chocolate | 2017 |
| GB | Sugar | 2015 |
| GB | Apples | 2017 |
| GB | Toffee | 2017 |
| US | Sugar | 2016 |
| US | Corn syrup | 2017 |
| US | Toffee | 2017 |
| US | Peanut butter | 2017 |


A pivot recipe using Country as row identifier, Product to create columns with, and with an aggregate of count of records will yield:




| Country | Chocolate | Sugar | Apples | Toffee | Corn syrup | Peanut butter |
| --- | --- | --- | --- | --- | --- | --- |
| FR | 1 | 1 | 1 | 0 | 0 | 0 |
| GB | 1 | 1 | 1 | 1 | 0 | 0 |
| US | 0 | 1 | 0 | 1 | 1 | 1 |


By additionally specifying that only the top 4 modalities should be used, the output becomes:




| Country | Chocolate | Sugar | Apples | Toffee |
| --- | --- | --- | --- | --- |
| FR | 1 | 1 | 1 | 0 |
| GB | 1 | 1 | 1 | 1 |
| US | 0 | 1 | 0 | 1 |