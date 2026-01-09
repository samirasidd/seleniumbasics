/**
 * Alert Handling Test – Part 2
 */
const { Builder, By, until } = require("selenium-webdriver");

async function handleAlerts() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://the-internet.herokuapp.com/javascript_alerts");

    let alertButton = await driver.wait(
      until.elementLocated(By.xpath("//button[text()='Click for JS Alert']")),
      5000
    );

    await alertButton.click();
    await driver.sleep(3000); // wait for alert to appear
    await driver.switchTo().alert().accept();

    await driver.sleep(3000);
  } catch (error) {
    console.log("❌ Alert handling failed", error);
  } finally {
    await driver.quit();
  }
}

handleAlerts();
