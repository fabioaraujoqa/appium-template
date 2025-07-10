const path = require("path");
const allure = require('allure-commandline')

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

  reporters: [['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
  }]],

  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (error) {
        await browser.takeScreenshot();
    }
  },  

    onComplete: function() {
        const reportError = new Error('Não foi possível gerar o relatório do Allure.');
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Relatório do Allure gerado com sucesso!')
                resolve()
            })
        })
    },
 
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
