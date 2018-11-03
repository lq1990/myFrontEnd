$(function () {
    console.log("inner");
    console.log($(".box").innerHeight());
    console.log($(".box").innerWidth());

    console.log("\n outer");
    console.log($(".box").outerHeight(true));
    console.log($(".box").outerWidth(true));

    // 内容宽高 读取、写入
    console.log($(".box").height());
    console.log($(".box").width());


    console.log($(".box").height("120px"));
    console.log($(".box").width(120));

    console.log("position: \n");
    console.log($(".box").position());

    $(".box").width(function (index, val) {
        return val+index*50;
    })


    console.log($(window).scrollTop());

    $("#btn").on("click",function (e) {
        $(window).scrollTop(0);
    });


})