ERR\_PLUGIN\_DEV\_INVALID\_COMPONENT\_PARAMETER: Invalid parameter for plugin component creation[¶](#err-plugin-dev-invalid-component-parameter-invalid-parameter-for-plugin-component-creation "Permalink to this heading")
============================================================================================================================================================================================================================


The user is trying to add a non\-working component to the plugin :


* adding a code env definition when there is already one
* adding a java component without specifying a fully qualified class name containing at least one package hierarchy



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


For duplicate code environment definitions, go to the editor tab and delete the old one. For incorrect class names, add a package to the fully qualified class name.