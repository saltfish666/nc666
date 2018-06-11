#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const chalk = require('chalk')

fs.readdir(__dirname,(err,files)=>{
    if(err){
      console.log(err)
    }
    
    files.forEach((fileName)=>{
    	let stat = fs.lstatSync(path.join(__dirname,fileName))
    	if (stat.isDirectory()) {
    		console.log(chalk.blue(fileName))
    	}else{
    		console.log(fileName)
    	}
    })
})
