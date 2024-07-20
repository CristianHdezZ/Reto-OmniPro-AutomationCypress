import {  
  When,
  Then  
}from "cypress-cucumber-preprocessor/steps";
import SelectProductPage from "../pages/SelectProductPage.js";
import InformationPage from "../pages/InformationPage.js";
import Questions from "../pages/Questions.js";

let selectProductAddToCart = new SelectProductPage();
let informationPage = new InformationPage();
let questions = new Questions();

When("I enter checkout product", function(dataTable){
  const testData = dataTable.hashes();  
  selectProductAddToCart.SelectProductAddToCart(testData);
  selectProductAddToCart.CheckoutProducts();
});

When("I enter the firstName, lastName and postalCode {string} , {string}, {string} and to continue",function(firstName,lastName,postalCode){
    informationPage.CompleteInformationFormMandatoryFields(firstName,lastName,postalCode);
});

Then("I should see the error message {string}", function(message){
    questions.ErrorMandatoryFields(message);    
})



