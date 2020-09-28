/// <reference types="cypress" />
describe('Locating Elements',function()
{
    it('Verify types of locators',function()
    {
        cy.visit('https://demo.nopcommerce.com/')  //Opens the URL
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //Search box
        cy.get("[type='submit']").click() //click on Search  button
        cy.get(".product-box-add-to-cart-button[value='Add to cart']").click() //Add to card
        cy.get("#product_enteredQuantity_4").clear().type('2') //Quantity
        cy.wait(3000)
        cy.get("#add-to-cart-button-4").click() //Add to cart button after providing quantity
        cy.wait(5000)
        cy.get("#topcartlink > a > span.cart-label").click() //Shopping cart link
        cy.wait(3000)
        cy.get(".product-unit-price").contains('$1,800.00') //validating point
    })
})