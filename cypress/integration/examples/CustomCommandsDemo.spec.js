/// <reference types="cypress" />
describe('CustomCommands',function()
{
    it('Login Test',function()
    {
        cy.login('admin@yourstore.com','admin12') //invalid password title=Your store. Login
        cy.title().should('be.equal','Your store. Login')

        cy.login('admin@yourstore123.com','admin') //invalid user title=Your store. Login
        cy.title().should('be.equal','Your store. Login')

        cy.login('admin@yourstore.com','admin') //valid title=Dashboard / nopCommerce administration
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })

    it('Add Customer',function()
    {
        //Login Script
        cy.login('admin@yourstore.com','admin')

        //Script for Adding new Customer
        cy.log("Adding Customer*****")
    })
    it('Edit Customer',function()
    {
        cy.login('admin@yourstore.com','admin')

        //Script for Editing Customer
        cy.log("Editing Customer*****")
    })

})