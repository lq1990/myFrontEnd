// jQ. 扩展插件
// ===================== 第一种：扩展jQ 原型对象的方法
(function ($) {
    $.fn.logText = function () {
        console.log(this.text());
    };
})(jQuery);

$(function () {
    // 自定义扩展的原型的方法。复杂些的话即是插件。
    $(".box").logText();
});


// ======================== 第二种：扩展jQ构造函数上的插件（方法）
// jQuery.logTime = function () {
//     console.log(Date.now().toString());
// };

// 常用方法：extend，不传入target时，可以直接对jQ构造函数 扩展属性和方法。
$.extend({
    logTime: function () {
        console.log(new Date());
    },
});

$.logTime();








