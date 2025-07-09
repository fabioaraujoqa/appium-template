const path = require("path");

exports.config = {
  runner: "local",

  hostname: "localhost",
  port: 4723,
  path: "/",

  specs: ["./test/specs/**/*.js"],
  exclude: [],

  maxInstances: 1, //Explicar que isso é o número máximo de instâncias que podem ser executadas simultaneamente , dar um exmeplo de uso com 2 emuladores rodando ao mesmo tempo

  capabilities: [
    /*{
      platformName: 'Android',
      'appium:deviceName': 'teste',
      'appium:platformVersion': '11.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': path.resolve('./app/app.apk'),
      'appium:autoGrantPermissions': true,
    } ,
    {
      platformName: 'Android',
      'appium:deviceName': 'Small Phone',
      'appium:platformVersion': '16.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': path.resolve('./app/app.apk'),
      'appium:autoGrantPermissions': true,
    } */
    {
      "appium:platformName": "ios",
      "appium:deviceName": "iPhone 13",
      "appium:platformVersion": "18.5",
      "appium:automationName": "XCUITest",
      'appium:app': path.resolve('./app/wdiodemoapp.app')
    },
  ],

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
