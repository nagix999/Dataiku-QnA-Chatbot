ERR\_PLUGIN\_CANNOT\_LOAD: Plugin cannot be loaded[¶](#err-plugin-cannot-load-plugin-cannot-be-loaded "Permalink to this heading")
==================================================================================================================================


A plugin failed to be loaded, because :


* another one with the same name but of another type already exist



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


This issue can only be fixed by a DSS administrator.


There is a folder with the same name in plugins/dev and the plugins/installed. Either the plugin in the plugins/dev or the plugins/installed folder needs to be removed.