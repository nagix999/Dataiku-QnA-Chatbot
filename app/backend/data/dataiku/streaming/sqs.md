AWS SQS[¶](#aws-sqs "Permalink to this heading")
================================================



Connection setup[¶](#connection-setup "Permalink to this heading")
------------------------------------------------------------------


SQS connections offer the same settings as [S3 connections](../connecting/s3.html) to define AWS credentials




Message format[¶](#message-format "Permalink to this heading")
--------------------------------------------------------------


SQS messages are text only. DSS offers to read or write them as simple text or as JSON



### Single\-value[¶](#single-value "Permalink to this heading")


Upon reading, the message’s text is put in the row under a column name, and upon writing, the value of the given column is taken from the row and used as message.




### JSON[¶](#json "Permalink to this heading")


Upon reading, SQS messages are parsed from JSON to fill a row, and conversely, upon writing the fields of the row are grouped in a JSON object