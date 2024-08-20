ERR\_PLUGIN\_WRONG\_TYPE: Unexpected type of plugin[¶](#err-plugin-wrong-type-unexpected-type-of-plugin "Permalink to this heading")
====================================================================================================================================


An operation in the plugin development tools of DSS has targeted a plugin that is not in dev (add file, edit file, …)



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


This issue can only be fixed by a DSS administrator.


The plugin was probably installed on the instance as a final version, and now exists in the plugins/installed folder of the DSS data directory. If development needs to continue on the plugin, the version in plugins/installed needs to be removed.