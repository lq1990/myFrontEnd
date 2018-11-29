import _ from 'lodash'; // lodash: js原生库，提高效率
import './style/index.css'; // css-loader(解析css模块), style-loader（用于转成style标签，注入到html里）
import './style/a.scss';
import axios from 'axios';
import { d, e, f } from '@/b';

import $ from 'jquery';
// import { ftruncateSync } from 'fs';

function createDomElement() {
  let dom_ = document.createElement('div');
  dom_.innerHTML = _.join(['aicoder.comhaha', '好', 'good'], '。'); // join 用。连接数组中每一个

  dom_.classList.add('box');
  return dom_;
}

let divDom = createDomElement();

document.body.appendChild(divDom);

console.log(122676767);

// > npx webpack 运行之后，在dist中生成main.js文件。这是已经打包好的文件。
// 然后可直接在dist文件使用main.js 为html的js了。
// 有了loader，就可以引入非js文件了。
// dist/main.js 文件中，js、样式等都由js加进来。

//= ========= 发送ajax请求数据===================
axios
  .get('/api/data.json')
  .then(res => {
    console.log('res:', res);
  });

// ===============ES6 babel===========================
class Demo {
  show() {
    console.log('this.Age:', this.Age);
  }
  get Age() {
    return this._age;
  }
  set Age(val) {
    this._age = val + 1;
  }
}

let d1 = new Demo();
d1.Age = 19;
d1.show();

let [a, b, c] = [4, 5, 6];
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

console.log('d:', d);
console.log('e:', e);
console.log('f:', f);

$(function() {
  console.log('jQ:');
  $('.box').click(function() {
    alert(1);
  });
})
;
