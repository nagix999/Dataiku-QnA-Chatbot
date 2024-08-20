ERR\_SECURITY\_INVALID\_PASSWORD: The password hash from the database is invalid[¶](#err-security-invalid-password-the-password-hash-from-the-database-is-invalid "Permalink to this heading")
==============================================================================================================================================================================================


The password hash retrieved from the database is not a valid hash.
The user password cannot be verified, the database may have been corrupted.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


This issue can only be fixed by a DSS administrator.


If the `DATA_DIR/config/users.json` file has been modified manually,
restore the previous version.


Otherwise, use the administrator account to set a new password for the affected user.
If the admin account itself is corrupted, the API with may be used to do so.