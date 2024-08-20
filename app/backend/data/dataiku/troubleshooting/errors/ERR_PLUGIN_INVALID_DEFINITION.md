ERR\_PLUGIN\_INVALID\_DEFINITION: The plugin’s definition is invalid[¶](#err-plugin-invalid-definition-the-plugin-s-definition-is-invalid "Permalink to this heading")
======================================================================================================================================================================


The plugin’s definition is inconsistent. The inconsistencies can be:


* the plugin descriptor doesn’t define an identifier for the plugin
* several components shipped in the plugin have the same identifier
* the plugin declares a dependency expressed in a system unknown to DSS



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


This issue can only be fixed by the author of the plugin, and subsequent re\-installation of the plugin.