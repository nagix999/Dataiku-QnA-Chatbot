ERR\_TRANSACTION\_FAILED\_ENOSPC: Out of disk space[¶](#err-transaction-failed-enospc-out-of-disk-space "Permalink to this heading")
====================================================================================================================================


An error occurred while trying to save changes performed by a user (saving a recipe, a dataset, a notebook, …) because there is no space left on the disk where the DSS data directory is located.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


This issue can only be fixed by a DSS administrator.


A DSS administrator needs to free up some disk space on the partition where the [DSS data directory](../../operations/datadir.html) is located.



Warning


After such an error, you MUST restart DSS. Failure to do so may leave some functionality of DSS non\-functional.