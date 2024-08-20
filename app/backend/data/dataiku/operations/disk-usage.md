Managing DSS disk usage[¶](#managing-dss-disk-usage "Permalink to this heading")
================================================================================


Various subsystems of DSS consume disk space in the DSS data directory. Some of this disk space is automatically managed and reclaimed by DSS (like temporary files), but some needs some administrator decision and management. For example, job logs are not automatically garbage collected, because a user or administrator may want to access it an arbitrary amount of time later.



Automating cleanup tasks through DSS macros[¶](#automating-cleanup-tasks-through-dss-macros "Permalink to this heading")
------------------------------------------------------------------------------------------------------------------------


For many of the things that can be cleaned up, DSS provides “macros” to semi\-automate these. These macros can be run manually, but you can also automate them using a scenario.


A common setup is thus to create a dedicated “Administration project”, accessible only to DSS administrators. In this project, you create scheduled scenarios that call the macros.



Note


Most of these macros can only be run with full DSS Administrator privileges




### Running the cleanup macros manually[¶](#running-the-cleanup-macros-manually "Permalink to this heading")


* In your administration project, click on the “Macros” button
* Select the appropriate macro
* Select parameters. Most cleanup macros default to running only for the current project, but have an option to run for all projects (which you can only set if you are a DSS administrator)
* Run the macro




### Running the cleanup macros automatically[¶](#running-the-cleanup-macros-automatically "Permalink to this heading")


* In your administration project, go to scenarios
* Create a new scenario
* Add a “Run a macro” step
* Select a time\-based trigger for the scenario, configure it and activate your scenario





Job logs[¶](#job-logs "Permalink to this heading")
--------------------------------------------------


* Location in data dir: `jobs`
* Kind of data: historical logs
* Include in backups: As desired, not strictly required


Each time a job is run in DSS, DSS makes a snapshot of the project configuration/flow/code, runs the job, and keeps various logs and diagnostic information for this job.


This information is extremely useful for understanding job issues, and is not automatically garbage\-collected by DSS, in case user wants to investigate what happened with a job at a later point.


For each job, a subfolder is created as `jobs/PROJECT_KEY/JOB_ID`.


It is safe to remove folders of jobs that are not currently running. Logs of these jobs will not be available anymore, but the existence of the job will still be registered in the DSS UI.



### Semi\-automatic cleanup (recommended)[¶](#semi-automatic-cleanup-recommended "Permalink to this heading")


* Use the “Clear job logs” macro.
* Check “All projects”




### Manual cleanup[¶](#manual-cleanup "Permalink to this heading")


Job folders that correspond to not\-active\-anymore jobs can be removed manually.





Scenario logs[¶](#scenario-logs "Permalink to this heading")
------------------------------------------------------------


* Location in data dir: `scenarios`
* Kind of data: historical logs
* Include in backups: As desired, not strictly required


Each time a scenario is run in DSS, DSS makes a snapshot of the project configuration/flow/code, runs the scenario (which, in turn, generally runs one or several jobs), and keeps various logs and diagnostic information for this scenario run.


This information is extremely useful for understanding scenario issues, and is not automatically garbage\-collected by DSS, in case user wants to investigate what happened with a job at a later point.


For each scenario run, a subfolder is created as `scenarios/PROJECT_KEY/SCENARIO_ID/SCENARIO_RUN_ID`.


It is safe to remove folders of scenario runs that are not running anymore. Logs of these scenario runs will not be available anymore, but the existence of the scenario run will still be registered in the DSS UI.



### Manual cleanup[¶](#id1 "Permalink to this heading")


Scenario folders that correspond to not\-active\-anymore scenario runs can be removed manually.





Saved models[¶](#saved-models "Permalink to this heading")
----------------------------------------------------------


* Location in data dir: `saved_models`
* Kind of data: machine learning models
* Include in backups: Yes


When a machine learning model is deployed from a ML Task onto the Flow of a project, a copy of the data for this saved model is made in the `saved_models` folder.


Each time the saved model is retrained by running it from the Flow, a new version of the saved model is made, and a new copy of the model data is kept.


The size of a saved model version is highly dependent on the algorithm and characteristics of the data, and can range from hundreds of kilobytes to gigabytes.


The saved\_models folder on disk is structured as `saved_models/PROJECT_KEY/SAVED_MODEL_ID/versions/VERSION_ID`


DSS never automatically removes old versions of saved models, as the user may elect to revert to a previous version at any time (for example if he notices that the newer version does not perform as expected). Old versions can be removed by the user from the UI of a saved model



### Manual cleanup[¶](#id2 "Permalink to this heading")


It is safe to delete (without going through the DSS UI) the `VERSION_ID` folder of versions that are not currently the active version of the saved model.



Warning


Deleting the `VERSION_ID` folder corresponding to the currently active version would render the saved model unusable.






Analysis data[¶](#analysis-data "Permalink to this heading")
------------------------------------------------------------


* Location in data dir: `analysis-data`
* Kind of data: machine learning models and machine learning staging data
* Include in backups: Yes


When a model is trained in a visual analysis, by creating a ML Task, various kind of information is kept in the `analysis-data` folder.


This folder is structured like:


* `analysis-data/ANALYSIS_ID/MLTASK_ID/`


	+ `sessions`
	+ `splits`



### sessions[¶](#sessions "Permalink to this heading")


The `sessions` subfolder contains the actual data of the machine learning models, for each model trained within this ML task.
The size of a machine learning model is highly dependent on the algorithm and characteristics of the data, and can range from hundreds of kilobytes to gigabytes.


DSS never automatically removes old models trained in previous sessions, as the user may elect to deploy or compare any of the previous versions at any time.


Most of the data in `sessions` is cleared when the user deletes models or sessions from the DSS UI. In addition, the whole folder of the ML Task (including `sessions`) is removed when the user deletes a MLTask (or its containing visual analysis) from the DSS UI.




### splits[¶](#splits "Permalink to this heading")


If you use the Python (in\-memory) machine learning model, the splits folder contains the train and test splits data, which can become big.


DSS does not automatically remove old splits data, as the user may want to reuse them at a later time by reusing train/test split settings with the same configuration. The whole folder of the ML Task (including `splits`) is removed when the user deletes a MLTask (or its containing visual analysis) from the DSS UI.


It is possible to manually remove old CSV files in each `splits` folder, but you will lose some of the ability to compare exactly models since they won’t be based on the same splits. In addition, you might lose the *Predicted Data* and *Charts* screens





Temporary files[¶](#temporary-files "Permalink to this heading")
----------------------------------------------------------------


* Location in data dir: `tmp`
* Kind of data: temporary data
* Include in backups: No


The `tmp` folder contains various temporary data. Most of it is automatically cleared as needed. Cleanup is not generally required.



### Manual cleanup[¶](#id3 "Permalink to this heading")


This folder can be cleared (i.e. remove all the files within the folder, but **not the folder itself**) while **DSS is not running**.



```
./bin/dss stop
rm -rf tmp/*
./bin/dss start

```



Warning


Removing `tmp` or altering its content while DSS is running may render DSS inoperative






Caches[¶](#caches "Permalink to this heading")
----------------------------------------------


* Location in data dir: `caches`
* Kind of data: cached data
* Include in backups: No


The `cache` contains precomputed data, used notably for the Explore and Charts features. This folder can be cleared (i.e. remove all the files within the folder, but not the folder itself) while DSS is not running.



### Manual cleanup[¶](#id4 "Permalink to this heading")


Removing data from the caches folder can lead to increased display time for Explore and Charts the first time they are used after the removal.



```
./bin/dss stop
rm -rf caches/*
./bin/dss start

```





Exports[¶](#exports "Permalink to this heading")
------------------------------------------------


* Location in data dir: `exports`
* Kind of data: temporary data
* Include in backups: As desired


The `exports` folder contains download files for exports made by users


There is one subfolder of `exports` per stored export data.



### Manual cleanup[¶](#id5 "Permalink to this heading")


You can remove old subfolders within this folder. Removing them will make the exports not available anymore for download by users





On Dataiku Cloud[¶](#on-dataiku-cloud "Permalink to this heading")
------------------------------------------------------------------


On Dataiku Cloud, the total disk space of your Dataiku instances (all nodes) is limited to 500 GB (this limit applies to Discover, Business and Enterprise editions).


The following could be taking up disk space in the Dataiku instance data directory and can be cleared within Dataiku or the Launchpad by any user with permissions on the project or item:


* Code environments (you can delete unused code environments in the Launchpad or rationalize duplicate ones)
* Analysis models, ie Visual Analyses, including ML Models (from the UI in the relevant projects, the user with project access can delete Visual analyses no longer needed)
* Saved Models: When a machine learning model is deployed from an ML Task onto the Flow of a project, a copy of the data for this saved model is made in the data directory. Each time the saved model is retrained by running it from the Flow, a new version of the saved model is made, and a new copy of the model data is kept. The size of a saved model version is highly dependent on the algorithm and characteristics of the data, and can range from hundreds of kilobytes to gigabytes. Dataiku never automatically removes old versions of saved models, as the user may elect to revert to a previous version at any time (for example if he notices that the newer version does not perform as expected). Old versions can be removed by the user from the UI of a saved model.



Note


Note that this 500 GB limit can be lifted upon motivated customer request.