Authentication information[¶](#authentication-information "Permalink to this heading")
======================================================================================



Introduction[¶](#introduction "Permalink to this heading")
----------------------------------------------------------


From any R code, it is possible to retrieve information about the user or API key currently running this code.


This can be used:


* From code running within a recipe or notebook, for the code to know who is running said code
* From code running with a plugin recipe, for the code to know who is running said code


Furthermore, the API provides the ability, from a set of HTTP headers, to identify the user represented by these headers. This can be used in the backend of a Shiny webapp, in order to securely identify which user is currently browsing the webapp.




Code samples[¶](#code-samples "Permalink to this heading")
----------------------------------------------------------



### Basic usage[¶](#basic-usage "Permalink to this heading")



```
library(dataiku)

auth_info = dkuGetAuthInfo()

# auth_info is list dict which contains at least a "authIdentifier" member
print(auth_info$authIdentifier)

```




### Other samples[¶](#other-samples "Permalink to this heading")


* How to authenticate calls made from a Shiny webapp: [https://github.com/dataiku/dss\-code\-samples/tree/master/\_old/visualization/shiny/authenticate\-calls](https://github.com/dataiku/dss-code-samples/tree/master/_old/visualization/shiny/authenticate-calls)





Reference documentation[¶](#reference-documentation "Permalink to this heading")
--------------------------------------------------------------------------------


See:


* [https://doc.dataiku.com/dss/api/5\.0/R/dataiku/reference/dkuGetAuthInfo.html](https://doc.dataiku.com/dss/api/5.0/R/dataiku/reference/dkuGetAuthInfo.html)
* [https://doc.dataiku.com/dss/api/5\.0/R/dataiku/reference/dkuGetAuthInfoFromBrowserHeaders.html](https://doc.dataiku.com/dss/api/5.0/R/dataiku/reference/dkuGetAuthInfoFromBrowserHeaders.html)
* [https://doc.dataiku.com/dss/api/5\.0/R/dataiku/reference/dkuGetAuthInfoFromRookRequest.html](https://doc.dataiku.com/dss/api/5.0/R/dataiku/reference/dkuGetAuthInfoFromRookRequest.html)