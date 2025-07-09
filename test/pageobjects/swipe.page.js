class SwipePage  {
  
  async open() {
    const menu = $("~Swipe");
    await menu.waitForExist({ timeout: 5000 });
    await menu.click();
  }

}

export default new SwipePage()
