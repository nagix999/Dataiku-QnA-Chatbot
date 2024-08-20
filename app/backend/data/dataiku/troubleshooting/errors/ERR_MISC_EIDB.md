ERR\_MISC\_EIDB: Missing, locked, unreachable or corrupted internal database[¶](#err-misc-eidb-missing-locked-unreachable-or-corrupted-internal-database "Permalink to this heading")
=====================================================================================================================================================================================


Internal databases are disk\-based by default. In the default configuration, hard failures of DSS may corrupt internal database files.


Hard failures of DSS include:


* Hard crash of DSS
* Hard reboot of the machine
* Out of disk space


Note that at this point, you will lose non critical DSS data based on the impacted database (e.g. discussions, jobs, requests).


An alternative and robust configuration consists in running an external PostgreSQL database. Refer to [Externally hosting runtime databases](../../operations/runtime-databases.html#runtime-db-external).



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


This issue can only be fixed by a DSS administrator.


A DSS administrator needs to:


* Back up internal database files.
* Restart DSS. DSS will log the name of the corrupted database file.
* Stop DSS.
* Remove the corrupted database file.
* Start DSS.