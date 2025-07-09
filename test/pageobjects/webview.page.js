class WebviewPage  {

  // Elementos
  get btnBusca()  {return $('android=new UiSelector().text("Search (Ctrl+K)")') }
  get buscaInputText() {return $('.android.widget.EditText') }
  
  
  // Métodos 
  async open() {
    const menu = $("~Webview");
    await menu.waitForExist({ timeout: 5000 });
    await menu.click();
  }

  async pressEnterKey() {
    await driver.pressKeyCode(66); // código de busca para Enter no Android. Para iOS, use 13
  }

  async buscarPor(texto) {
    await this.btnBusca.click();
    await browser.pause(3000);
    await this.buscaInputText.clearValue();
    await this.buscaInputText.addValue(texto);
    //await this.buscaInputText.setValue(texto);
    await this.pressEnterKey();
  }
 

}

export default new WebviewPage()
