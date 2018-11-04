$(function () {
    $(".box").hover(function (e) {
        // 鼠标移入
        $(".cv-box").animate({
            top:0,
        });
    },function (e) {
        // 鼠标移出
        $(".cv-box").animate({
            top:"100%"
        });
    });
});