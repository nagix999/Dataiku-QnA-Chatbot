Running DSS as a container (in Docker or Kubernetes)[¶](#running-dss-as-a-container-in-docker-or-kubernetes "Permalink to this heading")
========================================================================================================================================



Warning


Running DSS inside a container is a relatively complex setup. It requires good familiarity
with building and running container images, notably familarity with writing Dockerfiles.


Running DSS itself as a container (either by running Docker directly, or through Kubernetes)
is generally speaking incompatible with the ability to leverage containers as a processing engine.
See [Elastic AI computation](../../containers/index.html). While some things are possible, it requires high expertise with
networking and image building capabilities.


We do not recommend running DSS inside a container without discussing first with your Dataiku Account Manager
or Customer Success Manager.