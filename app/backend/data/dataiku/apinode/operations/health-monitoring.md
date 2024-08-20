Health monitoring[¶](#health-monitoring "Permalink to this heading")
====================================================================



* [Global isAlive probe](#global-isalive-probe)


	+ [isAlive API](#isalive-api)
	+ [Forcing the node as not alive](#forcing-the-node-as-not-alive)
* [Monitoring the status of services](#monitoring-the-status-of-services)




[Global isAlive probe](#id1)[¶](#global-isalive-probe "Permalink to this heading")
----------------------------------------------------------------------------------


The API node features a global “isAlive” probe that can be used by a load balancer to query the status of the server.


The global isAlive probe does not actually perform validation that the individual services on the API node are properly running.



### [isAlive API](#id2)[¶](#isalive-api "Permalink to this heading")


The isAlive probe is available on the `/isAlive/` HTTP mount point. This URI returns:


* An HTTP success code (2xx) if the probe considers the node as alive
* An HTTP server error code (5xx) if the probe considers the node as not alive




### [Forcing the node as not alive](#id3)[¶](#forcing-the-node-as-not-alive "Permalink to this heading")


You can force the isAlive probe to indicate that the node is not alive, without actually interrupting the traffic. This will lead the load balancer to redirect the traffic to other nodes, and is generally used for rolling upgrades scenarii.


To force the node as not alive:


* Create a file called `apinode-not-alive.txt` in the API node data directory


To get back to normal:


* Remove the file `apinode-not-alive.txt` from the API node data directory





[Monitoring the status of services](#id4)[¶](#monitoring-the-status-of-services "Permalink to this heading")
------------------------------------------------------------------------------------------------------------


To monitor the precise status of service, we recommend that you perform a regular prediction query, which will actually exercice the whole chain.