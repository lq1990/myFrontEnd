$(function () {
    $(".tab-hd-item").on("mouseenter",function () {
        var idx = $(".tab-hd-item").index(this); // 获取元素的索引
        var bdLiDom = $(".tab-bd-item").get(idx); // 获得idx位置处的dom对象
        $(bdLiDom).addClass("on").siblings().removeClass("on");
    });
});