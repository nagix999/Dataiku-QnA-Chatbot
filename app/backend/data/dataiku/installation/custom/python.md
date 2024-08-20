Python integration[¶](#python-integration "Permalink to this heading")
======================================================================



* [Rebuilding the builtin Python environment](#rebuilding-the-builtin-python-environment)



DSS comes with native Python integration, and the ability to create multiple isolated Python environments, through code envs. See [Code environments](../../code-envs/index.html) for more details.


The DSS installation phase creates an initial “builtin” Python environment, which is used to run all Python\-based internal DSS operations, and is also used as a default environment to run user\-provided Python code. This builtin Python environment comes with a default set of packages, suitable for this version of DSS. These are setup by the DSS installer and updated accordingly on DSS upgrades. This builtin environment is not controllable nor configurable by users.


DSS supports Python 3\.6, 3\.7, 3\.9 or 3\.10 for its builtin Python environment. Depending on the OS used, a suitable Python version is automatically selected for the Python environment.
If required, this version can be controlled with the optional `-P PYTHONBIN` option to the DSS installer.



[Rebuilding the builtin Python environment](#id1)[¶](#rebuilding-the-builtin-python-environment "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------



Warning


This procedure should only be performed under instructions from Dataiku Support



It is possible to rebuild the builtin Python virtual environment, if necessary. This is the case if you moved or renamed DSS’s data directory,
as Python virtual environments embed their full directory name. This may be also be the case if you want to reset the virtualenv to a pristine state
following accidental installation / deinstallation of additional packages.



```
# Stop DSS
DATA_DIR/bin/dss stop

# Remove the builtin virtual environment, keeping backup
mv DATA_DIR/pyenv DATA_DIR/pyenv.backup

# Reinstall DSS (upgrade mode), using the default Python version for this platform
# This recreates the builtin env in DATA_DIR/pyenv
dataiku-dss-VERSION/installer.sh -d DATA_DIR -u

# Reinstall DSS (upgrade mode), choosing the underlying base Python to use
dataiku-dss-VERSION/installer.sh -d DATA_DIR -u -P /usr/local/bin/python3.9

# Restart DSS
DATA_DIR/bin/dss start

# When everything is considered stable, remove the backup
rm -rf DATA_DIR/pyenv.backup

```