$(function () {
    // $(".ac").on("click","li",function (e) {
        // console.log($(this));
        // console.log(this.className);
        // console.log($(this).siblings());


        // $(this).context.className = "ac-item on";
        // $(this).siblings().context.className = "ac-item";
    // });

    $(".ac-item-hd").on("click",function (e) {
        $(this).parent().addClass("on");
        $(this).parent().siblings("li").removeClass("on"); // 隐式迭代
    });

});


