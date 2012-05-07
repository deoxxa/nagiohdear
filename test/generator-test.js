var vows = require("vows"),
    assert = require("assert"),
    nagiohdear = require("../index");

vows.describe("Generator")
  .addBatch({
    "A single define line object with no comment": {
      topic: {name: "the_name", value: "the_value"},
      "should return the correct data": function(config) {
        assert.isString(nagiohdear.generator.generate_define_line(config));
        assert.equal(nagiohdear.generator.generate_define_line(config), "the_name the_value");
      },
    },
    "A single define line object with a comment": {
      topic: {name: "the_name", value: "the_value", comment: "the_comment"},
      "should return the correct data": function(config) {
        assert.isString(nagiohdear.generator.generate_define_line(config));
        assert.equal(nagiohdear.generator.generate_define_line(config), "the_name the_value ; the_comment");
      },
    },
    "A single define block object with no lines": {
      topic: {name: "the_name"},
      "should build an empty block": function(config) {
        assert.isString(nagiohdear.generator.generate_define_block(config));
        assert.equal(nagiohdear.generator.generate_define_block(config), "define the_name {\n}");
      },
    },
    "A single define block object with one line": {
      topic: {name: "the_name", lines: [{name: "a_line_name", value: "a_line_value"}]},
      "should return the correct data": function(config) {
        assert.isString(nagiohdear.generator.generate_define_block(config));
        assert.equal(nagiohdear.generator.generate_define_block(config), "define the_name {\n  a_line_name a_line_value\n}");
      },
    },
    "An empty array": {
      topic: [],
      "should build an empty string": function(config) {
        assert.isString(nagiohdear.generator.generate(config));
        assert.equal(nagiohdear.generator.generate(config), "");
      },
    },
    "An array with one config block object": {
      topic: [{name: "the_name", lines: [{name: "a_line_name", value: "a_line_value"}]}],
      "should return the correct data": function(config) {
        assert.isString(nagiohdear.generator.generate(config));
        assert.equal(nagiohdear.generator.generate(config), "define the_name {\n  a_line_name a_line_value\n}");
      },
    },
    "An array with two config block objects": {
      topic: [
        {name: "the_first_name", lines: [{name: "a_line_name", value: "a_line_value"}]},
        {name: "the_second_name", lines: [{name: "a_line_name", value: "a_line_value"}]},
      ],
      "should return the correct data": function(config) {
        assert.isString(nagiohdear.generator.generate(config));
        assert.equal(nagiohdear.generator.generate(config), "define the_first_name {\n  a_line_name a_line_value\n}\n\ndefine the_second_name {\n  a_line_name a_line_value\n}");
      },
    },
  })
.export(module);
