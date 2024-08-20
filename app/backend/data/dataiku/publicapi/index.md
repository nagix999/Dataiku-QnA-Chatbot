Public REST API[¶](#public-rest-api "Permalink to this heading")
================================================================


The DSS public API allows you to interact with DSS from any external system. It allows you to perform a large variety of administration and maintenance operations, in addition to access to datasets and other data managed by DSS.


The DSS public API is available:



> * As a [Python API client](https://developer.dataiku.com/latest/api-reference/python/index.html "(in Developer Guide)"). This allows you to easily send commands to the public API from a Python program. This is the recommended way to interact with the API.
> * As an [HTTP REST API](rest.html). This lets you interact with DSS from any program that can send an HTTP request. This requires more work.


The Python API client can be used both from inside DSS and from the outside world. Using the Python API client from inside DSS lets you do advanced automation and introspection tasks. Example usage of the Python client can be found at [Python](https://developer.dataiku.com/latest/api-reference/python/index.html "(in Developer Guide)")



* [Features](features.html)
* [Public API Keys](keys.html)
	+ [Personal API keys](keys.html#personal-api-keys)
	+ [Project\-level keys](keys.html#project-level-keys)
	+ [Global API keys](keys.html#global-api-keys)
* [The REST API](rest.html)
	+ [Request and response formats](rest.html#request-and-response-formats)
	+ [Authentication](rest.html#authentication)
	+ [Authorization](rest.html#authorization)
	+ [Methods reference](rest.html#methods-reference)