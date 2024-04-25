/// <reference types="cypress" />

describe('Sqlverifier homepage test', () => {
  before(() => {
    cy.visit(
      'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc'
    )
  })
  it('Home page is loaded', () => {
    cy.get('.brand-title').should('have.text', 'Sqlverifier')
  })
})
