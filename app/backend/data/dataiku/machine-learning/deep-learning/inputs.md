Multiple inputs[¶](#multiple-inputs "Permalink to this heading")
================================================================


It is possible for a deep learning model architecture to have more than one input.


For example, when working with Tweets, you may want to analyse the text of the tweet, but also its metadata (when was the tweet emitted, how many retweets did it generate, how many followers its author has, …). However, it is not possible to directly compare text and numerical data. Therefore you need to first “transform” the text into numerical data with a recurrent network, then “connect” it to the metadata. The architecture may look like:


![../../_images/multi-inputs.png](../../_images/multi-inputs.png)
DSS can handle these architectures, and you can define which preprocessed feature goes to which deep learning input.


By default, all the input features of your model are preprocessed, which gives a numerical array. This numerical array is sent to a main deep learning input.


You can add two kinds of deep learning model inputs:


* “Regular multi\-feature inputs” which receive the preprocessed numerical array from the “regular” preprocessing of one or multiple input features.
* “Custom\-processed single\-feature inputs” where a custom preprocessor creates a tensor from a single input feature. The tensor may have arbitrary shape.


![../../_images/input-types.jpg](../../_images/input-types.jpg)