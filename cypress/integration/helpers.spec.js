/// <reference types="cypress"/>

describe('Helpers...', () => {

    //TODO asa
    it('Hooks', () => {
        const obj = { nome: 'User', idade: 20 }
        expect(obj).has.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://sites.ufpe.br/cstic/')
        cy.get('.form-control').type('funciona?')
        
        cy.reload()
        
        cy.get('.form-control').then( $el => {
            $el.val('funciona via jquery')
        }).should('have.value','funciona via jquery')

        cy.reload()
        
        cy.get('.form-control').then( $el => {
            cy.wrap($el)
                .type('funciona via cypress')
                .should('have.value','funciona via cypress')
        })

        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#menu-item-55 > .nav-link').then(() => {console.log('Primeiro elemento')})
        cy.wrap(promise).then(num => {console.log(`${num}`)})
        cy.get('#menu-item-dropdown-56').then(() => {console.log('Segundo elemento')})

        //then pode retornar
        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal',2)
        
        //should ignora o retorno
        cy.wrap(1).should(num => {
            return 2
        }).should('be.equal',1)
    })
})