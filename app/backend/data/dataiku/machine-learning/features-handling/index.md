Features handling[¶](#features-handling "Permalink to this heading")
====================================================================



Note


You can change the settings for feature processing under Models \> Settings \> Features tab



Most [machine learning engines](../algorithms/index.html) in DSS visual machine learning can only process numerical features, with no missing values.


DSS allows users to specify pre\-processing of variables before model training.



* [Features roles and types](roles-and-types.html)
	+ [Roles](roles-and-types.html#roles)
	+ [Variable type](roles-and-types.html#variable-type)
* [Categorical variables](categorical.html)
	+ [Category handling](categorical.html#category-handling)
		- [Target encoding](categorical.html#target-encoding)
			* [Impact coding](categorical.html#impact-coding)
			* [GLMM encoding](categorical.html#glmm-encoding)
		- [Ordinal encoding](categorical.html#ordinal-encoding)
		- [Frequency encoding](categorical.html#frequency-encoding)
	+ [Missing values](categorical.html#missing-values)
* [Numerical variables](numerical.html)
	+ [Numerical handling](numerical.html#numerical-handling)
		- [Datetime cyclical encoding](numerical.html#datetime-cyclical-encoding)
	+ [Rescaling](numerical.html#rescaling)
	+ [Missing values](numerical.html#missing-values)
* [Text variables](text.html)
	+ [Text handling](text.html#text-handling)
		- [Text embedding](text.html#text-embedding)
		- [Using models from the code environment resources](text.html#using-models-from-the-code-environment-resources)
		- [Using models from the LLM Mesh](text.html#using-models-from-the-llm-mesh)
	+ [Missing values](text.html#missing-values)
* [Vector variables](vectors.html)
	+ [Missing values](vectors.html#missing-values)
* [Image variables](images.html)
	+ [Image handling](images.html#image-handling)
		- [Image embedding](images.html#image-embedding)
	+ [Missing values](images.html#missing-values)
* [Custom Preprocessing](custom.html)
	+ [Implementing a custom processor](custom.html#implementing-a-custom-processor)
		- [Example](custom.html#example)
	+ [Naming output columns](custom.html#naming-output-columns)
		- [Example](custom.html#id1)