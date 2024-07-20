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



When("Buy a product", function(dataTable){
  const testData = dataTable.hashes();  
  selectProductAddToCart.SelectProductAddToCart(testData);
  selectProductAddToCart.CheckoutProducts();
  informationPage.CompleteInformationForm(testData[0]);
});

Then("Verify that the purchase successful {string}",function(mensaje){
  questions.SuccessfulPurchaseMessage(mensaje);  
});