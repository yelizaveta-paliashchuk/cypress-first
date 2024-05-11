/// <reference types="cypress" />

describe('Sqlverifier homepage test', () => {
  before(() => {
    Cypress.config(
      'baseUrl',
      'https://sqlverifier-staging-08050d656f7a.herokuapp.com'
    ) //overrides the configuration that come from the cypress.config.js file
    cy.visit('/?page=1&sort=id,asc')
  })
  it('Home page is loaded', () => {
    cy.get('.brand-title').should('have.text', 'Sqlverifier')
  })
})
