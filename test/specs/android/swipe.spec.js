import SwipePage from "../../pageobjects/swipe.page";
import { swipeNTimes } from "../../../utils/swipe";

describe("Swipe - Arrastar na tela", () => {
  beforeEach(async () => {
    await SwipePage.open();
    await browser.pause(1000);
  });

  afterEach(async () => {
    await browser.swipe({
      direction: "right", // Arrastar da direita para a esquerda
      duration: 300, // Duração do swipe em milissegundos
      percent: 1.0, // Percentual do swipe (0.0 a 1.0), por exemplo, 0.5 significa metade da tela e 1.0 significa a tela inteira
      scrollableElement: $("~Swipe-screen"), // Elemento que pode ser rolado
    })
  });

  it("Deve revelar o segundo card", async () => {
    await browser.swipe({
      direction: "left", // Arrastar da direita para a esquerda
      duration: 1000, // Duração do swipe em milissegundos
      percent: 0.5, // Percentual do swipe (0.0 a 1.0), por exemplo, 0.5 significa metade da tela e 1.0 significa a tela inteira
      scrollableElement: $("~Swipe-screen"), // Elemento que pode ser rolado
    });
    const segundoCard = await $(
      'android=new UiSelector().text("GREAT COMMUNITY")'
    );
    await expect(segundoCard).toBeDisplayed();
  });

  it("Deve revelar o terceiro card", async () => {
    const swipeArea = await $("~Swipe-screen");
    // Primeiro swipe
    await browser.swipe({
      direction: "left",
      duration: 1000,
      percent: 0.5,
      scrollableElement: swipeArea,
    });

    await browser.pause(500); // pequena pausa entre swipes

    // Segundo swipe
    await browser.swipe({
      direction: "left",
      duration: 1000,
      percent: 0.5,
      scrollableElement: swipeArea,
    });

    // Aqui você pode validar se o terceiro card apareceu
    const terceiroCard = await $(
      'android=new UiSelector().text("JS.FOUNDATION")'
    );
    await expect(terceiroCard).toBeDisplayed();
  });

  it("AVANÇADO: Deve revelar o quarto card, usando o utils", async () => {
    const swipeArea = await $("~Swipe-screen");
    await swipeNTimes({
      element: swipeArea,
      direction: "left",
      times: 3,
    });

    const quartoCard = await $(
      'android=new UiSelector().text("SUPPORT VIDEOS")'
    );
    await expect(quartoCard).toBeDisplayed();
  });

  it("Deve fazer o scroll horizontal", async () => {
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()`);
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()`);
  });

});
