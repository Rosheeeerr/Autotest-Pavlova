const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");
(async function firstTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://kizk.ru');
        let title = await driver.getTitle();
        assert.equal("«Коровка из Кореновки» - официальный сайт молочной продукции", title);
        let submitSignIn=await driver.findElement(
            By.xpath("/html/body/div[1]/div[3]/div[2]/div/div/a[4]"));
        submitSignIn.click();
    } catch (e) {
        console.log(e)
    } finally {
        // await driver.quit();
    }
}())

