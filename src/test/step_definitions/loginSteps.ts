import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import LoginPage from "../../pages/loginPage";

let loginPage: LoginPage = new LoginPage();

setDefaultTimeout(60 * 1000 * 2)

Given('User on the login page', async function () {
    await loginPage.goto()
});

Given('User enters {string} and {string}', async function (username, password) {
    await loginPage.enterCredentials(username, password)
});

Given('User clicks login button', async function () {
    await loginPage.clickLoginButton()
});

Then('User should be logged in with {string}', async function (username: string) {
    await loginPage.verifyLoggedIn(username)
});

Then('User should not be logged in', async function () {
    await loginPage.verifyErrorMessage()
});