Pre versions[¶](#pre-versions "Permalink to this heading")
==========================================================



Version 0\.8[¶](#version-0-8 "Permalink to this heading")
---------------------------------------------------------



### V0\.8\.1 \- January 18th, 2014[¶](#v0-8-1-january-18th-2014 "Permalink to this heading")


Fix for single\-file HDFS datasets




### V0\.8\.0 \- January 15th, 2014[¶](#v0-8-0-january-15th-2014 "Permalink to this heading")


* Initial 0\.8 release
* FEATURE: SQL and Hive notebooks
* FEATURE: Live validation of Pig and Hive recipes.
* FEATURE: Pig relations explorer





Version 0\.6[¶](#version-0-6 "Permalink to this heading")
---------------------------------------------------------



### V 0\.6\.13 \- January 09th, 2014[¶](#v-0-6-13-january-09th-2014 "Permalink to this heading")


Fix recipes with multiple outputs that could generate overly long job ids, overflowing filesystem path limit




### V 0\.6\.12 \- December 12th 2013[¶](#v-0-6-12-december-12th-2013 "Permalink to this heading")



> Fix Null Pointer Exception when running a Shaker recipe on a Apache log file




### V 0\.6\.11 \- December 6th, 2013[¶](#v-0-6-11-december-6th-2013 "Permalink to this heading")



> * Fix Pig DKULOAD when partitioning pattern contains . (\#831\)
> * Make DSS cookie instance\-dependent to allow for multiple DSS on the same host (\#414\)
> * Fix ElasticSearch mirroring of non\-partitioned datasets (\#838\)
> * Fix race condition when syncing multiple partitions of a RemoteFiles dataset (\#856\)
> * Fix partitioning for patterns like /%Y%M%D/.\* (\#857\)




### V 0\.6\.10 \- November 28th, 2013[¶](#v-0-6-10-november-28th-2013 "Permalink to this heading")



> * UserVoice integration
> * Re\-enable WT1 tracking




### V 0\.6\.9 \- November 19th, 2013[¶](#v-0-6-9-november-19th-2013 "Permalink to this heading")



> * Escape chars 1 to 8 in CSV to workaround Hive escaping non\-special characters
> * User agent matching is now case\-insensitive (\#784\)
> * Basic support for Hadoop Sequence File




### V 0\.6\.8 \- October 31st, 2013[¶](#v-0-6-8-october-31st-2013 "Permalink to this heading")



> Initial public release of DSS