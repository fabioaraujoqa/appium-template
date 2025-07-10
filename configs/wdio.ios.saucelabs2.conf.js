exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  protocol: "https",
  path: "/wd/hub",

  specs: ["../test/specs/ios/**/*.js"],

  services: ["sauce"],

  mochaOpts: {
  timeout: 30000, // aumenta para 30 segundos ou mais
}, 


  capabilities: [
    {
      platformName: "iOS",
      "appium:platformVersion": "16",
      "appium:deviceName": "iPhone Simulator",
      "appium:automationName": "XCUITest",
      "appium:app": "storage:filename=ios.simulator.wdio.native.app.v1.0.8.zip",
      "sauce:options": {
        build: "appium-build-VNCMU",
        name: "Teste iOS Simples Sauce Labs",
        deviceOrientation: "PORTRAIT",
      },
    },
  ],
};
