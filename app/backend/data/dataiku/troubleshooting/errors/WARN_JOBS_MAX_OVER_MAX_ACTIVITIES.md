WARN\_JOBS\_MAX\_OVER\_MAX\_ACTIVITIES: Jobs \- Max jobs is over max activities[¶](#warn-jobs-max-over-max-activities-jobs-max-jobs-is-over-max-activities "Permalink to this heading")
=======================================================================================================================================================================================


The max number of jobs is over the max number of activities and will be limited by the later value.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


The maximum number of jobs can be used to limit the number of running JEKs.
Each job uses one or more activities. Therefore, to apply, the maximum number of jobs must be lower than the maximum number of activities.