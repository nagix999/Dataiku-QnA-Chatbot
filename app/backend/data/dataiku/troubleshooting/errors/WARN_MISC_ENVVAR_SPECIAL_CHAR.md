WARN\_MISC\_ENVVAR\_SPECIAL\_CHAR: Environment variables with special characters[¶](#warn-misc-envvar-special-char-environment-variables-with-special-characters "Permalink to this heading")
=============================================================================================================================================================================================


Some of the environment variables in your DSS instance do not adhere to Kubernetes restrictions and will therefore not be propagated to containerized jobs.
For Kubernetes, a valid environment variable name must consist of alphabetic characters, digits, `_`, `-`, or `.`, and must not start with a digit. The regular expression used for validation is `[-._a-zA-Z][-._a-zA-Z0-9]*`.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


If you need these environment variables to be propagated to containerized jobs, you must rename them to match the validation pattern used by Kubernetes.