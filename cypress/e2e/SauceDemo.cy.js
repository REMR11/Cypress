Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('WonderStoreTesting', () => {
    it('Rellenar formulario', () => {
        cy.viewport(1280, 720)
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Eunice')
        cy.get('[data-test="lastName"]').type('Aparicio')
        cy.get('[data-test="postalCode"]').type('12345')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="back-to-products"]').click()
    });

});