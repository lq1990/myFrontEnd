
/*
// 链式编程
$(function () {
    
    $(".box").text("abcd").slideUp().slideDown();
    
})

// 链式编程的原理
var cat = {
    run: function () {
        console.log("running");
        return cat; // return this;
    },
    sayHi: function () {
        console.log("hi...");
        return cat;
    },
};

cat.run().sayHi();
*/

// ===============评分控件=======================

$(function () {
    // $(".list li").on("mouseenter", function () {
    //     $(this).text("★").prevAll().text("★").end().nextAll().text("☆");
    // });

    // $(".list li").on("click",function () {
    //    console.log("haha");
    // });

    $(".list li").hover(function () {
        $(this).text("★").prevAll().text("★");
    },function () {
        $(this).text("☆").nextAll().text("☆");
    }).on("click",function () {
        // click之后，记录点击的位置。
        $(this).addClass("cur").siblings().removeClass("cur");
    });

    // mouseleave 时。这里注意end的使用，当链条断时，用end可回到最近一次断之前的代码。
    $(".list").on("mouseleave",function () {
        $(".list li.cur").text("★").prevAll().text("★").end().nextAll().text("☆");
    });


});
