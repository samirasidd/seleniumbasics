/**
 * Hover Test – Part 2
 * Ebhabe setup kore rekhechi agei
 */
const { Builder, By, until } = require("selenium-webdriver");

async function hoverAvatar() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://the-internet.herokuapp.com/hovers");
    let actions = driver.actions({ async: true });

    let avatar = await driver.wait(
      until.elementLocated(By.css('img[alt="User Avatar"]')),
      5000
    );

    await actions.move({ origin: avatar }).perform();

    await driver.sleep(3000);
  } catch (error) {
    console.log("❌ Hover failed", error);
  } finally {
    await driver.quit();
  }
}

hoverAvatar();
