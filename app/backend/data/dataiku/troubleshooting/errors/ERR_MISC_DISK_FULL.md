ERR\_MISC\_DISK\_FULL: Disk is almost full[¶](#err-misc-disk-full-disk-is-almost-full "Permalink to this heading")
==================================================================================================================


The file system mentioned in the error is almost full. This error is triggered when a file system is over 90% full. This threshold can be modified with the dku.sanitycheck.diskusage.threshold dip property.
Note that the value must be a percentage (i.e. dku.sanitycheck.diskusage.threshold\=85 for 85%).



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Various subsystems of DSS consume disk space in the DSS data directory, see [Managing DSS disk usage](../../operations/disk-usage.html) for more details.