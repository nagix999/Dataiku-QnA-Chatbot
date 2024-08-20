ERR\_SECURITY\_CRUD\_INVALID\_SETTINGS: The user attributes submitted for a change are invalid[¶](#err-security-crud-invalid-settings-the-user-attributes-submitted-for-a-change-are-invalid "Permalink to this heading")
=========================================================================================================================================================================================================================


The request submitted to modify a user attributes from the administration panel are invalid.
On of the following could have happened:


* The Display name is empty
* The Login is empty
* The Login name is too short: it must have at least 3 characters
* The Login name is too long: it must not exceed 80 characters
* The Login name contains invalid characters: the allowed characters are letters, numbers, @, ., \+, \_ and \-.
* The updated user is updated as a LDAP user but is not a LDAP user
* The Group name added to the user is empty
* The Group name added to the user is too long: it must not exceed 80 characters
* The Group name added to the user contains invalid characters: the allowed characters are letters, numbers, @, ., \+, \_ and \-.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Fix the user attributes to match the constraints.