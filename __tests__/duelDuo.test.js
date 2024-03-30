const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw button draws cards", async () => {
    await driver.get("http://localhost:8000")
    const duelBtn = await driver.findElement(By.name("duel"))
    await duelBtn.click()
  })

  test("does the remove button remove a card", async () => {
    await driver.get("http://localhost:8000")
    const removeBtn = await driver.findElement(By.css("button[onclick='putBotBack']"))
    await removeBtn.click()
  })

});