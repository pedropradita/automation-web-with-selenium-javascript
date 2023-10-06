const basePage = require('../pageobjects/basepage');
const registrationpage = require('../pageobjects/registrationpage');
const dashboardpage = require('../pageobjects/dashboardpage');
const TestListener = require('../helper/TestListener');

const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const testListener = new TestListener(driver);
// const screenshotFolder = path.join(__dirname, 'screenshots'); // Change 'screenshots' to the desired folder name

var baseurl = 'https://commerceos.staging.devpayever.com/registration/';
firstNameText = 'Pedro';
lastNameText = 'Pradita';
firstEmailText = 'pedro.pradita.';
lastEmailText = '@test.test';
passwordText = 'L0vepayever!';
companyName = 'Payever';
industryName = 'Beauty & Personal Care';
phoneNumber = '123456789';
vatNumber = '987654321';
testCase1 = 'fashion';
testCase2 = 'santander';


describe("QA Engineer Test", function () {
  this.timeout(5000);
  const formattedDateTime = registrationpage.getCurrentDateTimeFormatted();

  beforeEach(async () => {
    await driver.manage().window().maximize();
  });

  afterEach(async function () {
    const formattedDateTime = await registrationpage.getCurrentDateTimeFormatted();
    // await testListener.captureScreenshot(this.currentTest, formattedDateTime);

    if (this.currentTest.state === 'passed') {
      const screenshotPath = path.join('screenshots', `${this.currentTest.fullTitle()}.png`);
      const screenshot = await driver.takeScreenshot();
      fs.writeFileSync(screenshotPath, screenshot, 'base64');
      this.currentTest.screenshotPath = screenshotPath;
    }
  });

  after(async () => {
    await driver.quit();
  });

  it("Test Cases 1 @test @test1", async function () {
    const formattedDateTime = await registrationpage.getCurrentDateTimeFormatted();

    await registrationpage.goToUrl(baseurl+testCase1);
    await registrationpage.inputFirstName(firstNameText);
    await registrationpage.inputLastName(lastNameText);
    await registrationpage.inputEmail(firstEmailText+formattedDateTime+lastEmailText);
    await registrationpage.inputPassword(passwordText);
    await registrationpage.inputConfirmPassword(passwordText);
    await registrationpage.clickSignUpbutton();
    await registrationpage.inputCompanyName(companyName);
    await registrationpage.selectIndustry(industryName);
    await registrationpage.inputPhoneNumber(phoneNumber);
    await registrationpage.clickGetStartedbutton();
    await dashboardpage.clickGetStartedbutton();

    const transactionMenuIsDisplayed = await dashboardpage.transactionMenuIsDisplayed();
    expect(transactionMenuIsDisplayed).to.be.true;

    const checkoutMenuIsDisplayed = await dashboardpage.checkoutMenuIsDisplayed();
    expect(checkoutMenuIsDisplayed).to.be.true;

    const connectMenuIsDisplayed = await dashboardpage.connectMenuIsDisplayed();
    expect(connectMenuIsDisplayed).to.be.true;

    const productMenuIsDisplayed = await dashboardpage.productMenuIsDisplayed();
    expect(productMenuIsDisplayed).to.be.true;

    const shopMenuIsDisplayed = await dashboardpage.shopMenuIsDisplayed();
    expect(shopMenuIsDisplayed).to.be.true;
    
    const settingsMenuIsDisplayed = await dashboardpage.settingsMenuIsDisplayed();
    expect(settingsMenuIsDisplayed).to.be.true;
  });

  it("Test Cases 2 @test @test2", async function () {

    const formattedDateTime = await registrationpage.getCurrentDateTimeFormatted();

    await registrationpage.goToUrl(baseurl+testCase2);
    await registrationpage.inputFirstName(firstNameText);
    await registrationpage.inputLastName(lastNameText);
    await registrationpage.inputEmail(firstEmailText+formattedDateTime+lastEmailText);
    await registrationpage.inputPassword(passwordText);
    await registrationpage.inputConfirmPassword(passwordText);
    await registrationpage.clickSignUpbutton();
    await registrationpage.inputCompanyNameSantander(companyName);
    await registrationpage.selectIndustrySantander(industryName);
    await registrationpage.inputPhoneNumberSantander(phoneNumber);
    await registrationpage.inputPVatNumber(vatNumber);
    await registrationpage.clickGetStartedbutton();
    await dashboardpage.clickGetStartedbutton();

    const transactionMenuIsDisplayed = await dashboardpage.transactionMenuIsDisplayed();
    expect(transactionMenuIsDisplayed).to.be.true;

    const checkoutMenuIsDisplayed = await dashboardpage.checkoutMenuIsDisplayed();
    expect(checkoutMenuIsDisplayed).to.be.true;

    const connectMenuIsDisplayed = await dashboardpage.connectMenuIsDisplayed();
    expect(connectMenuIsDisplayed).to.be.true;

    const pointOfSaleMenuIsDisplayed = await dashboardpage.pointOfSaleMenuIsDisplayed();
    expect(pointOfSaleMenuIsDisplayed).to.be.true;
    
    const settingsMenuIsDisplayed = await dashboardpage.settingsMenuIsDisplayed();
    expect(settingsMenuIsDisplayed).to.be.true;
  });
});
