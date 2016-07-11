var docker2FileName = "docker2.js";

var Odocker2 = require('./'+docker2FileName);

var userid = "14";

var start = function(){
	Odocker2.start_docker2(userid);
}

var start_docker1 = function(){
	start();
}();



