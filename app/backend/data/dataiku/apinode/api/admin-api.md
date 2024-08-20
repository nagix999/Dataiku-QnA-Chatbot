API node administration API[¶](#api-node-administration-api "Permalink to this heading")
========================================================================================



* [The REST API](#the-rest-api)


	+ [Request and response formats](#request-and-response-formats)
	+ [Authentication](#authentication)
	+ [Methods reference](#methods-reference)
* [Admin REST API Python client](#admin-rest-api-python-client)


	+ [Installing](#installing)
	+ [Reference API doc](#reference-api-doc)



The API node can be managed through:


* The `apinode-admin` command\-line tool. See [Using the apinode\-admin tool](../operations/cli-tool.html)
* An HTTP REST API.



[The REST API](#id1)[¶](#the-rest-api "Permalink to this heading")
------------------------------------------------------------------



### [Request and response formats](#id2)[¶](#request-and-response-formats "Permalink to this heading")


For POST and PUT requests, the request body must be JSON, with the Content\-Type header set to application/json.


For almost all requests, the response will be JSON.


Whether a request succeeded is indicated by the HTTP status code. A 2xx status code indicates success, whereas a 4xx or 5xx status code indicates failure. When a request fails, the response body is still JSON and contains additional information about the error.




### [Authentication](#id3)[¶](#authentication "Permalink to this heading")


Authentication on the admin API is done via the use of API keys. API keys can be managed using the `apinode-admin` command\-line tool.


The API key must be sent using HTTP Basic Authorization:


* Use the API key as username
* The password can remain blank




### [Methods reference](#id4)[¶](#methods-reference "Permalink to this heading")


The reference documentation of the API is available at [https://doc.dataiku.com/dss/api/13/apinode\-admin](https://doc.dataiku.com/dss/api/13/apinode-admin)





[Admin REST API Python client](#id5)[¶](#admin-rest-api-python-client "Permalink to this heading")
--------------------------------------------------------------------------------------------------


Dataiku provides a Python client for the API Node administration API. The client makes it easy to write client programs for the API in Python.



### [Installing](#id6)[¶](#installing "Permalink to this heading")


* The API client is already pre\-installed in the DSS Python environment
* From outside of DSS, you can install the Python client by running `pip install dataiku-api-client`




### [Reference API doc](#id7)[¶](#reference-api-doc "Permalink to this heading")




*class* dataikuapi.APINodeAdminClient(*uri*, *api\_key*)[¶](#dataikuapi.APINodeAdminClient "Permalink to this definition")
Entry point for the DSS APINode admin client




create\_service(*service\_id*)[¶](#dataikuapi.APINodeAdminClient.create_service "Permalink to this definition")
Creates a new API service



Parameters:
**service\_id** – id of the created API service







list\_services()[¶](#dataikuapi.APINodeAdminClient.list_services "Permalink to this definition")
Lists the currently declared services and their enabled/disabled state



Returns:
a dict of services containing their id and state, as a JSON object



Return type:
dict







service(*service\_id*)[¶](#dataikuapi.APINodeAdminClient.service "Permalink to this definition")
Gets a handle to interact with a service



Parameters:
**service\_id** – id of requested service



Return type:

class:
dataikuapi.apinode\_admin.service.APINodeService












auth()[¶](#dataikuapi.APINodeAdminClient.auth "Permalink to this definition")
Returns a handle to interact with authentication



Return type:

class:
dataikuapi.apinode\_admin.auth.APINodeAuth












get\_metrics()[¶](#dataikuapi.APINodeAdminClient.get_metrics "Permalink to this definition")
Get the metrics for this API Node



Returns:
the metrics, as a JSON object



Return type:
dict







import\_code\_env\_in\_cache(*file\_dir*, *language*)[¶](#dataikuapi.APINodeAdminClient.import_code_env_in_cache "Permalink to this definition")
Import a code env in global cache from an exported code env base folder



Parameters:
* **file\_dir** – path of an exported code env base folder
* **language** – language of the code env (python or R)







register\_code\_env\_in\_cache(*exported\_env\_dir*, *built\_env\_dir*, *language*)[¶](#dataikuapi.APINodeAdminClient.register_code_env_in_cache "Permalink to this definition")
Import a code env in global cache from an exported code env base folder



Parameters:
* **exported\_env\_dir** – path of an exported code env base folder
* **built\_env\_dir** – path where the code env was built and is available
* **language** – language of the code env (python or R)







import\_model\_archive\_in\_cache(*model\_archive\_path*)[¶](#dataikuapi.APINodeAdminClient.import_model_archive_in_cache "Permalink to this definition")
Import a model in model cache from an exported model archive



Parameters:
**model\_archive\_path** – path of an exported model archive







clear\_model\_cache()[¶](#dataikuapi.APINodeAdminClient.clear_model_cache "Permalink to this definition")
Clear the model cache





clean\_unused\_services\_and\_generations()[¶](#dataikuapi.APINodeAdminClient.clean_unused_services_and_generations "Permalink to this definition")
Deletes disabled services, unused generations and unused code environments





clean\_code\_env\_cache()[¶](#dataikuapi.APINodeAdminClient.clean_code_env_cache "Permalink to this definition")
Deletes unused code envs from cache






*class* dataikuapi.apinode\_admin.service.APINodeService(*client*, *service\_id*)[¶](#dataikuapi.apinode_admin.service.APINodeService "Permalink to this definition")
A handle to interact with the settings of an API node service




delete()[¶](#dataikuapi.apinode_admin.service.APINodeService.delete "Permalink to this definition")
Deletes the API node service





list\_generations()[¶](#dataikuapi.apinode_admin.service.APINodeService.list_generations "Permalink to this definition")



import\_generation\_from\_archive(*file\_path*)[¶](#dataikuapi.apinode_admin.service.APINodeService.import_generation_from_archive "Permalink to this definition")



preload\_generation(*generation*)[¶](#dataikuapi.apinode_admin.service.APINodeService.preload_generation "Permalink to this definition")



disable()[¶](#dataikuapi.apinode_admin.service.APINodeService.disable "Permalink to this definition")
Disable the service.





enable()[¶](#dataikuapi.apinode_admin.service.APINodeService.enable "Permalink to this definition")



set\_generations\_mapping(*mapping*)[¶](#dataikuapi.apinode_admin.service.APINodeService.set_generations_mapping "Permalink to this definition")
Setting a generations mapping automatically enables
the service





switch\_to\_newest()[¶](#dataikuapi.apinode_admin.service.APINodeService.switch_to_newest "Permalink to this definition")



switch\_to\_single\_generation(*generation*)[¶](#dataikuapi.apinode_admin.service.APINodeService.switch_to_single_generation "Permalink to this definition")




*class* dataikuapi.apinode\_admin.auth.APINodeAuth(*client*)[¶](#dataikuapi.apinode_admin.auth.APINodeAuth "Permalink to this definition")
A handle to interact with authentication settings on API node




list\_keys()[¶](#dataikuapi.apinode_admin.auth.APINodeAuth.list_keys "Permalink to this definition")
Lists the Admin API keys





add\_key(*label\=None*, *description\=None*, *created\_by\=None*)[¶](#dataikuapi.apinode_admin.auth.APINodeAuth.add_key "Permalink to this definition")
Add an Admin API key. Returns the key details





delete\_key(*key*)[¶](#dataikuapi.apinode_admin.auth.APINodeAuth.delete_key "Permalink to this definition")