///<reference types="cypress"/>

describe('Work with basic elements', () => {
    //Executa uma única vez
    before(() => {
        cy.visit('https://portalnti.ufpe.br/')
    })
    
    //Executa antes da cada teste
    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('#subsecao-aniversariantes > .titulo-secao')
            .should('contain', 'Aniversariantes')
            
        cy.get('#subsecao-album-foto > .titulo-secao')
            .should('have.text', 'Último Álbum')
    })

    it('Links', () => {
        cy.get('#menu-item-904 > .nav-link')
            .should('have.text', 'Projetos')
            .click()

        cy.get('.btn-portal')
            .should('have.text', 'abrir planilha detalhada')
    })
})