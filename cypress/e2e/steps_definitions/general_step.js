import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/LoginPage.js";

let loginPage = new LoginPage();

Given("That the user enters the the saucelabs login page site on desktop", ()=>{
    cy.viewport(1920, 1080);
    cy.visit("/");
});

Given("That the user enters the the saucelabs login page site on mobile", ()=>{
    cy.viewport('iphone-6');
    cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password)=>{
    loginPage.submitLogin(username,password);
});



