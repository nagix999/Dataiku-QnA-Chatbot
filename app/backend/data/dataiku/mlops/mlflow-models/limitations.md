Limitations and supported versions[¶](#limitations-and-supported-versions "Permalink to this heading")
======================================================================================================


Dataiku makes best effort to ensure that the MLflow import capability is compatible with a wide variety of MLflow models.


However, MLflow imposes extremely few constraints on models, and different MLflow models are allowed to behave in arbitrary non\-standard ways and to return completely different kind of data.


It is thus not possible to guarantee unfettered ability to use all features (notably advanced features such as performance evaluation, model comparison or drift analysis) with all types of models.


This page lists known compatibilities and incompatibilities



Import and scoring[¶](#import-and-scoring "Permalink to this heading")
----------------------------------------------------------------------


The MLflow model import capability and scoring recipes in “direct output” mode are usually compatible with MLflow models supporting the “pyfunc” variant.


As of December 2023, this has been tested with:


* Python Function
* H2O
* Keras
* Pytorch
* Scikit\-learn
* TensorFlow 1 and 2
* ONNX
* MXNet Gluon
* XGBoost
* LightGBM
* Catboost
* Spacy
* FastAI
* Statsmodels
* Prophet


Dataiku does not support R MLflow models nor Spark Mlflow models


The import of MLflow models in DSS was successfully tested with MLflow versions 1\.20\.2, 1\.30\.0 (Python 3\.7\) and 2\.13\.0 (Python 3\.8\). Later versions may also work, but modifications of implementation details of MLflow may cause bugs. Version 2\.13\.0 should generally be preferred, except for some older packages, such as TensorFlow 1 and Keras, whose support was removed in MLflow 1\.21\.0\.


The following ML packages are supported in the versions specified in the below table. When using one of these packages, you should create
a code environment including:


* dataiku core packages
* the specified version(s) of the ML package(s)
* scikit\-learn\=\=1\.0\.2
* statsmodels\=\=0\.13\.5
* protobuf\=\=3\.16\.0 (not for Python 3\.10\+)




| ML package | ML packages versions | MLflow version *(Python version)* Recommended / Tested |
| --- | --- | --- |
| CatBoost | catboost\=\=0\.26\.1 | 2\.13\.0 *(3\.8\)* / 1\.30\.0 *(3\.7\)* |
| fast.ai 1 | fastai\=\=1\.0\.60 | 1\.20\.2 *(3\.7\)* |
| fast.ai 2 | fastai\=\=2\.7\.10 | 2\.13\.0 *(3\.8\)* / 1\.30\.0 *(3\.7\)* |
| LightGBM | lightgbm\>\=3\.0,\<3\.1 | 2\.13\.0 *(3\.8\)* / 1\.30\.0 *(3\.7\)* |
| ONNX | onnx\=\=1\.12\.0 onnxruntime\=\=1\.12\.0 (compatible ML package) | 2\.13\.0 *(3\.8\)* / 1\.30\.0 *(3\.7\)* |
| PyTorch | torch\=\=1\.13\.0 torchvision\=\=0\.14 torchmetrics\=\=0\.11\.0 pytorch\-lightning\=\=1\.8\.2 | 2\.13\.0 *(3\.8\)* / 1\.30\.0 *(3\.7\)* |
| TensorFlow 1 / Keras 2\.3 | tensorflow\=\=1\.15\.0 keras\=\=2\.3\.1 keras\-preprocessing\=\=1\.1\.0 h5py\=\=2\.10\.0 | 1\.20\.2 *(3\.7\)* |
| TensorFlow 2 / Keras 2\.10 | tensorflow\=\=2\.10\.0 tensorflow\-estimator\=\=2\.10\.0 keras\=\=2\.10\.0 | 2\.13\.0 *(3\.8\)* / 1\.30\.0 *(3\.7\)* |
| XGBoost | xgboost\=\=1\.5\.0 | 2\.13\.0 *(3\.8\)* / 1\.30\.0 *(3\.7\)* |



A code env for Pytorch should include, **in addition to dataiku core packages**:[¶](#id1 "Permalink to this code")

```
mlflow==2.13.0
scikit-learn==1.0.2
statsmodels==0.13.5
protobuf==3.16.0
torch==1.13.0
torchvision==0.14
torchmetrics==0.11.0
pytorch-lightning==1.8.2

```




A code env for TensorFlow 2 / Keras 2\.10 should include, **in addition to dataiku core packages**:[¶](#id2 "Permalink to this code")

```
mlflow==2.13.0
scikit-learn==1.0.2
statsmodels==0.13.5
protobuf==3.16.0
tensorflow==2.10.0
tensorflow-estimator==2.10.0
keras==2.10.0

```





Evaluation[¶](#evaluation "Permalink to this heading")
------------------------------------------------------


DSS also features the evaluation of regression or classification models on tabular input data. As of December 2023, this feature has been successfully tested in the following circumstances.


Please note that this is not a guarantee that you would necessarily be able to do the same, due to the high variability
of models that can be saved (even within a single framework).


In all cases, the prediction\_type should be set when importing the model. Please see below supported prediction types for the supported ML packages:




| ML package | binary classification | multiclass classification | regression |
| --- | --- | --- | --- |
| CatBoost | ✓ | ✓ | ✓ |
| fast.ai 1 | ✗ | ✗ | ✗ |
| fast.ai 2 | ✗ | ✗ | ✓ |
| LightGBM | ✓ | ✓ | ✓ |
| ONNX | ✓ | ✓ | ✓ |
| PyTorch | ✓ | ✓ | ✓ |
| scikit\-learn 1\.0\.2 | ✓ | ✓ | ✓ |
| TensorFlow 1 / Keras 2\.3 | ✗ | ✗ | ✓ |
| TensorFlow 2 / Keras 2\.10 | ✓ | ✓ | ✓ |
| XGBoost | ✓ | ✓ | ✓ |