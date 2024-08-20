Troubleshooting[¶](#troubleshooting "Permalink to this heading")
================================================================



Where to look for logs[¶](#where-to-look-for-logs "Permalink to this heading")
------------------------------------------------------------------------------


All logs of operations are in the “Logs” tab of the code environment. If the error happens while you are not in a code environment, you may need to look in the backend logs. See [Diagnosing and debugging issues](../troubleshooting/diagnosing.html)




Creation or package installation fails with gcc error[¶](#creation-or-package-installation-fails-with-gcc-error "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------------------------


In most cases, this kind of error is due to missing system development headers.



### Python.h not found[¶](#python-h-not-found "Permalink to this heading")


If you get this error, you need to install the Python development headers system package which matches the version of Python for this code env.



Note


System packages can only be installed by system administrators. The following instructions require shell access to the machine hosting DSS with **sudo** privileges.



In most cases, the name of the development package for a given version of Python can be obtained by appending “\-devel” (for RHEL\-like systems)
or “\-dev” (for Debian\-like systems) to the name of the system package which provides Python itself.


The following examples provide the corresponding instructions for the standard versions of Python 3\.x which are installed by the DSS installer.



#### RHEL / CentOS / AlmaLinux / Rocky Linux / Oracle Linux[¶](#rhel-centos-almalinux-rocky-linux-oracle-linux "Permalink to this heading")



```
# System development tools
sudo yum groupinstall "Development Tools"

# RHEL/CentOS/Oracle Linux 7.x (Python 3.6)
sudo yum install python3-devel

# RHEL/CentOS/Oracle Linux/AlmaLinux 8.x (Python 3.6)
sudo yum install python36-devel

```




#### Debian / Ubuntu[¶](#debian-ubuntu "Permalink to this heading")



```
# System development tools
sudo apt-get install build-essential

# Ubuntu 16.04/18.04 (Python 3.6)
sudo apt-get install python3.6-dev

# Ubuntu 20.04 / Debian 10 (Python 3.7)
sudo apt-get install python3.7-dev

```




#### Amazon Linux 2[¶](#amazon-linux-2 "Permalink to this heading")



```
# System development tools
sudo yum groupinstall "Development Tools"

# Python 3.7
sudo yum install python3-devel

```




#### SUSE Linux Enterprise Server 15[¶](#suse-linux-enterprise-server-15 "Permalink to this heading")



```
# System development tools
sudo zypper install -t pattern devel_basis

# Python 3.6
sudo zypper install python3-devel

```




#### macOS[¶](#macos "Permalink to this heading")


First, download and install [Xcode](https://developer.apple.com/xcode/) and then its Command Line Tools on the terminal.



```
xcode-select --install

```


If you need a specific Python version, you will need to install it.
Several options are possible such as [Python.org](https://www.python.org/downloads/mac-osx/) or [Pyenv](https://github.com/pyenv/pyenv#homebrew-on-macos).





### Other .h file not found[¶](#other-h-file-not-found "Permalink to this heading")


This error generally means that you need to install the development headers system package for the mentioned library. This package can only be installed by your system administrator. The name of the package is generally `libsomething-dev` or `something-devel`





Creation of code environments fails with : No module named ‘distutils.spawn’[¶](#creation-of-code-environments-fails-with-no-module-named-distutils-spawn "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


On some Ubuntu systems, the “distutils.spawn” Python module, which is a standard part of Python (though considered “legacy”
in Python 3\) is packaged independently of Python 3 itself.


This module is required by virtualenv however. If it is not present, creation of virtualenv\-based code environments will
fail with: `ModuleNotFoundError: No module named 'distutils.spawn'`


You need to install the `python3-distutils` system package:



```
# apt-get install python3-distutils

```