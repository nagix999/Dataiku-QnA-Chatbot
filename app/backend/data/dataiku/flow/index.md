The Flow[¶](#the-flow "Permalink to this heading")
==================================================


In DSS, the datasets and the recipes together make up the **flow**. We have created a visual grammar for data science, so users can quickly understand a data pipeline through the **flow**.


Using the flow, DSS knows the lineage of every dataset in the flow. DSS, therefore, is able to dynamically rebuild datasets whenever one of their parent datasets or recipes has been modified.


DSS can limit the resource usage of jobs building datasets. Users can configure their recipes and administrators can configure DSS to prevent some users, projects, recipes or plugins from consuming too many resources.



* [Visual Grammar](visual-grammar.html)
	+ [Datasets](visual-grammar.html#datasets)
	+ [Visual Recipes](visual-grammar.html#visual-recipes)
	+ [Machine Learning](visual-grammar.html#machine-learning)
	+ [Code Recipes](visual-grammar.html#code-recipes)
	+ [Plugin Recipes](visual-grammar.html#plugin-recipes)
* [Flow zones](zones.html)
	+ [Use cases](zones.html#use-cases)
	+ [Usage](zones.html#usage)
* [Rebuilding Datasets](building-datasets.html)
	+ [Build modes](building-datasets.html#build-modes)
	+ [Rebuild behavior](building-datasets.html#rebuild-behavior)
	+ [Propagate schema across Flow from here](building-datasets.html#propagate-schema-across-flow-from-here)
* [Limiting Concurrent Executions](limits.html)
	+ [Global and per\-job limits](limits.html#global-and-per-job-limits)
	+ [Per\-recipe limits](limits.html#per-recipe-limits)
	+ [Additional limits](limits.html#additional-limits)
* [Exporting the Flow to PDF or images](graphics-export.html)
	+ [Setup](graphics-export.html#setup)
	+ [Manual usage](graphics-export.html#manual-usage)
	+ [Settings](graphics-export.html#settings)
* [How to Manage Large Flows with Flow Folding](folding.html)
	+ [Folding and Unfolding a Flow](folding.html#folding-and-unfolding-a-flow)
* [Flow Document Generator](flow-document-generator.html)
	+ [Generate a flow document](flow-document-generator.html#generate-a-flow-document)
	+ [Custom templates](flow-document-generator.html#custom-templates)
* [Flow explanations](flow-explanations.html)
	+ [Enabling AI Explain](flow-explanations.html#enabling-ai-explain)
	+ [Generating project Flow explanations](flow-explanations.html#generating-project-flow-explanations)
	+ [Generating Flow zone explanations](flow-explanations.html#generating-flow-zone-explanations)
	+ [Explanation options](flow-explanations.html#explanation-options)