import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, chromium, BrowserContext, Page } from "@playwright/test";
import { pageFixture as fixture } from "../../helper/fixtures/pageFixture";

let browser: Browser;

BeforeAll(async () => {

    browser = await chromium.launch({ headless: false })
    fixture.page = await browser.newPage()

});

AfterAll(async () => {
    //@TODO. Needs to be fixed.
    setTimeout(async () => {
        await browser.close()
    }, 3000)

})