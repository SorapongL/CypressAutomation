/// <reference types="cypress" />
describe('Navigation',function()
{
    it('Navigation Test',function()
    {
        cy.visit('https://demo.nopcommerce.com/') // Visit URL
        cy.title().should('equal','nopCommerce demo store') // Home Page

        cy.get('.ico-register').contains('Register').click()
        cy.title().should('equal','nopCommerce demo store. Register') //Register Page

        cy.go('back')
        cy.title().should('equal','nopCommerce demo store') // Home Page

        cy.go('forward')
        cy.title().should('equal','nopCommerce demo store. Register') //Register Page

        cy.go(-1) //Back
        cy.title().should('equal','nopCommerce demo store') // Home Page

        cy.go(1) //Forward
        cy.title().should('equal','nopCommerce demo store. Register') //Register Page

        cy.reload()

    })
})