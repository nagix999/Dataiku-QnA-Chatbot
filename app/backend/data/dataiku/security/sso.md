Single Sign\-On[¶](#single-sign-on "Permalink to this heading")
===============================================================



Note


DSS SSO implementation is an Authenticator and a User Supplier. See [Authentication](authentication/index.html) documentation for more details.



Single sign\-on (SSO) refers to the ability for users to log in just one time with one set of credentials
to get access to all corporate apps, websites, and data for which they have permission.


By setting up SSO in DSS, your users will be able to access DSS using their corporate credentials.


SSO solves key problems for the business by providing:



> * Greater security and compliance.
> * Improved usability and user satisfaction.


Delegating the DSS authentication to your corporate identity provider using SSO
allows you to enable a stronger authentication journey to DSS, with multi\-factor authentication (MFA) for example.


DSS supports the following SSO protocols:



> * OpenID Connect (OIDC)
> * SAML v2
> * SPNEGO / Kerberos



Warning


We strongly advise using SAML or OIDC rather than SPNEGO / Kerberos. Setting up SPNEGO is fairly difficult and may interact with connecting to Secure Hadoop clusters.




* [Users supplier](#users-supplier)


	+ [Using SSO provisioning](#using-sso-provisioning)
	+ [Using an other external user source](#using-an-other-external-user-source)
	+ [Using local users](#using-local-users)
* [OpenID Connect (OIDC)](#openid-connect-oidc)


	+ [About OIDC](#about-oidc)
	
	
		- [Glossary](#glossary)
		- [Compatibility](#compatibility)
		- [OIDC features supported by DSS](#oidc-features-supported-by-dku-app)
		- [How OIDC looks like with DSS](#how-oidc-looks-like-with-dku-app)
	+ [Setup OIDC in DSS](#setup-oidc-in-dss)
	
	
		- [Registering a service provider entry for DSS on the identity provider.](#registering-a-service-provider-entry-for-dku-app-on-the-identity-provider)
		- [Configuring DSS for OIDC authentication.](#configuring-dku-app-for-oidc-authentication)
		
		
			* [IDP configuration](#idp-configuration)
			* [OIDC Client configuration](#oidc-client-configuration)
			* [Examples of scopes by IDPs](#examples-of-scopes-by-idps)
		- [Mapping to the DSS user](#mapping-to-the-dku-app-user)
		- [User Supplier](#user-supplier)
		- [Testing OIDC SSO](#testing-oidc-sso)
* [SAML](#saml)


	+ [About SAML](#about-saml)
	
	
		- [Compatibility](#id1)
	+ [Setup SAML in DSS](#setup-saml-in-dss)
	
	
		- [Registering a service provider entry for DSS on the identity provider.](#id2)
		- [Configuring DSS for SAML authentication.](#configuring-dku-app-for-saml-authentication)
		
		
			* [Optional: configuring signed requests](#optional-configuring-signed-requests)
		- [Choosing the login attribute](#choosing-the-login-attribute)
		- [Login remapping rules](#login-remapping-rules)
		- [User Supplier](#id3)
		- [Testing SAML SSO](#testing-saml-sso)
	+ [Troubleshooting](#troubleshooting)
	
	
		- [Assertion audience does not include issuer](#assertion-audience-does-not-include-issuer)
		- [Response is destined for a different endpoint](#response-is-destined-for-a-different-endpoint)
		- [DSS would not start after configuring SAML SSO](#dss-would-not-start-after-configuring-saml-sso)
		- [Login fails with “Unknown user \<SOME\_STRING\>”](#login-fails-with-unknown-user-some-string)
		- [No acceptable Single Sign\-on Service found](#no-acceptable-single-sign-on-service-found)
* [SPNEGO / Kerberos](#spnego-kerberos)


	+ [Keytab mode](#keytab-mode)
	+ [Custom JAAS mode](#custom-jaas-mode)
	+ [Login remapping rules](#id4)
	+ [Configuring SPNEGO SSO](#configuring-spnego-sso)
	+ [Troubleshooting](#id5)




[Users supplier](#id6)[¶](#users-supplier "Permalink to this heading")
----------------------------------------------------------------------


In SSO mode, users don’t need to enter their password. Instead, the SSO system provides the proof that the person performing the query is who she pretends to be, and DSS verifies this proof.


However, DSS needs to map this identity to one of its users. This concept in DSS is called user supplying.



### [Using SSO provisioning](#id7)[¶](#using-sso-provisioning "Permalink to this heading")


DSS is able to provision users from the identity returned during the SSO protocol. It is not necessary to configure additional user sources.


By default, your identity provider usually only includes basic user attributes into the identity returned to DSS.
If you want to map the user groups, you will need to contact the identity provider administrator to include the groups in the identity claims.



Warning


SSO can act as a user supplier and therefore provision/synchronize users. Since those operations can only happen during the login phase, you will therefore not
be able to trigger a user synchronization manually from the UI or the API on SSO users.





### [Using an other external user source](#id8)[¶](#using-an-other-external-user-source "Permalink to this heading")


You may choose to associate SSO with an external user source, like LDAP or Azure AD. Users will be able to authentication with SSO and be provisioned/synchronized from the given external source.


It is also possible to enable SSO provisioning and still have other external user sources. In that scenario, [set the order number](authentication/index.html#supporting-multiple-authenticators-and-user-suppliers) of SSO to be higher than the other sources (so a larger order number).




### [Using local users](#id9)[¶](#using-local-users "Permalink to this heading")


If you don’t want to enable SSO provisioning or any other user suppliers like LDAP, you need to create DSS user accounts for the SSO users. When creating these users, select “SSO” as source type.
This way, only a login and display name are required, you don’t need to enter a password (since DSS delegates authentication in SSO mode).





[OpenID Connect (OIDC)](#id10)[¶](#openid-connect-oidc "Permalink to this heading")
-----------------------------------------------------------------------------------



### [About OIDC](#id11)[¶](#about-oidc "Permalink to this heading")



#### [Glossary](#id12)[¶](#glossary "Permalink to this heading")


* **OIDC** : **O**pen**ID** **C**onnect
* **IDP** : An **Id**entity **P**rovider is a system entity that creates, maintains, and manages identity information for principals and also provides authentication services to relying applications within a federation or distributed network
* **End\-user** : The end user is the entity for whom we are requesting identity information. In our case, it is the DSS user that need to login to access DSS.
* **OIDC Client** : Also called Relying party **RP** in the OIDC specification, the OIDC client is the application that relies on the IDP to authenticate the end user. In our case, it is DSS.
* **ID Token**: Similar to a ID card or passport, it contains many required attributes or claims about the user. This token is then used by DSS to map the claims to a corresponding DSS user. Digitally signed, the ID token can be verified by the intended recipients (DSS).
* **Claim** : In DSS context, claims are name/value pairs that contain information about a user.
* **Scope** : In the context of OIDC, scope references a set of claims the OIDC client needs. Example: email
* **Authorization code** : During the OIDC protocol, the authorization code is generated by the IDP and sent to the end\-user, which passes it to the OIDC client. It is then used by the OIDC client, who sends the authorization code to the IDP, and receives in exchange an ID token. Using an intermediate authorization code allows the IDP to mandate the OIDC client to authenticate itself in order to retrieve the ID token.
* **Confidential client** : An OIDC client with the capacity to exchange the authorization code for an ID token in a secured back channel. This is the case of DSS.
* **Public client** : An OIDC client not able to store secret securely and needs to exchange the authorization code for an ID token in a public channel. DSS is not a public client.
* **PKCE** : **P**roof **K**ey for **C**ode **E**xchange is an extension of the OIDC protocol, to allow public clients to exchange the authorization code in a public channel.




#### [Compatibility](#id13)[¶](#compatibility "Permalink to this heading")


DSS OIDC integration has been successfully tested against the following OIDC identity providers:


* OKTA
* Azure Active Directory
* Google G.Suite
* Keycloak




#### [OIDC features supported by DSS](#id14)[¶](#oidc-features-supported-by-dku-app "Permalink to this heading")


* authorization code grant flow
* simple string claims in the ID token
* non encrypted or signed authentication requests
* ID token signed with RSA or EC
* DSS behind a proxy
* response mode supported: query or fragment
* token endpoint auth method supported: client secret basic or client secret POST
* confidential OIDC client only (PKCE not supported)




#### [How OIDC looks like with DSS](#id15)[¶](#how-oidc-looks-like-with-dku-app "Permalink to this heading")


Once configured for OIDC SSO, DSS acts as an OIDC client, which delegates user authentication to an identity provider.


1. When the end user tries to access DSS and is not authenticated yet, DSS will redirect him to the IDP. The URL used will be the authorization endpoint of the IDP, which some specific GET parameters specific to the DSS setup.
2. The IDP will validate the GET parameters and will present a login page to the user. The authentication journey now depends on your IDP capabilities. Sometimes, when already logged\-in on the IDP side, the login page is skipped and the user may not see the redirection to the IDP.
3. The IDP has authenticated the end user and will redirect the user to DSS with an authorization code. Depending of your OIDC client setup in your IDP, the code may be passed through via the query parameters or the fragment.
4. The front\-end of DSS will parse and send the parameters, including the authorization code, to the DSS backend.
5. The DSS backend will exchange this authorization code for an access token, by calling the token endpoint with the credentials you previously have configured in DSS SSO settings. If successful, the IDP will return an ID token corresponding the end user.
6. DSS uses the ID token to map the end user to a DSS user. The mapping setup is part of the SSO configuration of OIDC.
7. DSS creates a user session corresponding to the DSS user. At this point, OIDC is completed and the user session is agnostic of the authentication protocol used.





### [Setup OIDC in DSS](#id16)[¶](#setup-oidc-in-dss "Permalink to this heading")


To set up OIDC integration, you need:


* to register a new OIDC Client (sometimes called an ‘application’) for DSS in your identity provider,
* to configure DSS with the parameters of the identity provider as well as the parameters corresponding to the OIDC client created earlier,
* to configure which of the user attributes returned by the IDP is to be used as the DSS username, and optionally configure rewrite rules to extract the DSS username from the chosen user attribute.


These steps are individually detailed below.



#### [Registering a service provider entry for DSS on the identity provider.](#id17)[¶](#registering-a-service-provider-entry-for-dku-app-on-the-identity-provider "Permalink to this heading")


The exact steps for this depend on the identity provider platform which you plan to connect to, and should be performed
by your IDP administrator. This entry may also be called an “OIDC application”. You will sometimes be asked to select the type of application,
which would be in our case a web application.


You will typically need:


* to setup the OIDC client to use the authorization code grant flow,
* a client ID,
* a client secret,



Note


The OIDC client needed by DSS is a confidential client (opposite of public client). Meaning DSS is able to protect the client secret, by exchanging the authorization code (and using the secret in the request) from the backend.



* setup the redirect URI BASE\_URL/login/openid\-redirect\-uri/,



Note


This URL must be configured as BASE\_URL/login/openid\-redirect\-uri/, where BASE\_URL is the URL through which DSS users access this DSS instance.


For example, if DSS is accessed at https://dataiku.mycompany.corp/, the OIDC redirect uri must be defined as https://dataiku.mycompany.corp/login/openid\-redirect\-uri/.


Note that some identity providers require the redirect URI to use the HTTPS scheme.



* associate some OIDC scopes to the OIDC client. Some IDPs refer to these as permissions, like user.read. You will need to setup the scope openid as well as some identity claims.
You must ensure that DSS is able to access and retrieve all the user attributes needed to identify the corresponding user in DSS.



Note


DSS will need to map to an existing user from one of the user claims. It’s important that you allow DSS to retrieve a claim that is easily mappable to the username.
A good candidate is email, of which you can strip the part after ‘@’ to compose a unique identifier for usernames.





#### [Configuring DSS for OIDC authentication.](#id18)[¶](#configuring-dku-app-for-oidc-authentication "Permalink to this heading")


OIDC configuration is in the “Settings / Security \& Audit / User login \& provisioning / SSO” screen.


Select “Enable”, choose protocol “OIDC”.



##### [IDP configuration](#id19)[¶](#idp-configuration "Permalink to this heading")


Contact your IDP administrator to retrieve this information or check your IDP documentation.


The easiest way to setup the IDP configuration is using the well\-known endpoint: The OIDC standard defines an endpoint, called well\-known, to discover the IDP configuration.
DSS lets you enter the well\-known endpoint of your IDP and fetch the rest of the configuration for you.
If you don’t know the well\-known endpoint, you can still enter the other configurations manually, the well\-known input being optional.


* **Well\-known URL**: Optional, defines the well\-known endpoint, which is a URI ending with /.well\-known/openid\-configuration. Click Fetch IDP configuration to auto\-complete the rest of the IDP configuration.
* **Issuer**: The issuer is a URI to identify the IDP. It is used in particular to verify that the ID token was signed by the right IDP. Per specification, the issuer is a URI, for which you can append the path /.well\-known/openid\-configuration to get the IDP well\-known endpoint.



Note


Tips: If you have an example of a valid ID token, you can read its content with [jwt.io](https://jwt.io) and find the issuer value behind the iss claim. You can then build up the well\-known URI by appending /.well\-known/openid\-configuration to it.



* **Authorization endpoint**: The authorization endpoint is used to redirect the user to the IDP for the authentication.
* **Token endpoint**: The token endpoint is used by DSS to exchange the authorization code with an ID token. This endpoint will be called from the backend of DSS. If DSS is behind a proxy, please make sure DSS is able to call this endpoint.
* **JWKs URI**: The JWKs URI is a way for the IDP to specify all its public keys. This is used by DSS to verify the signature of the ID token.


Examples of well\-known endpoints:


* **Google**: [https://accounts.google.com/.well\-known/openid\-configuration](https://accounts.google.com/.well-known/openid-configuration)
* **Azure**: [https://login.microsoftonline.com/common/v2\.0/.well\-known/openid\-configuration](https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration)
* **Okta**: [https://common.okta.com/.well\-known/openid\-configuration](https://common.okta.com/.well-known/openid-configuration)
* **Keycloak**: [https://your\-keycloak\-instance/auth/realms/your\-realm/.well\-known/openid\-configuration](https://your-keycloak-instance/auth/realms/your-realm/.well-known/openid-configuration)



Note


In some case, the well\-known can be the same for everyone, like for google. In other scenario, the IDP will generate a dedicated one for your application, like Okta or Azure for which it is configured by tenant.





##### [OIDC Client configuration](#id20)[¶](#oidc-client-configuration "Permalink to this heading")


In the previous section, you created an OIDC client. Use this client to complete the following section:


* **Token endpoint auth method**: This is the authentication method that DSS will use to specify the credentials during the token exchange. Most of the time, when supporting client secret, the IDP will allow either of the two methods. Leave this field by default if you are unsure, as it will most likely work.
* **Client ID**: the client ID generated by the IDP. In the IDP portal, it could be named application id. Refer to your IDP documentation for more details on how to retrieve your client ID.
* **Client secret**: The client secret your IDP generated for this client. Sometimes, it is not generated by default by your IDP (like Azure). In this case, look for a section ‘secrets’ in your IDP setup for the OIDC client.
* **Scope**: Specify the scope that DSS needs to use during the login flow. As a minima, it should contain openid. The scope contains a list of scopes separated by spaces.



Note


The scope is essential for doing the mapping with the username, as it defines the user claims the IDP needs to send back to DSS. We recommend to add either email or/and profile, two common scopes supported by most IDPs. Most IDPs will mandate that you add some dedicated permissions before associating those scopes to your OIDC client. See your IDP documentation for more details.




Note


The list of scopes supported by your IDP is listed in the well\-known, under the attribute claims\_supported. Even if they are supported, you will still need to authorise the OIDC client to use those scopes, via your IDP portal.





##### [Examples of scopes by IDPs](#id21)[¶](#examples-of-scopes-by-idps "Permalink to this heading")


For Google, Azure, Okta and Keycloak, the simplest scope is email, which will return two claims \- email and email\_verified. Set in Identifier claim key the claim email.


Azure, Okta and Keycloak also support another claim called preferred\_username, which is returned as part of the profile scope.


Resources:


* [Google documentation](https://developers.google.com/identity/protocols/oauth2/openid-connect#an-id-tokens-payload)
* [Azure documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens)
* [Okta documentation](https://developer.okta.com/docs/reference/api/oidc/#scope-values)
* [Keycloak documentation](https://www.keycloak.org/docs/latest/securing_apps/) (search for principal\-attribute in the page)





#### [Mapping to the DSS user](#id22)[¶](#mapping-to-the-dku-app-user "Permalink to this heading")


When DSS successfully retrieves the ID token from the IDP, it needs to map it to a user in DSS. The ID token will contain user claims that depend on the scope you defined earlier. The following two fields will help DSS map the ID token to a DSS user:


* **Identifier claim key**: Depending on the scope you configured, the IDP will return different user claims. Define here the one you want to use to map to the corresponding username in DSS. One easy way that works for most IDP, is to use the email and then strip the part after the ‘@’.
* **Login remapping rules**: Map a claim received from the IDP to your username format. Example: stripping the part after ‘@’ in an email. You may not need this field if your IDP is returning a user claim that matches exactly the username (it’s the case of keycloak if you use the preferred\_username claim for example).



Warning


The Login remapping rules are evaluated in order. If you have multiple rules and their regexes overlap (ie ^(.\*)@mycompany.corp$ and ^(.\*)$), make sure the most specific one is defined first.




Note


Example of mapping if you choose the email as identifier claim: ^(.\*)@mycompany.corp$ \-\> $1




Note


DSS logs all the claims received from the IDP in the backend log file, which may help configuring the Identifier claim key and the mapping for it.





#### [User Supplier](#id23)[¶](#user-supplier "Permalink to this heading")


DSS SSO implementation is able to supply users from an SSO context. Meaning you can configure DSS to auto\-provision or synchronize users when a user authenticates via SSO.


Once you have enabled the Login\-time provisioning and/or Login\-time resync options, you must configure the mapping between
the ID token (the identity provider’s response to DSS) and the representation of an identity in DSS. See your OpenID identity provider’s documentation or contact your identity provider’s administrator for the required information.




#### [Testing OIDC SSO](#id24)[¶](#testing-oidc-sso "Permalink to this heading")


* Configure OIDC integration as described above
* Access the DSS URL from another browser or an anonymous window
* You should be redirected to the IDP for authentication, then back to the DSS redirect URL, then to the DSS homepage
* If login fails, check the logs for more information



Important


Once SSO has been enabled, if you access the root DSS URL, SSO login will be attempted. If SSO login fails, you will only
see an error.


You can still use the regular login/password login by going to the `/login/` URL on DSS. This allows you to still log in
using a local account if SSO login is dysfunctional.







[SAML](#id25)[¶](#saml "Permalink to this heading")
---------------------------------------------------


When configured for SAML single\-sign\-on, DSS acts as a SAML Service Provider (SP), which delegates user authentication
to a SAML Identity Provider (IdP).



### [About SAML](#id26)[¶](#about-saml "Permalink to this heading")



#### [Compatibility](#id27)[¶](#id1 "Permalink to this heading")


DSS has been successfully tested against the following SAML identity providers:


* OKTA
* PingFederate PingIdentity (see note below)
* Azure Active Directory
* Google G.Suite
* Microsoft Active Directory Federation Service (tested against Windows 2012 R2\)
* Auth0
* Keycloak



Note


For AD FS, it is mandatory to configure at least one claim mapping rule which maps to “Name ID”, even if another attribute is used
as the DSS login attribute.


DSS does not support SAML encryption.






### [Setup SAML in DSS](#id28)[¶](#setup-saml-in-dss "Permalink to this heading")


To set up SAML integration, you need:


* to register a new service provider entry on your SAML identity provider, for this DSS instance.
This entry is identified by a unique “entity ID”, and is bound to the SAML login URL for this DSS instance.
* to configure DSS with the IdP parameters, so that DSS can redirect non logged\-in users to the IdP for authentication, and
can authentify the IdP response
* optionally, to configure which of the user attributes returned by the IdP is to be used as the DSS username, or configure
rewrite rules to extract the DSS username from the chosen IdP attribute


These steps are individually detailed below.



#### [Registering a service provider entry for DSS on the identity provider.](#id29)[¶](#id2 "Permalink to this heading")


The exact steps for this depend on the identity provider platform which you plan to connect to, and should be performed
by your IdP administrator. This entry may also be called a “SAML application”.


You will typically need:


* an “Entity ID” which uniquely represents this DSS instance on the IdP (sometimes also called “Application ID URI”).


This entity ID is allocated by the IdP, or chosen by the IdP admin.
* the SAML login URL for DSS (“Assertion Consumer Service Endpoint”, which may also be called “Redirect URI”, “Callback URL”, or “ACS URL”).


This URL *must* be configured as



```
BASE_URL/dip/api/saml-callback
```

where `BASE_URL` is the URL through which DSS users access this DSS instance.


For example, if DSS is accessed at <https://dss.mycompany.corp>, the SAML callback URL must be defined as



```
<https://dss.mycompany.corp/dip/api/saml-callback>
```

Note that some SAML identity providers require the callback URL to use the HTTPS scheme.


As an additional step, you may also have to authorize your users to access this new SAML application at the IdP level.


Finally, you will need to retrieve the “IdP Metadata” XML document from the identity provider, which is required to configure DSS (also called
“Federation metadata document”).




#### [Configuring DSS for SAML authentication.](#id30)[¶](#configuring-dku-app-for-saml-authentication "Permalink to this heading")


SAML configuration is in the “Settings / Security \& Audit / User login \& provisioning / SSO” screen.


Select “Enable”, choose protocol “SAML” and fill up the associated configuration fields:


* IdP Metadata XML : the XML document describing the IdP connection parameters, which you should have retrieved from the IdP.


It should contain a \<EntityDescriptor\> record itself containing a \<IDPSSODescriptor\> record.
* SP entity ID : the entity ID (or application ID) which you have configured on the IdP in the step above
* SP ACS URL : the redirect URL (or callback URL) which you have configured on the IdP in the step above



Warning


You need to restart DSS after any modification to the SAML configuration parameters.




##### [Optional: configuring signed requests](#id31)[¶](#optional-configuring-signed-requests "Permalink to this heading")


If your IdP requires it (this is generally not the case) you can configure DSS to digitally sign SAML requests so that the IdP can
authentify them.


For this, you need to provide a file containing a RSA or DSA keypair (private key plus associated certificate), which DSS will use
for signing, and provide the associated certificate to the IdP so that it can verify the signatures.


This file must be in the standard PKCS\#12 format, and installed on the DSS host. It can be generated using standard tools, as follows:



```
# Generate a PKCS12 file containing a self-signed RSA key and certificate with the "keytool" java command:
keytool -keystore <FILENAME>.p12 -storetype pkcs12 -storepass <PASSWORD> -genkeypair -keyalg RSA -dname "CN=DSS" -validity 3650

# Generate a PKCS12 file containing a self-signed RSA key and certificate with the openssl suite:
openssl req -x509 -newkey rsa:2048 -nodes -keyout <FILENAME>.key -subj "/CN=DSS" -days 3650 -out <FILENAME>.crt
openssl pkcs12 -export -out <FILENAME>.p12 -in <FILENAME>.crt -inkey <FILENAME>.key -passout pass:<PASSWORD>

```


You then need to complete the DSS configuration as follows:


* check the “Sign requests” box
* Keystore file : absolute path to the PKCS\#12 file generated above
* Keystore password : PKCS\#12 file password
* Key alias in keystore : optional name of the key to use, in case the PKCS\#12 file contains multiple entries





#### [Choosing the login attribute](#id32)[¶](#choosing-the-login-attribute "Permalink to this heading")


Upon successful authentication at the IdP level, the IdP sends to DSS an assertion, which contains all attributes of the logged in user.
Each attribute is named. You need to indicate which of the attributes contains the user’s login, that DSS will use.


Note that DSS logs all attributes received from the SAML server in the backend log file, which may help
configuring this field.


If this field is left empty, DSS will use the default SAML “name ID” attribute.




#### [Login remapping rules](#id33)[¶](#login-remapping-rules "Permalink to this heading")


Optionally, you can define one or several rewriting rules to transform the selected SAML attribute into the intended DSS username.
These rules are standard search\-and\-replace Java regular expressions, where `(...)` can be used to capture a substring in the
input, and `$1`, `$2`… mark the place where to insert these captured substrings in the output. Rules are evaluated in
order, until a match is found. Only the first matching rule is taken into account.


A standard use case for such rewriting rules would be to strip the domain part from email\-address\-like attributes.
For example, configuring the following rule:



```
([^@]*)@mydomain.com     ->     $1

```


would rewrite a SAML attribute `first.last@mydomain.com` into `first.last`, and do nothing on SAML attribute
`first.last@otherdomain.com` (as the left\-hand part of the rule would not match).



Warning


The Login remapping rules are evaluated in order. If you have multiple rules and their regexes overlap (ie ^(.\*)@mycompany.corp$ and ^(.\*)$), make sure the most specific one is defined first.





#### [User Supplier](#id34)[¶](#id3 "Permalink to this heading")


DSS SSO implementation is able to supply users from an SSO context. Meaning you can configure DSS to auto\-provision or synchronize users when a user authenticates via SSO.


Once you have enabled the Login\-time provisioning and/or Login\-time resync option, in the SAML context you need to configure the mapping between
the SAML assertion (the identity provider’s response to DSS) and the DSS representation of an identity. (See the documentation of your identity provider or contact your identity provider’s administrator for the required information).




#### [Testing SAML SSO](#id35)[¶](#testing-saml-sso "Permalink to this heading")


* Configure SAML integration as described above
* Restart DSS
* Access the DSS URL from another browser or an anonymous window
* You should be redirected to the IDP for authentication, then back to the DSS redirect URL, then to the DSS homepage
* If login fails, check the logs for more information



Note


Once SSO has been enabled, if you access the root DSS URL, SSO login will be attempted. If SSO login fails, you will only
see an error.


You can still use the regular login/password login by going to the `/login/` URL on DSS. This allows you to still log in
using a local account if SSO login is dysfunctional.


If the SAML configuration is invalid (in particular if the IdP metadata XML is malformed) DSS will not restart. You will need
to manually disable SAML in the general\-settings.json configuration file as described below.






### [Troubleshooting](#id36)[¶](#troubleshooting "Permalink to this heading")


No details are printed in case of wrong SSO configuration. All details are only in the logs.


Common issues include:



#### [Assertion audience does not include issuer](#id37)[¶](#assertion-audience-does-not-include-issuer "Permalink to this heading")


This means that the EntityID declared in the DSS SP configuration does not match the expected EntityID / audience at the IdP level.




#### [Response is destined for a different endpoint](#id38)[¶](#response-is-destined-for-a-different-endpoint "Permalink to this heading")


Check the “ACS URL” in the DSS SP configuration. It must match the response destination in the IdP answer, ie generally the callback
declared in the IdP.


This error message also shows up when the IdP does not include a “Destination” attribute in the response message. This attribute
is mandatory and should match the DSS SAML callback URL.


When using PingFederate PingIdentity as an IdP make sure to **uncheck** the *Always Sign the SAML Assertion* property when
defining the DSS endpoint, to ensure that a Destination attribute is included in the Response message.




#### [DSS would not start after configuring SAML SSO](#id39)[¶](#dss-would-not-start-after-configuring-saml-sso "Permalink to this heading")


In some cases (in particular, entering invalid XML in the IdP Metadata field), an incorrect SAML configuration may
prevent the DSS backend to start. In such a case, open the `DSS_DATADIR/config/general-settings.json` configuration file
with a text editor, locate the `"enabled"` field under `"ssoSettings"` and set it to `false`.
You should then be able to restart and fix the configuration using the DSS interface.




#### [Login fails with “Unknown user \<SOME\_STRING\>”](#id40)[¶](#login-fails-with-unknown-user-some-string "Permalink to this heading")


This typically means that SAML authentication of the user was successful at the IdP level, but that the returned attribute
does not match any username in the DSS database (or in the associated LDAP directory if one has been configured).


It might be because you did not select the correct SAML attribute name in the DSS SAML configuration. You can check the list of
attributes returned by the IdP in the DSS backend log file.


It might be because the attribute rewrite rule(s) did not lead to the expected result. This can also be checked in the DSS backend
log file.


It might be because no DSS user exists with this name. You can create one in the DSS “Security / Users” page, using type
“Local (no auth, for SSO only)”.




#### [No acceptable Single Sign\-on Service found](#id41)[¶](#no-acceptable-single-sign-on-service-found "Permalink to this heading")


DSS only supports the HTTP\-Redirect binding for SAML requests, and requires one such binding to be defined.
If configured with an IdP metadata record which does not contain such a binding, the DSS backend will fail to start and output a
`SAMLException: No acceptable Single Sign-on Service found` message in the backend log file.


To fix that, you need to edit the IdP Metadata record and add a `SingleSignOnService` XML node inside the `IDPSSODescriptor` node, as follows:



```
<md:EntityDescriptor ...>
    <md:IDPSSODescriptor ...>
        ...
        <md:SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="SOME_VALID_REDIRECT_URL"/>
    </md:IDPSSODescriptor>
</md:EntityDescriptor>

```


This entry defines the URL to which DSS will redirect users which attempt to connect without a currently valid authentication cookie.
Any valid URL can be configured in it, you can for example use the address to the login page for your IdP.


Note that this address will never be used if users only connect to DSS through IdP\-initiated SAML connections. It is nevertheless mandatory to configure one.






[SPNEGO / Kerberos](#id42)[¶](#spnego-kerberos "Permalink to this heading")
---------------------------------------------------------------------------



Warning


While this is somewhat related to Kerberos securitization of secure Hadoop clusters, these are two very different
and independent features




Warning


We strongly advise using SAML SSO rather than SPNEGO / Kerberos. Setting up SPNEGO is fairly difficult, requires specific
configuration of the user browsers, and may interact with connecting to Secure Hadoop clusters.




### [Keytab mode](#id43)[¶](#keytab-mode "Permalink to this heading")


The recommended way to setup SPNEGO authentication is to create a service principal for DSS in your Kerberos database, along
with an associated keytab file. This keytab allows DSS to authenticate the users identity through the Kerberos login session
of their browser.


The principal and keytab will be provided by your Kerberos administrator. The keytab file must be installed on the DSS machine,
in a filesystem location readable by, and private to, the DSS Unix service account.


You may also have to provide a krb5\.conf file if the server does not have a suitable one in the default system location. This file
will also be provided by your Kerberos administrator.



Note


The Kerberos principal used by DSS for SPNEGO authentication MUST be of the form `HTTP/<dss_hostname>@<realm>`
where \<dss\_hostname\> is the hostname of the DSS service URL as seen from the client’s browser.


On Windows Active Directory, service principals are created by:


* creating a user account for DSS in the domain
* associating the required service principal to this account, using the command\-line ‘setspn’ tool (you can also
do it using extra arguments to the ‘ktpass’ command which issues the Kerberos keytab file).





### [Custom JAAS mode](#id44)[¶](#custom-jaas-mode "Permalink to this heading")


For advanced use cases not covered by the previous mode. Requires advanced knowledge of Kerberos configuration for Java.




### [Login remapping rules](#id45)[¶](#id4 "Permalink to this heading")


Optionally, you can define one or several rewriting rules to transform the user identity provided by SPNEGO (which is the
Kerberos principal of the user, typically [username@REALM](/cdn-cgi/l/email-protection#572224322539363a32717464606c717462656c7174636f6c0512161b1a)) into the intended DSS username.


These rules are standard search\-and\-replace Java regular expressions, where `(...)` can be used to capture a substring in the
input, and `$1`, `$2`… mark the place where to insert these captured substrings in the output. Rules are evaluated in
order, until a match is found. Only the first matching rule is taken into account.


For convenience, a standard rule which strips the @REALM part of the user principal can be enabled by a checkbox in the configuration.
This rule is evaluated first, before any regular expression rules.




### [Configuring SPNEGO SSO](#id46)[¶](#configuring-spnego-sso "Permalink to this heading")


* Go to Administration \> Settings \> LDAP \& SSO
* Enable the SSO checkbox, select SPNEGO, and enter the required information
* Restart DSS
* Access the DSS URL
* If login fails, check the logs for more information



Note


Once SSO has been enabled, if you access the root DSS URL, SSO login will be attempted. If SSO login fails, you will only see an error.


You can still use the regular login/password login by going to the `/login/` URL on DSS. This allows you to log in if SSO login is dysfunctional




Note


You will typically need to perform additional configuration on the user browsers so that they attempt SPNEGO authentication
with DSS. This usually includes:


* making sure the user session is logged on the Kerberos realm (or Windows domain) before launching the browser
* adding the DSS URL to the list of URLs with which the browser is authorized to authenticate using Kerberos


Refer to your browser documentation and your domain administrator for the configuration procedures suitable for your site.





### [Troubleshooting](#id47)[¶](#id5 "Permalink to this heading")


No details are printed in case of wrong SSO configuration. All details are only in the logs.


SPNEGO failures are notoriously hard to debug because all communication is encrypted, and any error simply leads to decryption failures.


Usual things to double\-check:


* The mapping of `domain_realm` in your krb5\.conf
* The principal in the keytab must match the one declared in DSS
* The principal in the keytab must be HTTP/\<dss\_hostname\>@\<realm\> where \<dss\_hostname\> matches the DSS URL hostname.
* The browser must be configured to allow SPNEGO authentication on \<dss\_hostname\>. In particular, error messages mentioning
NTLM authentication failures actually mean that this configuration is not working as expected.