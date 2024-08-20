Cannot login to DSS[¶](#cannot-login-to-dss "Permalink to this heading")
========================================================================


There are different cases when you have trouble logging in to your DSS instance



* [You are using the Dataiku Cloud Trial](#you-are-using-the-dataiku-cloud-trial)
* [You are using DSS Free Edition](#you-are-using-dss-free-edition)
* [You are using DSS Enterprise Edition](#you-are-using-dss-enterprise-edition)
* [Your credentials don’t work](#your-credentials-don-t-work)
* [Resetting a forgotten DSS password](#resetting-a-forgotten-dss-password)


	+ [If you still have access to DSS](#if-you-still-have-access-to-dss)
	+ [If you have lost all access to DSS](#if-you-have-lost-all-access-to-dss)




[You are using the Dataiku Cloud Trial](#id2)[¶](#you-are-using-the-dataiku-cloud-trial "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------


ie: you didn’t install anything and are connecting to a URL that ends with `.i.cloud.dataiku.com`


You should have received credentials by email. If your credentials don’t work, it can be caused by:


* You are trying to use IE or Edge to connect. These browsers are not supported by DSS and login will not work. Please use Chrome or Firefox. In case it’s needed, [Portable Firefox](http://portableapps.com/apps/internet/firefox_portable) can be run without installation
* The CapsLock key is enabled
* A change of keyboard layout (e.g. azerty/qwerty),
* A spurious space at the beginning or end of the login or password (be extra\-careful when copy\-pasting the password from the invitation email, or try to type it manually).


If none of this works or you have not received your credentials, please [contact us](../obtaining-support.html)




[You are using DSS Free Edition](#id3)[¶](#you-are-using-dss-free-edition "Permalink to this heading")
------------------------------------------------------------------------------------------------------


You are faced with the DSS login screen


![../../_images/DSS-login.png](../../_images/DSS-login.png)
This screen prompts you to login to DSS, using your DSS account. By default, the credentials for this account are:


* login: **admin**
* password: **admin**


You can change the password in the account settings. You need this account, for instance, each time you clear your cookies, change browser, or restart DSS.


(For the Enterprise Edition of DSS, which allows collaborative features, there are several DSS accounts: one per user.)


If your credentials don’t work, see the section below for suggestions.




[You are using DSS Enterprise Edition](#id4)[¶](#you-are-using-dss-enterprise-edition "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------


Users of the Enterprise Edition have only one account, created by the DSS administrator. She should provide you with a username and password. If your credentials don’t work, see the section below for suggestions.




[Your credentials don’t work](#id5)[¶](#your-credentials-don-t-work "Permalink to this heading")
------------------------------------------------------------------------------------------------


If your credentials don’t work, it can be caused by:


* You are trying to use IE or Edge to connect. These browsers are not supported by DSS and login will not work. Please use Chrome or Firefox. In case it’s needed, [Portable Firefox](http://portableapps.com/apps/internet/firefox_portable) can be run without installation
* The CapsLock key is enabled
* A change of keyboard layout (e.g. azerty/qwerty),
* A spurious space at the beginning or end of the login or password


If none of this works or you have not received your credentials, your DSS administrator (which may be you) needs to reset the password for this account




[Resetting a forgotten DSS password](#id6)[¶](#resetting-a-forgotten-dss-password "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------



Note


This procedure is only valid if you are using a local login. If you are using SSO or LDAP login, you need to reset your SSO or LDAP password.




### [If you still have access to DSS](#id7)[¶](#if-you-still-have-access-to-dss "Permalink to this heading")


Login as a DSS administrator, then go to Administration \> Security \> Users. Select the user to edit, enter a new password and save it.




### [If you have lost all access to DSS](#id8)[¶](#if-you-have-lost-all-access-to-dss "Permalink to this heading")


This can happen if you have the lost the password for the sole admin account (which is the case by default, when you install DSS, there is a single admin account called **admin**).


To reset a DSS local password, you need to have have command\-line access to the server, for instance through SSH. DSS must be running.


Reset the password with the following commands:



```
cd DATA_DIR
./bin/dsscli user-edit --password NEW_PASSWORD LOGIN

```


Where:


* `DATA_DIR` is the path to your Dataiku data directory
* `LOGIN` is the username whose password needs to be reset
* `NEW_PASSWORD` is the new password.