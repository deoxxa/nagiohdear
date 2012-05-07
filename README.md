Nagiohdear
==========

Rudimentary config parser/generator for Nagios.

Build Status:  
master: [![Build Status](https://secure.travis-ci.org/deoxxa/nagiohdear.png?branch=master)](http://travis-ci.org/deoxxa/nagiohdear)  
develop: [![Build Status](https://secure.travis-ci.org/deoxxa/nagiohdear.png?branch=develop)](http://travis-ci.org/deoxxa/nagiohdear)  

Overview
--------

Nagiohdear is a very naiive config parser and generator for Nagios config files.
It handles only string types and doesn't know how to handle malformed or weird
files.

Documentation
-------------

Take a look at [docs/](docs/). There's some HTML lumps in there generated with
[docco](http://jashkenas.github.com/docco/). These lumps are also hosted
[on github](http://deoxxa.github.com/nagiohdear).

Testing
-------

I'm using [vows](http://vowsjs.org/) for testing. The tests are in the "test"
directory.

Example Usage
-------------

This code is also in [example.js](example.js).

```javascript
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
```

License
------- 

3-clause BSD. A copy is included with the source.

Contact
-------

* GitHub (http://github.com/deoxxa)
* Twitter (http://twitter.com/deoxxa)
* Email (deoxxa@fknsrs.biz)
