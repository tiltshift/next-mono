const withTM = require("next-transpile-modules")(["@nextmono/server"]);

module.exports = withTM({
  distDir: "../.next"
});
