const { Status } = require('selenium-webdriver');
const basePage = require('../pageobjects/basepage');
const registrationpage = require('../pageobjects/registrationpage');
const fs = require('fs');
const path = require('path');

class TestListener extends basePage {

  constructor() {
    super();
    this.driver = driver;
    // Initialize screenshot folder
    this.screenshotFolder = path.join(__dirname, '..', 'screenshots'); // Change 'screenshots' to the desired folder name
    if (!fs.existsSync(this.screenshotFolder)) {
      fs.mkdirSync(this.screenshotFolder);
    }
  }

  async captureScreenshot(test, formattedDateTime) {
    const getCurrentDateTimeFormatted = await registrationpage.getCurrentDateTimeFormatted();
    const driver = await this.getDriver(); // Get the WebDriver instance
    const testMethodName = test.fullTitle().replace(/\s+/g, '_');
    const screenshotFileName = `screenshot_${testMethodName}_${formattedDateTime}.png`;
    const screenshotFilePath = path.join(this.screenshotFolder, screenshotFileName);
    
    await driver.takeScreenshot().then(data => {
      fs.writeFileSync(screenshotFilePath, data, 'base64');
    });

    return screenshotFilePath;
  }

  async attachScreenshotOnSuccess(test) {
    // const screenshotPath = await this.captureScreenshot(test);
    // fs.attachFile(screenshotPath);
  }

  // ... Your other listener methods ...

  async afterTestPassed(test) {
    // await this.attachScreenshotOnSuccess(test);
  }

  // ... Your other listener methods ...
}

module.exports = TestListener;
