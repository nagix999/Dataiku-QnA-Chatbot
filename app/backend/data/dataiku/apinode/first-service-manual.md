First API (without API Deployer)[¶](#first-api-without-api-deployer "Permalink to this heading")
================================================================================================


This page will guide you through the process of creating and deploying your first API service. For this example, we’ll use a [prediction endpoint](endpoint-std.html), used to expose as a REST API service a model developed using the [DSS visual machine learning component](../machine-learning/index.html).


The steps to expose a prediction model are:



* [Create the model](#create-the-model)
* [Create the API Service](#create-the-api-service)


	+ [Create directly from the Flow](#create-directly-from-the-flow)
	+ [Create the API service then the endpoint in API Designer](#create-the-api-service-then-the-endpoint-in-api-designer)
* [(Optional) Add test queries](#optional-add-test-queries)
* [Create a version and transfer the package](#create-a-version-and-transfer-the-package)
* [Create the service in the API node](#create-the-service-in-the-api-node)
* [Perform a test query](#perform-a-test-query)
* [Perform real queries](#perform-real-queries)
* [Next steps](#next-steps)



This section assumes that you already have installed and started a DSS API node instance. Please see [Installing API nodes](installing-apinode.html) if that’s not yet the case.



[Create the model](#id1)[¶](#create-the-model "Permalink to this heading")
--------------------------------------------------------------------------


The first step is to create a model and deploy it to the Flow. This is done using the regular Machine Learning component of DSS. Please refer to the [Machine Learning Basics](https://knowledge.dataiku.com/latest/ml-analytics/model-design/ml-basics/tutorial-index.html) and to [Machine learning](../machine-learning/index.html) for more information.




[Create the API Service](#id2)[¶](#create-the-api-service "Permalink to this heading")
--------------------------------------------------------------------------------------


There are two ways you can create your API Service:



### [Create directly from the Flow](#id3)[¶](#create-directly-from-the-flow "Permalink to this heading")



Note


This method can only be used for prediction or clustering endpoints, and cannot be used for other kinds of endpoints.



* In the Flow, select your model, then select “Create API” from the Actions panel
* Give an identifier to your API Service. This identifier will appear in the URL used to query the API
* Within this API Service, give an identifier to the endpoint. A service can contain multiple endpoints (to manage several models at once, or perform different functions)


The URL to query the API will be like `/public/api/v1/<service_id>/<endpoint_id>/predict` for prediction models, and `/public/api/v1/<service_id>/<endpoint_id>/forecast` for time series forecasting models.


Click Append, and you are taken to the newly created API Service in the API Designer component.




### [Create the API service then the endpoint in API Designer](#id4)[¶](#create-the-api-service-then-the-endpoint-in-api-designer "Permalink to this heading")


* Go to the project homepage
* Go to the API Designer and create a new service
* Give an identifier to your API Service. This identifier will appear in the URL used to query the API
* At this point, the API Service is created but does not yet have any endpoint; it does not yet expose any model. See [Concepts](concepts.html) for what endpoints are.
* Create a new endpoint of type “Prediction”. Give an identifier to the endpoint. A service can contain multiple endpoints (to manage several models at once, or perform different functions)
* Select the model to use for this endpoint. This must be a saved model (i.e. a model which has been deployed to the Flow).


The URL to query the API will be like `/public/api/v1/<service_id>/<endpoint_id>/predict` for prediction models, and `/public/api/v1/<service_id>/<endpoint_id>/forecast` for time series forecasting models.


Click Append, and you are taken to the newly created API Service in the API Designer component.


For a simple service, that’s it! You don’t need any further configuration.





[(Optional) Add test queries](#id5)[¶](#optional-add-test-queries "Permalink to this heading")
----------------------------------------------------------------------------------------------


It’s a good practice to add a few test queries to check that your endpoint is working as expected.


* Go to Test queries
* Select add test queries. You can select a “test” dataset to automatically create test queries from the rows of this dataset
* Click on “Run test queries”
* You should see the prediction associated with each test query




[Create a version and transfer the package](#id6)[¶](#create-a-version-and-transfer-the-package "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------


Now that your service is properly configured in DSS, the next step is to create a new version (i.e. snapshot), and to download the associated version package (See [Concepts](concepts.html)).


* Click on the “Prepare package” button
* DSS asks you for a package version number. This version number will be the identifier of this generation for all interactions with the API node. It is recommended that you use a meaningful short name like `v4-new-customer-features`. You want to be able to remember what was new in that generation (think of it as a Git tag)
* Go to the packages tab.
* Click on the Download button


The package file (a .zip file) is downloaded to your computer. Upload the zip file to each host running an API node.




[Create the service in the API node](#id7)[¶](#create-the-service-in-the-api-node "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------



Note


This method is not available on Dataiku Cloud.



We are now going to actually activate the package in the API node.


* Go to the API node directory
* Create the service: run the following command



```
./bin/apinode-admin service-create <SERVICE_ID>

```


* Then, we need to *import* the package zip file:



```
./bin/apinode-admin service-import-generation <SERVICE_ID> <PATH TO ZIP FILE>

```


Now, the API node has unzipped the package in its own folders, and is ready to start using it. At that point, however, the new generation is only *available*, it’s not *active*. In other words, if we were to perform an API query, it would fail because no generation is currently active.



```
./bin/apinode-admin service-switch-to-newest <SERVICE_ID>

```


When this command returns, the API node service is now active, running on the latest (currently the only) generation of the package.




[Perform a test query](#id8)[¶](#perform-a-test-query "Permalink to this heading")
----------------------------------------------------------------------------------


We can now actually perform a prediction. Query the following URL (using your browser for example):


`http://APINODE_SERVER:APINODE_PORT/public/api/v1/SERVICE_ID/ENDPOINT_ID/predict-simple?feat1=val1&feat2=val2`


where `feat1` and `feat2` are the names of features (columns) in your train set.


You should receive a JSON reply with a `result` section containing your prediction (and probabilities in case of a classification model).




[Perform real queries](#id9)[¶](#perform-real-queries "Permalink to this heading")
----------------------------------------------------------------------------------


Once you have confirmed that your service endpoint works, you can actually use the API to integrate in your application.


See [API node user API](api/user-api.html) for more information.




[Next steps](#id10)[¶](#next-steps "Permalink to this heading")
---------------------------------------------------------------


Head over to the documentation page for each type of endpoint to get more information about how to use each one of them.