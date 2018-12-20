// 小精灵：动画小人
function Sprite(option) {
  this._init(option);
}

Sprite.prototype = {
  _init: function(option) {
    this.x = option.x === 0 ? 0 : option.x || 10; // 绘制到x坐标
    this.y = option.y === 0 ? 0 : option.x || 10;

    this.w = option.w || 76; // 绘制到canvas上的宽
    this.h = option.h || 122;

    this.cutW = option.cutW || 76; // 原图上裁剪苦宽
    this.cutH = option.cutH || 122;

    this.fps = option.fps || 10;
    this._dirIndex = 0;
    this.imgSrc = option.imgSrc || '';
  },
  render: function(ctx) {
    // 把自己画到画布上去
    var img = new Image();
    img.src = this.imgSrc;
    var self = this; // this => render方法
    img.onload = function() {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // this => img
      var frameIndex = 0;
      setInterval(() => {
        ctx.drawImage(
          img,
          frameIndex * self.cutW,
          self._dirIndex * self.cutH,
          self.cutW,
          self.cutH,
          self.x,
          self.y,
          self.w,
          self.h
        );
        frameIndex++;
        frameIndex %=4;
      }, 1000 / self.fps);
    };
  },
  changeDir: function (dir) {
      if(dir=="left"){
          this._dirIndex = 1;
      }
      if(dir=="right"){
          this._dirIndex = 2;
      }
      if(dir=="up"){
          this._dirIndex = 3;
      }
      if(dir=="down"){
          this._dirIndex = 0;
      }
  }
};
