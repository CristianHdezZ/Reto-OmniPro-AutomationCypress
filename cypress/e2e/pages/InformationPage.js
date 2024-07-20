class InformationPage{
    elements={
        firstNameInput:() => cy.get('[data-test="firstName"]'),
        lastNameInput:() => cy.get('[data-test="lastName"]'),
        postalCodeInput:()=>cy.get('[data-test="postalCode"]'),
        continueButton:()=>cy.get('[data-test="continue"]'),
        finishButton:()=>cy.get('[data-test="finish"]')

    }

    CompleteInformationForm(informationData){
        this.elements.firstNameInput().type(informationData.firstname);
        this.elements.lastNameInput().type(informationData.lastname);
        this.elements.postalCodeInput().type(informationData.postalCode);
        this.elements.continueButton().click();
        this.elements.finishButton().click();
    }
   
    CompleteInformationFormMandatoryFields(firstName,lastName,postalCode){
        
        this.elements.firstNameInput().type(firstName || ' ');
        this.elements.lastNameInput().type(lastName || ' ');
        this.elements.postalCodeInput().type(postalCode || ' ');
        if(firstName===''){
            this.elements.firstNameInput().clear();                   
        }
        if(lastName===''){            
            this.elements.lastNameInput().clear();                       
        }
        if(postalCode===''){            
            this.elements.postalCodeInput().clear();            
        }
        this.elements.continueButton().click();        
    }


}

export default InformationPage;