const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")(["@calm/server"]);

module.exports = withPlugins([withTM]);
