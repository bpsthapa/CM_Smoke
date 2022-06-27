/// <reference types="cypress" />

Cypress.Commands.add("Pagination_Size", function(){ 
    cy.scrollTo('bottom')

    cy.get(".dx-page-size").each(($el,index,$list)=>{       //itetrate all the available buttons
        cy.wrap($el).click()
        
        cy.get(".dx-page-sizes> .dx-selection").then(($btn)=>{    //pick the text from the selected button
            var txt=$btn.text()
            
            //cy.log(Number(txt))
            if (txt=="10")
            {
                cy.get(".dx-row.dx-data-row").should("have.length",10)
                
            }

            else if (txt=="20")
            {
                cy.get(".dx-row.dx-data-row").should("have.length",20)
            }

            else if (txt=="30")
            {
                cy.get(".dx-row.dx-data-row").should("have.length.greaterThan",20)
            }
        })     
    })
})


Cypress.Commands.add("CheckNextPageData", function(CaseNCol_Element, NextPage_Element){ 
       
    var Case_N1,Case_N2;

    cy.get(CaseNCol_Element).then(($CaseN1) => {    //pick the text from all visible case number
        Case_N1 = $CaseN1.text()

            //cy.log("inside " + Case_N1)

        cy.get(NextPage_Element).click()                          //click page

        cy.get(CaseNCol_Element).then(($CaseN2) => {    //pick the text from the selected button

            Case_N2 = $CaseN2.text()

            cy.log("inside " + Case_N2)
            expect(Case_N1).not.equal(Case_N2)
        })
    })
    cy.log("out " + Case_N2)
    cy.log("out " + Case_N2)

})