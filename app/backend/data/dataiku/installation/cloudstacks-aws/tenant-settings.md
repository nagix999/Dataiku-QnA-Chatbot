Global settings[¶](#global-settings "Permalink to this heading")
================================================================


There are only a few global settings in Fleet Manager, accessible from the “Cloud Setup” screen.



AWS authentication[¶](#aws-authentication "Permalink to this heading")
----------------------------------------------------------------------


Fleet Manager needs to perform various calls to the AWS API in order to manage resources.


The recommended way is to ensure that the instance that is running Fleet Manager has an IAM instance profile with the proper permissions. See [Guided setup 1: Deploy in a new VPC with Elastic Compute](guided-setup-new-vpc-elastic-compute.html) for more details. In that setup, you should keep the AWS authentication mode to “Same as Fleet Manager”.




Secrets encryption[¶](#secrets-encryption "Permalink to this heading")
----------------------------------------------------------------------


If you use Fleet Manager to store secrets, these secrets will be encrypted with an AWS KMS CMK.


Secrets that can be stored are:


* AWS credentials for DSS (not recommended, see [Instance templates and setup actions](templates-actions.html) for more details)
* SSL certificates (only if you use “custom certificate” mode, see [Virtual networks](virtual-networks.html) for more details)




License[¶](#license "Permalink to this heading")
------------------------------------------------


In order to benefit from most capabilities, you’ll need a Dataiku License or Dataiku License Token. You need to enter it here.




HTTP proxy[¶](#http-proxy "Permalink to this heading")
------------------------------------------------------


Fleet Manager can run behind a proxy. Once you define at least a proxy host and port, Fleet Manager will use it to access different resources through HTTP:


* to fetch new DSS image lists
* to update or verify licenses
* to log users in with the OpenID Connect protocol


The calls to AWS services won’t be proxied. As such, please make sure the following AWS services you require are reachable from the Fleet Manager virtual machine: EC2, STS, Route53 and KMS.
You can for example create VPC private endpoints to make AWS services available on the local network of the Fleet Manager virtual machine.