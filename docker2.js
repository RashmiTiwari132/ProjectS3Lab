var docker3FileName = "docker3.js";

var Odocker3 = require('./'+docker3FileName);

var userid = "11";
//module.exports.userid = userid;


var start_docker2 = function(){
	Odocker3.start_docker3(userid);
}();






