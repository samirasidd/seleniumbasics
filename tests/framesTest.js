/**
 * Frame Handling Test – Part 2 (Typing skipped)
 * Ebhabe setup kore rekhechi agei
 */

const { Builder, By, until } = require("selenium-webdriver");

async function handleFrames() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // 1️⃣ Open frames page
    await driver.get("https://the-internet.herokuapp.com/frames");

    // 2️⃣ Click "iFrame" link
    let iframeLink = await driver.wait(
      until.elementLocated(By.linkText("iFrame")),
      5000
    );
    await iframeLink.click();

    // 3️⃣ Wait for iframe to appear and switch to it
    let iframe = await driver.wait(
      until.elementLocated(By.id("mce_0_ifr")), // correct iframe id
      5000
    );
    await driver.switchTo().frame(iframe);

    // 4️⃣ Just locate editor and highlight success
    let editor = await driver.wait(
      until.elementLocated(By.id("tinymce")),
      5000
    );

    console.log("✅ Iframe located successfully. Editor is present.");

    // Optional: highlight element in browser for demo
    await driver.executeScript(
      "arguments[0].style.border='3px solid red'",
      editor
    );

    // 5️⃣ Switch back to main content
    await driver.switchTo().defaultContent();
  } catch (error) {
    console.log("❌ Frame handling failed", error);
  } finally {
    await driver.quit();
  }
}

handleFrames();
