WARN\_MISC\_CODE\_ENV\_BUILTIN\_MODIFIED: Built\-in code env modified[¶](#warn-misc-code-env-builtin-modified-built-in-code-env-modified "Permalink to this heading")
=====================================================================================================================================================================


Packages have been installed manually in the built\-in code environment of DSS. The built\-in code environment should not be altered.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Remove the manually installed packages from the built\-in code environment or reset the built\-in environment, then use a custom code environment instead. See [Create a code environment](../../code-envs/operations-python.html#code-environment-create-codeenv) for more details.


The built\-in environment can be completely reset in a few steps:


1. Delete the current built\-in environment (`<DSS_HOME>/pyenv`)
2. run `<INSTALL_DIR>/installer.sh -u -d <DSS_HOME>`