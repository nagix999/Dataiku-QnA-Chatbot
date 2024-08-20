Logging in DSS[¶](#logging-in-dss "Permalink to this heading")
==============================================================



* [Introduction](#introduction)
* [Configuring log file rotation](#configuring-log-file-rotation)


	+ [Main DSS processes log files](#main-dss-processes-log-files)
	+ [frontend.log](#frontend-log)
	+ [nginx/access.log](#nginx-access-log)
	+ [Audit logs](#audit-logs)
	+ [Manual log file rotation](#manual-log-file-rotation)
* [Customizing log levels](#customizing-log-levels)




[Introduction](#id1)[¶](#introduction "Permalink to this heading")
------------------------------------------------------------------


DSS processes write their log files to directory `DATADIR/run`:




| Log file | Content |
| --- | --- |
| backend.log | Logs of the main DSS process (backend). This includes logs for all user operations directly performed in DSS, including through APIs. |
| ipython.log | Logs of the Jupyter server, used by Python and R notebooks. |
| eventserver.log | Logs of the event server process, when enabled. |
| governserver.log | Logs of the Govern server process, on Govern nodes |
| nginx.log | General log of the main HTTP server (nginx). This does not include the trace of user activity |
| nginx/access.log | Access log of the main HTTP server (nginx) |
| supervisord.log | Process control and supervision. This log file contains traces of all processes starts / stops |
| frontend.log | Logs of Javascript activity on user’s browsers |




[Configuring log file rotation](#id2)[¶](#configuring-log-file-rotation "Permalink to this heading")
----------------------------------------------------------------------------------------------------



### [Main DSS processes log files](#id3)[¶](#main-dss-processes-log-files "Permalink to this heading")


By default, the “main” log files are rotated when they reach a given size, and purged after a given number of rotations. The following installation configuration directives can be used to customize this behavior.


By default, rotation happens every 50 MB and 10 files are kept



```
[logs]
# Maximum file size, default 50MB.
# Suffix multipliers "KB", "MB" and "GB" can be used in this value.
logfiles_maxbytes = SIZE
# Number of retained files, default 10.
logfiles_backups = NUMBER_OF_FILES

```


You should then regenerate DSS configuration and restart DSS, as described in [Installation configuration file](../installation/custom/advanced-customization.html#install-ini).


This procedure applies to the following log files:


* backend.log
* ipython.log
* nginx.log
* eventserver.log
* governserver.log




### [frontend.log](#id4)[¶](#frontend-log "Permalink to this heading")


This is a low\-level log for debug purposes only. It is rotated independently of the others, on a non\-configurable schedule.




### [nginx/access.log](#id5)[¶](#nginx-access-log "Permalink to this heading")


This file is rotated daily, whatever its size. The rotated file is compressed. Older files are then purged, in order to keep a total max size of logs below 64 MB


In the ini file, you can override this behavior



```
[logs]
# Set this to false to disable access.log rotation
rotate_accesslog = true

# Maximum cumulative size to keep (in bytes). Suffix multipliers are not allowed
accesslog_purge_size = 67108864

```




### [Audit logs](#id6)[¶](#audit-logs "Permalink to this heading")


See [Audit Trail](../security/audit-trail.html).




### [Manual log file rotation](#id7)[¶](#manual-log-file-rotation "Permalink to this heading")


The following command forces DSS to close and reopen its log files (main DSS processes log files and nginx access log). Combined with standard tools like `logrotate(8)`, this lets you take full control over the DSS log rotation process, and integrate it in your log file handling framework.



```
# Use standard Unix commands to rename DSS current log files
...
# Force DSS to reopen new log files
DATADIR/bin/dss reopenlogs

```





[Customizing log levels](#id8)[¶](#customizing-log-levels "Permalink to this heading")
--------------------------------------------------------------------------------------



Warning


We strongly recommend that you **do not** customize log levels without input from Dataiku Support.


Modifying or lowering the logging levels can potentially reduce the ability of Dataiku Support to investigate / debug certain issues and result in an overall degraded support experience. In these situations, you will likely be asked to revert these logging level changes and reproduce the issue when further investigation is required.




Note


Dataiku DSS has been confirmed to be not vulnerable to the family of vulnerabilities regarding Log4J. No mitigation action nor upgrade is required. Dataiku does not use any affected version of Log4J, and keeps monitoring the security situation on all of its dependencies.



You can configure the log level:


* By logger (logging category)
* By process


In a typical DSS log line:



```
[2017/02/13-09:01:01.421] [DefaultQuartzScheduler_Worker-1] [INFO] [dku.projects.stats.git]  - [ct: 365] Analyzing 17 commits

```


The logger is the 4th component: `dku.projects.stats.git`


Log levels are configured by creating, in the DSS data dir, a file named `resources/logging/dku-log4j.properties`



```
# Set, for all processes, the 'dku.recipes.sql' logger to INFO level.
# Note that this also sets INFO for all subloggers of dku.recipes.sql
log4j.logger.dku.recipes.sql = INFO

```


Properties set in dku\-log4j.properties will apply to all main DSS processes (See [The different Java processes](../installation/custom/advanced-java-customization.html#java-processes-definition) for more information).


To set log levels only for a certain type of processes, like jek, create a file named `resources/logging/dku-jek-log4j.properties` and add the same kind of properties.