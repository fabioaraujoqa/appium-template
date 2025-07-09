// Executar: npx wdio configs/wdio.ios.conf.js
const { config } = require('./wdio.conf');
const path = require("path");

// Pasta de especificações para iOS
config.specs = ['../test/specs/ios/**/*.js'];

config.capabilities = [
  {
    "appium:platformName": "iOS",
    "appium:deviceName": "iPhone 13",
    "appium:platformVersion": "18.5",
    "appium:automationName": "XCUITest",
    "appium:app": path.resolve('./app/wdiodemoapp.app')
  }
];

exports.config = config;
