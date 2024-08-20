Categorical variables[¶](#categorical-variables "Permalink to this heading")
============================================================================


The **Category handling** and **Missing values** methods, and their related controls, specify how a categorical variable is handled.



Category handling[¶](#category-handling "Permalink to this heading")
--------------------------------------------------------------------


* **Dummy\-encoding (vectorization)** creates a vector of 0/1 flags of length equal to the number of categories in the categorical variable. You can choose to drop one of the dummies so that they are not linearly dependent, or let Dataiku decide (in which case the least frequently occurring category is dropped). There is a limit on the number of dummies, which can be based on a maximum number of categories, the cumulative proportion of rows accounted for by the most popular rows, or a minimum number of samples per category.
* **Replace by 0/1 flag indicating presence**
* **Feature hashing (for high cardinality)**
* [Target encoding](#target-encoding)
* [Ordinal encoding](#ordinal-encoding)
* [Frequency encoding](#frequency-encoding)



### Target encoding[¶](#target-encoding "Permalink to this heading")


Target encoding replaces each category by a numerical value computed based on the target values. The following encoding methods are available:


* [Impact coding](#impact-coding) (M\-estimator)
* [GLMM encoding](#glmm-encoding) (experimental support)


The options for target encoding are:


* **K\-fold (boolean)**: enables K\-fold, mainly to avoid leaking the target variable into the encoded features.
* **Number of folds (integer)** to be used for K\-fold (default: 5\).
* **Random seed (integer)** for the K\-fold shuffling.
* **Rescaling** method for the resulting numerical feature(s) (see [Rescaling](numerical.html#rescaling)).



Note


For a multiclass classification task with \\(N\\) classes, the encoded variable is converted into \\(N\-1\\) encoding columns (one per class except the least occurring class) by applying the one\-vs\-all strategy.




#### Impact coding[¶](#impact-coding "Permalink to this heading")


Impact coding (a.k.a M\-Estimate encoding) replaces each category by the mean of the target variable for this category. More precisely the computed mean is given by:



\\\[\\frac{n \\cdot \\bar{Y}\_{cat} \+ m \\cdot \\bar{Y}}{n \+ m}\\]
where:


* \\(\\bar{Y}\_{cat}\\) is the mean of the target variable for the category.
* \\(\\bar{Y}\\) is the global mean of the target variable.
* \\(n\\) is the number of rows in the category.
* \\(m\\) controls how much the global mean is taken into account when computing the target encoding (additive smoothing, especially useful when there are categories with only a few samples). If \\(m \\ll n\\) then impact coding will mostly be defined by the mean of the target for the category. If \\(m \\gg n\\) then it will mostly be defined by the global mean.




#### GLMM encoding[¶](#glmm-encoding "Permalink to this heading")



Warning


Support for GLMM encoding is experimental.



This encoding relies on the [Generalized Linear Mixed Models](https://en.wikipedia.org/wiki/Generalized_linear_mixed_model) statistical theory to compute the encodings. The general form of the model is:



\\\[\\mathbb{E}\\left\[Y \\mid U, V\\right] \= g^{\-1}\\left(U \\alpha \+ V \\beta \\right)\\]
where:


* \\(Y\\) is the outcome variable (the target).
* \\(U\\) is the fixed\-effects matrix.
* \\(\\alpha\\) is the fixed\-effects regression coefficients.
* \\(V\\) is the random\-effects matrix.
* \\(\\beta\\) the random\-effects regression coefficients.
* \\(g\\) is the link function (identity for a regression task, logistic function for classification). It allows to fit targets which are not distributed according to a gaussian.


After fitting the model, the encodings are extracted from \\(\\beta\\), as the variability of the target within a category is modeled as a random effect.





### Ordinal encoding[¶](#ordinal-encoding "Permalink to this heading")


Ordinal encoding assigns a unique integer value to each category, according to an order defined by:


* **Count**: The number of occurrences of each category.
* **Lexicographic**: The lexicographic order of the categories.


The order can be descending or ascending, and unknown categories can be replaced either by the **Highest value (maximum \+ 1\)**, the **Median value**, or an **Explicit value**.




### Frequency encoding[¶](#frequency-encoding "Permalink to this heading")


Frequency encoding replaces the categories by their number of occurrences, normalized or not by the total number of occurrences. If the number of occurrences is not normalized, it can be rescaled using the same methods as standard numerical features (see [Rescaling](numerical.html#rescaling)).





Missing values[¶](#missing-values "Permalink to this heading")
--------------------------------------------------------------


There are a few choices for handling missing values in categorical features.


* **Treat as a regular value** treats missing values as a distinct category. This should be used for **structurally missing** data that are impossible to measure, e.g. the US state for an address in Canada.
* **Impute…** replaces missing values with the specified value. This should be used for **randomly missing** data that are missing due to random noise.
* **Drop rows** discards rows with missing values from the model building. *Avoid discarding rows, unless missing data is extremely rare*.