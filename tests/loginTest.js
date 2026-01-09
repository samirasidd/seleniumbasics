// Import Selenium classes
const { Builder, By, until } = require("selenium-webdriver");

/*
 Automation Testing:
 - We use code to test software
 - Selenium controls the browser like a user
*/

async function loginTest() {
  // Start Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Open the test website
    await driver.get("https://the-internet.herokuapp.com/login");

    // Find username input (ID locator – best option)
    let username = await driver.findElement(By.id("username"));

    // Find password input (CSS Selector)
    let password = await driver.findElement(By.css("input#password"));

    // Find login button (XPath example)
    let loginBtn = await driver.findElement(
      By.xpath("//button[@type='submit']")
    );

    // Type username
    await username.sendKeys("tomsmith");

    // Type password
    await password.sendKeys("SuperSecretPassword!");

    // Click login button
    await loginBtn.click();

    // Wait until success message appears
    await driver.wait(until.elementLocated(By.id("flash")), 5000);

    // Get success message text
    let message = await driver.findElement(By.id("flash")).getText();

    // Simple validation
    if (message.includes("You logged into a secure area")) {
      console.log("✅ Test Passed");
    } else {
      console.log("❌ Test Failed");
    }
  } catch (error) {
    // If anything goes wrong
    console.log("❌ Error occurred");
    console.log(error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

// Run the test
loginTest();
