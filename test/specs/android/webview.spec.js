import WebviewPage from "../../pageobjects/webview.page";

describe("Webview context", () => {
  beforeEach(async () => {
    await WebviewPage.open();
    await browser.pause(1000);
  });

  it("Fazer um scroll na tela", async () => {
    await driver.execute("mobile: scroll", {
      strategy: "accessibility id",
      selector: "OpenJS Foundation Logo",
      direction: "down",
    });
  });

  it("Fazer um scroll até o o fim", async () => {
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(100)`);
    const elem = await $('~OpenJS Foundation Logo');
    //await expect(elem).toBeDisplayed();
    await expect(elem).toExist();
  });

  it("Fazer um scroll até o texto Copyright", async () => {
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Copyright © 2025 OpenJS Foundation")`);
    const elem = await $('~OpenJS Foundation Logo');
    await expect(elem).toExist();
  });

  it.only("Deve buscar por um Acessibility ID", async () => {
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("OpenJS Foundation Logo"))`);
    const elem = await $('~OpenJS Foundation Logo');
    await expect(elem).toExist();
  });

  xit('Deve fazer o scrool horizontal', () => {
    //Recurso no arquivo de teste swipe.spec.js
  });

  xit("Deve buscar por Browserstack", async () => {
    // não funcionou
    await WebviewPage.buscarPor("browserstack");
    const resultado = await $('#docsearch-list")').getText();
    console.log(resultado);
    await expect(resultado).toContain("browserstack");
  });
});

import {
  scrollToEnd,
  scrollToText,
  scrollToBeginning,
} from "../../utils/scroll.js";

describe("Scroll Testes", () => {
  beforeEach(async () => {
    await WebviewPage.open();
    await browser.pause(1000);
  });

  it("Deve rolar até o fim da tela", async () => {
    await scrollToEnd(100);
    const elem = await $(
      `android=new UiSelector().text("Copyright © 2025 OpenJS Foundation")`
    );
    await expect(elem).toBeDisplayed();
  });

  it("Deve rolar até encontrar o texto", async () => {
    await scrollToText("Get Started");
    //const card = await $(`android=new UiSelector().text("SUPPORT VIDEOS")`);
    //await expect(card).toBeDisplayed();
  });

  it("Deve rolar de volta ao topo", async () => {
    await scrollToEnd();
    await scrollToBeginning();
    const topo = await $("~Swipe-screen");
    await expect(topo).toBeDisplayed();
  });
});
