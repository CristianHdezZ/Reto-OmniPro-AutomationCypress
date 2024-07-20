import { 
  When, 
  Then  
}from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/LoginPage.js";
import Questions from "../pages/Questions.js";

let loginPage = new LoginPage();
let questions = new Questions();

When("A user provides incorrect credentials, and clicks on the login button",function(dataTable){
    const testData = dataTable.hashes(); 
    loginPage.submitLogin(testData[0].username,testData[0].password);
});

Then("The error message {string} is displayed", function(message){
    questions.ErrorMessageCredentials(message);

});