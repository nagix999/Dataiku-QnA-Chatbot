Interactive statistics[¶](#interactive-statistics "Permalink to this heading")
==============================================================================


An interactive statistics worksheet in Dataiku DSS provides a dedicated interface for performing exploratory data analysis (EDA) on datasets. Using this feature, you can:


* Summarize or describe data samples, e.g. using univariate analysis, bivariate analysis, distribution \& curve fitting, and correlation matrices. This falls under the area of [descriptive statistics](https://en.wikipedia.org/wiki/Descriptive_statistics).
* Draw conclusions from a sample dataset about an underlying population, e.g. using hypothesis testing. This falls under the area of [inferential statistics](https://en.wikipedia.org/wiki/Statistical_inference).
* Visualize the structure of the dataset in a reduced number of dimensions, using principal component analysis. This falls under the area of [dimensionality reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction).


This section of the reference documentation covers the DSS **Worksheet** and performing EDA tasks in DSS.



* [The Worksheet Interface](interface.html)
	+ [Elements of a worksheet](interface.html#elements-of-a-worksheet)
	+ [Elements of a card](interface.html#elements-of-a-card)
		- [Types of cards](interface.html#types-of-cards)
* [Univariate Analysis](univariate.html)
	+ [Card options](univariate.html#card-options)
		- [Histogram](univariate.html#histogram)
			* [Numerical histogram](univariate.html#numerical-histogram)
			* [Categorical histogram](univariate.html#categorical-histogram)
		- [Box Plot](univariate.html#box-plot)
		- [Summary Stats](univariate.html#summary-stats)
		- [Quantile Table](univariate.html#quantile-table)
		- [Frequency Table](univariate.html#frequency-table)
		- [Cumulative Distribution Function](univariate.html#cumulative-distribution-function)
* [Bivariate Analysis](bivariate.html)
	+ [Card options](bivariate.html#card-options)
		- [Histogram](bivariate.html#histogram)
		- [Box Plot](bivariate.html#box-plot)
		- [Mosaic Plot](bivariate.html#mosaic-plot)
		- [Scatter Plot](bivariate.html#scatter-plot)
		- [Summary Stats](bivariate.html#summary-stats)
		- [Frequency Table](bivariate.html#frequency-table)
* [Fit curves and distributions](fit.html)
	+ [Fit Distribution](fit.html#fit-distribution)
	+ [2D Fit Distribution](fit.html#d-fit-distribution)
	+ [Fit curve](fit.html#fit-curve)
* [Statistical Tests](tests.html)
	+ [One\-sample tests](tests.html#one-sample-tests)
		- [Student *t*\-test (one\-sample)](tests.html#student-t-test-one-sample)
		- [Sign test (one\-sample)](tests.html#sign-test-one-sample)
		- [Shapiro\-Wilk test](tests.html#shapiro-wilk-test)
	+ [Two\-sample tests](tests.html#two-sample-tests)
		- [Student *t*\-test (two\-sample)](tests.html#student-t-test-two-sample)
		- [Median mood test (two\-sample)](tests.html#median-mood-test-two-sample)
		- [Kolmogrov\-Smirnov test (two\-sample)](tests.html#kolmogrov-smirnov-test-two-sample)
	+ [N\-sample tests](tests.html#n-sample-tests)
		- [One\-way ANOVA](tests.html#one-way-anova)
		- [Median mood test (N\-samples)](tests.html#median-mood-test-n-samples)
		- [Pairwise student *t*\-test](tests.html#pairwise-student-t-test)
		- [Pairwise median mood test](tests.html#pairwise-median-mood-test)
	+ [Categorical test](tests.html#categorical-test)
		- [Chi\-square independence test](tests.html#chi-square-independence-test)
* [Multivariate Analysis](multivariate.html)
	+ [Principal Component Analysis (PCA)](multivariate.html#principal-component-analysis-pca)
	+ [Correlation matrix](multivariate.html#correlation-matrix)
	+ [Scatter plot 3D](multivariate.html#scatter-plot-3d)
	+ [Parallel Coordinates Plot](multivariate.html#parallel-coordinates-plot)
* [Time Series Analysis](time-series.html)
	+ [Stationarity and unit root tests](time-series.html#stationarity-and-unit-root-tests)
		- [Augmented Dickey\-Fuller (ADF) test](time-series.html#augmented-dickey-fuller-adf-test)
		- [Zivot\-Andrews test](time-series.html#zivot-andrews-test)
		- [Kwiatkowski\-Phillips\-Schmidt\-Shin (KPSS) test](time-series.html#kwiatkowski-phillips-schmidt-shin-kpss-test)
	+ [Trend](time-series.html#trend)
		- [STL decomposition plot](time-series.html#stl-decomposition-plot)
		- [Mann\-Kendall trend test](time-series.html#mann-kendall-trend-test)
	+ [Auto\-correlation](time-series.html#auto-correlation)
		- [Auto\-correlation function plot](time-series.html#auto-correlation-function-plot)
		- [Partial auto\-correlation function plot](time-series.html#partial-auto-correlation-function-plot)
		- [Durbin\-Watson statistic](time-series.html#durbin-watson-statistic)
* [Assisted Data Exploration](assisted-data-exploration.html)