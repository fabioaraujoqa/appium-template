exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  services: [
    [
      "browserstack",
      {
        testObservability: true,
        testObservabilityOptions: {
          projectName: "Testes Android Para BrowserStack",
          buildName: "Projeto BrowserStack - Aula",
        },
      },
    ],
  ],

  specs: ["../test/specs/**/*.js"],

  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Google Pixel 6",
      "appium:platformVersion": "12.0",
      "appium:automationName": "UiAutomator2",
      "appium:app": process.env.BROWSERSTACK_APP_ID,
    },
  ],
};
