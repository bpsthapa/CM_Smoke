/// <reference types="cypress" />

describe ("Add Case Page", function(){
 
    before(function() {
            // Pre-conditions
            cy.Data()
            cy.Login()

            cy.get('.menu-item-active > .py-3').click()
            cy.get('.menu-item-active > .menu-sub > :nth-child(1) > .menu-link > .menu-title').click()
    })

    it("Check Save Button on Add Case", function(){
        
        cy.contains("Add Case Information")
        cy.get("#addDisable").click()
        cy.contains("Error: Could not add case!")
        cy.get("#addDisable1").click()
        cy.contains("Error: Could not add case!")
    })

    it("Check Different Tabs on Add Case", function(){
        
        cy.get(".nav-link").each(($el,index,$list)=>{
            cy.wrap($el).click()

            const TabName=$el.text()
            if(TabName==("Employer")||TabName==("Adjuster")||TabName==("Medical Provider")||TabName==("Attorney"))
            {
                console.log("Inside the lop")
                cy.log(TabName)
                cy.get(".btn.ms-3").should('be.visible')
            }
        })
    })
    
})