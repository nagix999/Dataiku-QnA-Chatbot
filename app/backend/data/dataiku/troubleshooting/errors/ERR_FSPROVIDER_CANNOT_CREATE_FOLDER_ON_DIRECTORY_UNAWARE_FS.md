ERR\_FSPROVIDER\_CANNOT\_CREATE\_FOLDER\_ON\_DIRECTORY\_UNAWARE\_FS: Cannot create a folder on this type of file system[¶](#err-fsprovider-cannot-create-folder-on-directory-unaware-fs-cannot-create-a-folder-on-this-type-of-file-system "Permalink to this heading")
=======================================================================================================================================================================================================================================================================


You are trying to create an empty folder on a system that does not support it.


For example, S3 is not an actual file system. It identifies objects with keys,
which may or may not look like a path on a file system. You can have a single
object with key `a/b/c.txt`, which will be presented by many tools, DSS included,
as a folder `a`, containing a folder `b`, containing a file `c.txt`.
But them, you cannot have an empty folder `e/f/`, you need an actual file
`e/f/g.txt` that will get presented as a folder `e/f`.