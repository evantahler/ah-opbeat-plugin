#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var localFile   = path.normalize(__dirname + '/../config/opbeat.js');
var projectPath = path.normalize(process.cwd() + '/../../config/plugins');
var projectFile = path.normalize(process.cwd() + '/../../config/plugins/opbeat.js');

if(!fs.existsSync(projectFile)){
  console.log("coppying " + localFile + " to " + projectFile)
  try{ fs.mkdirSync(projectPath); }catch(e){ }
  fs.createReadStream(localFile).pipe(fs.createWriteStream(projectFile));
}