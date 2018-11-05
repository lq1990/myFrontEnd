/**
 * 我的插件：生成ta页签
 * step 1: 引入jQ 和当前脚本。
 * step 2：
 * 内容格式：
 * <div class="tab-wrap">
        <ul class="tab-hd">
            <li class="tab-hd-item">pro1</li>
            <li class="tab-hd-item">pro2</li>
            <li class="tab-hd-item">pro3</li>
        </ul>
        <ul class="tab-bd">
            <li class="tab-bd-item on"><img src="./img/pro1.jpg" alt=""></li>
            <li class="tab-bd-item"><img src="./img/pro2.jpg" alt=""></li>
            <li class="tab-bd-item"><img src="./img/pro3.jpg" alt=""></li>
        </ul>
    </div>
 * step 3:
 * $(".tab-wrap").tab();


 */
(function ($) {
    // 对jq原型对象进行扩展
    $.fn.tab = function () {
        var $hdItems = $(this).find(".tab-hd-item"),
            $bdItems = $(this).find(".tab-bd-item");

            $hdItems.on("mouseenter", function (e) {
                var idx = $(".tab-hd-item").index(this); // 获取元素的索引
                var bdLiDom = $(".tab-bd-item").get(idx); // 获得idx位置处的dom对象
                $(bdLiDom).addClass("on").siblings().removeClass("on");
            });
    }
})(jQuery);

// $(function () {
//     // 自定义插件
//     $(".tab-wrap").tab();
// });

