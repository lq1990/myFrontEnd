function CircleText(option) {
  this._init(option);
}

CircleText.prototype = {
  _init: function(option) {
    this.x = option.x || 0;
    this.y = option.y || 0;
    this.innerR = option.innerR || 0;
    this.outerR = option.outerR || 0;
    this.text = option.text || '';
    this.innerStyle = option.innerStyle || 'red';
    this.outerStyle = option.outerStyle || 'blue';
    this.fontSize = option.fontSize || 10;

    this.group = new Konva.Group({
      x: this.x,
      y: this.y
    });
    // ======== 初始化一个内部圆 ============
    var innerCircle = new Konva.Circle({
      x: 0,
      y: 0,
      radius: this.innerR,
      fill: this.innerStyle,
      opacity: 0.9
    });
    this.group.add(innerCircle);

    // =============== 初始化 圆环 ==============
    var outerRing = new Konva.Ring({
      x: 0,
      y: 0,
      innerRadius: this.innerR,
      outerRadius: this.outerR,
      fill: this.outerStyle,
      opacity: 0.9
    });
    this.group.add(outerRing);

    // ===============0  初始化文字 =============
    var text = new Konva.Text({
      x: 0 - this.outerR,
      y: -this.fontSize/2,
      width: this.outerR * 2,
      fontSize: this.fontSize,
      fill: '#fff',
      text: this.text,
      align: "center"
    });
    this.group.add(text);
  },
  addToGroupOrLayer: function(arg) {
    arg.add(this.group);
  }
};
