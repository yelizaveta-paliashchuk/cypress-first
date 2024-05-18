import { faker } from '@faker-js/faker'
import { LoginPage } from '../pages/loginPage'
const loginPageElements = require('../fixtures/pages/loginPageSelectors.json')

const username = 'khely'
const initialPassword = '1232123SV'
const newPassword = faker.internet.password()
const loginPage = new LoginPage()
describe('Sqlverifier login using page object class and fixtures', () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  it('Login with old password is prevented', () => {
    //login with initial valid password using PAGE OBJECT CLASS
    loginPage.login(username, initialPassword)
    cy.getCy('TaskHeading')
    //change the password
    cy.changePassword(initialPassword, newPassword)
    //logout
    cy.clickOn('accountMenu')
    cy.clickOn('logout')
    cy.contains('Logged out successfully!')
    //attempt to login with an old password
    cy.clickOn('accountMenu')
    cy.clickOn('login')
    cy.getCy(loginPageElements.usernameField).type(username)
    cy.getCy(loginPageElements.passwordField).type(initialPassword)
    cy.clickOn(loginPageElements.signInButton)
    cy.contains(
      'Failed to sign in! Please check your credentials and try again.'
    )
    //login with new password using PAGE OBJECT FIXTURES
    cy.getCy(loginPageElements.usernameField).clear().type(username)
    cy.getCy(loginPageElements.passwordField).clear().type(newPassword)
    cy.clickOn(loginPageElements.signInButton)
    cy.getCy('TaskHeading')
    //change password back to initial
    cy.changePassword(newPassword, initialPassword)
  })
})
