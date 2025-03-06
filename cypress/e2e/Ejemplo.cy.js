Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Ejemplo', () => {
  it('Rellenar formulario', () => {
    cy.visit('https://demoqa.com/automation-practice-form')

    //Rellenando formulario
    cy.get('#firstName').type('Ronald')
    cy.get('#lastName').type('MacDonald')
    cy.get('#userEmail').type('ronald.macdonald@gmail.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click()
      cy.get('#gender-radio-2')
    .check({force: true});
    cy.get('#userNumber').type('1234567890')
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('August')



    cy.get(':nth-child(2) > .react-datepicker__day--005').click()
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
    cy.get('.subjects-auto-complete__value-container').type('Maths {enter}')
    cy.get('#uploadPicture').selectFile('/home/remr11/Documents/Practicas/cypress/cypress/fixtures/image.png')
    cy.get('#currentAddress').type('Calle 123')


  });
});