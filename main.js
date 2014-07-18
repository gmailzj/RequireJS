require(['jsonp'],function(JSONP){


	var data = {
	    from: "北京",
	    count: 27,
	    output: "json",
	    callback: "?"
	};
	JSONP.getJSON("http://api.qunar.com/cdnWebservices.jcp", data, function(json) {console.log(json)});
})