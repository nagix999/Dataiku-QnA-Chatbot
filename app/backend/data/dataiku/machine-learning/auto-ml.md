Automated machine learning[¶](#automated-machine-learning "Permalink to this heading")
======================================================================================


DSS contains a powerful automated machine learning engine that allows you to get highly optimized models with minimal intervention.


At your choice, in DSS, you can select between:


* Having the full control over all [training settings](supervised/settings.html), [algorithm settings](algorithms/index.html) and [optimization process](advanced-optimization.html), including writing your own [custom models](custom-models.html) and using advanced [deep learning models](deep-learning/index.html)
* Using DSS powerful automatic machine learning engine in order to effortlessly get models


The Automated Machine Learning engine of DSS will analyze your dataset, and depending on your preferences, select the best [features handling](features-handling/index.html), [algorithms](algorithms/index.html) and hyper parameters.


In addition to algorithms selection and optimization, the automated machine learning performs:


* Automatic [features handling](features-handling/index.html), including handling of categorical and text variables, handling of missing values, scaling, …
* Semi\-automatic massive features generation
* Optional features selection



* [Creating an Automated Machine Learning model](#creating-an-automated-machine-learning-model)


	+ [Prediction styles](#prediction-styles)
	
	
		- [Quick Prototypes](#quick-prototypes)
		- [Interpretable Models](#interpretable-models)
		- [High Performance](#high-performance)
	+ [Customizing an automated machine learning model](#customizing-an-automated-machine-learning-model)
* [Feature generation](#feature-generation)




[Creating an Automated Machine Learning model](#id1)[¶](#creating-an-automated-machine-learning-model "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------------


* Go to the Flow for your project
* Click on the dataset you want to use
* Select the *Lab*
* Select *AutoML Prediction*
* Choose your target variable (which column you want to predict)
* Select one of the AutoML prediction styles, such as *Quick Prototypes*



### [Prediction styles](#id2)[¶](#prediction-styles "Permalink to this heading")


The Automated Machine Learning engine allows you to choose between three main prediction styles.



#### [Quick Prototypes](#id3)[¶](#quick-prototypes "Permalink to this heading")


When selecting this prediction style, DSS will select a variety of models, prioritizing variety and speed over pure performance. The main goal of this is to quickly give you first results. It will help you decide whether you need to go further with more advanced models, or if you should first do some more feature engineering.




#### [Interpretable Models](#id4)[¶](#interpretable-models "Permalink to this heading")


This prediction style is focused on giving “white\-box” models for which it is easier to understand the predictions and the driving factors.


DSS will choose both decision trees and linear models.


Training is generally quick.




#### [High Performance](#id5)[¶](#high-performance "Permalink to this heading")


When selecting this prediction style, DSS will select a variety of tree\-based models with a very deep hyper\-parameter optimization search. This will generally give the best possible prediction performance, at the expense of interpretability.


Training time will be strongly increased when choosing this prediction style





### [Customizing an automated machine learning model](#id6)[¶](#customizing-an-automated-machine-learning-model "Permalink to this heading")


Whereas you selected “Automated machine learning” or “Expert mode”, you always keep full control over all of the [settings of your prediction model](supervised/settings.html), including [algorithms](algorithms/index.html) and [feature handling](features-handling/index.html)





[Feature generation](#id7)[¶](#feature-generation "Permalink to this heading")
------------------------------------------------------------------------------


DSS can compute interactions between variables, such as linear and polynomial combinations. These generated features allow for linear methods, such as linear regression, to detect non\-linear relationship between the variables and the target. These generated features may improve model performance in these cases.


See [Prediction settings](supervised/settings.html) for more information.