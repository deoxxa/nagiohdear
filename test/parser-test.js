var vows = require("vows"),
    assert = require("assert"),
    nagiohdear = require("../index");

vows.describe("Parser")
  .addBatch({
    "A single define block with one define line with no comment": {
      topic: "define x {\n  y z\n}",
      "should return the correct object": function(config) {
        assert.equal(JSON.stringify(nagiohdear.parser.parse(config)), JSON.stringify([{name: "x", lines: [{name: "y", value: "z", comment: null}]}]));
      },
    },
    "A single define block with one define line with a comment": {
      topic: "define x {\n  y z ; a\n}",
      "should return the correct object": function(config) {
        assert.equal(JSON.stringify(nagiohdear.parser.parse(config)), JSON.stringify([{name: "x", lines: [{name: "y", value: "z", comment: "a"}]}]));
      },
    },
    "A single define block with two define lines with no comments": {
      topic: "define x {\n  y1 z1\n  y2 z2\n}",
      "should return the correct object": function(config) {
        assert.equal(JSON.stringify(nagiohdear.parser.parse(config)), JSON.stringify([{name: "x", lines: [{name: "y1", value: "z1", comment: null}, {name: "y2", value: "z2", comment: null}]}]));
      },
    },
    "A single define block with two define lines with comments": {
      topic: "define x {\n  y1 z1 ; a1\n  y2 z2 ; a2\n}",
      "should return the correct object": function(config) {
        assert.equal(JSON.stringify(nagiohdear.parser.parse(config)), JSON.stringify([{name: "x", lines: [{name: "y1", value: "z1", comment: "a1"}, {name: "y2", value: "z2", comment: "a2"}]}]));
      },
    },
    "An empty string": {
      topic: "",
      "should return an empty string": function(config) {
        assert.equal(JSON.stringify(nagiohdear.parser.parse(config)), JSON.stringify([]));
      },
    },
  })
.export(module);
