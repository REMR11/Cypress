describe('Pruebas iniciales de Cypress', () => {
    // it('Prueba de redirección', () => {
    //     // Aquí va el código de la prueba
    //     cy.visit('https://www.google.com/');
    //     cy.get('#APjFqb').type('Cypress');
    //     cy.get('.LLD4me').click();
    //     cy.get('#APjFqb').clear().type('Cypress.io');
    //     cy.wait(2000);
    // });

    it('Prueba de redirección a página de Cypress', () => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.viewport(1280, 720);
        cy.wait(2000);
        cy.viewport('iphone-6');
        cy.wait(2000);
        cy.viewport('iphone-6', 'portrait');
        cy.wait(2000);
        cy.viewport('iphone-6', 'landscape');
        cy.wait(2000);
        cy.viewport(1280, 720);
        cy.wait(2000);
        cy.viewport('macbook-15');
        cy.wait(2000);
        cy.get('[data-test=username]').type('standard_user', {delay: 100});
        cy.get('[data-test=password]').type('secret_sauce', {delay: 100});
        cy.get('#login-button').click();
        cy.wait(2000);
    });
});
