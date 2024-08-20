The REST API[¶](#the-rest-api "Permalink to this heading")
==========================================================


At its core, the Dataiku Govern public API is a REST HTTP API. The reference HTTP documentation of the Dataiku Govern REST API can be found here: <https://doc.dataiku.com/dss/api/13/govern>.


The API base URL is: <http://dss_host:dss_port/public/api/>



Request and response formats[¶](#request-and-response-formats "Permalink to this heading")
------------------------------------------------------------------------------------------


For POST and PUT requests, the request body must be JSON, with the Content\-Type header set to application/json.


For almost all requests, the response will be JSON.


Whether a request succeeded is indicated by the HTTP status code. A 2xx status code indicates success, whereas a 4xx or 5xx status code indicates failure. When a request fails, the response body is still JSON and contains additional information about the error.




Authentication[¶](#authentication "Permalink to this heading")
--------------------------------------------------------------


Authentication on the REST API is done via the use of [API keys](keys.html). API keys can be managed through the Dataiku Govern administration UI.


The API key must be sent using HTTP Basic Authorization:


* Use the API key as username
* The password can remain blank




Authorization[¶](#authorization "Permalink to this heading")
------------------------------------------------------------


Each API key has access rights and scopes. Dataiku Govern has a simple UI to edit API key permissions.


For more information about API keys, see [Public API Keys](keys.html)




Methods reference[¶](#methods-reference "Permalink to this heading")
--------------------------------------------------------------------


The reference documentation of the API is available at <https://doc.dataiku.com/dss/api/13/govern>


The API base URL is: <http://dss_host:dss_port/public/api/>