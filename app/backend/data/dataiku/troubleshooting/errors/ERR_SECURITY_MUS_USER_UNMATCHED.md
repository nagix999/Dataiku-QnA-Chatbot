ERR\_SECURITY\_MUS\_USER\_UNMATCHED: The DSS user is not configured to be matched onto a system user[¶](#err-security-mus-user-unmatched-the-dss-user-is-not-configured-to-be-matched-onto-a-system-user "Permalink to this heading")
=====================================================================================================================================================================================================================================


When DSS impersonates a user, it must have a rule to determine the system
user name which it is supposed to impersonate. This error means no rule
has been configured for this user.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


This issue can only be fixed by a DSS Administrator.


Select an impersonation matching rule in the administration panel for the faulty user.
See [User Isolation Concepts](../../user-isolation/concepts.html)
for more information about identity mapping.