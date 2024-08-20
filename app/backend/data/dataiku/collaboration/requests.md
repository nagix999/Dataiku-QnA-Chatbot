Requests[¶](#requests "Permalink to this heading")
==================================================



* [Request types](#request-types)


	+ [Request to access a project](#request-to-access-a-project)
	+ [Request to execute an application](#request-to-execute-an-application)
	+ [Request to share an object](#request-to-share-an-object)
	+ [Request to install or update a plugin](#request-to-install-or-update-a-plugin)
	+ [Request to create a code environment](#request-to-create-a-code-environment)
* [Managing requests](#managing-requests)


	+ [Notifications](#notifications)
	+ [Requests Inbox](#requests-inbox)



Dataiku DSS allows any user to initiate a request to gain access to projects, datasets or other objects.



[Request types](#id1)[¶](#request-types "Permalink to this heading")
--------------------------------------------------------------------


The following requests are available:



### [Request to access a project](#id2)[¶](#request-to-access-a-project "Permalink to this heading")


It allows you to request to be granted project\-level permissions on a project with “access requests” enabled.


Read [Project Access](../security/project-access.html) for more details on how these requests are managed and sent.


These requests are sent to the project owner and all users with [Admin](../security/permissions.html) permissions on the project.




### [Request to execute an application](#id3)[¶](#request-to-execute-an-application "Permalink to this heading")


It allows you to request to be granted execute\-permission on the application


Read [Dataiku Applications](../applications/index.html) for more details on how these requests are managed and sent.


These requests are sent to the application owner and all users with [Admin](../security/permissions.html) permissions on the application.




### [Request to share an object](#id4)[¶](#request-to-share-an-object "Permalink to this heading")


It allows you to request that an object be shared to a target project. This request can be initiated from the object’s right panel in several places in DSS (data catalog, global search, feature store, flow…)


Read [Shared objects](../security/shared-objects.html) for more details on how these requests are managed and sent.


These requests are sent to all users with [Manage shared objects](../security/permissions.html) permissions on the object’s project.




### [Request to install or update a plugin](#id5)[¶](#request-to-install-or-update-a-plugin "Permalink to this heading")


It allows you to request a plugin installation or update.


These requests are sent to all users with [Admin](../security/permissions.html) permissions on the instance.


The request can be activated/deactivated in Administration \> Settings \> Other \> Misc \> Access \& requests.




### [Request to create a code environment](#id6)[¶](#request-to-create-a-code-environment "Permalink to this heading")


It allows you to request a new code environment.


These requests are sent to all users with [Admin](../security/permissions.html) permissions on the instance.


The request can be activated/deactivated in Administration \> Settings \> Other \> Misc \> Access \& requests.



Note


Code environment requests are available only on Design nodes.






[Managing requests](#id7)[¶](#managing-requests "Permalink to this heading")
----------------------------------------------------------------------------


The recipient users of the request will be notified that a new request has been made and they will be able to manage it either from the project’s security section or directly from the request inbox.



### [Notifications](#id8)[¶](#notifications "Permalink to this heading")


All recipients of a request will be notified by a new notification on their avatars and will be able to see it from their notification panel.


Additionally all recipients of a request with a valid email address will receive an email informing them that a new request has been made.


On the other end, users who initiated a request will be notified by email when their request is approved.



Note


To receive emails:


* Users must have enabled “Email me when users request access on my projects or objects” or “Email me when I am granted access to projects” in their profile.
* DSS must be configured to send Notification emails (in Administration \> Settings \> Collaboration \> Notifications \& Integration \> Notification emails).





### [Requests Inbox](#id9)[¶](#requests-inbox "Permalink to this heading")


All requests made from DSS can be found and managed in the requests section of the recipient’s Inbox. The inbox is available from the applications menu.


Users initiating a request will not see their requests appearing in their request inboxes since only requests that need management do appear in the inbox.


If a request has been approved or rejected, its status will be updated for all other recipients of the same request. They will be able to see how and when the request was managed.