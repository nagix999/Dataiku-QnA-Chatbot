Troubleshooting[¶](#troubleshooting "Permalink to this heading")
================================================================



sudo failed (exit code 1\) when UIF is enabled and devtoolset\-8 is installed[¶](#sudo-failed-exit-code-1-when-uif-is-enabled-and-devtoolset-8-is-installed "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


If devtoolset\-8 is installed on your instance and you are using UIF, devtoolset\-8 will include a non\-compatible sudo in the default PATH. Note that if you recently installed [prophet](../R/prophet.html) you may encounter this error due to upgrading to devtoolset\-8 in order to install the package. If you are using UIF and devtoolset\-8 and receive a sudo error, you can force the use of the default sudo with the following steps:


Stop DSS:



```
./DATADIR/bin/dss stop

```


Edit your `DATADIR/install.ini` file and add the entry:



```
[mus]
custom_root_sudo = ["/usr/bin/sudo"]

```


Start DSS:



```
./DATADIR/bin/dss start

```