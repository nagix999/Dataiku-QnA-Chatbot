ERR\_USER\_ACTION\_FORBIDDEN\_BY\_PROFILE: Your user profile does not allow you to perform this action[¶](#err-user-action-forbidden-by-profile-your-user-profile-does-not-allow-you-to-perform-this-action "Permalink to this heading")
========================================================================================================================================================================================================================================


User profiles define the types of actions your are allowed to do from a licensing perspective.


This error usually happens when, as a READER or DATA\_ANALYST, you are trying to build a Visual Machine Learning model.
For example, if your profile is READER or DATA\_ANALYST, this error will happen if you attempt to
build a Visual Machine Learning model.


This error may also happen if your DSS administrator updated the DSS license. Your user profile may not
exist anymore in the new license.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


To solve this issue ask the DSS administrator to update the user profile (note that DESIGNER is
the unlimited profile in most licenses).


See also [User profiles](../../security/user-profiles.html)