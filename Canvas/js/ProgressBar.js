function ProgressBar(option) {
    this._init(option);
}

ProgressBar.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.w = option.w || 100;
        this.h = option.h || 10;
        this.fillStyle = option.fillStyle || "orange";
        this.strokeStyle = option.strokeStyle || "red";

        console.log("this: ",this);
        var self = this; // 不确定加不加
        var innerRect = new Konva.Rect({
            x: self.x,
            y: self.y,
            width: 10,
            height:self.h,
            fill: self.fillStyle,
            id: "innerRect" // 可设置id

        });
        var outerRect = new Konva.Rect({
            x: self.x,
            y: self.y,
            width: self.w,
            height:self.h,
            stroke: self.strokeStyle,

        });

        this.group = new Konva.Group({
            x:0, // 组内成员以这个xy 定位
            y:0
        });
        this.group.add(innerRect);
        this.group.add(outerRect);
    },
    
    changeValue: function (val) {
        if(val>1){
            val = val / 100;
        }
        var width = this.w*val;
        var innerRect = this.group.findOne("#innerRect");
        innerRect.to({
            width: width,
            duration: .5
        })
    },
    addToGroupOrLayer: function (arg) {
        arg.add(this.group)
    }
}