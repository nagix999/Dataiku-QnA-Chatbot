Streaming Spark Scala[¶](#streaming-spark-scala "Permalink to this heading")
============================================================================


DSS uses wrappers around Spark’s [structured streaming](http://spark.apache.org/docs/2.4.0/structured-streaming-programming-guide.html) to manipulate streaming endpoints. This implies using a micro\-batch approach and manipulating Spark dataframes.


Data from streaming endpoints is accessed via getStream():



```
val dkuContext   = DataikuSparkContext.getContext(sparkContext)
val df = dkuContext.getStream("wikipedia")
// manipulate df like a regular dataframe

```


DSS will automatically use Spark’s native Kafka integration, and stream the data via the backend for other endpoint types.


Writing a streaming dataframe to a dataset is:



```
val q = dkuContext.saveStreamingQueryToDataset("dataset", df)
q.awaitTermination() // waits for the sources to stop

```


Writing to a streaming endpoint is equally simple:



```
val q = dkuContext.saveStreamingQueryToStreamingEndpoint("endpoint", df)
q.awaitTermination() // waits for the sources to stop

```


The awaitTermination() call is needed, otherwise the recipe will exit right away.