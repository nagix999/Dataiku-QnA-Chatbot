The runtime databases[¶](#the-runtime-databases "Permalink to this heading")
============================================================================



* [Managing internally\-hosted runtime databases](#managing-internally-hosted-runtime-databases)


	+ [Handling database failures](#handling-database-failures)
* [Externally hosting runtime databases](#externally-hosting-runtime-databases)


	+ [Why use external hosting?](#why-use-external-hosting)
	+ [Prerequisites and warnings](#prerequisites-and-warnings)
	+ [Setup](#setup)
	+ [Backups](#backups)
	+ [Migrations](#migrations)
	+ [Advanced settings](#advanced-settings)
	+ [Using an encrypted password](#using-an-encrypted-password)




Note


If using [Dataiku Cloud Stacks](../installation/index.html) installation, the runtime databases are automatically managed for you, and you do not need to follow these instructions



DSS stores most of its configuration (including projects, datasets definition, code, notebooks, …) as JSON, Python, R, … files inside the `config/` folder of [the DSS data directory](datadir.html).


In addition, DSS maintains a number of databases, called the “runtime databases” that store some additional information, which is mostly “non\-primary” information (i.e. which can be rebuilt):


* The history of run jobs and scenarios
* The history and latest values of metrics and checks
* The “state” of the datasets for the Flow’s incremental computation
* The “human\-readable” timelines of things that happened in projects
* The list of starred and watched objects
* The contents of discussions
* The user\-entered metadata on external tables (in the data catalog)


By default, the runtime databases are hosted internally by DSS, using an embedded database engine (called H2\). You can also move the runtime databases to an external PostgreSQL server. Moving the runtime databases to an external PostgreSQL server improves resilience, scalability and backup capabilities.



[Managing internally\-hosted runtime databases](#id1)[¶](#managing-internally-hosted-runtime-databases "Permalink to this heading")
-----------------------------------------------------------------------------------------------------------------------------------


When the runtime databases are hosted internally by DSS, no maintenance is generally required.



### [Handling database failures](#id2)[¶](#handling-database-failures "Permalink to this heading")


Please refer to the [dedicated error page](../troubleshooting/errors/ERR_MISC_EIDB.html).





[Externally hosting runtime databases](#id3)[¶](#externally-hosting-runtime-databases "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------



### [Why use external hosting?](#id4)[¶](#why-use-external-hosting "Permalink to this heading")


Externally hosting runtime databases has several advantages, especially for bigger production DSS instances:


* The internal H2 engine doesn’t scale and perform as well as an external PostgreSQL server
* The external PostgreSQL server is more resilient to various failures than the internal H2 engine
* It’s easier to back up a PostgreSQL server without any downtime




### [Prerequisites and warnings](#id5)[¶](#prerequisites-and-warnings "Permalink to this heading")


You need to have a PostgreSQL \>\= 9\.5 server, with write access on a schema (including ability to create tables).


You can host the databases for multiple DSS instances in a single PostgreSQL server, including in a single schema, but you need
to make sure to set up a table prefix (see below).


You need to make sure that your PostgreSQL server will stay up. Downtime of the runtime database on the PostgreSQL server will completely prevent DSS operation.




### [Setup](#id6)[¶](#setup "Permalink to this heading")


* Stop DSS
* Edit `config/general-settings.json` and locate the `"internalDatabase"` key at top\-level
* Fill it out as follows:



```
"internalDatabase": {
    "connection": {
        "params": {
            "port": 15432,
            "host": "HOST_OF_YOUR_POSTGRESQL_DATABASE",
            "user": "USER_OF_YOUR_POSTGRESQL_DATABASE",
            "password": "PASSWORD_OF_YOUR_POSTGRESQL_DATABASE",
            "db": "DB_OF_YOUR_POSTGRESQL_DATABASE"
        },
        "type": "PostgreSQL"
    },

    "tableNamePrefix" : "optional prefix to prepend to all table names. Don't put this key if you don't want to use this. Should be used if you plan to have multiple DSS pointing to this database/schema",
    "schema" : "Name of the PostgreSQL schema in which DSS will create its tables",

    "externalConnectionsMaxIdleTimeMS": 600000,
    "externalConnectionsValidationIntervalMS": 180000,
    "maxPooledExternalConnections": 50,
    "builtinConnectionsMaxIdleTimeMS": 1800000,
    "builtinConnectionsValidationIntervalMS": 600000,
    "maxPooledBuiltinConnectionsPerDatabase": 50
}

```


* Save the file
* Run the following command to copy the current content of your runtime databases to the PostgreSQL server:



```
./bin/dssadmin copy-databases-to-external

```


* Start DSS


Your DSS is now using externally\-hosted runtime databases.




### [Backups](#id7)[¶](#backups "Permalink to this heading")


You need to make sure to properly backup your PostgreSQL database using the regular PostgreSQL backup procedures. Each time you make a DSS backup, you should also ensure that you have a matching PostgreSQL backup.


The DSS backup and the PostgreSQL backup don’t need to be perfectly synchronous, small discrepancies in backup times will not cause significant harm in case of a restore.




### [Migrations](#id8)[¶](#migrations "Permalink to this heading")


When upgrading DSS, DSS will automatically upgrade the schema of the externally\-hosted databases. Make sure to backup the databases before starting the DSS upgrade procedure in order to be able to roll back the DSS upgrade.




### [Advanced settings](#id9)[¶](#advanced-settings "Permalink to this heading")


The “connection” part of the “internalDatabase” in `config/general-settings.json` is similar to the structure of a PostgreSQL connection in `config/connections.json`. You can thus use advanced capabilities like JDBC\-URL\-based connection, advanced properties.


We recommend that you setup a PostgreSQL connection using the DSS UI, and then copy the relevant connection block from `config/connections.json` to `config/general-settings.json`.




### [Using an encrypted password](#id10)[¶](#using-an-encrypted-password "Permalink to this heading")


In order to avoid writing a password in cleartext in the configuration file, encrypt it first using:



```
./bin/dssadmin encrypt-password YOUR-PASSWORD

```


Use the encrypted password string (starting with `e:AES:`) in the “password” field.