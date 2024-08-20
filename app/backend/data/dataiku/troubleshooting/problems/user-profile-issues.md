“Your user profile does not allow” issues[¶](#your-user-profile-does-not-allow-issues "Permalink to this heading")
==================================================================================================================


Each user in DSS has a single “user profile” assigned to it. This user profile is a licensing\-related concept that may restrict what actions the user may do.


In particular, some user profiles may not use coding recipes, notebooks or Visual Machine Learning.


Please see [User profiles](../../security/user-profiles.html) for more information about user profiles.


If you get a “Your user profile does not allow …” error, this action has been denied because of your user profile. Your user profile needs to be switched to a higher one.


Generally, the “Data Scientist” user profile has all rights in DSS.


If a user has no profile associated with it, the user will automatically default to a “Reader” profile. This means that the user won’t be able to perform any kind of modification, regardless of user group status. If that’s the case, go through the same steps outlined below to set the desired user profile.



If you are a DSS administrator[¶](#if-you-are-a-dss-administrator "Permalink to this heading")
----------------------------------------------------------------------------------------------


* Go to Administration \> Security \> Users
* Select the user
* Change the User profile to the desired value
* Save


After the user profile has been changed, the user (which can be you) must reload the DSS tab in his browser for the change to be taken into account.




If you are not a DSS administrator[¶](#if-you-are-not-a-dss-administrator "Permalink to this heading")
------------------------------------------------------------------------------------------------------


Ask your DSS administrator to change your user profile. Once it has been done, reload the DSS tab in your browser for the change to be taken into account.