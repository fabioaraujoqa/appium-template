import LoginPage from "../../pageobjects/login.page";

describe('App WebdriverIO - Tela Inicial com Pages', () => {

  beforeEach(() => {
    LoginPage.open();
  });

  it('Deve fazer login com sucesso', async () => {
    await LoginPage.login('fabio@teste.com', '12345678');
    await expect(await LoginPage.msgAlerta()).toEqual('You are logged in!');
  });
});