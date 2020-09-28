describe('MyTestSuite', function() 
{
    //เปิดหน้าเว็บและตรวจสอบชื่อ Title ถูก
    it('Verify Title Of The Page-positive', function()
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('equal','nopCommerce demo store')
    })
    //เปิดหน้าเว็บและตรวจสอบชื่อ Title ผิด
    /*it('Verify Title Of The Page-Nagitive', function()
    {
    cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce store')
    })*/
})