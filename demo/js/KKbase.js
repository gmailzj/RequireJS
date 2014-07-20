define(['Class'],function(Class) {
	//console.log('Class');//在被多次引用的时候，这个只执行一次
	var KKbase = Class.extend({
		init:function(){
			//console.log('KKbase init constructro');
		}

	});

	return KKbase;
});