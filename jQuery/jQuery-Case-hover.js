$(function () {
    $(".box").hover(function(e){
        // 鼠标移入
        $(".aside").css("display","block");
    }, function (e) {
        
        $(".aside").css("display","none");
    });
})