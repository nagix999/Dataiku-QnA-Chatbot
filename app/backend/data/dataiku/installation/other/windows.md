Install on Windows[¶](#install-on-windows "Permalink to this heading")
======================================================================



Warning


* DSS on Windows is purely experimental and still in its early stages.
* DSS on Windows is not meant for production usage.
* DSS on Windows is only provided for testing and experiments.
* Dataiku will not provide support on this platform.



DSS can be installed on Windows 10 or later through the Dataiku Launcher.


Download the Dataiku Launcher installer for Windows [from our website](https://www.dataiku.com/product/get-started/windows/)
and run it to install the Dataiku Launcher.


When the application is running an icon will appear in the tray on which you can right click to manage the application.


The Dataiku Launcher will install DSS alongside its dependencies (Java, Python, R) on your machine with the following configuration:



> * Installation directory: %LOCALAPPDATA%/Dataiku/DataScienceStudio/kits
> * Data directory: %LOCALAPPDATA%/Dataiku/DataScienceStudio/dss\_home
> * Python directory: %LOCALAPPDATA%/Dataiku/DataScienceStudio/Python
> * Java directory: %LOCALAPPDATA%/Dataiku/DataScienceStudio/Java
> * R directory: %LOCALAPPDATA%/Dataiku/DataScienceStudio/R
> * TCP base port: 11200



Warning


Do not modify any of the above installations as it might break the setup. Dependencies versions and updates are managed by the launcher.




Warning


It is important that the **%LOCALAPPDATA%** path does not include any spaces or non\-ASCII characters.
In case your username has unsupported characters, you may need to create a new user before installing DSS.



By defaut R is not installed. To enable the R integration you need to select the corresponding option by right clicking on the tray icon.



Warning


Installation of the R integration can take a significant amount of time.




Note


The logs are stored in the %LOCALAPPDATA%/Dataiku/DataScienceStudio/launcher.log file.
For other logs check [Logging in DSS](../../operations/logging.html)




Windows prerequisites[¶](#windows-prerequisites "Permalink to this heading")
----------------------------------------------------------------------------



> * Windows 10 or later
> * At least 8Gb of RAM
> * Windows [Long Path must be enabled.](https://docs.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=powershell#enable-long-paths-in-windows-10-version-1607-and-later) If not enabled, the Dataiku Launcher will prompt you to enable it.