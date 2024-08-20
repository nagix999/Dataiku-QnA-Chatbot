ERR\_CODEENV\_CONTAINER\_IMAGE\_FAILED: Could not build container image for this code environment[¶](#err-codeenv-container-image-failed-could-not-build-container-image-for-this-code-environment "Permalink to this heading")
===============================================================================================================================================================================================================================


When creating or updating a code environment, DSS tried to build the corresponding container
image(s) for containerized execution configuration(s) but one such build failed.


You can still use the code environment when running on the DSS backend, but won’t be able to
use the code environment on containers.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


You can find the logs of the `docker build` command either in the code environment creation/update
window, or in the code environment logs. If you or your IT administrator cannot resolve the error
from the logs, you can send those logs to Dataiku support.