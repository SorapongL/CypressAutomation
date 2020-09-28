/// <reference types="cypress" />
describe('Ericsson',function()
{
    it('Ericsson 4G',function()
    {
        cy.visit("http://10.4.109.199/ibmcognos/cgi-bin/cognosisapi.dll?b_action=xts.run&m=portal/main.xts&startwel=yes") // Visit URL
        cy.get("#CAMUsername").type("tester1") //User ID
        cy.get("#CAMPassword").type("Tester1") //Password
        cy.get("[type='submit']").click() //click on OK  button
        cy.get("tbody > tr:nth-child(18) > td:nth-child(5) > a").click() //click 4G-Access-Reports
        cy.wait(4000)
        cy.get("tbody > tr:nth-child(2) > td > div > table > tbody > tr:nth-child(1) > td:nth-child(5) > a").click() //click Ericsson LTE eUTRAN Performance Report
        cy.wait(4000)
        cy.get("tbody > tr:nth-child(2) > td > div > table > tbody > tr:nth-child(3) > td:nth-child(5) > a").click() //click Ericsson LTE eUTRAN Performance Report Link
        cy.wait(4000)
        cy.get('input[dv=GEO]').should('be.visible').should('not.be.checked').click() //click radio GEO
        cy.wait(4000)
        cy.get('input[value=900]').should('be.visible').should('not.be.checked').click() //click radio All Network
        cy.wait(3000)
        cy.get('input[dv=SHOW]').should('be.visible').should('not.be.checked').click() //click radio SHOW
        cy.wait(5000)
        cy.get("div > div > table > tbody > tr > td:nth-child(2) > div:nth-child(2) > a:nth-child(1)").click() // click Select all
        cy.get('input[dv=PROVINCE]').should('be.visible').should('not.be.checked').click() //click radio PROVINCE
        cy.wait(5000)
        cy.get("table > tbody > tr:nth-child(2) > td:nth-child(1) > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > select > option:nth-child(4)").click()
        
        

        //cy.get('select > option').eq(3).should('be.visible').should('have.value', 'NOR').click()
        //cy.get('option').eq(3).should('contain', 'NOR').click()
        // cy.wait(3000)
        // cy.get("body.viewer:nth-child(2) table.mainViewerTable:nth-child(10) td.mainViewerTD div.RVContent div.RVReport table.pp tr.tableRow:nth-child(2) td.py table.tb tr.tableRow:nth-child(4) td.tableCell div.block table.tb tbody:nth-child(1) tr.tableRow:nth-child(2) td.tableCell:nth-child(2) > div.clsPromptComponent").click() //click 
        

        

      

        

   

        // cy.get(".product-box-add-to-cart-button[value='Add to cart']").click() //Add to card
        // cy.get("#addtocart_4_EnteredQuantity").clear().type('2') //Quantity
        // cy.wait(3000)
        // cy.get("#add-to-cart-button-4").click() //Add to cart button after providing quantity
        // cy.wait(5000)
        // cy.get("#topcartlink > a > span.cart-label").click() //Shopping cart link
        // cy.wait(3000)
        // cy.get(".product-unit-price").contains('$1,800.00') //validating point
    })
})