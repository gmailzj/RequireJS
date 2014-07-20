
//继承自KKbase
~function(){

	define(['KKbase'],function(KKbase){

		//定义类的形式，也就是返回function的形式
		var fav = KKbase.extend({
			init:function(){
				this.initHtml();
			},
			initHtml:function(){

			}			
		});
		return  fav;
	});

}();	

