~function(){

	var math = {};

	math.add = function(x, y){

		return x + y;

	}

	define("math",[], function(){

		return math;
	})
}();

/*
1 简单的值对
如果一个模块仅含值对，没有任何依赖，则在define()中定义这些值对就好了：
//Inside file my/shirt.js:
define({
    color: "black",
    size: "unisize"
});


2 函数式定义

define(function () {
    //Do setup work here

    return {
        color: "black",
        size: "unisize"
    }
});


3 存在依赖的函数式定义

define(["./cart", "./inventory"], function(cart, inventory) {
        //return an object to define the "my/shirt" module.
        return {
            color: "blue",
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);


4 将模块定义为一个函数

define(["my/cart", "my/inventory"],
    function(cart, inventory) {
        //return a function to define "foo/title".
        //It gets or sets the window title.
        return function(title) {
            return title ? (window.title = title) :
                   inventory.storeName + ' ' + cart.name;
        }
    }
);


5 § 1.3.5 简单包装CommonJS来定义模块

如果你现有一些以CommonJS模块格式编写的代码，而这些代码难于使用上述依赖名称数组参数的形式来重构，
你可以考虑直接将这些依赖对应到一些本地变量中进行使用。你可以使用一个CommonJS的简单包装来实现：
define(function(require, exports, module) {
        var a = require('a'),
            b = require('b');

        //Return the module value
        return function () {};
    }
);

define()中的相对模块名: 为了可以在define()内部使用诸如require("./relative/name")的调用以正确解析相对名称，
记得将"require"本身作为一个依赖注入到模块中：
define(["require", "./relative/name"], function(require) {
    var mod = require("./relative/name");
});

或者更好地，使用下述为转换CommonJS模块所设的更短的语法：
define(function(require) {
    var mod = require("./relative/name");
});

生成相对于模块的URL地址: 你可能需要生成一个相对于模块的URL地址。你可以将"require"作为一个依赖注入进来，
然后调用require.toUrl()以生成该URL:
define(["require"], function(require) {
    var cssUrl = require.toUrl("./style.css");
});

控制台调试:如果你需要处理一个已通过require(["module/name"], function(){})调用加载了的模块，
可以使用模块名作为字符串参数的require()调用来获取它:
require("module/name").callSomeFunction()
注意这种形式仅在"module/name"已经由其异步形式的require(["module/name"])加载了后才有效。
只能在define内部使用形如"./module/name"的相对路径。


I如果你定义了一个循环依赖(a依赖b，b同时依赖a)，则在这种情形下当b的模块函数被调用的时候，
它会得到一个undefined的a。b可以在模块已经定义好后用require()方法再获取(记得将require作为依赖注入进来)：
//Inside b.js:
define(["require", "a"],
    function(require, a) {
        //"a" in this case will be null if a also asked for b,
        //a circular dependency.
        return function(title) {
            return require("a").doSomething();
        }
    }
);
一般说来你无需使用require()去获取一个模块，而是应当使用注入到模块函数参数中的依赖。
循环依赖比较罕见，它也是一个重构代码重新设计的警示灯。但不管怎样，有时候还是要用到循环依赖，
这种情形下就使用上述的require()方式来解决。
如果你熟悉CommonJS，你可以考虑使用exports为模块建立一个空object，
该object可以立即被其他模块引用。在循环依赖的两头都如此操作之后，你就可以安全地持有其他模块了。
这种方法仅在每个模块都是输出object作为模块值的时候有效，换成函数无效。
//Inside b.js:
define(function(require, exports, module) {
    //If "a" has used exports, then we have a real
    //object reference here. However, we cannot use
    //any of a's properties until after b returns a value.
    var a = require("a");

    exports.foo = function () {
        return a.bar();
    };
});
或者，如果你使用依赖注入数组的步骤，则可用注入特殊的"exports"来解决：
//Inside b.js:
define(['a', 'exports'], function(a, exports) {
    //If "a" has used exports, then we have a real
    //object reference here. However, we cannot use
    //any of a's properties until after b returns a value.

    exports.foo = function () {
        return a.bar();
    };
});
*/



/*

　　define(function (){
　　　　var add = function (x,y){
　　　　　　return x+y;
　　　　};
　　　　return {
　　　　　　add: add
　　　　};
　　});

*/


/*

如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。
　　define(['myLib'], function(myLib){
　　　　function foo(){
　　　　　　myLib.doSomething();
　　　　}
　　　　return {
　　　　　　foo : foo
　　　　};
　　});
*/