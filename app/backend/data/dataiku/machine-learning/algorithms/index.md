Algorithms reference[¶](#algorithms-reference "Permalink to this heading")
==========================================================================


DSS’s visual machine learning comes with support for 2 different Machine Learning engines:



* [In\-memory Python](in-memory-python.html)
* [MLLib (Spark) engine](mllib.html)



Each time you create a new machine learning model in DSS, you can select the corresponding training engine. The models will be trained with this engine.


Once trained, models can be applied to new records to make predictions. This is called scoring, and is handled by various [scoring engines](../scoring-engines.html)