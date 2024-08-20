Upgrading FM[¶](#upgrading-fm "Permalink to this heading")
==========================================================



Description[¶](#description "Permalink to this heading")
--------------------------------------------------------


This guided setup allows you to upgrade an existing Dataiku Cloud Stacks for AWS.
It assumes you had followed [the guided setup example](guided-setup-new-vpc-elastic-compute.html) to build
your initial setup.


Prerequisites


You need to have administrative access to an existing AWS subscription




Steps[¶](#steps "Permalink to this heading")
--------------------------------------------



Warning


For any upgrade to Fleet Manager version 12\.6\.0 or higher, it is required to previously stop the virtual
machine hosting Fleet Manager, or the upgrade process could fail.




### Stop Fleet Manager server[¶](#stop-fleet-manager-server "Permalink to this heading")


* Under Cloud Formation, find your already created stack and click on it.
* Go to the ‘Resources’ tab
* Copy the Instance ID (do not click on it)
* Go to the EC2 console, in the Instances list
* Add a filter `Instance ID = <instance id>`, a single running instance shows up
* Click on the instance ID to open instance page
* Find FM private IP in ‘Private IPv4 addresses’ and copy it
* Then, click on ‘Instance State \> Stop instance’
* Wait for the instance to reach the state Stopped




### Backup Fleet Manager’s data disk[¶](#backup-fleet-manager-s-data-disk "Permalink to this heading")


* Under Cloud Formation, find your already created stack and click on it.
* Go to the ‘Resources’ tab
* Copy your data volume id
* In EC2 \> Elastic Block Store \> Volumes search using your volume id
* Select your volume and click on Actions \> Create snapshot
* Enter a description and click on ‘Create snapshot’
* Copy the snapshot id




### Delete your existing stack[¶](#delete-your-existing-stack "Permalink to this heading")


* Under Cloud Formation, find your stack and click on resources
* Click on the instance
* Note its IAM Role
* Go back in Cloud Formation and Delete your stack
* Wait for the stack to be fully deleted




### Create the new stack[¶](#create-the-new-stack "Permalink to this heading")


* Click on ‘Create stack’ \> ‘With new resources’
* In “Amazon S3 URL”, enter `https://dataiku-cloudstacks.s3.amazonaws.com/templates/fleet-manager/13.1.0/fleet-manager-instance.yml`
* Click on Next
* Enter the stack name
* Put the same basic settings as in the original setup including FM role / VPC and subnet
* Under Advanced settings, put the FM private IP you copied before and the Snapshot ID
* If you have used a KMS key specify it
* Click on ‘Next’
* Click on ‘Next’ again
* Acknowledge the resources creation and submit





Troubleshooting[¶](#troubleshooting "Permalink to this heading")
----------------------------------------------------------------



### PostgreSQL related error messages[¶](#postgresql-related-error-messages "Permalink to this heading")


If you are troubleshooting a non\-responsive Fleet Manager after an upgrade, you might want to observe the logs
displayed by `sudo journalctl -u fm-setup`. If you see the message `Postgres server cannot be upgraded because it was not stopped properly. Please consult documentation.`
or `PostgreSQL upgrade failed`, it is likely the machine hosting Fleet Manager was not properly
stopped before the upgrade. You can fix it by upgrading to an intermediate version first. Follow these instructions:


* Replay steps *Stop Fleet Manager server*, *Backup Fleet Manager’s data disk* and *Delete your existing stack*
* Replay *Create the new stack* but replace the documented S3 URL by `https://dataiku-cloudstacks.s3.amazonaws.com/templates/fleet-manager/12.5.2/fleet-manager-instance.yml`
* Restart the upgrade process




### DSS machines seem unresponsive[¶](#dss-machines-seem-unresponsive "Permalink to this heading")


In case the DSS machines seem unresponsive in the FM UI following the upgrade, reprovision the different DSS machines for them to be able to communicate again with FM.