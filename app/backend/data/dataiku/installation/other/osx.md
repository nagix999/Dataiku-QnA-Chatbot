Install on macOS[¶](#install-on-macos "Permalink to this heading")
==================================================================



Warning


* DSS on macOS is not meant for production usage.
* DSS on macOS is only provided for testing and experiments.
* Dataiku will not provide support on this platform.




macOS prerequisites[¶](#macos-prerequisites "Permalink to this heading")
------------------------------------------------------------------------



> * macOS 10\.9 “Mavericks” or later
> * At least 8Gb of RAM
> * Intel x86\-64 or Apple Silicon



Note


On Apple silicon, DSS runs using Rosetta (no additional installation or setup is required).
It is currently not possible to run DSS **natively** on Apple silicon.





Install and use DataScienceStudio[¶](#install-and-use-datasciencestudio "Permalink to this heading")
----------------------------------------------------------------------------------------------------


For standard desktop use, download the native macOS Dataiku Launcher package [from our website](https://www.dataiku.com/product/get-started/mac/).
Double click on DataScienceStudio.dmg and drag\-and\-drop the DataScienceStudio.app into the Applications folder.


To start DataScienceStudio, click on DataScienceStudio.app in the Applications folder.
DSS will automatically start.



Note


DSS and it’s dependencies will be downloaded and installed automatically upon first start of the Applications



The Dataiku Launcher will install DSS alongside its dependencies (Java, Python, R) on your machine with the following configuration:



> * Installation directory: $HOME/Library/DataScienceStudio/kits
> * Data directory: $HOME/Library/DataScienceStudio/dss\_home
> * Python directory: $HOME/Library/DataScienceStudio/Python
> * Java directory: $HOME/Library/DataScienceStudio/Java
> * R directory: $HOME/Library/DataScienceStudio/R
> * TCP base port: 11200
> * SSL certificate file path: $HOME/Library/DataScienceStudio/certificates.pem



Warning


Do not modify any of the above installations as it might break the setup. Dependencies versions and updates are managed by the launcher.



By defaut R is not installed.
To enable the R integration you need to select the corresponding option by right clicking on the tray icon. (DSS must be started)



Note


The logs are stored in the $HOME/Library/DataScienceStudio/launcher.log file.
For other logs check [Logging in DSS](../../operations/logging.html)





Alternative macOS installation (not recommended)[¶](#alternative-macos-installation-not-recommended "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------------


For advanced or non\-standard uses, although not recommended, it is possible to install DSS on macOS using the regular Linux procedure (see [Installing a new DSS instance](../custom/initial-install.html)), using a specific dataiku\-dss\-VERSION\-osx.tar.gz installation kit. The installation kit can be downloaded from <https://downloads.dataiku.com/public/studio>


You can follow the Linux installation procedure, apart from the script installing dependencies and the script configuring DSS to start on boot.


In that mode, you keep full control over all installation parameters (directories, port, Java and Python subsystems used).
However, the native widget enabling start/stop of DSS from the macOS dock is not available.