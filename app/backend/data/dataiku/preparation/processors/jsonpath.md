Extract with JSONPath[¶](#extract-with-jsonpath "Permalink to this heading")
============================================================================


Extract data from a column containing JSON using the JSONPath syntax, and create a new column containing the extracted data.



Example[¶](#example "Permalink to this heading")
------------------------------------------------


JSON object from input column: `{"person":"John","age":24}`


JSONPath expression: `$.age`


Extracted data: `24`




Options[¶](#options "Permalink to this heading")
------------------------------------------------


**Input column**


Column containing the JSON to extract.


**Output column**


Create a new column for output.


**JSONPath expression**


Expression following the syntax in the [JSONPath documentation](http://goessner.net/articles/JsonPath/).


**Single value**


Check if the path represents a single value and not an array.