const path = require("path");

exports.config = {
  //
  // ==== Autenticação no BrowserStack ====
  user: 'fabioaraujo1',
  key: '9E423Moi6RppSxDv8D1y', // ⚠️ ideal usar variável de ambiente para evitar exposição

  //
  // ==== Execução ====
  runner: "local",
  services: [
    ['browserstack', {
      testObservability: true,
      browserstackLocal: false // coloque true se testar apps que acessam APIs locais
    }]
  ],

  //
  // ==== Especificação dos testes ====
  specs: ["./test/specs/**/*.js"],
  exclude: [],

  //
  // ==== Execução paralela ====
  maxInstances: 1, // pode ser aumentado se quiser executar em paralelo

  //
  // ==== Capacidades ====
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 6',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://e586d6229a50e51976b786e7f140969bcc20c38e',
    'appium:autoGrantPermissions': true,

    'bstack:options': {
      projectName: "Projeto QA Mobile",
      buildName: "Build Android - 001",
      sessionName: "Teste Mobile Android com Appium",
      appiumVersion: "2.0.1" // ou o que BrowserStack recomenda
    }
  }],

  //
  // ==== Configurações Globais ====
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  //
  // ==== Framework ====
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
