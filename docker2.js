var exec = require('child_process').exec;

var docker3FileName = "docker3.js";

var Odocker3 = require('./'+docker3FileName);

var buildCommand;



var InitiallizeBuild = function(Ouserid){
	//sudo docker build -t my_application_img .
	var BuildCommand1 = "sudo docker build -t ";
	var ContainerImage = "container_img";
	
	buildCommand = BuildCommand1+ContainerImage+Ouserid+" ."
	console.log(buildCommand);
}

var InitiallizeAll = function(Ouserid){
	InitiallizeBuild(Ouserid);
}

var RunBuildCommand = function(OUserid){
	exec(buildCommand, (error, stdout, stderr)=>{
		if(error != null){
			console.error('error '+stderr);
			return;
		}else{
			console.log('success');
			console.log(stdout);
			Odocker3.start_docker3(OUserid);
		}
	});
}

var start = function(OUserid){
	InitiallizeAll(OUserid);
	RunBuildCommand(OUserid);
}
	

var start_docker2 = function(Ouserid){
	start(Ouserid);
}

module.exports.start_docker2 = start_docker2;
