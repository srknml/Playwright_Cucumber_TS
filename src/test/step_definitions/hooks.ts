
import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { Browser, chromium, BrowserContext, Page } from "@playwright/test";
import { pageFixture as fixture } from "../../helper/fixtures/pageFixture";
import { invokeBrowser } from "../../helper/driver/driver"
// import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";

// import { options } from "../helper/util/logger";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;
let page: Page;


// let page  

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false })
    fixture.page = await browser.newPage()


});

Before(async () => {

    // console.log("Before Runs")
    // browser = await chromium.launch({ headless: false });
    // page = await browser.newPage()

})


// After(function (scenario) {


//     console.log(scenario)
//     // if (scenario.result.status === Status.FAILED) {
//     //     var world = this;
//     //     return browser.takeScreenshot().then(function (screenShot, error) {
//     //         if (!error) {
//     //             world.attach(screenShot, "image/png");
//     //         }
//     //     });
//     // }
// });