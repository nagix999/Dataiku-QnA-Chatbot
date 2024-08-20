Setup with Kubernetes[¶](#setup-with-kubernetes "Permalink to this heading")
============================================================================


This reference architecture will guide you through deploying on your DSS running some workloads on Kubernetes.


This applies both to “static” Kubernetes clusters and “dynamic / managed by DSS” Kubernetes clusters.


This document covers:


* The fundamental local isolation code layer
* Security for running “regular” workloads on Kubernetes (Python, R, Machine Learning)
* Security for running Spark workloads on Kubernetes


In the rest of this document:


* `dssuser` means the UNIX user which runs the DSS software
* `DATADIR` means the directory in which DSS is running



* [Initial setup](#initial-setup)
* [Common setup](#common-setup)
* [Running regular workloads](#running-regular-workloads)
* [Running Spark workloads](#running-spark-workloads)


	+ [One\-namespace\-per\-user setup](#one-namespace-per-user-setup)
	+ [One\-namespace\-per\-team setup](#one-namespace-per-team-setup)




[Initial setup](#id1)[¶](#initial-setup "Permalink to this heading")
--------------------------------------------------------------------


Please read carefully the [Prerequisites and limitations](../prerequisites-limitations.html) documentation and check that you have all required information.




[Common setup](#id2)[¶](#common-setup "Permalink to this heading")
------------------------------------------------------------------


Initialize UIF (including local code isolation), see [Initial Setup](../initial-setup.html)




[Running regular workloads](#id3)[¶](#running-regular-workloads "Permalink to this heading")
--------------------------------------------------------------------------------------------


When you run non\-Spark workloads on Kubernetes, the Kubernetes job is always started by the `dssuser`. The `dssuser` requires the ability to connect and create pods and secrets on your Kubernetes cluster.


However, once the user’s code has been started, a fundamental property of Kubernetes is that each container is independent and cannot access others. Thus, code running in one container is *isolated* from code running in another container without a specific need for impersonation.


No further setup is thus required for running regular workloads securely on Kubernetes.




[Running Spark workloads](#id4)[¶](#running-spark-workloads "Permalink to this heading")
----------------------------------------------------------------------------------------


When you run Spark workloads on Kubernetes, DSS uses the *sudo* mechanism of the local code isolation capability to start the `spark-submit` process running the Spark driver under the identity of the end\-user. This driver process then sends control orders to Kubernetes in order to start pods for the Spark executor.


In other words, the Spark driver requires access to the Kubernetes API but runs untrusted code. This requires that each impersonated end\-user has credentials to access Kubernetes. While this deployment is completely possible, it is not typically the case (each user needs to have a `~/.kube/config` file with proper credentials for the Kubernetes cluster).


To make it easier to run Spark on Kubernetes with UIF, DSS features a “managed Spark on Kubernetes” mode. In that mode, DSS can automatically generate temporary service accounts for each job, pass these temporary credentials to the Spark job, and delete the temporary service account after the job is complete.


In Kubernetes, the granularity of security is the namespace: if a service account has the right to create pods in a namespace, it is theoretically possible for it to gain all privileges on that namespace. Therefore, it is recommended to use one namespace per user (or one namespace per team). The “managed Spark on Kubernetes” mode can automatically create dynamic namespaces, and associate service accounts to namespaces. This requires that the account running DSS has credentials on the Kubernetes cluster that allow it to create namespaces.



### [One\-namespace\-per\-user setup](#id5)[¶](#one-namespace-per-user-setup "Permalink to this heading")


* In the Spark configuration, enable the “Managed K8S configuration” checkbox
* In “Target namespace”, enter something like `dss-ns-${dssUserLogin}`
* Enable “Auto\-create namespace”
* Set Authentication mode to “Create service accounts dynamically”


Each time a user U starts a Job that uses this particular Spark configuration, DSS will:


* Create if needed the `dss-ns-U` namespace
* Create a service account, and grant it rights limited to `dss-ns-U`
* Get the secret of this service account and pass it to the Spark driver
* The Spark driver will use this secret to create and manage pods in the `dss-ns-U` namespace (but does not have access to any other namespace)
* At the end of the job, destroy the service account




### [One\-namespace\-per\-team setup](#id6)[¶](#one-namespace-per-team-setup "Permalink to this heading")


* In the Spark configuration, enable the “Managed K8S configuration” checkbox
* In “Target namespace”, enter something like `${adminProperty:k8sNS}`
* Set Authentication mode to “Create service accounts dynamically”


Then, for each user, you need to set an “admin property” named `k8sNS`, with the name of the team namespace to use for this user. This can be automated through the API. See above for how this will work.


With this setup, there may be a fixed number of namespaces so you don’t need to auto\-create namespaces. The account running Dataiku only needs full access to these namespaces in order to create service accounts in them. This can be useful if you don’t have the ability to create namespaces. However, this leaves the possibility that skilled hostile users can try to attack other Spark jobs running in the same namespace.