#!/usr/bin/env node
const fs = require('fs')
const argv = require("yargs").argv

let fileName = argv["_"][0]
fs.readFile(fileName,'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

