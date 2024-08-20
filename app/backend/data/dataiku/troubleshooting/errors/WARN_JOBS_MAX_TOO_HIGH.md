WARN\_JOBS\_MAX\_TOO\_HIGH: Jobs \- Max value too high[¶](#warn-jobs-max-too-high-jobs-max-value-too-high "Permalink to this heading")
======================================================================================================================================


The max number of jobs seems too high. This may reduce performance if too many jobs run concurrently and if the instance is not correctly sized.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


To improve global performance, size the number of jobs according to how many can run concurrently on the instance (depending on the RAM and CPU available).
This may require some testing to have a good value.