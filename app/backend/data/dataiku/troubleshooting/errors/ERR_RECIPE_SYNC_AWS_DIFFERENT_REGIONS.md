ERR\_RECIPE\_SYNC\_AWS\_DIFFERENT\_REGIONS: Error in recipe engine: Redshift and S3 are in different AWS regions[¶](#err-recipe-sync-aws-different-regions-error-in-recipe-engine-redshift-and-s3-are-in-different-aws-regions "Permalink to this heading")
===========================================================================================================================================================================================================================================================


DSS attempted to sync a Redshift cluster with a S3 dataset from another AWS regions, using “Redshift to S3” or “S3 to Redshift” engine. AWS does not currently allow this operation.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


* Use a S3 bucket in the same AWS region as the Redshift cluster, or
* Use the DSS engine instead of “Redshift to S3” / “S3 to Redshift”.