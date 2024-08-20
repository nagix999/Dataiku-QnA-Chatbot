DSS in Azure[¶](#dss-in-azure "Permalink to this heading")
==========================================================


DSS features deep integration with multiple Azure services:


* Connecting to WASB and ADLS data
* Connecting to Azure SQL databases
* Leveraging AKS, inclduing dynamically\-managed AKS clusters



* [Reference architecture: manage compute on AKS and storage on ADLS gen2](reference-architectures/azure-aks-adls.html)
	+ [Overview](reference-architectures/azure-aks-adls.html#overview)
	+ [Security](reference-architectures/azure-aks-adls.html#security)
	+ [Main steps](reference-architectures/azure-aks-adls.html#main-steps)
		- [Prepare the instance](reference-architectures/azure-aks-adls.html#prepare-the-instance)
		- [Install DSS](reference-architectures/azure-aks-adls.html#install-dss)
		- [Setup containerized execution configuration in DSS](reference-architectures/azure-aks-adls.html#setup-containerized-execution-configuration-in-dss)
		- [Setup Spark and metastore in DSS](reference-architectures/azure-aks-adls.html#setup-spark-and-metastore-in-dss)
		- [Setup ADLS gen2 connections](reference-architectures/azure-aks-adls.html#setup-adls-gen2-connections)
		- [Install AKS plugin](reference-architectures/azure-aks-adls.html#install-aks-plugin)
		- [Create your first cluster](reference-architectures/azure-aks-adls.html#create-your-first-cluster)
		- [Use your cluster](reference-architectures/azure-aks-adls.html#use-your-cluster)