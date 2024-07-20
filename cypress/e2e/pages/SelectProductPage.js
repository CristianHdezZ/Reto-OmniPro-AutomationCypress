class SelectProductPage{
    elements ={
        addProduct: (productName) => cy.get(`[data-test='add-to-cart-${productName}']`),
        buttonCart: ()=> cy.get('[data-test="shopping-cart-link"]'),
        buttonCheckout: ()=> cy.get('[data-test="checkout"]'),

    };

    SelectProductAddToCart(productsData){   
        const products = (productsData[0].product).toString().split(',');
        products.forEach((productName)=>{
            cy.log("product: ", productName);  
            this.elements.addProduct(productName).click();           
        });
        this.elements.buttonCart().click();              
    }
    
    CheckoutProducts(){
        this.elements.buttonCheckout().click();
    }

    ClickButtonCart(){
        this.elements.buttonCart().click();
    }
    

}
export default SelectProductPage;