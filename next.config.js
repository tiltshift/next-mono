const withTM = require("next-transpile-modules")([
  "@nextmono/server",
  "@nextmono/components"
]);

module.exports = withTM({
  distDir: "../.next"
});
