DSS in GCP[¶](#dss-in-gcp "Permalink to this heading")
======================================================


DSS features deep integration with multiple GCP services:


* Connecting to GCS data
* Connecting to Google Cloud SQL
* Connecting to BigQuery, including fast copy between GCS and BigQuery
* Leveraging Dataproc, including dynamically\-managed Dataproc clusters
* Leveraging GKE, including dynamically\-managed GKE clusters



* [Reference architecture: managed compute on GKE and storage on GCS](reference-architectures/gke-gcs.html)
	+ [Overview](reference-architectures/gke-gcs.html#overview)
	+ [Security](reference-architectures/gke-gcs.html#security)
	+ [Main steps](reference-architectures/gke-gcs.html#main-steps)
		- [Prepare the instance](reference-architectures/gke-gcs.html#prepare-the-instance)
		- [Install DSS](reference-architectures/gke-gcs.html#install-dss)
		- [Setup containerized execution configuration in DSS](reference-architectures/gke-gcs.html#setup-containerized-execution-configuration-in-dss)
		- [Setup Spark and metastore in DSS](reference-architectures/gke-gcs.html#setup-spark-and-metastore-in-dss)
		- [Setup GCS connections](reference-architectures/gke-gcs.html#setup-gcs-connections)
		- [Install GKE plugin](reference-architectures/gke-gcs.html#install-gke-plugin)
		- [Create your first cluster](reference-architectures/gke-gcs.html#create-your-first-cluster)
		- [Use your cluster](reference-architectures/gke-gcs.html#use-your-cluster)