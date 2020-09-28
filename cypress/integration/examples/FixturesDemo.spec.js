/// <reference types="cypress" />
describe('Fixtures',function()
{
    before(function()
    {
        // runs once before all tests in the block
        cy.fixture('example').then(function(datafix)
        {
            this.data=datafix
        })
    })

    it('Fixtures Demo Test',function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        // cy.get('input[name=Email]').type(this.data.email) //User
        // cy.get('input[name=Password]').type(this.data.password) //Password
        cy.get('input[name=Email]').clear().type(this.data.email) //User
        cy.get('input[name=Password]').clear().type(this.data.password) //Password
        cy.get('input[type=submit]').click() // Signin
 
    })
})