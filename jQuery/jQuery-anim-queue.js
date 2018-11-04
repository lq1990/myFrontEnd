$(function () {
    $("#btn").on("click",function () {
        $(".box").hide("").show("").slideUp()
        .slideDown().fadeTo(1000,.5).animate({
            width:50,
        });
    });

    $("#btnFinish").on("click",function () {
        // 立即结束动画，直接到终点。
        $(".box").finish();
    });

    $("#btnStop").on("click",function () {
        // $(".box").stop(false);// 第一个参数不传或false：当前执行的动画结束，后续动画不受影响。

        $(".box").stop(true); // 第一个参数是true，后面的动画也不再执行。

        // $(".box").stop(true,true); // 传第二个参数为true：当前动画到底，不进行后续的。
    });

})