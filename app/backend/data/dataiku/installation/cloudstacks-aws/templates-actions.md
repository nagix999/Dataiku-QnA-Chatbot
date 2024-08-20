Instance templates and setup actions[¶](#instance-templates-and-setup-actions "Permalink to this heading")
==========================================================================================================



* [SSH keypair](#ssh-keypair)
* [AWS credentials](#aws-credentials)


	+ [Atypical options](#atypical-options)
* [Setup actions](#setup-actions)


	+ [Setup Kubernetes and Spark\-on\-Kubernetes](#setup-kubernetes-and-spark-on-kubernetes)
	+ [Install system packages](#install-system-packages)
	+ [Add authorized SSH keys](#add-authorized-ssh-keys)
	+ [Set security related HTTP Headers](#set-security-related-http-headers)
	+ [Install a JDBC driver](#install-a-jdbc-driver)
	+ [Run Ansible tasks](#run-ansible-tasks)
	+ [Add Certificate Authority to DSS truststore](#add-certificate-authority-to-dss-truststore)
	+ [Install a code environment with a Visual ML preset](#install-a-code-environment-with-a-visual-ml-preset)



Instance template represent common configuration for instances, reusable across several instances. It is required to use an instance template to launch an instance. Instances stay linked to their instance template for their whole lifecycle.


What is configured through the instance templates includes, but is not limited to:


* Identities able to SSH to the instance
* Cloud credentials for the managed DSS
* Installation of additional dependencies and resources
* Pre\-baked and custom configurations for DSS


To create, edit and delete templates, head to the *Instance templates* in the left menu of FM. The following document explains each section of the configuration.



[SSH keypair](#id2)[¶](#ssh-keypair "Permalink to this heading")
----------------------------------------------------------------


Use this field to select which AWS EC2 keypair will be deployed on the instance. This is useful for admins to connect to the machine with SSH. This field is optional.


This key will be available on the `ec2-user` account (`centos` for DSS instances prior version 12\), i.e. you will be able to login as `ec2-user@DSS.HOST.IP`




[AWS credentials](#id3)[¶](#aws-credentials "Permalink to this heading")
------------------------------------------------------------------------


In most cases, your DSS instances will require AWS credentials in order to operate. These credentials will be used notably to integrate with ECR and EKS. They can also be used (optionally) for S3 connectivity.


The recommended way to offer AWS credentials to DSS instance is the use of an IAM instance profile. You can create a role, and put its instance profile ARN as the “runtime instance profile ARN” field.


Keep “restrict access to metadata server” enabled so that DSS end\-users cannot access these credentials.



### [Atypical options](#id4)[¶](#atypical-options "Permalink to this heading")


There may be some cases where you want setup to have additional permissions, notably being able to retrieve secrets from ASM, or perform other tasks that might require permissions useful for startup only (see [setup actions](#aws-cloudstacks-actions-setup)).


If that’s needed, you can add a “Startup instance profile ARN” that will only be available during startup and that will be replaced by the “Runtime instance profile ARN” once startup is complete.


Alternatively to IAM instance profile, you can also use a keypair that will be given to the DSS service account.


The AWS Secret Access Key can be stored in ASM (in which case the **Startup instance profile ARN** must be able to read it) or encrypted and stored by FM (in which case the **Startup instance profile ARN** must be able to user the CMK to decrypt it).





[Setup actions](#id5)[¶](#setup-actions "Permalink to this heading")
--------------------------------------------------------------------


Setup actions are configuration steps ran by the [agent](concepts.html#cloudstacks-concept-agent). As a user, you create a list a setup actions you wish to see executed on the machine.



### [Setup Kubernetes and Spark\-on\-Kubernetes](#id6)[¶](#setup-kubernetes-and-spark-on-kubernetes "Permalink to this heading")


This task takes no parameter and pre\-configures DSS so you can use Kubernetes clusters and Spark integration with them. It prepares
the base images and enables DSS Spark integration.




### [Install system packages](#id7)[¶](#install-system-packages "Permalink to this heading")


This setup action is a convenient way to install additional system packages on the machine should you need them. It takes a list of Almalinux package names as only parameter.




### [Add authorized SSH keys](#id8)[¶](#add-authorized-ssh-keys "Permalink to this heading")


This setup action ensures the SSH public key passed as a parameter is present in \~/.ssh/authorized\_keys file of the default admin account. The default admin is the `ec2-user` (`centos` for DSS instances prior version 12\)
user with currently provided images.




### [Set security related HTTP Headers](#id9)[¶](#set-security-related-http-headers "Permalink to this heading")


This setup actions ensures DSS add security HTTP headers. HSTS headers can be toggled separately




### [Install a JDBC driver](#id10)[¶](#install-a-jdbc-driver "Permalink to this heading")


Instances come pre\-configured with drivers for PostgresSQL, MariaDB, Snowflake, AWS Athena and Google BigQuery. If you need another driver, this setup action eases the process. It can download a file by HTTP, HTTPS, from S3 bucket or from
an ABS container.




Install JDBC Driver parameters[¶](#id1 "Permalink to this table")




| Parameter | Expected value |
| --- | --- |
| Database type | The type of database you will use. This parameter has no actual effect, it is used for readability. |
| URL | This field expects the full address to the driver file or archive.  Download from HTTP(S) endpoint:   ``` http(s)://hostname/path/to/file.(jar|tar.gz|zip)  ```    Redirections are solved before download.  Download from a S3 bucket:   ``` s3://BUCKET_NAME/OBJECT_NAME  ```    Download from Azure Blob Storage:   ``` abs://STORAGE_ACCOUNT_NAME/CONTAINER_NAME/OBJECT_NAME  ```    Use a driver available on the machine:   ``` file://path/to/file.(jar|tar.gz|zip)  ``` |
| Paths in archive | This field must be used when the driver is shipped as a tarball or a ZIP file. Add here all the paths to find the JAR files in the driver archive. Paths are relative to the top of the archive. Wildcards are supported. Examples of paths:   ``` *.jar  ```    ``` subdirA/*.jar subdirB/*.jar  ``` |
| HTTP Headers | List of HTTP headers to add to the query. One header per line.  ``` Header1: Value1 Header2: Value2  ```   Parameter ignored for all other kinds of download. |
| HTTP Username | **HTTP**  If the endpoint expect Basic Authentication, use this parameter to specify the user name.  **Azure**  If the instance have several Managed Identities, set the *client\_id* of the targeted one in this parameter.  To connect to Azure Blob Storage with a SAS Token (not recommended), set the value of this parameter to *token*. |
| HTTP Password | **HTTP**  If the endpoint expect Basic Authentication, use this parameter to specify the password.  **Azure**  To connect to Azure Blob Storage with a SAS Token (not recommended), store the token value in this parameter. |
| Datadir subdirectory | For very specific use\-cases only, we recommend to let it empty. |




### [Run Ansible tasks](#id11)[¶](#run-ansible-tasks "Permalink to this heading")


This setup action allows you to run arbitrary ansible tasks at different point of the startup process.


The **Stage** parameter specificies at which point of the startup sequence it must be executed. There is three stages:


* **Before DSS install**: These tasks will be run before the agent installs (if not already installed) or upgrades (if required) DSS.
* **After DSS install**: These tasks will be run once DSS is installed or upgraded, but not yet started.
* **After DSS is started**: These tasks will be run once DSS is ready to receive public API calls from the agent.


The **Ansible tasks** allows you to Write a YAML list of ansible tasks as if they were written in a role. Available tasks are base Ansible
tasks and [Ansible modules for Dataiku DSS](https://github.com/dataiku/dataiku-ansible-modules). When using Dataiku modules, it is not
required to use the connection and authentication options. It is automatically handled by FM.


Some additional facts are available:


* dataiku.dss.port
* dataiku.dss.datadir
* dataiku.dss.was\_installed: Available only for stages **After DSS install** and **After DSS startup**
* dataiku.dss.was\_upgraded: Available only for stages **After DSS install** and **After DSS startup**
* dataiku.dss.api\_key: Available only for stage **After DSS startup**


Example:



```
---
- dss_group:
    name: datascienceguys
- dss_user:
    login: dsadmin
    password: verylongbutinsecurepassword
    groups: [datascienceguys]

```


Ansible is ran with the unix user held by the agent, and can run administrative tasks with become.




### [Add Certificate Authority to DSS truststore](#id12)[¶](#add-certificate-authority-to-dss-truststore "Permalink to this heading")


This setup action is a convenient way to add a Certificate Authority to your DSS instances’ truststore. It will then be trusted for Java, R and Python processes.
It takes a Certificate Authority in the public PEM format. A chain of trust can also be added by appending all the certificates in the same setup action.


Example (single CA):



```
-----BEGIN CERTIFICATE-----
(Your Root certificate authority)
-----END CERTIFICATE-----

```


Example (Chain of Trust):



```
-----BEGIN CERTIFICATE-----
(Your Primary SSL certificate)
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
(Your Intermediate certificate)
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
(Your Root certificate authority)
-----END CERTIFICATE-----

```



Warning


The name must be unique for each CA as it is used to write the CA in your instances.





### [Install a code environment with a Visual ML preset](#id13)[¶](#install-a-code-environment-with-a-visual-ml-preset "Permalink to this heading")


This setup action installs a code environment with the Visual Machine Learning and Visual Time series forecasting preset.


Enable **Install GPU\-based preset** to install the GPU\-compatible packages. Otherwise, the CPU packages are installed.


Leaving **Allow in\-place update** enabled means that if there is a newer version of the preset the next time the setup action runs, and it is compatible with the previously installed code environment, said code environment is updated in place. Otherwise, a new code environment is created with the updated preset.