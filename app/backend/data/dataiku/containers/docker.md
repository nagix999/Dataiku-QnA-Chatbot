Using Docker instead of Kubernetes[¶](#using-docker-instead-of-kubernetes "Permalink to this heading")
======================================================================================================



* [Why Kubernetes rather than Docker](#why-kubernetes-rather-than-docker)


	+ [Kubernetes](#kubernetes)
	+ [Docker](#docker)
* [Prerequisites (Docker)](#prerequisites-docker)
* [Other prerequisites](#other-prerequisites)
* [Build the base image](#build-the-base-image)
* [Running in Docker](#running-in-docker)
* [Remote daemons](#remote-daemons)


	+ [Rationale](#rationale)
	+ [Setup](#setup)
	
	
		- [With a registry](#with-a-registry)
		- [Without a registry](#without-a-registry)
	+ [Usage](#usage)
* [Containerized execution configurations](#containerized-execution-configurations)


	+ [Multiple execution configurations](#multiple-execution-configurations)



In addition to pushing to Kubernetes, DSS can leverage standalone Docker daemons. This is a very specific setup, and we recommend using Kubernetes preferably.



[Why Kubernetes rather than Docker](#id1)[¶](#why-kubernetes-rather-than-docker "Permalink to this heading")
------------------------------------------------------------------------------------------------------------



### [Kubernetes](#id2)[¶](#kubernetes "Permalink to this heading")


A Kubernetes setup offers a lot of flexibility by providing the following:


* A native ability to run on a cluster of machines. Depending on the available resources, Kubernetes automatically places containers on machines.
* An ability to globally control resource usage.
* A capability to auto scale (for managed cloud Kubernetes services).


DSS can natively leverage multiple cloud Kubernetes clusters for you, *e.g.* from all large cloud providers.




### [Docker](#id3)[¶](#docker "Permalink to this heading")


A Docker\-only configuration is easier to set up, as any recent operating system comes with full Docker execution capabilities. However, Docker itself is a *mono* machine, and while DSS can leverage multiple Docker daemons, each workload must explicitly target a single machine.


With Docker, you can manage the resources used by each container, but you cannot globally restrict resources used by the sum of all containers (or all containers of a user).





[Prerequisites (Docker)](#id4)[¶](#prerequisites-docker "Permalink to this heading")
------------------------------------------------------------------------------------



Warning


DSS is not responsible for setting up your Docker daemon.




Warning


Dataiku DSS is not compatible with podman, the alternative container engine for Redhat 8 / CentOS 8 / AlmaLinux 8



To run workloads in Docker:


* You must have an existing Docker daemon. The `docker` command on the DSS machine must be fully functional and usable by the user running DSS. That includes the permission to build images, and thus access to a Docker socket.


For Docker execution, you may or may not need to push images to an image registry. Pushing images to an image registry is required if you plan to run workloads on multiple Docker daemons, or if you plan to build images on a Docker daemon and to run workloads on another Docker daemon.


If you plan to push images to an image registry:


* The local `docker` command must have permission to push images to your image registry.
* All other docker daemons need to have permission to pull images from your image registry.
* The containers must be able to open TCP connections on the DSS host on any port.




[Other prerequisites](#id5)[¶](#other-prerequisites "Permalink to this heading")
--------------------------------------------------------------------------------


* Your DSS machine must have direct outgoing Internet access in order to install packages.
* Your containers must have direct outgoing Internet access in order to install packages.




[Build the base image](#id6)[¶](#build-the-base-image "Permalink to this heading")
----------------------------------------------------------------------------------


Before you can deploy to Docker, at least one “base image” must be constructed.



Warning


After each upgrade of DSS, you must rebuild all base images.



From the DSS data directory, run



```
./bin/dssadmin build-base-image --type container-exec

```




[Running in Docker](#id7)[¶](#running-in-docker "Permalink to this heading")
----------------------------------------------------------------------------


You then need to create containerized execution configurations.
In Administration \> Settings \> Containerized execution, click **Add another config**, switch “Container engine” to “Docker” and specify an image repository if needed (in which case you would need to push the base image using the button on top of the screen).


Containerized execution configuration can be used:


* In the *project settings*. In that case, the configuration will apply by default to all project activities that can run on containers.
* In the *advanced settings* of a recipe.
* In the *Execution environment* tab of in\-memory machine learning design screen.




[Remote daemons](#id8)[¶](#remote-daemons "Permalink to this heading")
----------------------------------------------------------------------


The `docker` command line is the Docker client. The Docker daemon, responsible for building images and running the containers, may be on the same server or may be remote.



### [Rationale](#id9)[¶](#rationale "Permalink to this heading")


Use cases for a remote docker daemon running your containers include:


* Offloading heavy work onto other servers.
* Leveraging resources available on another machine (like GPUs).


Furthermore, the Docker daemon runs with high privileges, and on some setups it may be moved to another server rather than kept locally.




### [Setup](#id10)[¶](#setup "Permalink to this heading")



#### [With a registry](#id11)[¶](#with-a-registry "Permalink to this heading")


You do not need a specific setup if all of the following conditions are met:


* You are using an image registry.
* On the DSS server, you have a local Docker daemon that can push to that registry.
* The remote Docker daemon can pull from that registry.


Then the local Docker daemon can build the images, and the remote daemon can use those images to run the containers.


![../_images/remote-daemon-with-registry.svg](../_images/remote-daemon-with-registry.svg)

#### [Without a registry](#id12)[¶](#without-a-registry "Permalink to this heading")


Otherwise, the remote Docker daemon has to build the images.


[![../_images/remote-daemon-without-registry.svg](../_images/remote-daemon-without-registry.svg)](../_images/remote-daemon-without-registry.svg)
You still need the local `docker` command (Docker client) to be fully functional and usable by the user running DSS.
You then need to specify the Docker daemon host before building the base image:



```
export DOCKER_HOST=host_of_my_remote_daemon

```


If you are using TLS to securely connect to the remote daemon, then you will also need the corresponding environment variables:



```
export DOCKER_TLS_VERIFY=1
export DOCKER_CERT_PATH=/path/to/docker/cert/directory/

```


`DOCKER_CERT_PATH` is the path to a folder that contains the client certificates: `ca.pem`, `cert.pem`, and `key.pem`.
It can be omitted if it is the default `~/.docker/`.
For more information about Docker and TLS, refer to the [Docker documentation](https://docs.docker.com/engine/security/https/).


You can now build the base image as described in [Initial setup](setup-k8s.html).


Thereafter, you need to specify the same settings in the containerized execution configurations:


* The Docker host
* If using TLS authentication, check “Enable TLS”, and provide the path to the directory with the certificates.


If necessary, rebuild images for code environments. For details, see [Using code envs with containerized execution](code-envs.html).





### [Usage](#id13)[¶](#usage "Permalink to this heading")


By selecting the corresponding containerized execution configuration, you are now ready to deploy your workload on remote Docker containers.



Note


If you have several remote Docker daemons, you would have to create multiple containerized execution configurations,
and to manually dispatch execution among those configurations. DSS does not automatically dispatch among multiple
configurations.






[Containerized execution configurations](#id14)[¶](#containerized-execution-configurations "Permalink to this heading")
-----------------------------------------------------------------------------------------------------------------------


Each kind of activity (such as recipes, machine learning models, …) that you run on containers targets a specific “Containerized execution configuration”.


Docker execution configurations indicate:


* The [base image](concepts.html#base-image-config) to use
* The host of the Docker daemon (by default, runs on the local Docker daemon)
* Resource restriction keys (as specified by Docker)
* Permissions — to restrict which user groups have the right to use a specific Docker execution configuration
* Optionally, the image registry URL
* Optionally, the Docker “runtime” (this is used for advanced use cases like GPUs)



### [Multiple execution configurations](#id15)[¶](#multiple-execution-configurations "Permalink to this heading")


Since each execution configuration specifies resource restrictions, you can use multiple ones to provide differentiated container sizes and quotas to users.