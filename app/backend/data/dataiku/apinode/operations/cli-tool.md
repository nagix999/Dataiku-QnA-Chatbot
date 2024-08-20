Using the apinode\-admin tool[¶](#using-the-apinode-admin-tool "Permalink to this heading")
===========================================================================================


A DSS API node deployment includes a command\-line tool to manage the API node: `./bin/apinode-admin`


Almost all administration operations can be performed using this command\-line tool running locally on the DSS API node server.



Note


This method is not available on Dataiku Cloud.




Note


API node administration can also be performed (including remotely) through the REST Admin API or its Python client.
See [API node administration API](../api/admin-api.html) for more information.



The general syntax is:



```
./bin/apinode-admin COMMAND COMMAND_ARGS

```


* Running `./bin/apinode-admin -h` lists the available commands
* Running `./bin/apinode-admin COMMAND -h` prints the help for COMMAND


The main commands of the apinode\-admin tool are:



Commands to manage the list of services[¶](#commands-to-manage-the-list-of-services "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------


* `services-list`
* `service-create`
* `service-delete`




Commands to manage the on\-disk generations of a service[¶](#commands-to-manage-the-on-disk-generations-of-a-service "Permalink to this heading")
-------------------------------------------------------------------------------------------------------------------------------------------------


* `service-import-generation`
* `service-list-generations`




Commands to manage the activation of generations[¶](#commands-to-manage-the-activation-of-generations "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------------


* `service-switch-to-newest`
* `service-switch-to-generation`
* `service-set-mapping` (Command to set a multi\-version service. See [Managing versions of your endpoint](../managing_versions.html))
* `service-enable`
* `service-disable`




Commands for administration API keys management[¶](#commands-for-administration-api-keys-management "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------------


* `admin-keys-list`
* `admin-key-create`
* `admin-key-delete`




Other commands[¶](#other-commands "Permalink to this heading")
--------------------------------------------------------------


* `metrics-get`
* `predict`