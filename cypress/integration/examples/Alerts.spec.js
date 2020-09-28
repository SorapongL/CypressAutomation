/// <reference types="cypress" />
//cypress will not show alert and confirm but will show detail
describe('Handling Alerts',function()
{
    it('Alerts',function()
    {
        // cy.visit("https://mail.rediff.com/cgi-bin/login.cgi") // Visit URL
        // cy.get('input[type=submit]').click() // use attribute value
        //     cy.on('window:alert',(str) =>
        //     {
        //         expect(str).to.equal('Please enter a valid user name')
        //     })
        cy.visit("https://testautomationpractice.blogspot.com/") // Visit URL
        cy.get("#HTML9 > div.widget-content > button").click() // use selector

        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal('Press a button!')
        })

        
    })
})