describe("Manejo de coockies", ()=>{
    it("Cambio de idioma", ()=>{
        //Cambio de idioma
        // cy.setCookie('lc-main', 'de_DE')
        cy.setCookie('lc-main', 'zh-CN')
        cy.setCookie('lc-main', 'es_US')

        //Cambio de moneda
        cy.setCookie('i18n-prefs', 'RUB')
        //Direccion
        cy.visit("https://www.amazon.com/s?i=specialty-aps&bbn=16225007011&rh=n%3A16225007011%2Cn%3A3011391011&language=en_US&currency=MXN")
        
    })
})