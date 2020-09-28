/// <reference types="cypress" />
describe('Working with Hooks',function()
{
    before(function() //1
    {
        // runs once before all tests in the block
        cy.log('********** This is SETUP block **********')
    })
    
    after(function() //4
    {
        // runs once after all tests in the block
        cy.log('********** This is TEAR DOWN block **********')
    })
    
    beforeEach(function() //2
    {
        // runs before each test in the block
        cy.log('********** This is LOGIN block **********')
    })
    
    afterEach(function() //3
    {
        // runs after each test in the block
        cy.log('********** This is LOGOUT block **********')
    })

    it('Searching',function()
    {
        cy.log('********** This is Searching Test **********')
    })

    it('Advanced Searching',function()
    {
        cy.log('********** This is Advanced Searching Test **********')
    })

    it('Listing Products',function()
    {
        cy.log('********** This is Listing Products Test **********')
    })

})