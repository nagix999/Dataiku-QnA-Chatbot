DSS and Spark[¶](#dss-and-spark "Permalink to this heading")
============================================================



* [Usage of Spark in DSS](usage.html)
	+ [SparkSQL recipes](usage.html#sparksql-recipes)
	+ [Visual recipes](usage.html#visual-recipes)
	+ [Python code](usage.html#python-code)
		- [Note about Spark code in Python notebooks](usage.html#note-about-spark-code-in-python-notebooks)
	+ [R code](usage.html#r-code)
		- [Note about Spark code in R notebooks](usage.html#note-about-spark-code-in-r-notebooks)
	+ [Scala code](usage.html#scala-code)
	+ [Machine Learning with MLLib](usage.html#machine-learning-with-mllib)
* [Spark configurations](configuration.html)
* [Interacting with DSS datasets](datasets.html)
	+ [Hadoop FS datasets](datasets.html#hadoop-fs-datasets)
	+ [S3 datasets](datasets.html#s3-datasets)
	+ [Other](datasets.html#other)
* [Spark pipelines](pipelines.html)
	+ [Enabling Spark pipelines](pipelines.html#enabling-spark-pipelines)
	+ [Creating a Spark pipeline](pipelines.html#creating-a-spark-pipeline)
	+ [Configuring behavior for intermediate datasets](pipelines.html#configuring-behavior-for-intermediate-datasets)
	+ [Limitations](pipelines.html#limitations)
* [Limitations and attention points](limitations.html)
* [Setting up Spark integration](installation.html)
	+ [Unmanaged Spark on Kubernetes](installation.html#unmanaged-spark-on-kubernetes)
		- [Configure DSS](installation.html#configure-dss)
		- [Build your Docker images](installation.html#build-your-docker-images)
		- [Create the Spark configuration](installation.html#create-the-spark-configuration)



Spark is a general engine for distributed computation. Once Spark integration is setup, DSS will offer settings to choose Spark as a job’s execution engine in various components.