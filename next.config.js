const withTM = require("next-transpile-modules")(["next-mono-server"]);

module.exports = withTM({
  distDir: "./web/.next"
});
