/**
 * Keyboard Test – Part 2
 */
const { Builder, By, until, Key } = require("selenium-webdriver");

async function keyboardLogin() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://the-internet.herokuapp.com/login");

    let username = await driver.wait(
      until.elementLocated(By.id("username")),
      5000
    );
    let password = await driver.wait(
      until.elementLocated(By.id("password")),
      5000
    );

    let actions = driver.actions({ async: true });

    await driver.sleep(2000); // Optional pause before typing

    await username.sendKeys("tomsmith");
    await password.sendKeys("SuperSecretPassword!");
    await actions.sendKeys(Key.ENTER).perform();

    await driver.sleep(3000);
  } catch (error) {
    console.log("❌ Keyboard login failed", error);
  } finally {
    await driver.quit();
  }
}

keyboardLogin();
