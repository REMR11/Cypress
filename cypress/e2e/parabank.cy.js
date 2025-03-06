import 'cypress-iframe';

describe('Pruebas de aserciones a textos', () => {

    it('parabank', () => {
        cy.viewport(1280, 720)
            .visit('https://parabank.parasoft.com/parabank/register.htm;jsessionid=EBE971FBA5CD1C7D4CDD3B08C7C966C7');

        cy.intercept('GET', '**/register.htm').as('loadRegister');

        cy.get('#loginPanel > :nth-child(3) > a').click();
        cy.get('#customer\\.firstName')
            .should('be.visible')
            .click()
            .type('Eunice');
        
        cy.get('#customer\\.lastName')
            .should('be.visible')
            .click()
            .type('Aparicio');
        cy.get('#customer\\.address\\.street')
            .should('be.visible')
            .type('Calle 123');
        cy.get('#customer\\.address\\.city')
            .should('be.visible')
            .type('Lima');
        cy.get('#customer\\.address\\.state')
            .should('be.visible')
            .type('Lima');
        cy.get('#customer\\.address\\.zipCode')
            .should('be.visible')
            .type('12345');
        cy.get('#customer\\.phoneNumber')
            .should('be.visible')
            .type('1234567890');
        cy.get('#customer\\.ssn')
            .should('be.visible')
            .type('123456789');
        cy.get('#customer\\.username')
            .should('be.visible')
            .type('eunice');
        cy.get('#customer\\.password')
            .should('be.visible')
            .type('123456789');
        cy.get('#repeatedPassword')
            .should('be.visible')
            .type('123456789');
        cy.get('[colspan="2"] > .button')
            .click();
        });
});