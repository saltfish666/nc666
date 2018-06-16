#!/usr/bin/env node
const fs = require('fs')
const argv = require("yargs").argv

let folderName = argv["_"][0]
fs.mkdir(folderName,function(err){
   if (err) {
       console.error(err);
   }
});




/*
创建目录
$ ./script/mkdir.js ./hi
*/

/*
无法创建多级目录
$ ./script/mkdir.js ./notexitfolder/hi
err
*/

/*
创建已存在的目录会报错
*/