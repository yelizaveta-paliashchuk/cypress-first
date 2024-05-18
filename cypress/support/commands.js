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

Cypress.Commands.add('verifyUrlEndpoint', (endpoint) => {
  cy.url().should('include', `/${endpoint}`)
})
Cypress.Commands.add('clickOn', (selector) => {
  cy.get(`[data-cy="${selector}"]`).click()
})
Cypress.Commands.add('getCy', (selector) => {
  cy.get(`[data-cy="${selector}"]`)
})
Cypress.Commands.add('changePassword', (currentPassword, newPassword) => {
  cy.clickOn('accountMenu')
  cy.contains('Password').click()
  cy.getCy('currentPassword').type(currentPassword)
  cy.getCy('newPassword').type(newPassword)
  cy.getCy('confirmPassword').type(newPassword)
  cy.clickOn('submit')
})
