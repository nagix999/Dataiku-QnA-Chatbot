API node user API[¶](#api-node-user-api "Permalink to this heading")
====================================================================



* [The REST API](#the-rest-api)


	+ [Request and response formats](#request-and-response-formats)
	+ [Authentication](#authentication)
	+ [Methods reference](#methods-reference)
* [API Python client](#api-python-client)


	+ [Installing](#installing)
	+ [Reference API doc](#reference-api-doc)



Predictions are obtained on the API node by using the User REST API.



[The REST API](#id1)[¶](#the-rest-api "Permalink to this heading")
------------------------------------------------------------------



### [Request and response formats](#id2)[¶](#request-and-response-formats "Permalink to this heading")


For POST and PUT requests, the request body must be JSON, with the Content\-Type header set to application/json.


For almost all requests, the response will be JSON.


Whether a request succeeded is indicated by the HTTP status code. A 2xx status code indicates success, whereas a 4xx or 5xx status code indicates failure. When a request fails, the response body is still JSON and contains additional information about the error.




### [Authentication](#id3)[¶](#authentication "Permalink to this heading")


Each service declares whether it uses authentication or not. If the service requires authentication, the valid API keys are defined in DSS.


The API key must be sent using [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication):


* Use the API key as username
* The password can remain blank


The valid API keys are defined on the DSS side, not on the API node side. This ensures that all instances of an API node will accept the same set of client keys




### [Methods reference](#id4)[¶](#methods-reference "Permalink to this heading")


The reference documentation of the API is available at [https://doc.dataiku.com/dss/api/13/apinode\-user](https://doc.dataiku.com/dss/api/13/apinode-user)





[API Python client](#id5)[¶](#api-python-client "Permalink to this heading")
----------------------------------------------------------------------------


Dataiku provides a Python client for the API Node user API. The client makes it easy to write client programs for the API in Python.



### [Installing](#id6)[¶](#installing "Permalink to this heading")


* The API client is already pre\-installed in the DSS virtualenv
* From outside of DSS, you can install the Python client by running `pip install dataiku-api-client`




### [Reference API doc](#id7)[¶](#reference-api-doc "Permalink to this heading")




*class* dataikuapi.APINodeClient(*uri*, *service\_id*, *api\_key\=None*, *bearer\_token\=None*)[¶](#dataikuapi.APINodeClient "Permalink to this definition")
Entry point for the DSS API Node client
This is an API client for the user\-facing API of DSS API Node server (user facing API)




predict\_record(*endpoint\_id*, *features*, *forced\_generation\=None*, *dispatch\_key\=None*, *context\=None*, *with\_explanations\=None*, *explanation\_method\=None*, *n\_explanations\=None*, *n\_explanations\_mc\_steps\=None*)[¶](#dataikuapi.APINodeClient.predict_record "Permalink to this definition")
Predicts a single record on a DSS API node endpoint (standard or custom prediction)



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **features** – Python dictionary of features of the record
* **forced\_generation** – See documentation about multi\-version prediction
* **dispatch\_key** – See documentation about multi\-version prediction
* **context** – Optional, Python dictionary of additional context information. The context information is logged, but not directly used.
* **with\_explanations** – Optional, whether individual explanations should be computed for each record. The prediction endpoint must be compatible. If None, will use the value configured in the endpoint.
* **explanation\_method** – Optional, method to compute explanations. Valid values are ‘SHAPLEY’ or ‘ICE’. If None, will use the value configured in the endpoint.
* **n\_explanations** – Optional, number of explanations to output per prediction. If None, will use the value configured in the endpoint.
* **n\_explanations\_mc\_steps** – Optional, precision parameter for SHAPLEY method, higher means more precise but slower (between 25 and 1000\).
If None, will use the value configured in the endpoint.



Returns:
a Python dict of the API answer. The answer contains a “result” key (itself a dict)







predict\_records(*endpoint\_id*, *records*, *forced\_generation\=None*, *dispatch\_key\=None*, *with\_explanations\=None*, *explanation\_method\=None*, *n\_explanations\=None*, *n\_explanations\_mc\_steps\=None*)[¶](#dataikuapi.APINodeClient.predict_records "Permalink to this definition")
Predicts a batch of records on a DSS API node endpoint (standard or custom prediction)



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **records** – Python list of records. Each record must be a Python dict. Each record must contain a “features” dict (see predict\_record) and optionally a “context” dict.
* **forced\_generation** – See documentation about multi\-version prediction
* **dispatch\_key** – See documentation about multi\-version prediction
* **with\_explanations** – Optional, whether individual explanations should be computed for each record. The prediction endpoint must be compatible. If None, will use the value configured in the endpoint.
* **explanation\_method** – Optional, method to compute explanations. Valid values are ‘SHAPLEY’ or ‘ICE’. If None, will use the value configured in the endpoint.
* **n\_explanations** – Optional, number of explanations to output per prediction. If None, will use the value configured in the endpoint.
* **n\_explanations\_mc\_steps** – Optional, precision parameter for SHAPLEY method, higher means more precise but slower (between 25 and 1000\).
If None, will use the value configured in the endpoint.



Returns:
a Python dict of the API answer. The answer contains a “results” key (which is an array of result objects)







forecast(*endpoint\_id*, *records*, *forced\_generation\=None*, *dispatch\_key\=None*)[¶](#dataikuapi.APINodeClient.forecast "Permalink to this definition")
Forecast using a time series forecasting model on a DSS API node endpoint



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **records** (*array*) – List of time series data records to be used as an input for the
time series forecasting model. Each record should be a dict where
keys are feature names, and values feature values.


Example:



```
records = [
        {'date': '2015-01-04T00:00:00.000Z',
          'timeseries_id': 'A', 'target': 10.0},
        {'date': '2015-01-04T00:00:00.000Z',
          'timeseries_id': 'B', 'target': 4.5},
        {'date': '2015-01-05T00:00:00.000Z',
          'timeseries_id': 'A', 'target': 2.0},
        ...
        {'date': '2015-03-20T00:00:00.000Z',
          'timeseries_id': 'B', 'target': 1.3}
]

```
* **forced\_generation** – See documentation about multi\-version prediction
* **dispatch\_key** – See documentation about multi\-version prediction



Returns:
a Python dict of the API answer. The answer contains a “results” key
(which is an array of result objects, corresponding to the forecast records)
Example:



```
{'results': [
    {'forecast': 12.57, 'ignored': False,
      'quantiles': [0.0001, 0.5, 0.9999],
      'quantilesValues': [3.0, 16.0, 16.0],
      'time': '2015-03-21T00:00:00.000000Z',
      'timeseriesIdentifier': {'timeseries_id': 'A'}},
    {'forecast': 15.57, 'ignored': False,
      'quantiles': [0.0001, 0.5, 0.9999],
      'quantilesValues': [3.0, 18.0, 19.0],
      'time': '2015-03-21T00:00:00.000000Z',
      'timeseriesIdentifier': {'timeseries_id': 'B'}},
  ...],
...}

```










predict\_effect(*endpoint\_id*, *features*, *forced\_generation\=None*, *dispatch\_key\=None*)[¶](#dataikuapi.APINodeClient.predict_effect "Permalink to this definition")
Predicts the treatment effect of a single record on a DSS API node endpoint (standard causal prediction)



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **features** – Python dictionary of features of the record
* **forced\_generation** – See documentation about multi\-version prediction
* **dispatch\_key** – See documentation about multi\-version prediction



Returns:
a Python dict of the API answer. The answer contains a “result” key (itself a dict)







predict\_effects(*endpoint\_id*, *records*, *forced\_generation\=None*, *dispatch\_key\=None*)[¶](#dataikuapi.APINodeClient.predict_effects "Permalink to this definition")
Predicts the treatment effects on a batch of records on a DSS API node endpoint (standard causal prediction)



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **records** – Python list of records. Each record must be a Python dict. Each record must contain a “features” dict (see predict\_record) and optionally a “context” dict.
* **dispatch\_key** – See documentation about multi\-version prediction



Returns:
a Python dict of the API answer. The answer contains a “results” key (which is an array of result objects)







sql\_query(*endpoint\_id*, *parameters*)[¶](#dataikuapi.APINodeClient.sql_query "Permalink to this definition")
Queries a “SQL query” endpoint on a DSS API node



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **parameters** – Python dictionary of the named parameters for the SQL query endpoint



Returns:
a Python dict of the API answer. The answer is the a dict with a columns field and a rows field (list of rows as list of strings)







lookup\_record(*endpoint\_id*, *record*, *context\=None*)[¶](#dataikuapi.APINodeClient.lookup_record "Permalink to this definition")
Lookup a single record on a DSS API node endpoint of “dataset lookup” type



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **record** – Python dictionary of features of the record
* **context** – Optional, Python dictionary of additional context information. The context information is logged, but not directly used.



Returns:
a Python dict of the API answer. The answer contains a “data” key (itself a dict)







lookup\_records(*endpoint\_id*, *records*)[¶](#dataikuapi.APINodeClient.lookup_records "Permalink to this definition")
Lookups a batch of records on a DSS API node endpoint of “dataset lookup” type



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **records** – Python list of records. Each record must be a Python dict, containing at least one entry called “data”: a dict containing the input columns



Returns:
a Python dict of the API answer. The answer contains a “results” key, which is an array of result objects. Each result contains a “data” dict which is the output







run\_function(*endpoint\_id*, *\*\*kwargs*)[¶](#dataikuapi.APINodeClient.run_function "Permalink to this definition")
Calls a “Run function” endpoint on a DSS API node



Parameters:
* **endpoint\_id** (*str*) – Identifier of the endpoint to query
* **kwargs** – Arguments of the function



Returns:
The function result