/*
 * @Author: lq
 * @Date: 2018-11-23 21:16:42
 * @Last Modified by: lq
 * @Last Modified time: 2018-11-24 11:54:17
 * 与后台打交道的 API 都封装在此
 */

define(['jquery'], function($) {
  return {
    getUser: function(cb) {
      // 发送ajax请求，后台返回数据后，调用cb函数
      // $.ajax({
      //   url: '/api/userlist',
      //   type: 'GET',
      //   data: '',
      //   dataType: 'json',
      //   success: cb
      // });

      alert('getuser');
    }
  }; // return出去什么，别人就拿到什么。和exports一个道理
});
