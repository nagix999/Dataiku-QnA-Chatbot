Google AlloyDB[¶](#google-alloydb "Permalink to this heading")
==============================================================


DSS supports the full range of features on Google AlloyDB for PostgreSQL:


* Reading and writing datasets
* Executing SQL recipes
* Performing visual recipes in\-database
* Using live engine for charts



Installing the JDBC driver[¶](#installing-the-jdbc-driver "Permalink to this heading")
--------------------------------------------------------------------------------------


The PostgreSQL driver is pre\-installed in DSS. You don’t need any further installation.




Secure connections (SSL / TLS) support[¶](#secure-connections-ssl-tls-support "Permalink to this heading")
----------------------------------------------------------------------------------------------------------


DSS can connect to an AlloyDB for PostgreSQL server using secure connections.



### Setup with certificate validation (recommended)[¶](#setup-with-certificate-validation-recommended "Permalink to this heading")



#### Importing the server certificate[¶](#importing-the-server-certificate "Permalink to this heading")


You first need to obtain and convert the server certificate. Please follow the instructions laid out here:


[https://jdbc.postgresql.org/documentation/94/ssl\-client.html](https://jdbc.postgresql.org/documentation/94/ssl-client.html)


The server certificate should be added to the truststore of the JVM used by DSS, using one of the procedures described at
[Adding SSL certificates to the Java truststore](../../installation/custom/advanced-java-customization.html#java-ssl-truststore).




#### Setting up the AlloyDB for PostgreSQL connection[¶](#setting-up-the-alloydb-for-postgresql-connection "Permalink to this heading")


In the settings of the connection, add an “Advanced property”:


* Key: `ssl`
* Value: `true`





### Setup without certificate validation (not recommended)[¶](#setup-without-certificate-validation-not-recommended "Permalink to this heading")


Setting up SSL connection without certificate validation is much simpler, but by removing certificate validation, you loose the protection that SSL provides, since an internal attacker could still be able to impersonate the server


In the settings of the connection, add the following 2 “Advanced properties”:


* Key: `ssl`, Value: `true`
* Key: `sslfactory`, Value `org.postgresql.ssl.NonValidatingFactory`




### PostGIS integration[¶](#postgis-integration "Permalink to this heading")


[PostGIS](https://postgis.net/) is a widely used PostgreSQL database extension that allows to store and process geospatial data. DSS can leverage PostGIS functionalities to run geospatial queries directly in the database.


In order to verify that PostGIS is properly installed and can be used in DSS, there’s a checkbox available on the AlloyDB connections page:


![../../_images/geojoin-postgis-support.png](../../_images/geojoin-postgis-support.png)

Note


DSS supports 2 geospatial types: `geopoint` and `geometry`. By default they’ll be translated to `geography` type of PostGIS. This behaviour can be changed by setting `dku.datasets.postgresql.postgis.useGeography` parameter to `false` in the `config/dip.properties` file.