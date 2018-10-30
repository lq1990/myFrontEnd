// 第一张滑动到第二张
window.onload = function () {
    var btnNext = document.querySelector(".slide-btn-wrap .next");
    btnNext.onclick = function (e) {
        // var curLi = document.querySelector(".slide-img-wrap .on");
        // // 注意：上面的on是不断更新的。
        // var curIndex = curLi.getAttribute('index');
        // curIndex = parseInt(curIndex); // 0,1,2,3
        // // 让索引进行循环，使用取余
        // var nextIndex = (curIndex+1) % 4;
        

        // slide(curIndex, nextIndex);
        slideShowNext();
        autoSlide();

    };

    var btnPrev = document.querySelector(".slide-btn-wrap .prev");
    btnPrev.onclick = function (e) {
    //     var curLi = document.querySelector(".slide-img-wrap .on");
    //     // 注意：上面的on是不断更新的。
    //     var curIndex = curLi.getAttribute('index');
    //     curIndex = parseInt(curIndex); // 0,1,2,3
    //     // 让索引进行循环，使用取余
    //     var nextIndex = (curIndex - 1 + 4) % 4;
        
    //    slide(curIndex, nextIndex);

        slideShowPrev();
        autoSlide();
    };

    // 圆圈的任意点击。用委托
    var selBtnDiv = document.querySelector(".slide-sel-btn");
    selBtnDiv.onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        console.log(target);
        if(target == this) {
            return;
        }

        var nextIndex = target.getAttribute("index");
        nextIndex = parseInt(nextIndex);

        var curA = document.querySelector(".slide-sel-btn .on");
        var curIndex = curA.getAttribute("index");
        curIndex = parseInt(curIndex);

        slide(curIndex, nextIndex);
        autoSlide();
    }

    // 实现自动滚动的效果
    autoSlide();

};

function slideShowNext() {
    var curLi = document.querySelector(".slide-img-wrap .on");
    var curIndex = curLi.getAttribute("index");
    curIndex = parseInt(curIndex);
    var nextIndex = (curIndex+1) % 4;
    slide(curIndex, nextIndex);
};

function slideShowPrev() {
    var curLi = document.querySelector(".slide-img-wrap .on");
    var curIndex = curLi.getAttribute("index");
    curIndex = parseInt(curIndex);
    var nextIndex = (curIndex - 1 +4) % 4;
    slide(curIndex, nextIndex);
};

var timer;

// 自动播放
function autoSlide() {
    // 去掉时钟
    if(timer) {
        clearInterval(timer);
        timer = null;
    };

    timer = setInterval(function (e) {
        slideShowNext();
    },2000); 
};

function slide(curIndex, nextIndex) {
    // var curLi = document.querySelector(".slide-img-wrap .on");
    // 注意：上面的on是不断更新的。
    // var curIndex = curLi.getAttribute('index');
    // curIndex = parseInt(curIndex); // 0,1,2,3
    // 让索引进行循环，使用取余
    // var nextIndex = (curIndex - 1 + 4) % 4;

    
    var imgList = document.querySelector(".slide-img-wrap");

    var curLeft = imgList.offsetLeft;
    var nextLeft = nextIndex*(-500);

    // imgList.style.left = nextLeft + "px"; // 非动画版本
    slideAnimate(curLeft, nextLeft, imgList,500);

    // 随着滑动，设置img 类名，
    var liArray = document.querySelectorAll(".slide-img-wrap li");
    // console.log(liArray[curIndex].className);
    liArray[curIndex].className = "";
    liArray[nextIndex].className = "on";
    // 设置圆点变化
    var circleArray = document.querySelectorAll(".slide-sel-btn a");
    circleArray[curIndex].className = "";
    circleArray[nextIndex].className = "on";
};

function slideAnimate(curLeft, endLeft, elem, duration) {
    var w = endLeft - curLeft;
    var wPerMs = w / duration; // 每毫秒移动的距离
    var start = Date.now();

    var animateTimer = setInterval(function () {
        var curTime = Date.now();
        var deltaT = curTime - start;

        elem.style.left = (elem.offsetLeft + deltaT * wPerMs)+"px";

        duration -= deltaT;
        if(duration <= 0 ) {
            elem.style.left = endLeft + "px";
            clearInterval(animateTimer);
            return;
        }

        start = curTime;
    },1000/60);

};





