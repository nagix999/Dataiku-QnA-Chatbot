Deployment on Minikube[¶](#deployment-on-minikube "Permalink to this heading")
==============================================================================



Warning


Minikube provides a “toy” Kubernetes cluster that is not suitable for anything beyond simple experimentation.


**Not supported**: Minikube is a [Not supported](../../troubleshooting/support-tiers.html) feature



You can use the API Deployer Kubernetes integration to deploy your API Services on Minikube clusters.


A minikube cluster doesn’t have an image repository. Instead, we’ll use the Docker daemon running within the minikube VM directly, and completely skip the “push to image repository” phase.



Setup[¶](#setup "Permalink to this heading")
--------------------------------------------



### Create the base image[¶](#create-the-base-image "Permalink to this heading")


In order to create the base image directly in the Docker daemon running within the minikube VM, you need to run the following command in the same shell that will build your base image:



```
eval `minikube docker-env`

```


Your session should look like:



```
eval `minikube docker-env`
./bin/dssadmin build-base-image --type apideployer

```




### Start DSS with proper env[¶](#start-dss-with-proper-env "Permalink to this heading")


In order to use the Docker daemon running within the minikube VM, you need to start DSS after running:



```
eval `minikube docker-env`

```


You can do that at the command line:



```
eval `minikube docker-env`
./bin/dss start

```


Alternatively, you can add the following line to `bin/env-site.sh` (you must restart DSS after)


Follow Google documentation on how to create your cluster. We recommend that you allocate at least 7 GB of memory for each cluster node.





Configure infrastructure[¶](#configure-infrastructure "Permalink to this heading")
----------------------------------------------------------------------------------


The default “LoadBalancer” mode for service exposition is not usable for minikube. Instead, you need to use “ClusterIP”


* Go to Infrastructure \> Settings
* Go to Service Exposition
* Set ClusterIP as the exposition mode