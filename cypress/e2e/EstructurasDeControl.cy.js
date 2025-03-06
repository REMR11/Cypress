describe('Estructuras de control', () => {
    // it('If', () => {
    //     // if (Validacion) console.log('Es mayor de edad');
    //     // else console.log('Es menor de edad');

    //     cy.visit('www.google.com');
        
    // });
   
    // it('FOR', () => {
    //     cy.visit('www.google.com');
    //     for (let i = 0; i < 10; i++) {
    //         console.log(i);
    //     }
        
    // });
    
    // it('WHILE', () => {
    //     cy.visit('www.google.com');
    //     let i = 0;
    //     while (i < 10) {
    //         console.log(i);
    //         i++;
    //     }
        
    // });

    // it('DO WHILE', () => {
    //     cy.visit('www.google.com');
    //     let i = 0;
    //     do {
    //         console.log(i);
    //         i++;
    //     } while (i < 10);
        
    // });

    it('switch', () => {
        cy.visit('www.google.com');
        cy.get('#APjFqb').type('Pregunta 1');
        cy.get('#APjFqb').invoke('val').then((value) => {
            switch (value.trim()) {
                case 'Pregunta 1':
                    console.log('Respondiendo pregunta 1');
                    break;
                case 'Pregunta 2':
                    console.log('Respondiendo pregunta 2');
                    break;
                default:
                    console.log('Caso default');
                    break;
            }
            }
        );
    });
});