
var exec = require('child_process').exec;

var runcommand_docker3;
var userId_docker3;

var initiallizeuserid_docker3 = function(pUserId){
	userId_docker3 = pUserId;
}

var initiallizeRunCommand_docker3 = function(pUserId){
	
	var runcommand1 = "sudo docker run --name";
	var runcommand2 = "-i -t -d";
	var container_instance = "container_instance";
	var container_img = "container_img";
	var userId = pUserId;
	var space = " ";

	runcommand_docker3 = runcommand1+space+container_instance+userId+space+runcommand2+space+container_img+userId;
}

var initiallize_docker3 = function(pUserId){
	
	initiallizeuserid_docker3(pUserId);
	initiallizeRunCommand_docker3(userId_docker3);
}

var run_docker3 = function(){
	console.log('Inside run_docker3 '+runcommand_docker3);
	exec(runcommand_docker3, (error, stdout, stderr)=>{
		if(error != null){
			console.error('error '+stderr);
			return;
		}
		console.log('success');
		console.log(stdout);
	});
}

var start_docker3 = function(pUserId){
	initiallize_docker3(pUserId);
	run_docker3();
}

module.exports.start_docker3 = start_docker3;
module.exports.run_docker3 = run_docker3;
module.exports.initiallize_docker3 = initiallize_docker3;
module.exports.initiallizeRunCommand_docker3 = initiallizeRunCommand_docker3;
