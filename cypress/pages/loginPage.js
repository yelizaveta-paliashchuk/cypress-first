export class LoginPage {
  elements = {
    usernameField: () => cy.getCy('username'),
    passwordField: () => cy.getCy('password'),
    signInButton: () => cy.get('[data-cy="submit"]'),
  }
  // inputUsername(username) {
  //   this.elements.usernameField.type(username)
  // }
  // inputPassword(password) {
  //   this.elements.passwordField.type(password)
  // }
  // signIn() {
  //   this.elements.signInButton.click()
  // }
  login(username, password) {
    this.elements.usernameField().type(username)
    this.elements.passwordField().type(password)
    this.elements.signInButton().click()
  }
}
