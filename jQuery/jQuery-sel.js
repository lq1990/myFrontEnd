/*
// DOM
window.onload = function () {
    var btn = document.getElementById("btn");

}


// ==================== jQuery ===============
$(function () {
    // 页面的文档加载完成
    var $btn = $("#btn");

    // jQ. 构造函数用法
    // 1. $函数可以接受一个回调函数，在页面加载完成后执行。
    // 2. 可以接收一个css选择器（string),返回选择器对应dom节点的JQuery包装对象。
    //    此包装对象 一般给其加一个 $

    console.log($btn);

    var btn = $btn[0]; // jQ. -> DOM
    console.log(btn);
    // 3. 接受一个dom对象，转成jQ 的包装对象
    //    转成jQ的好处是：就拥有了 jQuery.fn 上的方法api。
    var $btn2 = $(btn);
    console.log($btn2);


});
*/

// ==================== selector =========================
$(function () {
    // 搜寻所有的标签元素。
    var $all = $("*"); 
    console.dir($all);

    // 类选择器
    var $cd = $(".cd");
    console.dir($cd);

    var div1 = $cd[0];
    console.log(div1);
    var div2 = $cd[1];
    console.log(div2);
    
    // 标签选择器, 并集
    var $h3 = $("h3, p");
    console.dir($h3);

    // 交集选择器
    var $divcd = $("div#cd2");
    console.dir($divcd);

    var $divcd = $("div.cd2"); // 错误，并没有cd2 的类， cd2是id
    console.dir($divcd);

    console.log("\n");

    // 过滤选择器、后代选择器
    console.dir($(".list li:first"));

    console.log("\n");

    // 包含选择器
    var $laoma = $('div:contains("老马")');
    console.dir($laoma);
    console.log($laoma.text());
    // 获取元素的内部文本

    var $not = $("div:not(.cd)");
    console.dir($not);
    

});






