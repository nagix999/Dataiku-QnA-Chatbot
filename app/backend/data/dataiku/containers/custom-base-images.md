Customization of base images[¶](#customization-of-base-images "Permalink to this heading")
==========================================================================================



* [Building an image with CUDA support](#building-an-image-with-cuda-support)


	+ [Multiple base images](#multiple-base-images)
	+ [Setting a proxy](#setting-a-proxy)
	+ [Adding system packages](#adding-system-packages)
	+ [Add a Dockerfile fragment](#add-a-dockerfile-fragment)
	+ [Completely custom Dockerfile](#completely-custom-dockerfile)




Warning


This requires knowledge of Docker concepts and skills in creating custom Dockerfiles.



When building the base image with



```
./bin/dssadmin build-base-image --type container-exec

```


a default base image is created with:


* Python 3\.6, 3\.7, 3\.9
* R 4
* No CUDA support


This can be customized with options to enable or disable additional language versions, eg `--with-py310 --without-r`.


Run `./bin/dssadmin build-base-image --help` for details.



[Building an image with CUDA support](#id1)[¶](#building-an-image-with-cuda-support "Permalink to this heading")
----------------------------------------------------------------------------------------------------------------


The base image that is built by default does not have CUDA support and cannot use NVidia GPUs.
You need to build a CUDA\-enabled base image. To enable CUDA add the `--with-cuda` option to the command line:



```
./bin/dssadmin build-base-image --type container-exec --with-cuda
```

We recommend that you give this image a specific tag using the `--tag` option and keep the default base image “pristine”. We also recommend that you add the DSS version number in the image tag.



```
./bin/dssadmin build-base-image --type container-exec --with-cuda --tag dataiku-container-exec-base-cuda:X.Y.Z
```

where X.Y.Z is your DSS version number



Note


* This image contains CUDA 10\.0 and CuDNN 7\.6\. You can use `--cuda-version X.Y` to specify another DSS\-provided version (9\.0, 10\.0, 10\.1, 10\.2, 11\.0 and 11\.2 are available).
If you require other CUDA versions, you would have to create a custom image.
* Remember that depending on which CUDA version you build the base image (by default 10\.0\) you will need to use
the [corresponding tensorflow version](https://www.tensorflow.org/install/source#gpu).




Warning


After each upgrade of DSS, you must rebuild all base images and [update code envs](code-envs.html).




### [Multiple base images](#id2)[¶](#multiple-base-images "Permalink to this heading")


If you don’t use the `--tag` flag, DSS builds a base image with this naming scheme:



```
dku-exec-base-DSS_INSTALL_ID : dss-DSS_VERSION

```


Where


* DSS\_INSTALL\_ID is the identifier of the DSS installation, found in the `install.ini` file.
* DSS\_VERSION is the version of DSS.


If you don’t specify anything in the “base image” field of the DSS containerized execution configuration, this tag will automatically be used.


You can build other base images by appending the `--tag IMAGE_NAME:IMAGE_VERSION` flag to the `./bin/dssadmin build-base-image --type container-exec` command.




### [Setting a proxy](#id3)[¶](#setting-a-proxy "Permalink to this heading")


You can set the proxy to use to build with `--http-proxy` and `--no-proxy` to set the `http_proxy` and `no_proxy` environment variables.




### [Adding system packages](#id4)[¶](#adding-system-packages "Permalink to this heading")


There are cases where you would want to install additional system packages, generally because they are required by your code environments.


For that, add `--system-packages package1,package2,package3`




### [Add a Dockerfile fragment](#id5)[¶](#add-a-dockerfile-fragment "Permalink to this heading")


You may want to add custom Dockerfile commands. For that, use `--dockerfile-prepend PATH_TO_FILE` or `--dockerfile-append PATH_TO_FILE`.


The prepended Dockerfile is added just after the FROM. The appended Dockerfile is added at the very end of the Dockerfile.


To add a file to the build context, to make the file available to use in Dockerfile commands added via fragment, use `--copy-to-buildenv absolute/path/file.name file.name`.




### [Completely custom Dockerfile](#id6)[¶](#completely-custom-dockerfile "Permalink to this heading")


For cases not covered, the generic process would be:


* Build a base image with the regular DSS mechanisms.
* Write a custom Dockerfile that starts from the built base image, and add the required package.
* Build this custom Dockerfile, and output a custom tag.
* Enter this custom tag in the DSS containerized execution configuration.



Warning


After each upgrade of DSS, you must rebuild all base images, including custom ones.