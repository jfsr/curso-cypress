/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://sites.ufpe.br/cstic/')
        cy.title()
            .should('be.equal', 'Central de Servicos TIC – CSTIC – UFPE')
            .and('contain', 'CSTIC')
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://sites.ufpe.br/cstic/')
        cy.get('#nav-perfis-usuario > :nth-child(2) > .btn')
            .click()
            cy.get('.interno')
            .should('have.text', 'Serviços para Servidor')
    })
})