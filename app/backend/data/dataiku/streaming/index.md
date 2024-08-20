Streaming data[¶](#streaming-data "Permalink to this heading")
==============================================================



Warning


**Experimental**: Support for Streaming is [Experimental](../troubleshooting/support-tiers.html) and not fully\-supported:




Note


Streaming features are not enabled by default in DSS. You need to manually activate them by going to *Administration \> Settings \> Misc. \> Other*, check the “Enable streaming” box and restart DSS.




* [Concepts](concepts.html)
	+ [Streaming endpoints](concepts.html#streaming-endpoints)
	+ [Continuous recipe](concepts.html#continuous-recipe)
	+ [Continuous activity](concepts.html#continuous-activity)
* [Kafka](kafka.html)
	+ [Connection setup](kafka.html#connection-setup)
	+ [Message format](kafka.html#message-format)
		- [Single\-value](kafka.html#single-value)
		- [JSON](kafka.html#json)
		- [Avro](kafka.html#avro)
	+ [Timestamp handling](kafka.html#timestamp-handling)
* [AWS SQS](sqs.html)
	+ [Connection setup](sqs.html#connection-setup)
	+ [Message format](sqs.html#message-format)
		- [Single\-value](sqs.html#single-value)
		- [JSON](sqs.html#json)
* [HTTP Server\-Sent Events](httpsse.html)
* [Continuous sync](csync.html)
	+ [Partitioning](csync.html#partitioning)
* [Continuous Python](cpython.html)
	+ [Reading from streaming endpoints](cpython.html#reading-from-streaming-endpoints)
		- [Reading from Kafka endpoints](cpython.html#reading-from-kafka-endpoints)
		- [Reading from SQS endpoints](cpython.html#reading-from-sqs-endpoints)
		- [Reading from HTTP SSE endpoints](cpython.html#reading-from-http-sse-endpoints)
	+ [Writing to streaming endpoints](cpython.html#writing-to-streaming-endpoints)
		- [Writing to Kafka endpoints](cpython.html#writing-to-kafka-endpoints)
	+ [Writing to datasets](cpython.html#writing-to-datasets)
	+ [Offset management](cpython.html#offset-management)
* [Streaming Spark Scala](streaming_spark_scala.html)