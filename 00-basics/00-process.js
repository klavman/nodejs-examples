/*

https://nodejs.org/docs/latest-v4.x/api/process.html

*/

function processInfo()
{
	console.log("         PROCESS  NODE.JS         ");
	console.log("process id: " + process.pid);
	console.log("title: " + process.title);
	console.log("node directory: " + process.execPath);
	console.log("current directory: " + process.cwd());
	console.log("node version: " + process.version);
	console.log("dependecies: " + process.versions);
	console.log("Plataform: " + process.platform);
	console.log("architecture: " + process.arch);
	console.log("node uptime: " + process.uptime());
	console.log("argv: " + process.argv);
}

processInfo();