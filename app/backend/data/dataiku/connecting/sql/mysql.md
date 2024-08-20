MySQL[¶](#mysql "Permalink to this heading")
============================================



Note


You might want to start with our resources on [data connections](https://knowledge.dataiku.com/latest/data-sourcing/connections/index.html) in the Knowledge Base.



DSS supports the full range of features on MySQL:


* Reading and writing datasets
* Executing SQL recipes
* Performing visual recipes in\-database
* Using live engine for charts


MySQL on Google Cloud SQL is also supported.



Caveats[¶](#caveats "Permalink to this heading")
------------------------------------------------


* TZ issue




Installing the driver[¶](#installing-the-driver "Permalink to this heading")
----------------------------------------------------------------------------


* Download the driver from <https://dev.mysql.com/downloads/connector/j/>
* Unzip the resulting file
* Install the JAR file in DSS as explained in [Custom Dataiku instructions](../../installation/custom/jdbc.html) or [Dataiku Cloud Stacks for AWS instructions](../../installation/cloudstacks-aws/templates-actions.html)




Secure connections (SSL / TLS) support[¶](#secure-connections-ssl-tls-support "Permalink to this heading")
----------------------------------------------------------------------------------------------------------


DSS can connect to a MySQL server using secure connections.



### Importing the server certificate and creating the client certificate[¶](#importing-the-server-certificate-and-creating-the-client-certificate "Permalink to this heading")


Please follow the instructions laid out here:


[https://dev.mysql.com/doc/connector\-j/5\.1/en/connector\-j\-reference\-using\-ssl.html](https://dev.mysql.com/doc/connector-j/5.1/en/connector-j-reference-using-ssl.html)


You may need to add the root certificate of the authority which issued the MySQL server certificate to the JVM truststore
using one of the procedures described at [Adding SSL certificates to the Java truststore](../../installation/custom/advanced-java-customization.html#java-ssl-truststore).


Additionally, if a client certificate is used, the keystore file and password used by DSS to authenticate to the MySQL server need to be specified
with additional Java options `-Djavax.net.ssl.keyStore=path_to_keystore_file -Djavax.net.ssl.keyStorePassword=password`.


Your install.ini file should therefore look like:



```
[javaopts]
backend.additional.opts=-Djavax.net.ssl.keyStore=path_to_keystore_file -Djavax.net.ssl.keyStorePassword=password -Djavax.net.ssl.trustStore=path_to_truststore_file -Djavax.net.ssl.trustStorePassword=password
jek.additional.opts=-Djavax.net.ssl.keyStore=path_to_keystore_file -Djavax.net.ssl.keyStorePassword=password -Djavax.net.ssl.trustStore=path_to_truststore_file -Djavax.net.ssl.trustStorePassword=password
fek.additional.opts=-Djavax.net.ssl.keyStore=path_to_keystore_file -Djavax.net.ssl.keyStorePassword=password -Djavax.net.ssl.trustStore=path_to_truststore_file -Djavax.net.ssl.trustStorePassword=password

```




### Setting up the MySQL connection[¶](#setting-up-the-mysql-connection "Permalink to this heading")


In the settings of the connection, add an “Advanced property”:


* Key: `useSSL`
* Value: `true`