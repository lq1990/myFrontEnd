// 从一个文件中导出的模块，都是同一个对象。即单例模式
// 模块的变量是延迟执行的，只有在用到时，才会拿到这个值。
import { a, b, c, show, age, name, AddAge } from "./b";
import * as aicoder from "./b";
show();

AddAge(10);

show();

aicoder.show();

import aaa from './b'; // 直接import出来的 是默认值 default
console.log('aaa:', aaa);

import './c'; //直接执行c。而 不引入c.js 模块内容。
// import 模块会先于代码 解析。故 c中内容先执行，后才执行 上面的 show(),AddAge()。
