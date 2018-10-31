window.onload = function () {
    var liArray = document.querySelectorAll(".ac-item");
    for(var i=0;i<liArray.length;i++) {
        liArray[i].onclick = function (e) {
            for(var j=0;j<liArray.length;j++){
                liArray[j].className = "ac-item";
            }

            this.className = "ac-item on";
        };
    }

};