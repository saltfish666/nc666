#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const promisify = require("util").promisify

const chalk = require('chalk')

const p_readdir = promisify(fs.readdir)
const p_stat = promisify(fs.stat)

let recentDir = process.env.PWD

/*
fs.readdir(recentDir,(err,files)=>{
    if(err){
      console.log(err)
    }

    files.forEach((fileName)=>{

        fs.stat(path.join(recentDir,fileName),(err,stat)=>{

            if(err) throw err

            if (stat.isDirectory()) {
                console.log(chalk.blue(fileName))
            }else{
                console.log(fileName)
            }
        })
    })
})
*/

/*
p_readdir(recentDir).then(files=>{

    files.forEach((fileName)=>{

        fs.stat(path.join(recentDir,fileName),(err,stat)=>{

            if(err) throw err

            if (stat.isDirectory()) {
                console.log(chalk.blue(fileName))
            }else{
                console.log(fileName)
            }
        })
    })
}).catch(err=>{
    throw err
})
*/

async function ls(){
    let files;
    try{
        files = await p_readdir(recentDir)
    }catch(err){
        throw err
    }

    files.forEach((fileName)=>{
        fs.stat(path.join(recentDir,fileName),(err,stat)=>{
            if(err) throw err
            if (stat.isDirectory()) {
                console.log(chalk.blue(fileName))
            }else{
                console.log(fileName)
            }
        })
    })
}
ls()
















