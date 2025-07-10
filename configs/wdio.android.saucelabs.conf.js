const { config } = require("./wdio.conf");

// Configurações específicas para Sauce Labs
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;

config.hostname = 'ondemand.us-west-1.saucelabs.com';
config.port = 443;
config.protocol = 'https';
config.path = '/wd/hub';

config.services = ['sauce'];

// Caminho dos testes Android (ajuste conforme seu projeto)
config.specs = ["../test/specs/android/**/*.js"];

config.capabilities = [{
  platformName: 'Android',
  'appium:platformVersion': '12.0',
  'appium:deviceName': 'Android GoogleAPI Emulator',
  'appium:automationName': 'UiAutomator2',
  'appium:app': 'storage:filename=wdio.apk', // App já enviado para o Sauce Labs
  'sauce:options': {
    build: 'appium-build-VNCMU',
    name: 'Teste Android com WebdriverIO',
    deviceOrientation: 'PORTRAIT',
  }
}];

exports.config = config;
