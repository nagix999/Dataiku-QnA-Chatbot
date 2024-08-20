MongoDB[¶](#mongodb "Permalink to this heading")
================================================


Data Science Studio can both read and write datasets on versions up to MongoDB v6\.0, for which all MongoDB features are supported. Data Science Studio also works with MongoDB v6\.1 and v7\.0, although not all features are supported.



Setting up the MongoDB connection[¶](#setting-up-the-mongodb-connection "Permalink to this heading")
----------------------------------------------------------------------------------------------------


Use the Connection URI option:



```
mongodb://<USERNAME>:<PASSWORD>@<SHARD HOST>:<PORT (Mongo default = 27017)>/<DATABASENAME>?ssl=true&authSource=admin

```


As a reminder, be sure to set your connection Details readable by a particular group, or all analysts, to ensure access is allowed.