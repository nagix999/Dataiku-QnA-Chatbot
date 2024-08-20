Text extraction[¶](#text-extraction "Permalink to this heading")
================================================================


Dataiku can extract text from several document types:


* PDF
* DOCX
* HTML
* Metadata


The Text extraction recipe takes as input a folder of various file types (pdf, docx, html, etc) and outputs a dataset with three columns: filename, extracted text and error messages when it failed to extract any text.


For some input formats, it is possible to extract text in chunks, with an extra metadata column containing section info. This will output one row by unit of document. A unit can be a page in a PDF file or a section in a DOCX, HTML, Markdown, etc. These metadata can either be in plain text or JSON format.



Note


This capability is provided by the “Text extraction and OCR” plugin, which you need to install. Please see [Installing plugins](../plugins/installing.html).


This plugin is [Not supported](../troubleshooting/support-tiers.html)



Please see our [OCR plugin page](https://www.dataiku.com/product/plugins/tesseract-ocr/) for detailed instructions