import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, chromium, BrowserContext, Page } from "@playwright/test";
import { pageFixture as fixture } from "../../helper/fixtures/pageFixture";

let browser: Browser;
let context: BrowserContext

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false })
})

Before(async () => {
    context = await browser.newContext()
    fixture.page = await context.newPage()

});

After(async () => {


    //@TODO. Needs to be fixed.
    await fixture.page.close()
    await context.close()
})

AfterAll(async () => {
    await browser.close()
})