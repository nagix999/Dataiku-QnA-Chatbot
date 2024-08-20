Runtime and GPU support[¶](#runtime-and-gpu-support "Permalink to this heading")
================================================================================


The training/scoring of time series forecasting deep learning models can be run on either a CPU or **one** GPU. Training on a GPU is usually much faster.



Code environment[¶](#code-environment "Permalink to this heading")
------------------------------------------------------------------


Time series forecasting in DSS uses specific Python libraries (such as GluonTS and MxNet) that are not shipped with the DSS built\-in Python environment.


Therefore, before training your first time series forecasting deep learning model, you must create a code environment with the required packages. See [Code environments](../../code-envs/index.html) for more information about code environments.


You can select the “Visual Timeseries forecasting” package preset that supports GPU and the installed CUDA version, in the “Packages to install” section of the code environment settings.



Warning


To train or score a time series forecasting model on GPU, DSS needs:


* At least one CUDA compatible NVIDIA GPU.
* The GPU drivers installed, with one of the following CUDA versions: 10\.0, 10\.1, 10\.2, 11\.0, 11\.2\.
* A compatible version of NVIDIA NCCL installed, at least 2\.4\.2\.
* A compatible version of NVIDIA CuDNN installed, at least 7\.5\.1\.
* The MXNet package with support for the installed CUDA version, e.g. `mxnet-cu112` for CUDA 11\.2




Note


You might need to set the `LD_LIBRARY_PATH` environment variable in your `DATADIR/bin/env-site.sh` to point towards you CUDA library folder
(e.g. `export LD_LIBRARY_PATH=/usr/local/cuda/lib64:$LD_LIBRARY_PATH`)





Selection of GPU[¶](#selection-of-gpu "Permalink to this heading")
------------------------------------------------------------------


Once the proper environment is set up, you can create a time series forecasting modeling task.
DSS will look for an environment that has the required packages and select it by default.


If the DSS instance has access to GPU(s) you can then choose **one** of them to train the model.


![../../_images/gpu-selection2.png](../../_images/gpu-selection2.png)
For containerized execution you can only select the number of GPUs (at most **one** for time series forecasting).


If a model trained on a GPU code environment is deployed as a service endpoint on an API node, the endpoint will require access to a GPU on the API node, with the same CUDA version,
and will automatically use GPU resources.