/*

require.config({
　　　　paths: {
　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"
　　　　}
　　});

require.config({
　　　　paths: {
　　　　　　"jquery": "lib/jquery.min",
　　　　　　"underscore": "lib/underscore.min",
　　　　　　"backbone": "lib/backbone.min"
　　　　}
　　});
require.config({
　　　　baseUrl: "js/lib",
　　　　paths: {
　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"
　　　　}
　　});

require.config({
　　　　paths: {
　　　　　　"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
　　　　}
　　});		

require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，
还有一个shim属性，专门用来配置不兼容的模块。具体来说，
每个模块要定义
（1）exports值（输出的变量名），表明这个模块外部调用时的名称；
（2）deps数组，表明该模块的依赖性。	
require.config({
　　　　shim: {

　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},
　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}
　　　　}
　　});
*/

/*
	省略协议 http:
	当页面加载时，
	对于非加密请求脚本会通过Http方式引用并且缓存起来，
	以此同时对于加密请求脚本会根据“协议省略”方式使用Https引用内容，
	所以使用“协议省略”的URL允许单个脚本更灵活地引用内容。
*/

require.config({
    paths: {
        jquery: [
	        'jquery-1.7.1',
	        'http://libs.baidu.com/jquery/1.7.1/jquery',
	        'http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min',
	        '//upcdn.b0.upaiyun.com/libs/jquery/jquery-1.7.1.min',
	        'http://libs.useso.com/js/jquery/1.7.1/jquery.min',
	        '//cdnjscn.b0.upaiyun.com/libs/jquery/1.7.1/jquery.min'
	        
        ]
    }
});

require(['jquery'], function($) {
    //alert($().jquery);
});

//alert(jQuery);

/*
有时候你想避开"baseUrl + paths"的解析过程，而是直接指定加载某一个目录下的脚本。此时可以这样做：
如果一个module ID符合下述规则之一，其ID解析会避开常规的"baseUrl + paths"配置，
而是直接将其加载为一个相对于当前HTML文档的脚本：

以 ".js" 结束.
以 "/" 开始. 
包含 URL 协议, 如 "http:" or "https:".


*/

require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
	// some code here

	//console.log($, _, Backbone);

});


require(['math'],function(math){

	console.log(math);


});

/*
收藏模块
*/
require(['favorite'], function(Fav){
	var fav = Fav.create();
	console.log(fav);
});


require(['KKbase'],function(KKbase){
	var base = KKbase.create();

	console.log(base);

});








