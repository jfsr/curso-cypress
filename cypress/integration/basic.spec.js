/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://portalnti.ufpe.br/')
        cy.title()
            .should('be.equal', 'Portal NTI')
            .and('contain', 'Portal')
    })

    it.only('Should find and interact with an element', () => {
        cy.visit('https://portalnti.ufpe.br/')
        cy.get('#menu-item-795 > .nav-link')
            .click()
        cy.get('.titulo-pag-interna')
            .should('have.text', 'Ramais')
    })
})