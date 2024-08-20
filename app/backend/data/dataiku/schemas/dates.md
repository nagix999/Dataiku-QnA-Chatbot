Handling and display of dates[¶](#handling-and-display-of-dates "Permalink to this heading")
============================================================================================


In Dataiku DSS, “dates” mean “an absolute point in time”, meaning something that is expressible as a date and time and timezone.
For example, `2001-01-20T14:00:00.000Z` or `2001-01-20T16:00:00.000+0200`, which refer to the same point in time
(14:00Z is 2pm UTC, and 16:00\+0200 is 4pm UTC\+2, so 2pm UTC too).



Displaying dates[¶](#displaying-dates "Permalink to this heading")
------------------------------------------------------------------


DSS only displays dates in UTC especially in charts
If you use the format date processor with a proper ISO8601 format, it will temporarily show it as a different time zone,
but as soon as you write it out or read it in a chart, it will be in UTC again.


If you use a formatter to format as `16:00+0200` and selects the output to be a string,
then the string value will be preserved but it’s not a date anymore.


See [Managing dates](../preparation/dates.html) for more information.




Handling of dates in SQL[¶](#handling-of-dates-in-sql "Permalink to this heading")
----------------------------------------------------------------------------------


A date column in SQL will optionally be read in DSS as a “DSS date”, i.e. an “absolute point in time”, aka a “timestamp with time zone” in SQL parlance.
So when DSS reads “2020\-02\-14” from the SQL table, it has to map it to a time. For that, it assumes that it is corresponding to “midnight”, but which midnight?
On a SQL dataset, there is an “assumed time zone” setting for this. If you select “Local” as “assumed time zone” in the settings of a recipe’s input SQL dataset,
then DSS will consider that it is reading “2020\-02\-14 at midnight in Netherlands” (for example, if your local TZ on your server is Europe/Amsterdam).
Which DSS then displays in UTC, so “2020\-02\-13T23:00:00Z”. If you want it to show “2020\-02\-14T00:00:00Z”, you must set the assumed time zone to UTC.