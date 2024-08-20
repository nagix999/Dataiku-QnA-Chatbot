Computer vision analysis inputs[¶](#computer-vision-analysis-inputs "Permalink to this heading")
================================================================================================


The following inputs are required to create a computer vision analysis (either an Object detection or Image classification one):
a [Managed folders](../../connecting/managed_folders.html) containing the images you want to learn from and a dataset where each row corresponds to an image of your folder, with two columns:



> * A **target** column containing, for each image, annotations or a category (depending on whether you are doing an Object Detection or Image classification analysis).
> * An **image path** column specifying the image paths from your folder’s root.


This dataset can be created from the managed folder using the [List Folder Contents](../../other_recipes/list-folder-contents.html) recipe.



Target column format for Object detection[¶](#target-column-format-for-object-detection "Permalink to this heading")
--------------------------------------------------------------------------------------------------------------------


The target column for Object detection must have, for each image, a json of the following format:



```
[{
    "bbox": [xmin_bbox, ymin_bbox, width_bbox, height_bbox]
    "category": "cat"
 }, {
    "bbox": [xmin_bbox, ymin_bbox, width_bbox, height_bbox]
    "category": "dog"
}]

```


The top left of the image having coordinates (0, 0\).


If you downloaded your dataset in Pascal or VOC format you can use the plugin [Image annotations to Dataset](https://www.dataiku.com/product/plugins/image-annotations-to-dataset) to reformat your annotations and create a
Dataset with the right format for computer vision.


If you annotated your images using the plugin [ML Assisted Labeling](https://www.dataiku.com/product/plugins/ml-assisted-labeling), use the “Reformat image annotations” recipe to create a dataset for Computer vision.


Rows having a bad format or without annotations will be dropped during training.




Target column format for Image classification[¶](#target-column-format-for-image-classification "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------------------


The target column for Image classification must be a string or integer for each image (representing its category):



```
"category 1"

```


If you have a managed\-folder with images being organized in different sub\-folders named according to the categories of your dataset, note that you can use the
built\-in “List Contents” recipe to create the input dataset.


Rows having a bad format or empty rows will be dropped during training.




Image path column[¶](#image-path-column "Permalink to this heading")
--------------------------------------------------------------------


This column contains the relative path of each image from the folder root. Corrupted or missing images are ignored during training.




Supported images formats[¶](#supported-images-formats "Permalink to this heading")
----------------------------------------------------------------------------------


Supported image formats for computer vision in DSS are: jpg, jpeg, and png.


There is no image size requirement for using computer vision in DSS. However they should be able to fit into memory (see batch size in [Model architectures \& training parameters](architecture.html)).