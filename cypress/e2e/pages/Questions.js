class Questions{
    elements={
        successMessage:()=>cy.get('[data-test="complete-header"]'),
        errorMessage:()=>cy.get('[data-test="error"]'),
        errorMessageCredentials:()=>cy.get('[data-test="error"]')

    }

    SuccessfulPurchaseMessage(message){
        this.elements.successMessage().should("contain.text",message);
    }

    ErrorMandatoryFields(message){
        this.elements.errorMessage().should("contain.text",message);
    }

    ErrorMessageCredentials(message){
        this.elements.errorMessageCredentials().should("contain.text",message);
    }



}
export default Questions;

