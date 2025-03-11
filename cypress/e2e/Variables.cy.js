// Constante: son datos que nunca o casi nunca cambian (URL)
// Variables: Son datos que pueden cambiar (Usuario, contraseña, textos)
// describe("Variables", () => {
//     const usuario = "john";
//     const contraseña = "demo";
//     const PaginaPrincipal = "Accounts Overview";

//     it("Utilizando variables", () => {
//         cy.iniciarSesion(usuario, contraseña);

//         cy.get("#showOverview > .title")
//             .should("be.visible")
//             .contains(PaginaPrincipal);
//     });

//     it("Interactuando con elementos", () => {
//         cy.iniciarSesion(usuario, contraseña);

//         cy.get("tbody > :nth-child(1) > :nth-child(1) > a").click();
//         cy.get("#accountType").contains("CHECKING");
//     });
// });


//Variables 

//Constante: son datos que nunca o casi nunca cambian (URL)
//Variables: Son datos que pueden cambiar (Usuario, contraseña, textos)

describe("Variables" ,()=>{
    const Base_URL = "https://parabank.parasoft.com/parabank/admin.htm"
    let usuario = "john"
    let contraseña = "demo"
    let PaginaPrincipal = "Accounts Overview"
    
    it("Utilizando variables", () =>{
    cy.visit(Base_URL)
    cy.get('form > :nth-child(2) > .input').type(usuario)
    cy.get(':nth-child(4) > .input').type(contraseña)
    cy.get(':nth-child(5) > .button').click()
    cy.get('#showOverview > .title').should("be.visible").contains(PaginaPrincipal)
    })
    
    
    it("Interactuando con elementos" ,()=>{
    let detalle ="CHECKING"
        cy.visit(Base_URL)
        cy.get('form > :nth-child(2) > .input').type(usuario)
        cy.get(':nth-child(4) > .input').type(contraseña)
        cy.get(':nth-child(5) > .button').click()
        cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
        cy.get('#accountType').contains(detalle)
    })
    
    it("Funciones", ()=>{
        //REDIRECCION
        cy.visit(Base_URL)
        //Consumiendo funcion de inicio de sesion
        cy.login(usuario,contraseña)
        //Realizando acciones 
        cy.get('#showOverview > .title').should("be.visible").contains(PaginaPrincipal)
    })
    
    
    })