Backing up[¶](#backing-up "Permalink to this heading")
======================================================


We strongly recommend that you do periodic backups of your DSS data. We also recommend that you backup before upgrading DSS.



Note


If you are using a Cloud Stacks setup, backups are managed automatically using Cloud snapshots. This section does not need to apply.




* [Full Backup](#full-backup)
* [Other Backup Methods](#other-backup-methods)
* [Restoring A Backup](#restoring-a-backup)


	+ [“Pristine restore”](#pristine-restore)
	+ [Restore on another machine, another location, or another DSS version](#restore-on-another-machine-another-location-or-another-dss-version)
* [Running An Automatic Backup](#running-an-automatic-backup)
* [What Can Be Excluded From The Backup](#what-can-be-excluded-from-the-backup)


	+ [Temporary / Cache data](#temporary-cache-data)
	+ [Logs](#logs)
	+ [Other ignorable data](#other-ignorable-data)
	+ [Data](#data)
* [Govern database](#govern-database)



The [DSS Data Directory (or DATA\_DIR)](datadir.html) contains your configuration, your projects (graphs, recipes, notebooks, etc.), your connections to databases, the filesystem\_managed files, etc.


The `DATA_DIR` does not contains datasets stored outside of the server: SQL servers, cloud storage, hadoop, etc.



Warning


For Govern nodes, you need to make sure to properly backup your PostgreSQL database using the regular PostgreSQL backup procedures. Each time you make a Govern backup, you should also ensure that you have a matching PostgreSQL backup.




[Full Backup](#id1)[¶](#full-backup "Permalink to this heading")
----------------------------------------------------------------


The simplest way to backup your data dir is to do a FULL backup of the whole data directory folder:


Make sure you don’t have any job running, then stop DSS:



```
DATA_DIR/bin/dss stop

```


Compress your data directory:



```
tar -zcvf your_backup.tar.gz /path/to/DATA_DIR/

```


Restart DSS:



```
DATA_DIR/bin/dss start

```




[Other Backup Methods](#id2)[¶](#other-backup-methods "Permalink to this heading")
----------------------------------------------------------------------------------


The above mentioned method using tar is very simple but always performs full backups, which might not be practical with large data dirs.


There are many other backup methods, and listing them all is outside of the scope of this document, but we can mention:


* Using rsync for incremental backups (either on the same machine or another machine)
* The duply / duplicity couple
* FS\-level backup tools (XFS dump for instance)



Warning


The full consistency of the backup is only guaranteed if DSS is not running or if the volume is snapshotted **atomically**. LVM and most cloud managed block devices provide atomic snapshotting capabilities. In
that case, the proper procedure would be:



> * Create the snapshot
> * Mount the snapshot as read\-only
> * Execute an incremental backup tool on the mounted snapshot
> * Unmount the snapshot
> * Destroy the snapshot


Alternatively, on cloud hosted volumes, the created snapshot can be kept as it is.




Note


All critical files of DSS are text files, which are written atomically, so partially\-consistent backups (made while DSS was running) might be recoverable with the help of manual intervention.





[Restoring A Backup](#id3)[¶](#restoring-a-backup "Permalink to this heading")
------------------------------------------------------------------------------


To restore a backup, you need to restore the files that you backed up to their original location.



### [“Pristine restore”](#id4)[¶](#pristine-restore "Permalink to this heading")


A pristine restore means a restoration of the backed up DSS data:


* on the same machine as the original one
* at the original location on the machine
* on the same DSS version


For this kind of restoration, you simply need to replace the content of DATA\_DIR with the content of the archive:


* If applicable, stop the currently running DSS, and move away the current content of the DATA\_DIR
* Restore the backup



```
cd DATA_DIR; tar -zxvpf your_backup.tar.gz

```


* Restart DSS




### [Restore on another machine, another location, or another DSS version](#id5)[¶](#restore-on-another-machine-another-location-or-another-dss-version "Permalink to this heading")



Warning


You can only restore a backup on a newer DSS version, not on an older one.



Restoration procedure:


* If restoring on another machine, download and uncompress the DSS software on the new machine
* Restore the backup files



```
mkdir new_datadir_location; tar -zxvpf your_backup.tar.gz

```


* Replay the installer in “upgrade” mode: this will “reattach” the restored datadir to the installation directory. It will also, if needed, migrate to the newer DSS version:



```
INSTALL_DIR/installer.sh -d DATA_DIR -u

```


If you installed the data dir on a different machine or in a different location, you need to rebuild the Python environment. See [the “Migrating the data directory section” of our documentation on migrations](../installation/custom/migrations.html)


* Replay the various “integration” setup scripts:



> + [R integration](../installation/custom/r.html)
> 	+ [Hadoop integration](../hadoop/installation.html)
> 	+ [Spark integration](../spark/installation.html)





[Running An Automatic Backup](#id6)[¶](#running-an-automatic-backup "Permalink to this heading")
------------------------------------------------------------------------------------------------


Here is an example shell script that you can run periodically within a cron task.



```
#!/bin/bash
#Purpose = Backup of DATA_DIR directory
#START

/path/to/DATA_DIR/bin/dss stop

export GZIP=-9
TIME=`date +"%Y-%m-%d"`
SRCDIR="/path/to/DATA_DIR"
DESDIR="/home/backups"
tar -cpzf $DESDIR/backup-dss-data-$TIME.tar.gz $SRCDIR

/path/to/DATA_DIR/bin/dss start

#Optionally remove old backups
OLD=`date -d "4 days ago" +"%Y-%m-%d"`
rm -f $DESDIR/backup-dss-data-$OLD.tar.gz

#END

```


Save this script in a file “backupscript.sh” and set a cron task like the following one (running from Monday to Friday at 6:15am):



```
15 6 * * 1-5 /path/to/backupscript.sh

```




[What Can Be Excluded From The Backup](#id7)[¶](#what-can-be-excluded-from-the-backup "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------



### [Temporary / Cache data](#id8)[¶](#temporary-cache-data "Permalink to this heading")


The data directory contains some folders which can safely be excluded from the backup because they only contain temporary data which can be rebuilt:


* tmp
* caches
* data\-catalog




### [Logs](#id9)[¶](#logs "Permalink to this heading")


In addition, the following folders only contain log data, which you might want to exclude from backup:


* run
* jobs
* scenarios
* diagnosis




### [Other ignorable data](#id10)[¶](#other-ignorable-data "Permalink to this heading")


The following folders contain data which you might consider excluding:


* exports (contains the data exports made by users)
* prepared\_bundles (contains automation bundles already exported)
* apinode\-packages (contains apinode packages already exported)




### [Data](#id11)[¶](#data "Permalink to this heading")


The following folders contain data built by DSS. This data can generally be rebuilt, but caution should be exercised when choosing whether to backup these folders:


* managed\_datasets
* analysis\_data
* saved\_models


Datasets stored outside of DATA\_DIR aren’t affected by a DSS upgrade: they will still be available after the upgrade.





[Govern database](#id12)[¶](#govern-database "Permalink to this heading")
-------------------------------------------------------------------------


Most of the Govern configuration and all items managed by Govern are stored in a dedicated PostgreSQL database. This includes, but is not limited to:


* governable items: business initiatives, projects, models, model versions and any other custom item.
* blueprints
* permissions
* custom pages
* relationships
* user profiles


In addition to the DATA\_DIR, for Govern nodes, you must backup the database.