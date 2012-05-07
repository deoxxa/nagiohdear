#!/usr/bin/env node

var fs = require("fs"),
    nagiohdear = require("./index");

fs.readFile("./config.cfg", function(err, data) {
  var config_original = data.toString();
  console.log(config_original);

  var config_parsed = nagiohdear.parse(config_original);
  console.log(JSON.stringify(config_parsed, null, 2));

  var config_generated = nagiohdear.generate(config_parsed);
  console.log(config_generated);
});
