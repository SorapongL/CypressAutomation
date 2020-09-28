/// <reference types="cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('Test Suite', function()
{
    it('Valid Login Test', function()
    {
        //LP = variable LoginPage
        const LP = new LoginPage()
        LP.visit()
        LP.fillEmail('admin@yourstore.com')
        LP.fillPassword('admin')
        LP.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
})