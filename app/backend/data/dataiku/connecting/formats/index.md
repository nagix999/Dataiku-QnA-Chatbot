File formats[¶](#file-formats "Permalink to this heading")
==========================================================


Datasets based on files require a file input format.


This section contains detailed information on the supported formats and options.



* [Delimiter\-separated values (CSV / TSV)](csv.html)
	+ [Quoting and escaping styles](csv.html#quoting-and-escaping-styles)
		- [Excel\-style](csv.html#excel-style)
			* [Example](csv.html#example)
		- [Unix\-style](csv.html#unix-style)
			* [Example](csv.html#id1)
		- [Escaping only](csv.html#escaping-only)
			* [Example](csv.html#id2)
		- [No escaping, no quoting](csv.html#no-escaping-no-quoting)
	+ [Usage in datasets](csv.html#usage-in-datasets)
	+ [Usage in recipes](csv.html#usage-in-recipes)
* [Fixed width](fixed-width.html)
* [Parquet](parquet.html)
	+ [Requirements](parquet.html#requirements)
	+ [Applicability](parquet.html#applicability)
	+ [Limitations and issues](parquet.html#limitations-and-issues)
		- [Case\-sensitivity](parquet.html#case-sensitivity)
		- [Related to Hive](parquet.html#related-to-hive)
		- [Related to Impala](parquet.html#related-to-impala)
		- [Misc](parquet.html#misc)
* [Avro](avro.html)
	+ [Applicability](avro.html#applicability)
		- [Reading Avro files](avro.html#reading-avro-files)
		- [Reading Avro files / multiple versions](avro.html#reading-avro-files-multiple-versions)
		- [Writing Avro files](avro.html#writing-avro-files)
* [Hive ORCFile](orcfile.html)
	+ [Compatibility](orcfile.html#compatibility)
	+ [Limitations](orcfile.html#limitations)
* [XML](xml.html)
	+ [Handling the structure](xml.html#handling-the-structure)
		- [Selection of the data to load](xml.html#selection-of-the-data-to-load)
		- [JSON representation](xml.html#json-representation)
			* [Example](xml.html#example)
	+ [Using XPath to select data](xml.html#using-xpath-to-select-data)
		- [Limitations](xml.html#limitations)
		- [Selecting values explicitly](xml.html#selecting-values-explicitly)
			* [Example](xml.html#id3)
* [JSON](json.html)
	+ [Example](json.html#example)
* [Excel](excel.html)
* [ESRI Shapefiles](shapefile.html)
	+ [Vecmath library](shapefile.html#vecmath-library)
* [Delta Lake](deltalake.html)