import { expect, Page } from "@playwright/test";
import BasePage from "./base";
import { pageFixture as fixture } from "../helper/fixtures/pageFixture";


export default class LoginPage extends BasePage {
    private url: string




    private Elements = {
        headLine: "Login",
        userInput: "Username",
        passwordInput: "Password",
        loginBtn: "button[color='primary']",
        errorMessage: "alert",
        usernameLabel: function (username: string): string {
            return "//span[@class='mat-button-wrapper' and contains(text(),'" + username + "')]"
        },
    }
    constructor() {
        super();
        this.title = "BookCart"
        this.url = this.BASE_URL + '/login'

    }

    async goto() {
        await fixture.page.goto(this.url)
        expect(fixture.page).toHaveTitle(this.title)

    }
    async enterCredentials(username: string, password: string) {

        await fixture.page.getByLabel(this.Elements.userInput).fill(username);
        await fixture.page.getByLabel(this.Elements.passwordInput).fill(password);
    }
    async clickLoginButton() {
        await fixture.page.click(this.Elements.loginBtn)
    }

    async verifyLoggedIn(username: string) {
        await expect(fixture.page.locator(this.Elements.usernameLabel(username))).toHaveCount(1)
    }

}