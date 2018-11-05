// 配置路径
require.config({
    paths: {
        jquery: "../lib/jquery-1.11.3",
        // show: "show",
    }
})
// 若依赖的模块不在一个文件夹同级下，需要配置path
define(["jquery", "./show.js" ], function($,show) {
    'use strict';
    $(function () {
        $("#box").html("<h1>第一个requirejs应用</h1>");
        show.do();
    });
});

