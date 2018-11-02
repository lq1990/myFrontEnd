$(function () {
   $("#btn").on("click",function (e) {
       // 按钮点击关灯后，文字改为开灯，背景色变黑
    //    再点击后，文字变为关灯，背景变白。
        if ($(this).val() =="turn off") {
            $(this).val("turn on");
            // $(document.body).addClass("close");
        } else {
            $(this).val("turn off");
            // $(document.body).removeClass("close");
        }

        $(document.body).toggleClass("close"); // 有则去掉，无则加上。
   });

   
});