#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const chalk = require('chalk')

let recentDir = process.env.PWD

fs.readdir(recentDir,(err,files)=>{
    if(err){
      console.log(err)
    }
    
    files.forEach((fileName)=>{
    	let stat = fs.lstatSync(path.join(recentDir,fileName))
    	if (stat.isDirectory()) {
    		console.log(chalk.blue(fileName))
    	}else{
    		console.log(fileName)
    	}
    })
})
