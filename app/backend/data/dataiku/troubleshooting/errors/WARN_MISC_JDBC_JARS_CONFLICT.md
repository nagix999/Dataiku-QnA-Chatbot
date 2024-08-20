WARN\_MISC\_JDBC\_JARS\_CONFLICT: JDBC drivers \- some JARs are prone to version conflicts[¶](#warn-misc-jdbc-jars-conflict-jdbc-drivers-some-jars-are-prone-to-version-conflicts "Permalink to this heading")
==============================================================================================================================================================================================================


When multiple JDBC drivers are present in the same directory, conflicts can arise due to naming conflicts and version incompatibilities. This can result in unexpected behavior, such as errors or incorrect query results.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


To avoid conflicts with these JDBC drivers, it is recommended to isolate them in separate directories. Make sure to edit the JDBC connection settings in Dataiku to point to the correct driver.