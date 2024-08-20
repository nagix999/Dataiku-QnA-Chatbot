DSS does not start / Cannot connect[¶](#dss-does-not-start-cannot-connect "Permalink to this heading")
======================================================================================================


When DSS fails to properly start, the following symptoms can happen:


* `dss start` fails
* `dss status` indicates that some processes are not started
* “Could not connect to DSS server” banner when trying to connect using a browser (HTTP code: 502, type: Gateway error)
* “Connection refused” error when trying to connect using a browser



Note


If you are using the Dataiku virtual machine, please see [The dedicated documentation](../../installation/other/vm.html) for troubleshooting instructions.




Check processes state[¶](#check-processes-state "Permalink to this heading")
----------------------------------------------------------------------------


The first step is to check the state of the DSS process:


* Go to the DSS data directory
* Run



> ```
> ./bin/dss status
> 
> ```


If all processes are indicated as RUNNING, proceed to the next step


If a process is not in RUNNING state, first try to restart DSS:



```
./bin/dss restart

```


If it does not help, and some processes are still failing, see “Diagnose process failures” below.


If all processes are now RUNNING and you still get errors when connecting, proceed to the next step




Verify local connectivity[¶](#verify-local-connectivity "Permalink to this heading")
------------------------------------------------------------------------------------


From the DSS machine, run



```
curl http://127.0.0.1:DSS_PORT/

```


If you don’t see HTML code, and the `nginx` process is correctly running, you might have a local firewall issue


Then run:



```
curl http://127.0.0.1:DSS_PORT/dip/api/get-configuration

```


If you don’t see a JSON result, check the status and logs of the `backend` process


If both of these tests are successful but you can’t connect from your browser, it indicates a network connectivity issue between DSS and your browser. Check for firewalls and proxies along the way. Try with another browser or another workstation if applicable.




DSS start (or stop) fails[¶](#dss-start-or-stop-fails "Permalink to this heading")
----------------------------------------------------------------------------------


It can happen that running `./bin/dss start` fails



### Server port already in use[¶](#server-port-already-in-use "Permalink to this heading")


Before starting, DSS checks that all TCP ports required are free. DSS requires up to 10 consecutive TCP ports, starting from the base port set at install time. Check that this whole range is available.


This error can also indicate that some stray DSS processes are still running, but are not controlled anymore by the DSS supervisor. See “Kill all DSS processes” below.




### Server requires authentication[¶](#server-requires-authentication "Permalink to this heading")


If you receive this message, it generally indicates that you ran the DSS installer or a dssadmin command while DSS was still running. It won’t be possible to stop DSS normally. See “Kill all DSS processes” below.





Kill all DSS processes[¶](#kill-all-dss-processes "Permalink to this heading")
------------------------------------------------------------------------------


If some stray DSS processes are still running, you’ll need to kill them.


Run `ps -u $USER -f` to identify all processes running as the DSS service account, and use `kill -9 PID` to kill all DSS processes:


* Java processes
* Python processes
* nginx processes




Diagnose process failures[¶](#diagnose-process-failures "Permalink to this heading")
------------------------------------------------------------------------------------


check which process is failing, and check the `run/PROCESS.log` file, where `PROCESS` is the name of the failing process.


In particular, if the `backend` process is failing, check `run/backend.log` for errors.


Common issues that can prevent DSS from starting include:


* Out of disk space (“No space left on device”) on the DSS data directory
* Permissions issues (all files must belong to the DSS service account)


Also see [Diagnosing and debugging issues](../diagnosing.html) and [Obtaining support](../obtaining-support.html).