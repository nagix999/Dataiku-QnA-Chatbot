ERR\_PROJECT\_INVALID\_PROJECT\_KEY: Invalid project key[¶](#err-project-invalid-project-key-invalid-project-key "Permalink to this heading")
=============================================================================================================================================


The specified project key is invalid, either incorrect or already used.
The error message will have more details on the exact issue.


This can happen when trying to import a DSS project or bundle.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Check the project key, edit it if necessary (if it was manually specified).


Check the source of this archive. If you want to overwrite a project when importing,
first delete the former project, then import the other one.