$(function() {
    $("#btnShow").on("click",function () {
        // $(".box").show("slow"); // slow, normal, fast
        // $(".box").show(2000);   // 传数字 Xms
        $("#box").show(1000,"",function() {
            console.log("animate is over");
        }); 
    });

    $("#btnHide").on("click",function () {
        $("#box").hide(700,"linear")
    });

    $("#btnSlideUp").on("click",function () {
        $("#box").slideUp("slow");
    });

    $("#btnSlideDown").on("click",function () {
        $("#box").slideDown("slow");
    });

    $("#btnSlideToggle").on("click",function () {
        $("#box").slideToggle("slow");
    });

    $("#btnFadeIn").on("click",function () {
        $("#box").fadeIn("");
    });

    $("#btnFadeOut").on("click",function () {
        $("#box").fadeOut("");
    });
    $("#btnFadeToggle").on("click",function () {
        $("#box").fadeToggle("");
    });

    $("#btnOpacity").on("click",function () {
        $("#box").fadeTo("",0.5)
    })

    $("#btnMany").on("click",function () {
        $("#box").show("slow").slideUp().fadeIn();
    })

    

});