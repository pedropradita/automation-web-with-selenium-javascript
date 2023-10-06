var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (5000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }

    goToUrl(theURL){
        driver.get(theURL);
    }

    getDriver() {
        return this.driver;
    }

    sleep(seconds){
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }
}

module.exports = BasePage;
