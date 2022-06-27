/// <reference types="cypress" />

describe("View Case Page", function () {



    before(function () {
        // Pre-conditions
        cy.Data()
        cy.Login()
    })

    it("Verify Page Size on View Case", function () {
        cy.Pagination_Size()
        cy.reload()
    })


    it.only("Verify Next Page on View Case", function () {
        var Case_ColumnElement="td[aria-describedby='dx-col-2']";
        var NextPageElement="[aria-label='Page 2']";

        cy.CheckNextPageData(Case_ColumnElement,NextPageElement)

    })

    it("Verify Filters on View Case", function () {

    })
   
})