describe('Pruebas de aserciones a textos', () => {
    it('Validaciones', () => {
        cy.viewport(1280, 720)
            .visit('https://www.inmotionhosting.com/');
        cy.get('.upper-menu-section > .imh-logo > .lazy')
            .should('exist');

        cy.get('[style="margin-right: 10px;"]')
            .should('be.visible');
        cy.get('[style="margin-top: 40px;"] > .ppb-button')
            .should('have.attr', 'href')
            .and('include', '/shared-hosting#shared-hosting-rostrum-slider');
        cy.get('[src="https://www.inmotionhosting.com/wp-content/uploads/2024/10/Trustpilot-People-Love-Us-v2.svg?x61990"]')
            .should('have.attr', 'src').should('include', 'https://www.inmotionhosting.com/wp-content/uploads/2024/10/Trustpilot-People-Love-Us-v2.svg?x61990');

        cy.get('[style="margin-top: 40px;"] > .ppb-button')
            .contains('Get Started')
    });
});