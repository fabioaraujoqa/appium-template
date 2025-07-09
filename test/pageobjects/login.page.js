class LoginPage {
  //Seletores
  get email() {return $("~input-email")}
  get senha() {return $("~input-password")}
  get btnLogin() {return $("~button-LOGIN")}
  get mensagem() { return $('id=android:id/message')}

  //Métodos
  async login(email, senha) {
    await this.email.setValue(email);
    await this.senha.setValue(senha);
    await this.btnLogin.click();
  }

  async open() {
    const menu = $("~Login");
    await menu.waitForExist({ timeout: 5000 });
    await menu.click();
  }

  async msgAlerta() {
    return await this.mensagem.getText();
  }
}

module.exports = new LoginPage();
