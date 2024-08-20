ERR\_CODEENV\_CONTAINER\_IMAGE\_TAG\_NOT\_FOUND: Container image tag not found for this Code environment[¶](#err-codeenv-container-image-tag-not-found-container-image-tag-not-found-for-this-code-environment "Permalink to this heading")
===========================================================================================================================================================================================================================================


The Docker image tag was not found for the container image corresponding to this code environment.


This message usually means that either the code environment was not made usable with the current
container configuration, or that the image has not been rebuilt since updating this code environment
or upgrading DSS.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Some one with administrative permission over this code environment can make sure that this code
environment is usable with this container configuration and then update the code environment to
trigger the build of the corresponding container image.