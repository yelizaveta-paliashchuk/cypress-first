import { faker } from '@faker-js/faker'
import { LoginPage } from '../pages/loginPage'
const loginPageElements = require('../fixtures/pages/loginPageSelectors.json')

const username = 'khely'
const initialPassword = '1232123SV'
const newPassword = faker.internet.password()
const loginPage = new LoginPage()

describe('Sqlverifier API', () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  it('Change password- API test', () => {
    //change the password
    cy.request({
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraGVseSIsImV4cCI6MTcxNjI5ODc2OSwiYXV0aCI6IlJPTEVfVVNFUl9TVFVERU5UIiwiaWF0IjoxNzE2MjEyMzY5fQ.yemuJm6c2SYcseGhhifGgMJwbO0FDwQ3_iP290P2GNFV23kFHGp9hjJVnzuGzBxGP60h4kUzluaKczg4KDZ5oA',
      },
      url: 'https://sqlverifier-staging-08050d656f7a.herokuapp.com/api/account/change-password',
      body: { currentPassword: initialPassword, newPassword: newPassword },
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
    //login with new password using PAGE OBJECT CLASS
    loginPage.login(username, newPassword)
    cy.getCy('TaskHeading')
    cy.clickOn('accountMenu')
    cy.clickOn('logout')
    //change the password back to initial
    cy.request({
      method: 'POST',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraGVseSIsImV4cCI6MTcxNjI5ODc2OSwiYXV0aCI6IlJPTEVfVVNFUl9TVFVERU5UIiwiaWF0IjoxNzE2MjEyMzY5fQ.yemuJm6c2SYcseGhhifGgMJwbO0FDwQ3_iP290P2GNFV23kFHGp9hjJVnzuGzBxGP60h4kUzluaKczg4KDZ5oA',
      },
      url: 'https://sqlverifier-staging-08050d656f7a.herokuapp.com/api/account/change-password',
      body: { currentPassword: newPassword, newPassword: initialPassword },
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
    //login with old password using PAGE OBJECT CLASS
    cy.visit('/login')
    loginPage.login(username, initialPassword)
    cy.getCy('TaskHeading')
  })
})
