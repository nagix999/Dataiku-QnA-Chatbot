Exposing a lookup in a dataset[¶](#exposing-a-lookup-in-a-dataset "Permalink to this heading")
==============================================================================================



* [Creating the lookup endpoint](#creating-the-lookup-endpoint)


	+ [Configuration and deployment](#configuration-and-deployment)
* [Performance tuning](#performance-tuning)


	+ [Without API Deployer](#without-api-deployer)
	+ [With API Deployer](#with-api-deployer)



The “dataset(s) lookup” endpoint offers an API for searching records in a DSS dataset by looking it up using lookup keys.


For example, if you have a “customers” dataset in DSS, you can expose a “dataset lookup” endpoint where you can pass in the email address and retrieve other columns from the matching customer.


A “dataset lookup” endpoint can:


* lookup in multiple datasets at once
* lookup multiple input records at once
* lookup based on multiple lookup keys
* retrieve arbitrary number of columns


However, note that each lookup can not return more than one dataset line for each input lookup records. Multiple results either generate an error or get dropped.



Note


The “dataset lookup” endpoint is very similar to the [feature to enrich prediction queries](enrich-prediction-queries.html) before passing them to a prediction model.


In essence the “Dataset lookup” endpoint is only the “Enrich” part of prediction endpoints




[Creating the lookup endpoint](#id1)[¶](#creating-the-lookup-endpoint "Permalink to this heading")
--------------------------------------------------------------------------------------------------


To create a dataset lookup endpoint, start by creating an API service from the API Designer.


* Go to the project homepage
* Go to the API Designer and create a new service
* Give an identifier to your API Service. This identifier will appear in the URL used to query the API
* At this point, the API Service is created but not yet have any endpoint, i.e. it does not yet expose any capability. See [Concepts](concepts.html) for what endpoints are.
* Create a new endpoint of type “Dataset lookup”. Give an identifier to the endpoint. A service can contain multiple endpoints (to manage several models at once, or perform different functions)


The URL to query the API will be like `/public/api/v1/<service_id>/<endpoint_id>/lookup`.


Validate, you are taken to the newly created API Service in the API Designer component.



### [Configuration and deployment](#id2)[¶](#configuration-and-deployment "Permalink to this heading")


Configuration, deployment options and specificities are the same as for the [feature to enrich prediction queries](enrich-prediction-queries.html) before passing them to a prediction model.





[Performance tuning](#id3)[¶](#performance-tuning "Permalink to this heading")
------------------------------------------------------------------------------


Whether you are using directly the API Node or the API Deployer, there are a number of performance tuning settings that can be used to increase the maximum throughput of the API node.


For the Dataset lookup endpoint, you can tune how many concurrent requests your API node can handle.


This configuration allows you to control the number of allocated pipelines.
One allocated pipeline means one persistent connection to the database.
If you have 2 allocated pipelines, 2 requests can be handled
simultaneously, other requests will be queued until one of the pipelines is
freed (or the request times out). When the queue is full, additional requests
are rejected.



### [Without API Deployer](#id4)[¶](#without-api-deployer "Permalink to this heading")



Note


This method is not available on Dataiku Cloud.



You can configure the parallelism parameters for the endpoint by creating a JSON file in the
`config/services` folder in the API node’s data directory.



```
mkdir -p config/services/<SERVICE_ID>

```


Then create or edit the `config/services/<SERVICE_ID>/<ENDPOINT_ID>.json` file


This file must have the following structure and be valid JSON:



```
{
    "pool" : {
        "floor" : 1,
        "ceil" : 8,
        "cruise": 2,
        "queue" : 16,
        "timeout" : 10000
    }
}

```


Those parameters are all positive integers:


* `floor` (default: 1\): Minimum number of pipelines. Those are allocated as
soon as the endpoint is loaded.
* `ceil` (default: 8\): Maximum number of allocated pipelines at any given
time. Additional requests will be queued. `ceil ≥ floor`
* `cruise` (default: 2\): The “nominal” number of allocated pipelines. When
more requests come in, more pipelines may be allocated up to `ceil`. But
when all pending requests have been completed, the number of pipeline may go
down to `cruise`. `floor ≤ cruise ≤ ceil`
* `queue` (default: 16\): The number of requests that will be queued when
`ceil` pipelines are already allocated and busy. The queue is fair: first
received request will be handled first.
* `timeout` (default: 10000\): Time, in milliseconds, that a request may
spend in queue wating for a free pipeline before being rejected.


Creating a new pipeline is an expensive operation, so you should aim `cruise` around the expected maximal nominal query load.




### [With API Deployer](#id5)[¶](#with-api-deployer "Permalink to this heading")


You can configure the parallelism parameters for the endpoint in the Deployment settings, in the “Endpoints tuning” setting.


* Go to the Deployment Settings \> Endpoints tuning
* Add a tuning block for your endpoint by entering your endpoint id and click Add
* Configure the parameters


Those parameters are all positive integers:


* `Pooling min pipelines` (default: 1\): Minimum number of pipelines. Those are allocated as
soon as the endpoint is loaded.
* `Pooling max pipelines` (default: 8\): Maximum number of allocated pipelines at any given
time. Additional requests will be queued. `max pipelines ≥ min pipelines`
* `Pooling cruise pipelines` (default: 2\): The “nominal” number of allocated pipelines. When
more requests come in, more pipelines may be allocated up to `max pipelines`. But
when all pending requests have been completed, the number of pipeline may go
down to `cruise pipelines`. `min pipelines ≤ cruise pipelines ≤ ceil pipelines`
* `Pooling queue length` (default: 16\): The number of requests that will be queued when
`max pipelines` pipelines are already allocated and busy. The queue is fair: first
received request will be handled first.
* `Queue timeout` (default: 10000\): Time, in milliseconds, that a request may
spend in queue waiting for a free pipeline before being rejected.


Creating a new pipeline is an expensive operation, so you should aim `cruise pipelines` around the expected maximal nominal query load.