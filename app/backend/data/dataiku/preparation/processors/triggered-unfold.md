Triggered unfold[¶](#triggered-unfold "Permalink to this heading")
==================================================================


This processor is used to reassemble several rows when a specific value
is encountered.


It is useful for analysis of “interaction sessions” (a series of events
with a specific event marking the beginning of a new interaction
session). For example, while analyzing the logs of a web game, the
“start game” event would be the beginning event.



Warning


**Limitations**


Triggered unfold offers a a basic session analysis that is very simple to use, but it comes with many limitations.


Triggered unfold assumes that the input data is sorted by time. It only works on “unsplitted” datasets (for example, a single file or a SQL table)


Non\-terminated sessions are kept in memory. It is recommended that you do not use Triggered Unfold if you have more than a few thousands sessions


For more advanced sessions analysis, if you have splitted data or a large number of sessions, you should use specific recipes (for example, using SQL)



For example, let’s imagine this dataset:




| user\_id | event\_type | timestamp |
| --- | --- | --- |
| user\_id1 | login\_event | t1 |
| user\_id2 | login\_event | t2 |
| user\_id1 | event\_type2 | t3 |
| user\_id2 | event\_type2 | t4 |
| user\_id1 | login\_Event | t5 |
| user\_id2 | event\_type3 | t6 |
| user\_id2 | login\_event | t7 |


We know that “login\_event” marks the beginning of a new session / new interaction, and we want to track the timestamps of other event types in each session.


We apply a “Triggered unfold” with the following parameters:


* Column acting as event key: user\_id
* Fold column: event\_type
* Trigger value: login\_event
* Column with data: timestamp


We generate the following result:




| user\_id | login\_event | event\_type2 | event\_type3 | login\_event\_prev |
| --- | --- | --- | --- | --- |
| user\_id1 | t1 | t3 |  |  |
| user\_id2 | t2 | t4 | t6 |  |
| user\_id1 | t5 |  |  | t1 |
| user\_id2 | t7 |  |  | t2 |


We get:


* One column for each type of event
* One line for each occurence of “login\_event” in the stream
* The user\_id associated to each login\_event is kept, and the timestamps of events are restored
* The “\_prev” column tracks the data associated to the previous occurence of “login\_event” for each user\_id.


For more details on reshaping, please see [Reshaping](../reshaping.html).