/*现总结Error.name的六种值对应的信息：
1. EvalError：eval()的使用与定义不一致 
2. RangeError：数值越界 
3. ReferenceError：非法或不能识别的引用数值 
4. SyntaxError：发生语法解析错误 
5. TypeError：操作数类型错误 
6. URIError：URI处理函数使用不当
*/
/*
键盘
        KEY_BACKSPACE: 8,
        KEY_TAB: 9,
        KEY_RETURN: 13,
        KEY_ESC: 27,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        KEY_DELETE: 46,
*/
define(['Class'],function(Class) {
	//console.log('Class');//在被多次引用的时候，这个只执行一次
	var KKbase = Class.extend({
		init:function(){
			//console.log('KKbase init constructro');
		},
		trim:function(s){
			return s.replace(/^\s*|\s*$/g, "");
		},

		lTrim:function(s) {
		    return s.replace(/^\s*/, "");
		},

		rTrim:function(s) {
		    return s.replace(/\s*$/, "");
		},
		getPropertyNames:function(o, isOwnProperty){//默认是全部
		    var r=[];
		    for(name in o){
		    	if(isOwnProperty){
		    		if(o.hasOwnProperty(name)){
		    			r.push(name);
		    		}
		    		
		    	} else {
		    		r.push(name);	
		    	}
		    	
		    }
		    return r;

		}
	});

	return KKbase;
});