const { config } = require("./wdio.conf");

config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;

config.hostname = 'ondemand.us-west-1.saucelabs.com';
config.port = 443;
config.protocol = 'https';
config.path = '/wd/hub';

config.services = ['sauce'];

config.specs = ['../test/specs/ios/**/*.js'];

config.capabilities = [{
  platformName: 'iOS',
  'appium:platformVersion': '17',
  'appium:deviceName': 'iPhone Simulator',
  'appium:automationName': 'XCUITest',
  'appium:app': 'storage:filename=ios.simulator.wdio.native.app.v1.0.8.zip',
  'sauce:options': {
    build: 'appium-build-VNCMU',
    name: 'TESTE IOS SAUCE LABS',
    deviceOrientation: 'PORTRAIT',
  }
}];

exports.config = config;
