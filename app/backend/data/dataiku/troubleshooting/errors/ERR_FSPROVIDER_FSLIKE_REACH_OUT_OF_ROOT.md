ERR\_FSPROVIDER\_FSLIKE\_REACH\_OUT\_OF\_ROOT: Illegal attempt to access data out of connection root path[¶](#err-fsprovider-fslike-reach-out-of-root-illegal-attempt-to-access-data-out-of-connection-root-path "Permalink to this heading")
=============================================================================================================================================================================================================================================


The configuration of a dataset or managed folder illegally tries to reach outside of its assigned root path, by using `..` in its path.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Check the settings of the dataset or managed folder.


In some cases, the configuration issue can be at the connection level, in which case it must be fixed by your administrator.