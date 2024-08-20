DSS in AWS[¶](#dss-in-aws "Permalink to this heading")
======================================================


DSS features deep integration with multiple AWS services:


* Connecting to S3 data
* Connecting to RDS
* Connecting to Redshift, including fast copy between S3 and Redshift
* Leveraging EMR, including dynamically\-managed EMR clusters
* Leveraging EKS, including dynamically\-managed EKS clusters
* Leveraging Athena over S3 data



* [Reference architecture: managed compute on EKS with Glue and Athena](reference-architectures/eks-glue-athena.html)
	+ [Overview](reference-architectures/eks-glue-athena.html#overview)
	+ [Architecture diagram](reference-architectures/eks-glue-athena.html#architecture-diagram)
	+ [Security](reference-architectures/eks-glue-athena.html#security)
	+ [Main steps](reference-architectures/eks-glue-athena.html#main-steps)
		- [Prepare the instance](reference-architectures/eks-glue-athena.html#prepare-the-instance)
		- [Setup connectivity to AWS](reference-architectures/eks-glue-athena.html#setup-connectivity-to-aws)
		- [Install DSS](reference-architectures/eks-glue-athena.html#install-dss)
		- [Setup container configuration in DSS](reference-architectures/eks-glue-athena.html#setup-container-configuration-in-dss)
		- [Setup Spark and Metastore in DSS](reference-architectures/eks-glue-athena.html#setup-spark-and-metastore-in-dss)
		- [Setup S3 connections](reference-architectures/eks-glue-athena.html#setup-s3-connections)
		- [Setup Athena connections](reference-architectures/eks-glue-athena.html#setup-athena-connections)
		- [Install EKS plugin](reference-architectures/eks-glue-athena.html#install-eks-plugin)
		- [Create your first cluster](reference-architectures/eks-glue-athena.html#create-your-first-cluster)
		- [Use it](reference-architectures/eks-glue-athena.html#use-it)