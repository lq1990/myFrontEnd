$(function(){


    // 键盘键值为 enter、del
   $(".txt-lb").on("keydown", function(e) {
       if(e.which==13) { // 13: enter
            inputTolabel();

           
       } else if(e.which == 8 && $(this).val().length==0) { // 8:delete
            var $txt = $(".label-wrap span:last").text();
            console.log($txt);
            
            $(".label-wrap span:last").remove();
            console.log($txt);
            $(this).val($txt);

            // 取消默认行为，取消后退键删除字符的默认行为
            // 默认行为会使得del键按下时，前面span的字符会少一个。
            e.preventDefault();
            e.stopPropagation();

       }

    //    console.log(e.which);
    //    console.log($("input").val());

    //     if(e.which== 13) { // enter: 13
    //         $new = $("input").val();
    //         $("input").val("");
    //         $('<span class=lb-span>'+$new+' </span>').after($("span:last"));
    //     }

   });


//    点击文本框任意位置，文本框输入处获得焦点
   $(".label-wrap").on("click",function (e) {
       $(".txt-lb").focus();
   });

//    当文本框失去焦点时，给div自动添加span标签
   $(".txt-lb").on("blur",function (e) {

       inputTolabel();
   });

//    删除小图标 点击事件. 使用委托
   $(".label-wrap").on("click","i",function (e) {
       $(this).parent().remove();
   });


   /**
    * 
    * @param {*} e 
    * 
    */
   function inputTolabel(e) {
        if($(".txt-lb").val().length>0) {
            var $lb = $("<span class='lb-span'>" +$(".txt-lb").val()
                +'<i class="glyphicon glyphicon-remove"></i>'
                +'</span>');
            // 在文本框之前追加
            $(".txt-lb").before($lb);
            $(".txt-lb").val(""); 
        }

   }
});


