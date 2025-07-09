
export async function dragPecas(pares) {
  for (const move of pares) {
    const origem = await $(move.from);
    const destino = await $(move.to);
    await origem.dragAndDrop(destino);
    await browser.pause(500);
  }
}
