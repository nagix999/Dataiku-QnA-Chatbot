Direct access to webapps[¶](#direct-access-to-webapps "Permalink to this heading")
==================================================================================



Webapp URL[¶](#webapp-url "Permalink to this heading")
------------------------------------------------------


Webapps can be directly accessed on the following URL:


`http(s)://DSS_BASE_URL/webapps/PROJECTKEY/webappId`


The webappId is the first 8 characters (before the underscore) in the URL of the webapp. For example, if the webapp URL in DSS is ``/projects/BULLDOZER/webapps/kUDF1mQ_shiny/view``, the webappId is `kUDF1mQ`


Note that this URL usually requires authentication and will redirect users to DSS login. For more details and options, please see [Public webapps](public.html).




Vanity URL[¶](#vanity-url "Permalink to this heading")
------------------------------------------------------


In addition to the direct\-access URL described above, admins can make the webapp available on a “nicer\-looking” URL. The administrator can set this up in the webapps security settings. The webapp becomes available on `http(s)://DSS_BASE_URL/webapps/admin-chosen-name`



Warning


Please make sure to restart the webapp backend for these changes to take effect.



Note that this URL usually requires authentication and will redirect users to DSS login. For more details and options, please see [Public webapps](public.html).