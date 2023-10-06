const {By, until} = require('selenium-webdriver');
var BasePage = require ('./basepage');

class DashboardPage extends BasePage{

    async clickGetStartedbutton(){
        const getStartedButton = driver.wait(until.elementLocated(By.css('.welcome-screen-content-button')), 10000);
        await driver.wait(until.elementIsVisible(getStartedButton), 50000);
        await getStartedButton.click().then(() => console.log("clicked get started button dashboard page")).catch((error) => console.error("Error:", error));
    }

    async transactionMenuIsDisplayed() {
        const transactionMenu = await driver.findElement(By.xpath(`//div[contains(text(),'Transactions')]`));
        await driver.wait(until.elementIsVisible(transactionMenu), 30000);
        return await transactionMenu.isDisplayed();
    }

    async checkoutMenuIsDisplayed() {
        const checkoutMenu = await driver.findElement(By.xpath(`//div[contains(text(),'Checkout')]`));
        await driver.wait(until.elementIsVisible(checkoutMenu), 30000);
        return await checkoutMenu.isDisplayed();
    }

    async connectMenuIsDisplayed() {
        const connectMenu = await driver.findElement(By.xpath(`//div[contains(text(),'Connect')]`));
        await driver.wait(until.elementIsVisible(connectMenu), 30000);
        return await connectMenu.isDisplayed();
    }

    async productMenuIsDisplayed() {
        const productMenu = await driver.findElement(By.xpath(`//div[contains(text(),'Products')]`));
        await driver.wait(until.elementIsVisible(productMenu), 30000);
        return await productMenu.isDisplayed();
    }

    async shopMenuIsDisplayed() {
        const shopMenu = await driver.findElement(By.xpath(`//div[contains(text(),'Shop')]`));
        await driver.wait(until.elementIsVisible(shopMenu), 30000);
        return await shopMenu.isDisplayed();
    }

    async settingsMenuIsDisplayed() {
        const settingsMenu = await driver.findElement(By.xpath(`//div[contains(text(),'Settings')]`));
        await driver.wait(until.elementIsVisible(settingsMenu), 30000);
        return await settingsMenu.isDisplayed();
    }

    async pointOfSaleMenuIsDisplayed() {
        const pointOfSaleMenu = await driver.findElement(By.xpath(`//div[contains(text(),'Point of Sale')]`));
        await driver.wait(until.elementIsVisible(pointOfSaleMenu), 30000);
        return await pointOfSaleMenu.isDisplayed();
    }
    
}

module.exports = new DashboardPage();
