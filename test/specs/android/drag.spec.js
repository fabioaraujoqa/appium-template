import DragPage from "../../pageobjects/drag.page.js";
//Referencia: https://webdriver.io/docs/api/mobile/dragAndDrop/
describe("Testes na tela DragDrop", () => {
  beforeEach(async () => {
    await DragPage.open();
    browser.pause(1000);
  });

  it("Deve arrastar a peça até o lugar certo", async () => {
    const elm = await $("~drag-l1"); // Peça de origem
    const drop = await $("~drop-l1"); // Slot de destino

    await elm.dragAndDrop(drop)
    await browser.pause(2000);
  });

it.only("Deve montar o quebra-cabeça completo com dragAndDrop", async () => {
  const movimentos = [
    { de: '~drag-l1', para: '~drop-l1' },
    { de: '~drag-c1', para: '~drop-c1' },
    { de: '~drag-r1', para: '~drop-r1' },
    { de: '~drag-l2', para: '~drop-l2' },
    { de: '~drag-c2', para: '~drop-c2' },
    { de: '~drag-r2', para: '~drop-r2' },
    { de: '~drag-l3', para: '~drop-l3' },
    { de: '~drag-c3', para: '~drop-c3' },
    { de: '~drag-r3', para: '~drop-r3' },
  ];

  for (const move of movimentos) {
    const origem = await $(move.de);
    const destino = await $(move.para);

    await origem.dragAndDrop(destino);
    await browser.pause(300); // pequena pausa para estabilidade visual
  }

    const mensagem = await $('android=new UiSelector().text("Congratulations")');
    await expect(mensagem).toBeDisplayed();


});



});
