MLLib (Spark) engine[¶](#mllib-spark-engine "Permalink to this heading")
========================================================================


[MLLib](http://spark.apache.org/mllib/) is Spark’s machine learning library.
DSS can use it to train prediction or clustering models on your large datasets that don’t fit
into memory.



Warning


Spark’s overhead is non\-negligible and its support is limited (see [Limitations](#limitations)).   

If your data fits into memory, you should use regular in\-memory ML instead for faster learning and more extensive options and algorithms.




* [Usage](#usage)
* [Prediction Algorithms](#prediction-algorithms)
* [Clustering algorithms](#clustering-algorithms)
* [Custom Models](#custom-models)
* [Limitations](#limitations)




[Usage](#id1)[¶](#usage "Permalink to this heading")
----------------------------------------------------


When you create a new machine learning in
an Analysis, you can select the backend. By default it’s Python in memory, but if you have
[Spark correctly set up](../../hadoop/spark.html#spark-setup), you can also see Spark MLLib. Select it and your
model will be trained on Spark, using algorithms available in MLLib or your custom
MLLib\-compatible models.


You can then fine\-tune your model, deploy it in the Flow as a retrainable model
and apply it in a scoring recipe to perform prediction on unlabelled datasets. Clustering
models may also be retrained on new datasets through the cluster recipe.


In the model’s settings and the training, scoring and cluster recipes, there is
an additional Spark config section, in which you can:


* Change the base Spark configuration
* Add / override Spark configuration options
* Select the storage level of the dataset for caching once the data is loaded
and prepared
* Select the number of Spark RDD partitions to split non\-HDFS input datasets


See [DSS and Spark](../../spark/index.html) for more information about Spark in Data Science Studio.




[Prediction Algorithms](#id2)[¶](#prediction-algorithms "Permalink to this heading")
------------------------------------------------------------------------------------


DSS 13 supports the following algorithms on MLLib:



> * Logistic Regression (classification)
> * Linear Regression (regression)
> * Decision Trees (classification \& regression)
> * Random Forest (classification \& regression)
> * Gradient Boosted Trees (binary classification \& regression)
> * Naive Bayes (multiclass classification)
> * Custom models




[Clustering algorithms](#id3)[¶](#clustering-algorithms "Permalink to this heading")
------------------------------------------------------------------------------------


DSS 13 supports the following algorithms on MLLib:



> * KMeans (clustering)
> * Gaussian Mixtures (clustering)
> * Custom models




[Custom Models](#id4)[¶](#custom-models "Permalink to this heading")
--------------------------------------------------------------------


Models using custom code may be trained with the MLLib backend. To train such a model,


* Implement classes extending the `Estimator` and `Model` classes of the `org.apache.spark.ml`
package. These will be the classes used to train your model: DSS will call the `fit(DataFrame)`
method of your `Estimator` and the `transform(DataFrame)` method of your `Model`.
* Package your classes and all necessary classes in a jar, and place it in the `lib/java` folder
of your data directory.
* In DSS, open your MLLib model settings and add a new custom algorithm in the algorithm list.
* Place the initialization (scala) code for your `Estimator` into the code editor, together with
any necessary `import` statements. The initialization statement should be the last to be called.
Note that declaring classes (including anonymous classes) in the editor is not recommended, as it
may cause serialization errors. They should therefore be compiled and put in the jar.




[Limitations](#id5)[¶](#limitations "Permalink to this heading")
----------------------------------------------------------------


On top of the general [Spark limitations in DSS](../../spark/limitations.html), MLLib
has specific limitations:


* Gradient Boosted Trees in MLLib does not output per\-class
probabilities, so there is no threshold to set, and some metrics (AUC, Log
loss, Lift) are not available, as are some report sections (variable
importance, decision \& lift charts, ROC curve).
* Some feature preprocessing options are not available (although most can be achieved
by other means):


	+ Feature combinations
	+ Numerical handling other than regular
	+ Categorical handling other than dummy encoding
	+ Text handling other than Tokenize, hash \& count
	+ Dimensionality\-reduction for clustering
* If test dataset is larger than 1 million rows, it will be subsampled to \~1M
rows for performance and memory consumption reasons, since some scoring
operations require sorting and collecting the whole data.
* K\-fold cross\-test and hyperparameter optimization (grid search) are not supported.
* Build partitioned models with MLLib backend is not supported
* Post training computations like partial dependence plot and subpopulation analysis are not supported
* Individual explanations are not supported
* Containerized execution is not supported
* Debugging capabilities such as Assertions and Diagnostics are not supported
* Interactive scoring is not available