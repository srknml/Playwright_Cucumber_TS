import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";


Given('User enter the username as {string}', async function (username) {

    console.log(username)
});

Given('xxxx', async function () {

    console.log("xxxx")
});

Then('asda', async function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    console.log("asdas")
  });