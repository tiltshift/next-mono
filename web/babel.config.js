module.exports = api => {
  api.cache(true);

  const plugins = [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: { server: "@calm/server" }
      }
    ]
  ];

  return { plugins };
};
