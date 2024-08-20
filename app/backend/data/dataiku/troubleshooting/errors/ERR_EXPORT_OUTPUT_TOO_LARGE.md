ERR\_EXPORT\_OUTPUT\_TOO\_LARGE: Export file size limit reached[¶](#err-export-output-too-large-export-file-size-limit-reached "Permalink to this heading")
===========================================================================================================================================================


The export reached its max allowed size, so DSS automatically stopped the export to avoid consuming too much disk space on the server.


This error can be triggered when the export process requires a temporary file. Project duplication is also impacted.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


A DSS administrator can increase the max allowed size by modifying a configuration key in `config/dip.properties` in the data directory:


* For dataset exports: `dku.exports.file.maxSizeMB`
* For bundle exports: `dku.exports.projectBundle.maxSizeMB`
* For project exports or duplication: `dku.exports.project.maxSizeMB`
* For API service packages: `dku.apiService.package.maxSizeMB`


Specify the limit in megabytes.