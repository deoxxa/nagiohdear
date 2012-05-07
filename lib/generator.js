// Entry point for most operations. the `config` argument is an array of
// objects. Please see `generate_define_block` for more information about them.
exports.generate = function(config) {
  return config.map(this.generate_define_block.bind(this)).join("\n\n");
};

// This method generates a single `define` config block. The define_block
// argument is an object with `name` and `lines` fields. `name` is a string,
// `lines` is an array. See `generate_define_line` for more information about
// the `lines` format.
exports.generate_define_block = function(define_block) {
  return [].concat(
    ["define " + define_block.name + " {"],
    (define_block.lines || []).map(this.generate_define_line.bind(this)).map(function(s) { return "  " + s; }),
    ["}"]
  ).join("\n");
};

// This method generates a single line. The `define_line` argument is an object
// with `name`, `value` and (optionally) `comment` fields. All are strings. If
// `comment` is undefined or null, it will not be used.
exports.generate_define_line = function(define_line) {
  return [define_line.name, define_line.value, define_line.comment ? ";" : "", define_line.comment].join(" ").trim();
};
