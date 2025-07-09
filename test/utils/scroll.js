/**
 * Rola até o fim de um elemento scrollável.
 * @param {number} maxScrolls - Quantidade máxima de tentativas de scroll.
 */
export async function scrollToEnd(maxScrolls = 5) {
  await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(${maxScrolls})`);
}

/**
 * Rola até o início de um elemento scrollável.
 * @param {number} maxScrolls - Quantidade máxima de tentativas de scroll.
 */
export async function scrollToBeginning(maxScrolls = 5) {
  await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(${maxScrolls})`);
}

/**
 * Rola até encontrar um texto visível na tela.
 * @param {string} text - Texto a ser localizado durante o scroll.
 */
export async function scrollToText(text) {
  await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`);
}
