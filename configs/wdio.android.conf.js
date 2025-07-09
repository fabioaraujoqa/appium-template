//Executar: npx wdio configs/wdio.android.conf.js

const { config } = require("./wdio.conf");
const path = require("path");

config.capabilities = [
  {
    platformName: "Android",
    "appium:deviceName": "Pixel_5_API_33",
    "appium:platformVersion": "13.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.resolve("./app/app.apk"),
    "appium:autoGrantPermissions": true,
  },
  ,
  {
    platformName: "Android",
    "appium:deviceName": "Small Phone",
    "appium:platformVersion": "16.0",
    "appium:automationName": "UiAutomator2",
    "appium:app": path.resolve("./app/app.apk"),
    "appium:autoGrantPermissions": true,
  }
];

// Se quiser rodar com 2 emuladores, aumente para 2:
// config.maxInstances = 2;

exports.config = config;
// Para executar: npx wdio configs/wdio.android.conf.js
