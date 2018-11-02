$(function () {
    $("p:first").css("color","red");
    console.log($("p:last").css("color"));

    $("p").css({
        "color":"red",
        "font-size":"18px",
        "background-color":"#eee",
    })

    // 动态创建元素
    $("<div><span>123</span></div>").appendTo("body");

    $div = $("<div><span>123</span></div>");
    $(document.body).append($div);

});