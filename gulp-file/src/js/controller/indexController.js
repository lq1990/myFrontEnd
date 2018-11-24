// 1. 配置依赖的模块的路径
require.config({
  shim: { // easyui 不符合es6规范，因此需要设置
    easyui: ['jquery']
  },
  paths: {
    // jquery: 'D:/myGithub/myFrontEnd/gulp-file/src/lib/jquery'
    // 以src为网站根目录
    jquery: '../../lib/jquery', // 文件的后缀不必写
    api: '../service/api',
    tpl: '../template/tpl',
    easyui: '../../lib/jquery-easyui-1.6.9/jquery.easyui.min'
  }
});

// 2. 进行入口处理
require(['jquery', 'api', 'tpl', 'easyui'], function($, api, tpl, easyui) {
  $(function() {
    $('#tt').on('click', function(e) {
      // alert('ss');
      api.getUser();
    });

    $('#btn').on('click', function(params) {
      $('.dialog').dialog({
        title: 'study',
        width: 400,
        height: 400,
        modal: true,
        content: tpl('product/info', { title: 'aicoder.com', list: ['abc', 'lq'] })
      });
    });
  });
});
