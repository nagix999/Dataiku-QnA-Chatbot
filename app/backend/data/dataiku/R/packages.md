Installing R packages[¶](#installing-r-packages "Permalink to this heading")
============================================================================


Any R package can be used in DSS. There is no restriction to which package can be installed and used.


The recommend way to install your own R packages is to install them in a [code environment](../code-envs/index.html).



Installing in a specific code environment (recommended)[¶](#installing-in-a-specific-code-environment-recommended "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------------------------


Please see [Operations (R)](../code-envs/operations-r.html)




Installing in the root DSS environment (not recommended)[¶](#installing-in-the-root-dss-environment-not-recommended "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------------------------------------


In addition to user\-controlled code environments, DSS has its own builtin R environment, which contains a default set of packages.
It is possible, although not recommended to install your own packages in that builtin environment.


Installing packages in the builtin environment requires shell access on the host running DSS and can only be performed by DSS administrators.


A number of packages are preinstalled in the builtin environment. Modifying the version of these packages is **not supported** and may result in causing DSS to stop functioning.


* Go to the DSS data directory
* Run `./bin/R`



Warning


Beware: you must run ./bin/R, not the “R” binary on your PATH



* Run the regular `install.packages()` R command


In Dataiku Cloud, the built\-in environment is managed so it is not possible to install your own packages. Please use a code environment to install non\-default packages.



### Installing without Internet access[¶](#installing-without-internet-access "Permalink to this heading")