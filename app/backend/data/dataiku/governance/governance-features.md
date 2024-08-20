Governance features[¶](#governance-features "Permalink to this heading")
========================================================================



* [Workflow](#workflow)


	+ [Steps](#steps)
	+ [Project qualification](#project-qualification)
	+ [Customized Workflows (Advanced license only)](#customized-workflows-advanced-license-only)
* [Sign\-off](#sign-off)


	+ [Configure in Dataiku Deployer](#configure-in-dataiku-deployer)
	+ [Governance status](#governance-status)
	+ [Reviewers](#reviewers)
	+ [Review process](#review-process)
	+ [Customized sign\-off (Advanced license only)](#customized-sign-off-advanced-license-only)
* [Notifications](#notifications)


	+ [Setting up email notifications](#setting-up-email-notifications)
	+ [Email notifications](#email-notifications)
	+ [Notification subscriptions](#notification-subscriptions)




[Workflow](#id6)[¶](#workflow "Permalink to this heading")
----------------------------------------------------------


Dataiku Govern provides you with tools to manage and track the status of your AI projects and models. The workflows can be followed and continually filled\-out to track the progress of the projects or models.


You will be able to attach extra contextual information and predefined workflows to projects, models, model versions, and bundles that are being worked on your Dataiku instances. For example, you might:


* Specify the person responsible for a specific project.
* Add notes on the latest update on progress.
* Attach documentation for a project or a model version.


In Dataiku Govern, you fill in this extra contextual information on the Overview page of a Govern project, model, or model version.



### [Steps](#id7)[¶](#steps "Permalink to this heading")


Workflows involve updating the status of a project or model version. In Dataiku Govern, a workflow has a sequential series of steps to track progress of the item (for example, “In Progress”, “Under Review”, etc.). Each step also can have its own fields to post updates, attach relevant documents, etc. You fill in this information on the workflow page of a governed project or a governed model version. Govern models do not have workflows.


![../_images/workflows.png](../_images/workflows.png)


### [Project qualification](#id8)[¶](#project-qualification "Permalink to this heading")


A common challenge when dealing with multiple projects is thinking about how to qualify the projects in order to prioritize work. The Project Qualification step in the project workflow aims to define the level of value, risk, and feasibility of each project.


You can use the Matrix view on the Governed projects page to compare metrics across governed projects.


![../_images/matrix.png](../_images/matrix.png)

See also


More information on workflows can be found in [Concept \| Workflows and project qualification](https://knowledge.dataiku.com/latest/mlops-o16n/govern/concept-workflow-qualification.html).





### [Customized Workflows (Advanced license only)](#id9)[¶](#customized-workflows-advanced-license-only "Permalink to this heading")


While not included by default, Dataiku Govern was built to support extensive customization, providing more flexibility for clients with complex governance requirements for which the predefined templates aren’t sufficient. For example, you may want to customize:


* the number of steps in each workflow
* the fields for team members to fill in on each workflow step
* sign\-off workflow steps


You can also create new workflows from scratch if necessary.





[Sign\-off](#id10)[¶](#sign-off "Permalink to this heading")
------------------------------------------------------------



* [Configure in Dataiku Deployer](#configure-in-dataiku-deployer)
* [Governance status](#governance-status)
* [Reviewers](#reviewers)
* [Review process](#review-process)
* [Customized sign\-off (Advanced license only)](#customized-sign-off-advanced-license-only)



Dataiku Govern provides a way to require stakeholder sign\-off on model versions and on bundles before they are deployed to production on certain infrastructures.


In the standard workflow, Govern model versions and Govern bundles have one sign\-off on the **Review** step.



### [Configure in Dataiku Deployer](#id4)[¶](#configure-in-dataiku-deployer "Permalink to this heading")



Note


The following information applies to both deployment of model versions on an API node and deployment of bundles on an Automation node.



Once Dataiku Deployer is linked with your Dataiku Govern instance, you might define a governance policy for each Deployer Infrastructure.


![../_images/govern-policy.png](../_images/govern-policy.png)

  


From the infrastructure settings, you can choose between 3 different governance policies that will apply for all deployments made on this infrastructure:


1. **Prevent the deployment of unapproved packages.** If the model version or the bundle is approved, its status will be updated and it can be deployed. If the model version or the bundle is abandoned or rejected, the workflow will be locked and deployment will be blocked. You will get an error asking you to complete the approval process before deployment.
2. **Warn and ask for confirmation before deploying unapproved packages.** You will receive a warning asking you if you really want to continue the deployment.
3. **Always deploy without checking.** You will be able to deploy regardless of the sign\-off status. This is the default value.




### [Governance status](#id4)[¶](#governance-status "Permalink to this heading")


A **Governance status** section is visible on the Design node for each model version of saved models in its summary page, letting you know at which stage of the Governance workflow process your model is.


[![../_images/governance-status-model.png](../_images/governance-status-model.png)](../_images/governance-status-model.png)

  


Similarly, in the bundle summary, there is a governance status section:


[![../_images/governance-status-bundle.png](../_images/governance-status-bundle.png)](../_images/governance-status-bundle.png)


### [Reviewers](#id4)[¶](#reviewers "Permalink to this heading")


In the Dataiku Govern process, sign\-off is broken down into “Feedback” and “Final Approval”.



Note


We will use the word “reviewers” to describe anyone providing a feedback or the final approval.



Reviewers are defined at the governed project level in **Sign\-off reviewers and approvers** section and will be the same for all model versions and bundles attached to this project.


![../_images/review-assignment-project-level.png](../_images/review-assignment-project-level.png)

  


You can see who is allowed to perform the review (user, group, api key, and role) by clicking ![reviewbutton](../_images/review_config_button.png) next to each feedback and final approval section.


There are multiple answer slots for Feedback, but only one for the Final Approval; the slots can be assigned to either roles or individuals.



#### Feedback[¶](#feedback "Permalink to this heading")


* Feedback is organized with 3 feedback groups: IT \& Operations teams, Risk \& Compliance teams and Business teams.
* Reviewers give useful feedback to the creator of the model version or the bundle.
* Feedback reviews provide the final approver more information to take a decision.
* Feedback is **optional**. It is possible to skip the Feedback section and just have the Final Approver sign off.




#### Final approval[¶](#final-approval "Permalink to this heading")


* Only one final approval can be submitted.
* The Final Approval status is checked by Dataiku Deploy and the deployment authorization depends on the Governance policy set up on the infrastructure.



Note


Reviewers can be reused in the same sign\-off process: someone could be assigned both “Feedback” and “Final Approver”.






### [Review process](#id4)[¶](#review-process "Permalink to this heading")



* [1\. Request review](#request-review)
* [2\. Notify reviewers](#notify-reviewers)
* [3\. Submit feedback](#submit-feedback)
* [4\. Request final approval](#request-final-approval)
* [5\. Restore or reset sign\-off](#restore-or-reset-sign-off)




#### [1\. Request review](#id25)[¶](#request-review "Permalink to this heading")


First, a user requests a review of a model version or bundle by using the [![requestfeedback](../_images/request-feedback.png)](../_images/request-feedback.png) button.


If necessary, each reviewer can delegate their review to another user which is a convenient way to ask someone else to give a review.




#### [2\. Notify reviewers](#id26)[¶](#notify-reviewers "Permalink to this heading")


The user can choose to send emails to the reviewers notifying them that their review has been requested. Email notifications must be [set up](setup.html#governance-email) prior.




#### [3\. Submit feedback](#id27)[¶](#submit-feedback "Permalink to this heading")


Multiple reviewers submit their feedback within the same feedback group.


Each reviewer can add multiple feedback where they `Approve` or raise `Minor` or `Major` issues about the govern item being reviewed.


Only the final approver can `Approve``or ``Reject` the sign\-off.


If you are the final approver or if you have write permission on the item, you are be able to `Abandon` the sign\-off.




#### [4\. Request final approval](#id28)[¶](#request-final-approval "Permalink to this heading")


Once all the feedback is submitted, a user requests the **Request Final Approval** using the [![requestapproval](../_images/request-approval.png)](../_images/request-approval.png) button.


If the final approver considers that there are not enough feedback to take a decision, it is possible to **Go Back to the Feedback Stage** to allow the feedback edition.




#### [5\. Restore or reset sign\-off](#id29)[¶](#restore-or-reset-sign-off "Permalink to this heading")


In case the sign\-off is abandoned, it is possible to:



> * **Cancel the Abandon** to restore the reviews submitted
> * **Reset the Sign\-off** to clear previous reviews and restart the sign\-off





### [Customized sign\-off (Advanced license only)](#id4)[¶](#customized-sign-off-advanced-license-only "Permalink to this heading")







| Feature | Advanced capabilities |
| --- | --- |
| **Sign\-off workflow** | * Add or remove a sign\-off on each workflow step. * Choose if the sign\-off approval is mandatory to continue the workflow process. |
| **Sign\-off assignment** | * Create multiple feedback groups. * Assign who can give a review. You can add several roles, Users, Groups and/or Global API Keys. |
| **Sign\-off reset** | * Setup recurrence to automatically reset an approved sign\-off. It can also be scheduled manually on each sign\-off. |



See also


More information is available in [Concept \| Sign\-off process](https://knowledge.dataiku.com/latest/mlops-o16n/govern/concept-reviews-signoffs.html).






[Notifications](#id16)[¶](#notifications "Permalink to this heading")
---------------------------------------------------------------------


Notifications in Dataiku Govern are configured around sign\-offs. If you are included in a sign\-off, Dataiku Govern will notify you when an important status change happens.



### [Setting up email notifications](#id17)[¶](#setting-up-email-notifications "Permalink to this heading")


This feature needs be configured by your administrator first. See [Setting up email notifications](setup.html#governance-email) for more details.




### [Email notifications](#id18)[¶](#email-notifications "Permalink to this heading")


Emails notifications can be sent to users who:


* Were automatically subscribed.
* Have explicitly subscribed an item and its children if applicable.


Email are sent to users when:


* Feedback or Final approval is submitted.
* Feedback or Final approval is edited. Notifications are only sent for status changes and not for edits to comments.
* A sign\-off is abandoned.
* A sign\-off is canceled.
* A sign\-off is reset.
* A sign\-off reset is scheduled (Advanced license feature).


Emails can be sent to **specific users** when:


* Delegating Feedback or Final approval.




### [Notification subscriptions](#id19)[¶](#notification-subscriptions "Permalink to this heading")


Users are automatically subscribed when they:


* Create/govern, edit, or save an govern item.



Note


If you govern a project by attaching it to an *existing* govern project, Dataiku will automatically subscribe the user to the existing Govern project even though it is not an item creation.
* Submit Feedback or a Final approval.
* Edit Feedback or a Final approval.
* Abandon a sign\-off.
* Cancel a sign\-off.
* Reset a sign\-off.
* Schedule a sign\-off (Advanced license feature).


Users can find the option to **unsubscribe** from the header of the item page or from the footer of a notification email.