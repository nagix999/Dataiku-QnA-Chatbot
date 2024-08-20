WARN\_MISC\_CODE\_ENV\_DEPRECATED\_INTERPRETER: Deprecated Python interpreter[¶](#warn-misc-code-env-deprecated-interpreter-deprecated-python-interpreter "Permalink to this heading")
======================================================================================================================================================================================


The code environment use a deprecated Python interpreter.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Update the Python interpreter used by the code environment in the code environment settings.


As for the built\-in environment, it can be updated in a few steps:


1. Delete the current built\-in environment (`<DSS_HOME>/pyenv`)
2. run `<INSTALL_DIR>/installer.sh -u -d <DSS_HOME> -P <Python interpreter>`