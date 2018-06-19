#!/usr/bin/env node
const fs = require('fs')
const argv = require("yargs").argv

let fileName = argv["_"][0]
fs.writeFile(fileName,"", (err) => {
  if (err) throw err;
});

/*
以程序被调用的目录为根目录创建文件
可以识别fileName中的文件目录
*/
