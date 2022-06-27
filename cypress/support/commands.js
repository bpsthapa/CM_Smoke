// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("Data", function(){ 
    cy.fixture('Config').then(function(data){
            this.data=data
    })
})

Cypress.Commands.add("Login", function(){
    
    cy.visit(this.data.Url)
    cy.get("#Username").type(this.data.UserName)
    cy.get("#Password").type(this.data.Password)
    cy.get("button.btn.btn-primary").click()
    cy.visit("https://dev.cwlite.spiralogics.net/Case/List")

    Cypress.Cookies.preserveOnce('session_id', 'remember_token')  //to keep the session alive and prevent logout for each it block
})