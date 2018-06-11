#!/usr/bin/env node
const shell = require("shelljs");

function acp(msg){
	shell.exec("git add .");
	shell.exec("git commmit -m " + msg);
	shell.exec("git push");
}

function temp(name,url){
	git clone url
	git rename dir
	rm -rf .git
}

//shell 函数