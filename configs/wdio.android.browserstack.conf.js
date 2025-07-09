exports.config = {
/*   user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY, */

  user: 'fabioaraujo1',
  key: '9E423Moi6RppSxDv8D1y', 

  hostname: 'hub.browserstack.com',
  port: 443,
  protocol: 'https',
  path: '/wd/hub',

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
      //"appium:app": process.env.BROWSERSTACK_APP_ID,
      "appium:app":  "bs://e586d6229a50e51976b786e7f140969bcc20c38e"
    },
  ],
};
