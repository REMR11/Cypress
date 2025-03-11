/* ==== Test Created with Cypress Studio ==== */
it('WikiTestingTenguereche', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');
  cy.get('#p-search > .cdx-button--fake-button > .vector-icon').click();
  cy.get('#searchform > .cdx-search-input > .cdx-search-input__input-wrapper > .cdx-text-input > .cdx-text-input__input').click();
  cy.get('#searchform > .cdx-search-input > .cdx-search-input__input-wrapper > .cdx-text-input > .cdx-text-input__input').clear('V');
  cy.get('#searchform > .cdx-search-input > .cdx-search-input__input-wrapper > .cdx-text-input > .cdx-text-input__input').type('Basiliscus vittatus{enter}');
//   cy.get('#searchform > .cdx-search-input > .cdx-button').click();
  cy.get('.imagen > span > .mw-file-description > .mw-file-element').should('have.attr', 'src', '//upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Striped_basilisk_lizard.jpg/250px-Striped_basilisk_lizard.jpg');
  /* ==== End Cypress Studio ==== */
});