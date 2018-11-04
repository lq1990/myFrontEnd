$(function () {
    $(".ac-item-hd").on("click",function (e) {
        // $(this).parent().addClass("on");
        $(this).siblings("div").slideDown();

        $(this).parent().siblings().
            find(".ac-item-bd").slideUp(); // find: 找后代



        // $(this).parent().siblings().removeClass("on").
        //     find(".ac-item-bd").slideUp();
    });
})


