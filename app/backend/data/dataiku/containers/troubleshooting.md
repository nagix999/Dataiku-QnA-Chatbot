Troubleshooting[¶](#troubleshooting "Permalink to this heading")
================================================================



* [Jobs fail to run](#jobs-fail-to-run)


	+ [requests.exceptions.ConnectionError](#requests-exceptions-connectionerror)
	+ [Kubernetes job failed, exitCode\=1, reason\=Error](#kubernetes-job-failed-exitcode-1-reason-error)
	+ [Spark on Kubernetes](#spark-on-kubernetes)




[Jobs fail to run](#id1)[¶](#jobs-fail-to-run "Permalink to this heading")
--------------------------------------------------------------------------



### [requests.exceptions.ConnectionError](#id2)[¶](#requests-exceptions-connectionerror "Permalink to this heading")


This issue means that the running container is unable to connect to the DSS backend. Some possible reasons for this error include:


* The container tries to connect to a name that cannot be resolved to an IP address from the container.
* The network is not routing traffic out of the cluster towards the machine hosting DSS.
* A firewall is blocking access to the machine hosting DSS. This could be a result of cloud network rules as well as a local firewall.


This list is not exhaustive; however, the most common issue is that the host name cannot be resolved as\-is by the container. To fix this, you can add the following variable in `DATADIR/bin/env-site.sh`.



```
export DKU_BACKEND_EXT_HOST="xxx.xxx.xxx.xxx" # DNS name or IP address of DSS backend, reachable from the containers

```


Restart DSS when you are done. You can test if the networking works as expected by clicking the **Test** button available at the top right corner of each configuration in Administration \> Settings \> Containerized execution.




### [Kubernetes job failed, exitCode\=1, reason\=Error](#id3)[¶](#kubernetes-job-failed-exitcode-1-reason-error "Permalink to this heading")


This message means that the process inside the container exited with an error return code. You will likely find in previous log lines a Python stack trace giving more information about what happened. The most common issue that causes this failure is the `requests.exceptions.ConnectionError` above.




### [Spark on Kubernetes](#id4)[¶](#spark-on-kubernetes "Permalink to this heading")


If your see the error above in a Spark on Kubernetes container, you will need to set `spark.driver.host` to the DNS name or IP address of DSS backend. You can do this in the Spark section of DSS general administration settings. Please refer to [Spark configurations](../spark/configuration.html) for more information.