/// <reference types="cypress" />
describe('UI Elements2',function()
{
    it('Verify Inputbox',function()
    {
        cy.visit("http://demo.automationtesting.in/Register.html") // Visit URL
        //Input Box
        cy.get('input[ng-model=FirstName]').should('be.visible').should('be.enabled').type("Sorapong") 
        cy.get('input[ng-model=LastName]').should('be.visible').should('be.enabled').type("Lekyan")
        cy.get('textarea[ng-model=Adress]').should('be.visible').should('be.enabled').type("115/1")
        cy.get('input[type=email]').should('be.visible').should('be.enabled').type("Sorapong@ossstax.com")
        cy.get('input[type=tel]').should('be.visible').should('be.enabled').type("090-9943567")
        cy.get('#firstpassword').should('be.visible').should('be.enabled').type("Automation")
        cy.get('#secondpassword').should('be.visible').should('be.enabled').type("Automation")
        
    })

    it('Verify Checkboxs',function()
    {
        //Checkboxs use id and value
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey','Movies'])
        cy.get('input[type=checkbox]').uncheck(['Cricket','Movies'])
    })

    it('Verify Radio Button',function()
    {
        //Radio Buttons Verification
        cy.get('input[value=Male]').should('be.visible').should('not.be.checked').click()
    })

    it('Verify Dropdown lists',function()
    {
        //Dropdown lists use id and value
        cy.get('#Skills').select('PHP').should('have.value','PHP')
        cy.get('#countries').select('Australia').should('have.value','Australia')
        cy.get('#yearbox').select('1993').should('have.value','1993')
        cy.get('select[placeholder=Month]').select('August').should('have.value','August')
        cy.get('#daybox').select('14').should('have.value','14')
    })

    it('Verify Languages Multi Select',function()
    {
        //Multi Select use class and value
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('Thai').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
        cy.get('.ui-corner-all').contains('German').click() 
    })
    it('Verify Select Countries Searchable Dropdown lists',function()
    {
        //Multi Select use Attribute value
        cy.get('[role=combobox]').click({force: true}) // force: true is click real
        cy.get('.select2-search__field').type('un')
        cy.get('.select2-search__field').type('{enter}')

    })

})
