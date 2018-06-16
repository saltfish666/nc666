#!/usr/bin/env node
const fs = require('fs')
const argv = require("yargs").argv

let fileName = argv["_"][0]
fs.writeFile(fileName,"", (err) => {
  if (err) throw err;
});

