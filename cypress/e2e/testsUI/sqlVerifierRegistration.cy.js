describe('Sqlverifier header links', () => {
  beforeEach(() => {
    Cypress.config(
      'baseUrl',
      'https://sqlverifier-staging-08050d656f7a.herokuapp.com'
    ) //overrides the configuration that come from the cypress.config.js file
    cy.visit('/account/register')
  })
  it('Negative check - Prevented registration with empty fields ', () => {
    cy.clickOn('submit')
    cy.contains('Your username is required.')
    cy.contains('Your email is required.')
    cy.contains('Your password is required.')
    cy.contains('Your confirmation password is required.')
    cy.getCy('registerTitle') // make sure the user is still on the registration page
  })
  it('Negative check - Prevented registration without providing a username ', () => {
    cy.getCy('email').type('a@b.c')
    cy.getCy('firstPassword').type('abcd')
    cy.getCy('secondPassword').type('abcd')
    cy.clickOn('submit')
    cy.contains('Your username is required.')
    cy.getCy('registerTitle') // make sure the user is still on the registration page
  })
  it('Negative check - Prevented registration without providing an email ', () => {
    cy.getCy('username').type('Lisa')
    cy.getCy('firstPassword').type('abcd')
    cy.getCy('secondPassword').type('abcd')
    cy.clickOn('submit')
    cy.contains('Your email is required.')
    cy.getCy('registerTitle') // make sure the user is still on the registration page
  })
  it('Negative check - Prevented registration without providing the passwords ', () => {
    cy.getCy('username').type('Lisa')
    cy.getCy('email').type('a@b.c')
    cy.clickOn('submit')
    cy.contains('Your password is required.')
    cy.contains('Your confirmation password is required.')
    cy.getCy('registerTitle') // make sure the user is still on the registration page
  })
  it('Negative check - Prevented registration with invalid email', () => {
    cy.getCy('username').type('Lisa')
    cy.getCy('email').type('abcde')
    cy.getCy('firstPassword').type('abcd')
    cy.getCy('secondPassword').type('abcd')
    cy.clickOn('submit')
    cy.contains('Your email is invalid.')
    cy.getCy('registerTitle') // make sure the user is still on the registration page
  })
  it('Negative check - Prevented registration with mismatch password', () => {
    cy.getCy('username').type('Lisa')
    cy.getCy('email').type('abc@d.e')
    cy.getCy('firstPassword').type('abcd')
    cy.getCy('secondPassword').type('abcde')
    cy.clickOn('submit')
    cy.contains('The password and its confirmation do not match!')
    cy.getCy('registerTitle') // make sure the user is still on the registration page
  })
  it('Negative check - Prevented registration with less than 4 characters in password', () => {
    cy.getCy('username').type('Lisa')
    cy.getCy('email').type('abc@d.e')
    cy.getCy('firstPassword').type('abc')
    cy.getCy('secondPassword').type('abc')
    cy.clickOn('submit')
    cy.contains('Your password is required to be at least 4 characters.')
    cy.contains(
      'Your confirmation password is required to be at least 4 characters.'
    )
    cy.getCy('registerTitle') // make sure the user is still on the registration page
  })
  it('Positive check - Registration with valid credentials', () => {
    cy.getCy('username').type('Lisa')
    cy.getCy('email').type('abc@d.e')
    cy.getCy('firstPassword').type('abcd')
    cy.getCy('secondPassword').type('abcd')
    cy.clickOn('submit')
    cy.getCy('registerTitle').should('not.exist') // make sure the user proceed from the registration page and been registered
  })
})
