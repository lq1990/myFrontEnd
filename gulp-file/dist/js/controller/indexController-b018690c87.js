"use strict";require.config({
  paths: {
    jquery: "../../lib/jquery",
    api: "../service/api-80985606ab",
    "controller/indexController": "controller/indexController-b018690c87",
    index: "index-36005da0e2"
  }
}),require(["jquery","api"],function(i,e){i(function(){i("#tt").on("click",function(i){e.getUser()})})});