/// <reference types="cypress" />
describe('UI Elements',function()
{
    it('Verify Inputbox & Radio buttons',function()
    {
        cy.visit("http://newtours.demoaut.com/") // Visit URL
        cy.url().should('include','newtours') // Check link found "newtours"

        //Input Box
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury") // Fill Username
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury") // Fill Password
       
        cy.get('input[name=login]').should('be.visible').click() //Sign-In

        cy.title().should('equal','Find a Flight: Mercury Tours:') //Title Verification
        //Radio Buttons Verification
        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') //visibility checked status
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() //visibility checked status
        cy.get('[name=findFlights]').should('be.visible').click() //Continue Button

        cy.title().should('equal','Select a Flight: Mercury Tours') //Title Verification

    })
})
