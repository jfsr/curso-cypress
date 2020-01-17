///<reference types="cypress"/>

describe('Work with basic elements', () => {
    //Executa uma única vez
    before(() => {
        cy.visit('https://sites.ufpe.br/cstic/')
    })
    
    //Executa antes da cada teste
    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('.d-xl-flex > .area-btn-chamado > .btn')
            .should('contain', 'Chamado')

        cy.get('#menu-item-55 > .nav-link')
            .should('have.text', 'Início')
    })

    it('Links', () => {
        cy.get('#menu-item-277 > .nav-link')
            .should('have.text', 'Conheça a CSTIC')
            .click()

        cy.get('h1').should('have.text', 'Conheça a Central de Serviços de TIC')
    })

    it('Text Fields', () => {
        const searchedValue = 'Eduroam'
        
        cy.get('.form-control').type(searchedValue)
        cy.get('#searchsubmit').click()
        cy.get('.titulo').should('have.contain', `Resultado da pesquisa por: ${searchedValue}`)
        
        cy.get('.form-control')
            .clear()
            .type(`outro valor{selectAll}${searchedValue}`, {delay: 200})
            .should('have.value', searchedValue)
    })

    it.only('Combo box', () => {
        cy.get('#menu-item-dropdown-56').click()
        cy.get('#menu-item-280 > .dropdown-item')
            .should('have.text', 'Todos os Serviços')
            .click()
        cy.get('.interno')
            .should('have.text', 'Todos os Serviços')
    })

    //https://wcaquino.me/cypress/componentes.html

})