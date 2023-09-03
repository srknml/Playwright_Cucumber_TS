import { expect, Page } from "@playwright/test";
import BasePage from "./base";
import { pageFixture as fixture } from "../helper/fixtures/pageFixture";


export default class LoginPage extends BasePage {
    private base: BasePage
    private url = this.BASE_URL + '/login'




    private Elements = {
        headLine: "Login",
        userInput: "Username",
        passwordInput: "Password",
        loginBtn: "button[color='primary']",
        errorMessage: "alert"
    }
    // span[@class='mat-button-wrapper']//*[contains(text(),'meja123')]
    constructor() {
        super();
        this.base = new BasePage()
        this.title = "BookCart"

    }

    async goto() {
        await fixture.page.goto(this.url)
        expect(fixture.page).toHaveTitle("BookCart")

    }
    async enterCredentials(username: string, password: string) {

        await fixture.page.getByLabel(this.Elements.userInput).fill(username);
        await fixture.page.getByLabel(this.Elements.passwordInput).fill(password);
    }
    async clickLoginButton() {
        await fixture.page.click(this.Elements.loginBtn)
    }

    async verifyLoggedIn(username: string) {
        await expect(fixture.page.locator("//span[@class='mat-button-wrapper' and contains(text(),'" + username + "')]")).toHaveCount(1)
    }

}