Connecting to secure clusters[¶](#connecting-to-secure-clusters "Permalink to this heading")
============================================================================================


DSS can connect to Hadoop clusters running in secure mode, where cluster users need to be authenticated by Kerberos in order to be authorized to use cluster resources.


When configured to use Hadoop security, Data Science Studio logs in to Kerberos upon startup,
using a preconfigured identity (Kerberos principal) and a secret key stored in a local file (Kerberos keytab). Upon success, this
initial authentication phase returns Kerberos credentials suitable for use with the Hadoop cluster.


Data Science Studio then uses these credentials whenever it needs to access Hadoop resources.
This includes reading and writing HDFS files, running DSS preparation scripts over the cluster, running Hive recipes,
accessing the Hive metastore, and using Hive or Impala notebooks.


As the credentials returned by the Kerberos login phase typically have a limited lifetime, Data Science Studio periodically renews them
as long as it is running, in order to keep a continuous access to the Hadoop cluster.



Warning


When [User Isolation Framework](../user-isolation/index.html) is disabled,
DSS uses its own identity to access all Hadoop resources, regardless of the currently logged\-in DSS user.


As a consequence, granting Data Science Studio access to a given user indirectly gives
this user access to all cluster resources accessible through the DSS Kerberos identity.
Make sure this is compatible with your cluster security policy, and to design accordingly
the set of Hadoop permissions granted to the Kerberos identity used by DSS.


You can also enable [User Isolation Framework](../user-isolation/index.html)




Setup the DSS Kerberos account[¶](#setup-the-dss-kerberos-account "Permalink to this heading")
----------------------------------------------------------------------------------------------


The first steps in configuring Hadoop security support consist in setting up the Kerberos account which DSS will
use for accessing cluster resources:


* Create a Kerberos principal (user or service account) for this DSS instance in your Kerberos account database.
You can choose any principal name for this, according to your local account management policy.


Typical values include `dataiku@MY.KERBEROS.REALM` and `dataiku/HOSTNAME@MY.KERBEROS.REALM`, where `dataiku` is the name
of the Unix user account used by DSS, `MY.KERBEROS.REALM` is the uppercase name of your Kerberos realm, and `HOSTNAME`
is the fully\-qualified name of the Unix server hosting DSS.
* Create a Kerberos keytab for this account, and store it in a file accessible only to DSS
* Configure your Hadoop cluster to authorize this principal to access the cluster resources required for DSS operation, including:


	+ read\-write access to the HDFS directories used as managed dataset repositories (typically: `/user/dataiku`)
	+ read\-only access to any additional HDFS directories containing datasets
	+ read\-write access to the Hive metastore database used by DSS (typically named `dataiku`)
	+ permission to launch map\-reduce jobs
* Install the Kerberos client software and configuration files on the DSS Unix server so that processes running on it can
find and contact the Kerberos authorization service. In particular, the `kinit` Unix command must be in the execution PATH
of the DSS user account, and must be functional.


You can check the above steps by attempting to access HDFS using the DSS Kerberos credentials, as follows:



```
root@dss# # Open a session on the DSS Unix server using the DSS Unix user account
root@dss# su - dataiku
dataiku@dss> # Log in to Kerberos using the DSS principal and keytab
dataiku@dss> kinit -k -t DSS_KEYTAB_FILE DSS_KERBEROS_PRINCIPAL
dataiku@dss> # Check the Kerberos credentials obtained above
dataiku@dss> klist
dataiku@dss> # Attempt to read DSS's HDFS home directory using the Kerberos credentials
dataiku@dss> hdfs dfs -ls /user/dataiku
dataiku@dss> # Log out the Kerberos session
dataiku@dss> kdestroy

```




Configure DSS for Hadoop security[¶](#configure-dss-for-hadoop-security "Permalink to this heading")
----------------------------------------------------------------------------------------------------


To configure Hadoop connectivity in DSS with a secure cluster:


* Go to the DSS data directory



```
cd DATADIR

```


* Stop DSS:



```
./bin/dss stop

```


* Run the setup script



```
./bin/dssadmin install-hadoop-integration -keytab ABSOLUTE_PATH_TO_DSS_KEYTAB_FILE -principal DSS_KERBEROS_PRINCIPAL

```


* Start DSS



```
./bin/dss start

```



### Test HDFS connection[¶](#test-hdfs-connection "Permalink to this heading")


Test the HDFS connectivity using the steps detailed in [Test HDFS connection](installation.html#hadoop-installation-test-hdfs-connection)




### Configure Hive connectivity[¶](#configure-hive-connectivity "Permalink to this heading")


For DSS to be able to read and write Hive table definitions, you must setup the host of your HiveServer2\.


Go to Administration \> Settings \> Hive, enter:


* The host name of your HiveServer2
* The Kerberos principal of the Hiveserver2\. This is generally something like `hive/HOST.FULLY_QUALIFIED_NAME@KERBEROS.REALM`



Warning


The hostname of your HiveServer2 must generally be a fully\-qualified name. For secure clusters, even when installing
on the master of the cluster, 127\.0\.0\.1 won’t work.




Note


The hostname part of the Hiveserver2 Kerberos principal can be specified as `_HOST`, as in : `hive/_HOST@KERBEROS.REALM`.
This placeholder will be dynamically replaced by the hostname of the Hiveserver2 server.



Non\-default connection properties (eg HTTP transport, SSL connection, etc) can be added to the standard connection string with optional
“Connection properties”.


Alternatively, it is possible to take full control over the JDBC connection URI by checking the “Use advanced URL syntax” checkbox.



Note


The `${database}` variable can be used in this URI to specify the database to which to connect.


With [User Isolation Framework](../user-isolation/index.html) enabled for Hadoop access, the `${hadoopUser}` variable can be used in this URI to specify the name of the user to impersonate.


For example, a connection URI using both high\-availability through zookeeper discovery and impersonation would be typically configured as:
`jdbc:hive2:ZK1:2181,ZK2:2181,ZK3:2181/${database};serviceDiscoveryMode=zooKeeper;zooKeeperNamespace=hiveserver2;hive.server2.proxy.user=${hadoopUser}`



Save the settings.


For more information, see [Hive](hive.html)




### Configure Impala connectivity[¶](#configure-impala-connectivity "Permalink to this heading")


If your Hadoop cluster has Impala, you need to configure the impalad hosts.


Go to Administration \> Settings \> Impala, enter:


* The list of Impala servers
* The Kerberos principal of your Impala servers. This is generally something like `impala/_HOST@KERBEROS.REALM`


In the Kerberos principal string, the `_HOST` string will be replaced by the hostname of each Impalad server.


Save the settings.


For more information, see [Impala](impala.html).





Modification of principal or keytab[¶](#modification-of-principal-or-keytab "Permalink to this heading")
--------------------------------------------------------------------------------------------------------


If you need to modify the principal or keytab parameters, go to Administration \> Settings \> Hadoop.


In the “Hadoop security (Kerberos)” section, fill in


* Enable: yes
* Principal: The DSS Kerberos principal
* Keytab: Absolute path to the Keytab file for the DSS principal.


Save the settings. You then need to restart DSS for this configuration update to be taken into account



```
DATA_DIR/bin/dss restart

```




Advanced settings (optional)[¶](#advanced-settings-optional "Permalink to this heading")
----------------------------------------------------------------------------------------



### Configuring Kerberos credentials periodic renewal[¶](#configuring-kerberos-credentials-periodic-renewal "Permalink to this heading")


When Data Science Studio logs in to the Kerberos authentication service using its keytab, it typically receives credentials with a limited lifetime.
In order to be able to permanently access the Hadoop cluster, Data Science Studio continuously renews these credentials by logging again
to the Kerberos service, on a configurable periodic basis.


The default renewal period is one hour, which should be compatible with most Kerberos configurations (where credential lifetimes are typically
on the order of one day). It is possible to adjust this behavior however, by way of two more configuration keys to add to the file
`DATA_DIR/config/dip.properties`:



```
# Kerberos login period, in seconds - default 1 hour
hadoop.kerberos.ticketRenewPeriod = 3600
# Delay after which to retry a failed login, in seconds - default 5 mn
hadoop.kerberos.ticketRetryPeriod = 300

```


After modifying this file, restart DSS.