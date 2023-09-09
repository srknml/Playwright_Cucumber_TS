import { BeforeAll, AfterAll, Before, After, Status, World, ITestCaseHookParameter } from "@cucumber/cucumber";
import { Browser, chromium, BrowserContext, Page, test } from "@playwright/test";
import { pageFixture as fixture, pageFixture } from "../../helper/fixtures/pageFixture";
import { TestStepResultStatus } from "@cucumber/messages";
import { invokeBrowser } from "../../helper/driver/driver";

let browser: Browser;
let context: BrowserContext
// let world = this;

BeforeAll(async () => {
    browser = await invokeBrowser()
})

Before(async () => {
    context = await browser.newContext()
    fixture.page = await context.newPage()

});
const takeScreenShot = async (world: World, scenario: ITestCaseHookParameter) => {

    const screenShot = await fixture.page?.screenshot({
        path: "./target/screenshots/" + scenario.pickle.name + ".png",
        fullPage: true,
    });
    // attach the screenshot using World's attach()
    if (screenShot) await world.attach(screenShot, 'image/png');
};


After(async function (scenario) {
    // Can't use the arrow function to access "this".
    await takeScreenShot(this, scenario)
    await fixture.page.close()
    await context.close()
})

AfterAll(async () => {
    await browser.close()
})