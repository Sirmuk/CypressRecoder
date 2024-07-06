describe( 'login', ()=>{
    it('Login',()=>{

        cy.visit('https://conduit.bondaracademy.com/');
        cy.get('.home-page').click();
        cy.get('.navbar-nav > .nav-item:nth-child(2) > .nav-link').click();
        cy.get('.form-group:nth-child(2) > .form-control').click();
        
        cy.get('[placeholder="Email"]').type('cytest4@test.com')
        
        cy.get('.form-group:nth-child(3) > .form-control').type('test');
        cy.get('.btn').click();
        cy.get('.ng-submitted').submit();
        cy.get('.nav-item:nth-child(4) > .nav-link').click();
        cy.get('.btn-outline-secondary').click();
        cy.log('logged in')



    })
    
})