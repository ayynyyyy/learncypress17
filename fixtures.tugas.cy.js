/// <reference types="cypress" />

describe('task fixtures data', ()=> {
    it('should try to login', () => {
        cy.visit('https://www.saucedemo.com/v1/.html')
        cy.url().should('include', 'login.html')

        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username,password)
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
            cy.get('.login-button').click()
        })
        //cy.url().should('include', 'login.html')
    })
})