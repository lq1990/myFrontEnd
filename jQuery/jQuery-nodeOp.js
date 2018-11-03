
// ================ wrap ====================
// 让每个p标签都包裹一个div标签
// $("p").wrap("<div></div>");


// 把所有匹配的p用一个div包裹
// $("p").wrapAll("<div></div>");


// p标签的内部子元素 用span包裹
// $("p").wrapInner("<span></span>");

// ================= replace ============================
// $("<span>1234</span>").replaceAll("p:first");

// $("p:last").replaceWith("<div>last</div>");

// empty
$("div").empty();

$("p:first").clone(true).appendTo(document.body);


