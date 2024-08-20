Managing versions of your endpoint[¶](#managing-versions-of-your-endpoint "Permalink to this heading")
======================================================================================================



* [Updating and activating endpoint versions](#updating-and-activating-endpoint-versions)
* [Running multiple versions at once](#running-multiple-versions-at-once)
* [Monitoring version activation](#monitoring-version-activation)




[Updating and activating endpoint versions](#id1)[¶](#updating-and-activating-endpoint-versions "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------


The page [First API (without API Deployer)](first-service-manual.html) explains how to import a package containing an updated version of your endpoint.


To activate the latest version of your endpoint, use the command:



```
./bin/apinode-admin service-switch-to-newest <SERVICE_ID>

```




[Running multiple versions at once](#id2)[¶](#running-multiple-versions-at-once "Permalink to this heading")
------------------------------------------------------------------------------------------------------------


Endpoints can serve multiple versions simultaneously, you just need to specify the
probability each version has to be used for scoring a query.



Note


This feature can be used to run some A/B testing of your machine learning
models.



The API node log of queries will store which version of your
endpoint was used, see [Logging in DSS](../operations/logging.html) for more information about logging.


The mapping of versions/probabilities is defined by a JSON containing entries
with `generations` and `proba` properties.



```
{"entries":
        [
                {"generation": "v1",
                 "proba": 0.5
                },
                {"generation": "v2",
                 "proba": 0.5
                }
        ]
}

```



Note


Probabilities must sum to 1\.



The mapping is read from std\_in by the command `service-set-mapping`, example
usage:



```
echo '{"entries":
        [
                {"generation": "v1",
                 "proba": 0.5
                },
                {"generation": "v2",
                 "proba": 0.5
                }
        ]
}' | ./bin/apinode-admin service-set-mapping <SERVICE_ID>

```




[Monitoring version activation](#id3)[¶](#monitoring-version-activation "Permalink to this heading")
----------------------------------------------------------------------------------------------------


In order to know which versions of an endpoint are currently served by the API
and their associated probabilities, you can use the command:



```
./bin/apinode-admin service-list-generations <SERVICE_ID>

```