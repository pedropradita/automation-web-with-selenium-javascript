const {By, until } = require('selenium-webdriver');
var BasePage = require ('./basepage');

class HomePage extends BasePage{

    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
    
        return `${day}${month}${year}${hours}${minutes}${seconds}`;
    }
    
    async getCurrentDateTimeFormatted() {
        const currentDate = new Date();
        return this.formatDate(currentDate);
    }

    async inputFirstName(firstNameText){
        const firstNameFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "First name")]`));
        await driver.wait(until.elementIsVisible(firstNameFieldForClick), 30000);
        await firstNameFieldForClick.click();
        const firstNameField = driver.wait(until.elementLocated(By.css('input[formcontrolname="firstName"]')), 10000);
        await firstNameField.sendKeys(firstNameText).then(() => console.log("Inputted first name")).catch((error) => console.error("Error:", error));
    }

    async inputLastName(lastNameText){
        const lastNameFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "Last name")]`));
        await lastNameFieldForClick.click();
        const lastNameField = driver.wait(until.elementLocated(By.css('input[formcontrolname="lastName"]')), 10000);
        await lastNameField.sendKeys(lastNameText).then(() => console.log("Inputted last name")).catch((error) => console.error("Error:", error));
    }

    async inputEmail(emailText){
        const emailFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "Email")]`));
        await emailFieldForClick.click();
        const emailField = driver.wait(until.elementLocated(By.css('input[formcontrolname="email"]')), 10000);
        await emailField.sendKeys(emailText).then(() => console.log("Inputted email")).catch((error) => console.error("Error:", error));
    }

    async inputPassword(passwordText){
        const passwordFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "Password")]`));
        await passwordFieldForClick.click();
        const passwordField = driver.wait(until.elementLocated(By.css('input[formcontrolname="password"]')), 10000);
        await passwordField.sendKeys(passwordText).then(() => console.log("Inputted password")).catch((error) => console.error("Error:", error));
    }

    async inputConfirmPassword(confirmPasswordText){
        const confirmPasswordFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "Confirm Password")]`));
        await confirmPasswordFieldForClick.click();
        const confirmPasswordField = driver.wait(until.elementLocated(By.css('input[formcontrolname="confirmPass"]')), 10000);
        await confirmPasswordField.sendKeys(confirmPasswordText).then(() => console.log("Inputted confirm password")).catch((error) => console.error("Error:", error));
    }

    async clickSignUpbutton(){
        const signUpButton = driver.wait(until.elementLocated(By.css('.signup-button')), 10000);
        await signUpButton.click().then(() => console.log("Clicked signup button")).catch((error) => console.error("Error:", error));
    }

    async inputCompanyName(companyNameText){
        const companyNameFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "Company name")]`));
        await driver.wait(until.elementIsVisible(companyNameFieldForClick), 10000);
        await companyNameFieldForClick.click();
        const companyNameField = driver.wait(until.elementLocated(By.css('input[formcontrolname="name"]')), 10000);
        await companyNameField.sendKeys(companyNameText).then(() => console.log("Inputted company name")).catch((error) => console.error("Error:", error));
    }

    async inputCompanyNameSantander(companyNameText){
        const companyNameFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "Company name")]`));
        await driver.wait(until.elementIsVisible(companyNameFieldForClick), 10000);
        await companyNameFieldForClick.click();
        const companyNameField = driver.wait(until.elementLocated(By.css('input[class="ng-tns-c170-8 ng-untouched ng-pristine ng-invalid"]')), 10000);
        await companyNameField.sendKeys(companyNameText).then(() => console.log("Inputted company name")).catch((error) => console.error("Error:", error));
    }    

    async selectIndustry(industryName){
        const Industry = driver.wait(until.elementLocated(By.css('.label-container.ng-tns-c170-13.form-label')), 10000);
        await Industry.click();
        const selectDropdown = driver.findElement(By.xpath(`//*[contains(text(), "${industryName}")]`));
        await selectDropdown.click().then(() => console.log("Selected industry")).catch((error) => console.error("Error:", error));
    }

    async selectIndustrySantander(industryName){
        const Industry = driver.wait(until.elementLocated(By.css('.label-container.ng-tns-c170-11.form-label')), 10000);
        await Industry.click();
        const selectDropdown = driver.findElement(By.xpath(`//*[contains(text(), "${industryName}")]`));
        await selectDropdown.click().then(() => console.log("Selected industry")).catch((error) => console.error("Error:", error));
    }

    async inputPhoneNumber(phoneNumberText){
        const phoneNumberFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "Phone Number")]`));
        await driver.wait(until.elementIsVisible(phoneNumberFieldForClick), 10000);
        await phoneNumberFieldForClick.click();
        const phoneNumberField = driver.wait(until.elementLocated(By.css('input[formcontrolname="phoneNumber"]')), 10000);
        await phoneNumberField.sendKeys(phoneNumberText).then(() => console.log("Inputted phone number")).catch((error) => console.error("Error:", error));
    }

    async inputPhoneNumberSantander(phoneNumberText){
        const phoneNumberFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "Phone Number")]`));
        await driver.wait(until.elementIsVisible(phoneNumberFieldForClick), 10000);
        await phoneNumberFieldForClick.click();
        const phoneNumberField = driver.wait(until.elementLocated(By.css('input[class="ng-untouched ng-pristine ng-invalid ng-star-inserted"]')), 10000);
        await phoneNumberField.sendKeys(phoneNumberText).then(() => console.log("Inputted phone number")).catch((error) => console.error("Error:", error));
    }

    async inputPVatNumber(vatNumberText){
        const vatNumberFieldForClick = driver.findElement(By.xpath(`//*[contains(text(), "VAT number")]`));
        await driver.wait(until.elementIsVisible(vatNumberFieldForClick), 10000);
        await vatNumberFieldForClick.click();
        const vatNumberField = driver.wait(until.elementLocated(By.css('input[class="ng-tns-c170-14 ng-untouched ng-pristine ng-invalid"]')), 10000);
        await vatNumberField.sendKeys(vatNumberText).then(() => console.log("Inputted vat number")).catch((error) => console.error("Error:", error));
    }

    async clickGetStartedbutton(){
        const getStartedButton = driver.wait(until.elementLocated(By.css('.signup-button')), 10000);
        await getStartedButton.click().then(() => console.log("clicked get started button")).catch((error) => console.error("Error:", error));
    }

}

module.exports = new HomePage();
