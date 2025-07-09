//npx wdio run wdio.conf.js --spec ./test/specs/ios/login-ios.spec.js 

describe('App WebdriverIO - Tela Inicial', () => {
  it('Deve exibir e interagir com o botão de login - Sem Pages', async () => {
    const loginBtn = await $('~Login');
    await expect(loginBtn).toBeDisplayed();
    await loginBtn.click();

    const usernameField = await $('~input-email');
    const passwordField = await $('~input-password');
    const submitBtn = await $('~button-LOGIN');

    await usernameField.setValue('teste@exemplo.com');
    await passwordField.setValue('12345678');
    await submitBtn.click(); 

    const msg = await $('~OK');
    await expect(msg).toBeDisplayed(); 
    
  });
});