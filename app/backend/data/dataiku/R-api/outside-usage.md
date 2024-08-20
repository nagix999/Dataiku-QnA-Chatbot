Using the R API outside of DSS[¶](#using-the-r-api-outside-of-dss "Permalink to this heading")
==============================================================================================


You can use most of the R APIs outside of DSS in your favorite IDE, such as RStudio. This allows you to develop code in that IDE and then push it to DSS.



* [Installing the dataiku package](#installing-the-dataiku-package)
* [Setting up the connection with DSS](#setting-up-the-connection-with-dss)


	+ [Setting the current project](#setting-the-current-project)
	+ [Advanced options](#advanced-options)
	
	
		- [Disabling SSL certificate check](#disabling-ssl-certificate-check)




[Installing the dataiku package](#id1)[¶](#installing-the-dataiku-package "Permalink to this heading")
------------------------------------------------------------------------------------------------------


The `dataiku` package is not available through CRAN. Instead, it must be obtained from the DSS instance itself.



```
install.packages("http(s)://DSS_HOST:DSS_PORT/public/packages/dataiku_current.tar.gz", repos=NULL)

```




[Setting up the connection with DSS](#id2)[¶](#setting-up-the-connection-with-dss "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------


In order to connect to DSS, you’ll need to supply:


* The URL of DSS
* A REST API key in order to perform actions


We strongly recommend that you use a personal API key. Please see [Public API Keys](../publicapi/keys.html) for more information


There are three ways to supply this information:


* Using the RStudio integration, as described in [RStudio integration](../R/rstudio.html)
* Through code:



```
library(dataiku)

dkuSetRemoteDSS("http(s)://DSS_HOST:DSS_PORT/", "Your API Key secret")

```


* Through environment variables. Before starting your R process, export the following environment variables:



```
export DKU_DSS_URL=http(s)://DSS_HOST:DSS_PORT/
export DKU_API_KEY="Your API key secret"

```


* Through a configuration file. Create or edit the file `~/.dataiku/config.json` (or `%USERPROFILE%/.dataiku/config.json` on Windows), and add the following content:



```
{
  "dss_instances": {
    "default": {
      "url": "http(s)://DSS_HOST:DSS_PORT/",
      "api_key": "Your API key secret"
    },
  },
  "default_instance": "default"
}

```


You can now use most of the functions of the `dataiku` package from your own machine, independently from the DSS installation.



### [Setting the current project](#id3)[¶](#setting-the-current-project "Permalink to this heading")


Most functions of the `dataiku` package require a “current project” to be set. This allows functions like `dkuReadDataset("my_dataset_name")` to know which project to load the dataset from.


To set the current project, use:



```
dkuSetCurrentProjectKey("PROJECT_KEY")

```




### [Advanced options](#id4)[¶](#advanced-options "Permalink to this heading")



#### [Disabling SSL certificate check](#id5)[¶](#disabling-ssl-certificate-check "Permalink to this heading")


If your DSS has SSL enabled, the packages will verify the certificate. In order for this to work, you may need to add the root authority that signed the DSS SSL certificate to your local trust store. Please refer to your OS or Python manual for instructions.


If this is not possible, you can also disable checking the SSL certificate:


* Through code:



```
dkuSetRemoteDSS("http(s)://DSS_HOST:DSS_PORT/", "Your API Key secret", TRUE)

```


* Through environment variables: Not supported at the moment
* Through configuration file: Modify the configuration file as such:



```
{
  "dss_instances": {
    "default": {
      "url": "http(s)://DSS_HOST:DSS_PORT/",
      "api_key": "Your API key secret",
      "no_check_certificate": true
    }
  },
  "default_instance": "default"
}

```