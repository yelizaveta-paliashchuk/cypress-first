const username = 'admin_automation'
const password = 'admin_automation'
describe('Sqlverifier header links', () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  it('Sign In link check', () => {
    cy.visit('/?page=1&sort=id,asc')
    cy.clickOn('accountMenu')
    cy.clickOn('login')
    cy.getCy('loginTitle')
  })
  it('Negative check - invalid username', () => {
    cy.getCy('username').type('a_automation')
    cy.getCy('password').type(password)
    cy.clickOn('submit')
    cy.contains(
      'Failed to sign in! Please check your credentials and try again.'
    )
  })
  it('Negative check - invalid password', () => {
    cy.getCy('username').type(username)
    cy.getCy('password').type('password')
    cy.getCy('password').type('password')
    cy.clickOn('submit')
    cy.contains(
      'Failed to sign in! Please check your credentials and try again.'
    )
  })
  it('Negative check - submit with empty password field', () => {
    cy.getCy('username').type(username)
    cy.getCy('password').clear()
    cy.clickOn('submit')
    cy.contains('Password cannot be empty!')
  })
  it('Negative check - submit with empty username field', () => {
    cy.getCy('password').type(password)
    cy.clickOn('submit')
    cy.contains('Username cannot be empty!')
  })
  it('Positive login check - valid credentials', () => {
    cy.getCy('username').type(username)
    cy.getCy('password').type(password)
    cy.clickOn('submit')
    cy.getCy('TaskHeading')
  })
})
