ERR\_FSPROVIDER\_HTTP\_REQUEST\_FAILED: HTTP request failed[¶](#err-fsprovider-http-request-failed-http-request-failed "Permalink to this heading")
===================================================================================================================================================


DSS tried to perform an HTTP request which failed.


This error can happen:


* when trying to preview or use HTTP datasets
* when trying to run a download recipe with HTTP sources


This error indicates that a connection could be established, but that there was
a subsequent issue with the HTTP request.
The message of the error will contain additional information.


Some common reasons for a HTTP request failure are:


* The URL is incorrect
* There was an error on the HTTP server’s side
* There is a proxy preventing DSS from fetching that URL
* The URL is incorrectly labeled as HTTPS instead of HTTP or vice\-versa



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


The first step for solving this issue is to go to the dataset’s or download recipe
settings screen.


* Refer to the [documentation on HTTP dataset](../../connecting/http.html) and
[documentation on DSS and Hive](../../other_recipes/download.html)
in order to get additional information on HTTP sources in DSS.
* Make sure that the URLs are correct
* Try accessing these URLs in the browser
* Try accessing these URLs using the `curl` command line from the DSS server
* Check if a proxy is between DSS and the HTTP server(s),
ask your DSS Administrator to review DSS’s proxy settings
(in Administration \> Settings \> Misc).   

On the HTTP dataset’s (or Dowload recipe’s) settings, you can specify
whether its URLs should be fetched through DSS’s globally\-configured
proxy (for external networks / Internet) or not (for internal network).