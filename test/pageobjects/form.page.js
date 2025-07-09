class FormPage {
//Seletores

  get input ()        { return $('~text-input') }
  get inputResult ()  { return $('~input-text-result') }
  get switch ()       { return $('~switch') }
  get swithText ()    { return $('~switch-text') }
  get dropDown ()     { return $('~Dropdown') }
  get btnActive ()    { return $('~button-Active') }
  get btnInactive ()  { return $('~button-Inactive') }
  get textDropDown () { return $('android=new UiSelector().resourceId("text_input")') }
  get btnAskMeLater () { return $('~Ask me later') }

  //Métodos

  open () {
    const menu = $("~Forms");
    menu.waitForExist({ timeout: 5000 });
    menu.click();
  }

  async preencherCampo(texto) {
    await this.input.setValue(texto);
  }

  async alternarSwitch() {
    await this.switch.click();
  }

  async selectDropDown (opcao) {
    await this.dropDown.click()
    await $(`android=new UiSelector().text("${opcao}")`).click()
    //new UiSelector().text("This app is awesome") // não funciona assim
  }

  async clickActiveButton() {
    await this.activeButton.click();
  }

  async clickAskMeLater() {
    await this.btnAskMeLater.click();
  }

  async clickCancel() {
    await this.cancelBtn.click();
  }

  async clickOk() {
    await this.okBtn.click();
  }

}

export default new FormPage()