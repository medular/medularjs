#!/usr/bin/env node

var fs = require('fs');
var npm = require('npm');
var json = fs.readFileSync('./medular.json');
var config = JSON.parse(json);
var packages = [];

debugger;
npm.load({}, function(err) {
  npm.commands.install(config.base); //, config.core, config.sandbox, config.modules);
});


