const withTM = require("next-transpile-modules")(["@nextMono/server"]);

module.exports = withTM({
  distDir: "../.next"
});
