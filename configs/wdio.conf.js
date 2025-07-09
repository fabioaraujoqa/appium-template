const path = require("path");

exports.config = {
  runner: "local",
  hostname: "localhost",
  port: 4723,
  path: "/",

  specs: ["./test/specs/**/*.js"],
  exclude: [],

  maxInstances: 1, // Define quantas instâncias simultâneas podem ser executadas (ex: dois emuladores rodando em paralelo)

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "mocha",
  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
