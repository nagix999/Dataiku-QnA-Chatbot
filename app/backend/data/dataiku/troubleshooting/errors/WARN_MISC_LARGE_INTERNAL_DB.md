WARN\_MISC\_LARGE\_INTERNAL\_DB: internal runtime database is too large[¶](#warn-misc-large-internal-db-internal-runtime-database-is-too-large "Permalink to this heading")
===========================================================================================================================================================================


The internal runtime database exceeds the recommended size of 5GB. This threshold can be modified with the dku.sanitycheck.runtimedb.internal\_db\_threshold\_gb dip property.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


It is recommended to switch to external runtime database by following [these instructions](../../operations/runtime-databases.html#runtime-db-external).