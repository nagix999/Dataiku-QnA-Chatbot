WARN\_CONNECTION\_SPARK\_NO\_GROUP\_WITH\_DETAILS\_READ\_ACCESS: no groups allowed to read connection details[¶](#warn-connection-spark-no-group-with-details-read-access-no-groups-allowed-to-read-connection-details "Permalink to this heading")
===================================================================================================================================================================================================================================================


Spark is enabled but no user groups have been granted permission to read the connection’s details. Spark interaction may be slow.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Grant “Details readable by” on the connection to the user groups using Spark. See [Reading details of a connection](../../security/connections.html#connections-read-details) for more details.