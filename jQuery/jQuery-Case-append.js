$(function(){
   $(".txt-lb").on("keydown", function(e) {
       if(e.which==13) { // 13: enter
           var $lb = $("<span class='lb-span'>" +$(this).val()+'</span>');
           // 在文本框之前追加
           $(this).before($lb);
           $(this).val(""); 
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
});


