Endpoint APIs[¶](#endpoint-apis "Permalink to this heading")
============================================================


Once a model has been deployed to the flow, it can be deployed on the API node to score one or several images on demand.
See [API Node \& API Deployer: Real\-time APIs](../../apinode/index.html) for more details.



Input format[¶](#input-format "Permalink to this heading")
----------------------------------------------------------


The supported input format for scoring computer vision models with API endpoints is as follows:



```
{
    "features": {
        "input": base64_image
    }
}

```


with base64\_image being the [base64](https://en.wikipedia.org/wiki/Base64) encoded image.


The results will be the same than in the scoring recipe.
Note that for Object detection, predictions are filtered based on the Confidence score threshold set in the corresponding Saved Model. See [Performance assessment](performance-assessment.html) for more details.