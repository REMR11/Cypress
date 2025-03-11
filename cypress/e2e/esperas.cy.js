// cy.wait(5000)
// intercept

describe('Esperas',()=>{
    
    it("Wait quemado",() =>{
    //Visita al sitio
    cy.visit("https://www.amazon.com/s?i=specialty-aps&bbn=16225007011&rh=n%3A16225007011%2Cn%3A3011391011&language=en_US&currency=MXN&ref=nav_em__nav_desktop_sa_intl_laptop_accessories_0_2_7_7")
    //Espera quemada
    cy.wait(5000)
    })
    
    it("Intercept", ()=>{
    //Visita al sitio
    cy.intercept("https://unagi.amazon.com/1/events/com.amazon.csm.csa.prod").as("EsperaIntercept")
    cy.visit("https://www.amazon.com/s?i=specialty-aps&bbn=16225007011&rh=n%3A16225007011%2Cn%3A3011391011&language=en_US&currency=MXN&ref=nav_em__nav_desktop_sa_intl_laptop_accessories_0_2_7_7")
    // accion 1
    // accion 2
    // accion 3 
    cy.wait("@EsperaIntercept")
    })
    })