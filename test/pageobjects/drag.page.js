class DragPage  {
  
  async open() {
    const menu = $("~Drag");
    await menu.waitForExist({ timeout: 5000 });
    await menu.click();
  }

}

export default new DragPage()
