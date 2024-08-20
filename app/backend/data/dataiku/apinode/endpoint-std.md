Exposing a Visual Model[¶](#exposing-a-visual-model "Permalink to this heading")
================================================================================



* [Creating the model](#creating-the-model)
* [Create the API](#create-the-api)


	+ [Create the API directly from the Flow](#create-the-api-directly-from-the-flow)
	+ [Create the API service then the endpoint](#create-the-api-service-then-the-endpoint)
* [Enriching queries features](#enriching-queries-features)
* [Testing your endpoint](#testing-your-endpoint)


	+ [Prediction model](#prediction-model)
	+ [Time series forecasting model](#time-series-forecasting-model)
* [Deploying your service](#deploying-your-service)
* [Optimized scoring](#optimized-scoring)
* [Row\-level explanations](#row-level-explanations)
* [Getting post\-enrichment information](#getting-post-enrichment-information)
* [Performance tuning](#performance-tuning)


	+ [Without API Deployer](#without-api-deployer)
	+ [With API Deployer](#with-api-deployer)



The primary function of the DSS API Deployer and API Node is to expose as an API a model trained using the [DSS visual machine learning component](../machine-learning/index.html).


The steps to expose a model are:


* Train the model in Analysis
* Deploy the model to Flow
* Create a new API service
* Create an endpoint using the saved model
* Either:
	+ Create a package of your API, deploy and activate the package on API nodes
	+ Publish your service to the API Deployer, and use API Deployer to deploy your API


This section assumes that you already have a working API node and/or API Deployer setup. Please see [Setting up the API Deployer and deployment infrastructures](api-deployment-infrastructures.html) if that’s not yet the case.



[Creating the model](#id1)[¶](#creating-the-model "Permalink to this heading")
------------------------------------------------------------------------------


The first step is to create a model and deploy it to the Flow. This is done using the regular Machine Learning component of DSS. Please refer to the Tutorial 103 of DSS and to [Machine learning](../machine-learning/index.html) for more information.




[Create the API](#id2)[¶](#create-the-api "Permalink to this heading")
----------------------------------------------------------------------


There are two ways you can create your API Service



### [Create the API directly from the Flow](#id3)[¶](#create-the-api-directly-from-the-flow "Permalink to this heading")


* In the Flow, select your model, and click “Create an API”
* Give an identifier to your API Service. This identifier will appear in the URL used to query the API
* Within this API Service, give an identifier to the endpoint. A service can contain multiple endpoints (to manage several models at once, or perform different functions)


The URL to query the API will be like:


* `/public/api/v1/<service_id>/<endpoint_id>/predict` for prediction models
* `/public/api/v1/<service_id>/<endpoint_id>/predict-effect` for causal prediction models
* `/public/api/v1/<service_id>/<endpoint_id>/forecast` for time series forecasting models.


Validate, you are taken to the newly created API Service in the API Designer component.




### [Create the API service then the endpoint](#id4)[¶](#create-the-api-service-then-the-endpoint "Permalink to this heading")


* Go to the API Designer and create a new service
* Give an identifier to your API Service. This identifier will appear in the URL used to query the API
* Create a new endpoint and give it an identifier. A service can contain multiple endpoints (to manage several models at once, or perform different functions)
* Select the model to use for this endpoint. This must be a saved model (ie. a model which has been deployed to the Flow).


The URL to query the API will be like:


* `/public/api/v1/<service_id>/<endpoint_id>/predict` for prediction models
* `/public/api/v1/<service_id>/<endpoint_id>/predict-effect` for causal prediction models
* `/public/api/v1/<service_id>/<endpoint_id>/forecast` for time series forecasting models.


Validate, you are taken to the newly created API Service in the API Designer component.





[Enriching queries features](#id5)[¶](#enriching-queries-features "Permalink to this heading")
----------------------------------------------------------------------------------------------


See [Enriching prediction queries](enrich-prediction-queries.html).




[Testing your endpoint](#id6)[¶](#testing-your-endpoint "Permalink to this heading")
------------------------------------------------------------------------------------


It’s a good practice to add a few test queries to check that your endpoint is working as expected.


* Go to test
* Select add test queries. You can select a “test” dataset to automatically create test queries from the rows of this dataset
* Click on “Run test queries”
* You should see the prediction associated to each test query


Test queries are JSON objects akin to the ones that you would pass to the [API node user API](api/user-api.html). When you click on the “Play test queries” button, the test queries are sent to the dev server, and the result is printed.



### [Prediction model](#id7)[¶](#prediction-model "Permalink to this heading")


Each test query should look like this for a prediction model (both regular and causal):



```
{
        "features" : {
                "feature1" : "value1",
                "feature2" : 42
        }
}

```


For causal predictions, neither the outcome variable nor the treatment variable are expected.




### [Time series forecasting model](#id8)[¶](#time-series-forecasting-model "Permalink to this heading")


For a time series forecasting model, you need to provide a list of past data. The model will forecast one horizon of data after the last date of the list.


For a single time series, the test query should look like this:



```
{
        "items" : [
                {
                        "dateFeature": "2022-01-01T00:00:00.000",
                        "targetFeature" : 10,
                },
                {
                        "dateFeature": "2022-01-02T00:00:00.000",
                        "targetFeature" : 12,
                },
                {
                        "dateFeature": "2022-01-03T00:00:00.000",
                        "targetFeature" : 11,
                }
        ]
}

```


For multiple time series, the test query should look like this:



```
{
        "items" : [
                {
                        "identifierFeature": "id1",
                        "dateFeature": "2022-01-01T00:00:00.000",
                        "targetFeature" : 10,
                },
                {
                        "identifierFeature": "id1",
                        "dateFeature": "2022-01-02T00:00:00.000",
                        "targetFeature" : 12,
                },
                {
                        "identifierFeature": "id2",
                        "dateFeature": "2022-01-01T00:00:00.000",
                        "targetFeature" : 1,
                },
                {
                        "identifierFeature": "id2",
                        "dateFeature": "2022-01-02T00:00:00.000",
                        "targetFeature" : 2,
                }
        ]
}

```


If your model uses external features, the test query must also contain their future values for one forecast horizon. For instance with a single time series it should look like this:



```
{
        "items" : [
                {
                        "dateFeature": "2022-01-01T00:00:00.000",
                        "targetFeature" : 10,
                        "externalFeature1" : "value1",
                        "externalFeature2" : 0
                },
                {
                        "dateFeature": "2022-01-02T00:00:00.000",
                        "targetFeature" : 12,
                        "externalFeature1" : "value2",
                        "externalFeature2" : 1
                },
                {
                        "dateFeature": "2022-01-03T00:00:00.000",
                        "targetFeature" : 11,
                        "externalFeature1" : "value2",
                        "externalFeature2" : 0
                },
                {
                        "dateFeature": "2022-01-04T00:00:00.000",
                        "externalFeature1" : "value1",
                        "externalFeature2" : 1
                },
                {
                        "dateFeature": "2022-01-05T00:00:00.000",
                        "externalFeature1" : "value2",
                        "externalFeature2" : 0
                }
        ]
}

```





[Deploying your service](#id9)[¶](#deploying-your-service "Permalink to this heading")
--------------------------------------------------------------------------------------


Please see:


* [First API (without API Deployer)](first-service-manual.html) (if you are not using API Deployer)
* [First API (with API Deployer)](first-service-apideployer.html) (if you are using API Deployer)




[Optimized scoring](#id10)[¶](#optimized-scoring "Permalink to this heading")
-----------------------------------------------------------------------------


If your model is java\-compatible (See: [Scoring engines](../machine-learning/scoring-engines.html)), you may select “Java scoring.” This will make the deployed model use java to score new records, resulting in extremely improved performance and throughput for your endpoint.




[Row\-level explanations](#id11)[¶](#row-level-explanations "Permalink to this heading")
----------------------------------------------------------------------------------------


The API node can provide per\-row explanations of your models, using the ICE or Shapley methods. For more details about row\-level explanations in Dataiku, please see [Individual prediction explanations](../machine-learning/supervised/explanations.html)


Explanations are not compatible with Optimized scoring.


You can either enable explanations by default for all predictions in the API designer, or request explanations on a per\-query basis.


To request explanations, add this to your API request:



```
{
        "features" : {
                "feature1" : "value1",
                "feature2" : 42
        },
        "explanations": {
                "enabled": true,
                "method": "SHAPLEY",
                "nMonteCarloSteps": 100,
                "nExplanations": 5
        }
}

```


Explanations can also be requested through the Python client ([API node user API](api/user-api.html))




[Getting post\-enrichment information](#id12)[¶](#getting-post-enrichment-information "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


When using queries enrichment (see [Enriching prediction queries](enrich-prediction-queries.html)), it can be useful to view the complete set of features after enrichment.


You can ask DSS to:


* Dump the post\-enrichment information in the prediction response
* Dump the post\-enrichment information in the audit log


Both behaviors can be configured from the “Advanced” tab in the API designer




[Performance tuning](#id13)[¶](#performance-tuning "Permalink to this heading")
-------------------------------------------------------------------------------


Whether you are using directly the API Node or the API Deployer, there are a number of performance tuning settings that can be used to increase the maximum throughput of the API node.


It is possible to tune the behavior of prediction endpoints on the API node side.


For the prediction endpoint, you can tune how many concurrent requests your API node can handle.
This depends mainly on your model (its speed and in\-memory size) and the available resources on the server(s) running the API node.


This configuration allows you to control the number of allocated pipelines.
One allocated pipeline means one model loaded in memory that can handle a
prediction request. If you have 2 allocated pipelines, 2 requests can be handled
simultaneously, other requests will be queued until one of the pipelines is
freed (or the request times out). When the queue is full, additional requests
are rejected.



### [Without API Deployer](#id14)[¶](#without-api-deployer "Permalink to this heading")



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




### [With API Deployer](#id15)[¶](#with-api-deployer "Permalink to this heading")


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