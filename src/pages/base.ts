import { expect, Page } from "@playwright/test";


export default class Base {

    constructor() {

    }
    public page: Page;
    protected BASE_URL: String = "https://bookcart.azurewebsites.net"
    protected title: String;



}