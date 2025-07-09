import FormPage from "../../pageobjects/form.page";
import WebviewPage from "../../pageobjects/webview.page";

describe("Testes com ações nativas do iOS", () => {
  it("caixa Alerta, aceitando tudo", async () => {
    await FormPage.open();
    await browser.pause(2000);
    //Clique no botão Ativo e depois Calcel ( não aceita)
    await FormPage.btnActive.click();
    await driver.dismissAlert();
    await driver.pause(1000);

    //Clique no botão Ativo e depois em ok ( aceita )
    await FormPage.btnActive.click();
    await driver.acceptAlert();
    await driver.pause(1000);

    //Clique no botão Ativo e depois em Ask Me Later
    await FormPage.btnActive.click();
    await FormPage.clickAskMeLater();
    await driver.pause(1000);
  });

  xit("Fazendo scrolling na tela", async () => {
    await WebviewPage.open();
    await browser.pause(2000);
    // Scroll down
    await driver.execute("mobile: scroll", { direction: "down" });
    await browser.pause(2000);
    // Scroll up
    await driver.execute("mobile: scroll", { direction: "up" });
    await browser.pause(2000);

    // Scroll to a specific element
    const element = await $("~Copyright © 2025 OpenJS Foundation");
    await driver.execute("mobile: scroll", {
      direction: "up",
      name: "Copyright © 2025 OpenJS Foundation",
    });
  });
});
