Split HTTP Query String[¶](#split-http-query-string "Permalink to this heading")
================================================================================


This processor splits the elements of an HTTP query string.


The query string is the part coming after the `?` in the string. For
example: `product_id=234&step=3`



Output[¶](#output "Permalink to this heading")
----------------------------------------------


This processor outputs one column for each chunk of the query string. Columns are named with the
prefix and the key of the HTTP Query string chunk.




Example[¶](#example "Permalink to this heading")
------------------------------------------------


For input:




| qs |
| --- |
| productid\=234\&step\=3 |
| customer\_id\=FDZ\&action\=cart\&step\=2 |


With prefix : ‘qs\_’, result would be:




| qs | qs\_product\_id | qs\_step | qs\_customer\_id | qs\_action |
| --- | --- | --- | --- | --- |
| productid\=234\&step\=3 | 234 | 3 |  |  |
| customer\_id\=FDZ\&action\=cart\&step\=2 |  | 2 | FDZ | cart |