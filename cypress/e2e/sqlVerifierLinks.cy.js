/// <reference types="cypress" />

describe('Sqlverifier header links', () => {
  beforeEach(() => {
    Cypress.config(
      'baseUrl',
      'https://sqlverifier-staging-08050d656f7a.herokuapp.com'
    ) //overrides the configuration that come from the cypress.config.js file
    cy.visit('/?page=1&sort=id,asc')
    //   login
    cy.get('[data-cy="accountMenu"]').click()
    cy.get('[data-cy="login"]').click()
    cy.get('[data-cy="username"]').type('admin_automation')
    cy.get('[data-cy="password"]').type('admin_automation')
    cy.get('[data-cy="submit"]').click()
  })
  it('check Entities tab -  Task link', () => {
    //   check the Task submenu is opened and url is updated
    cy.get('[data-cy="entity"]').click()
    cy.contains('Task').click()
    cy.get('[data-cy="TaskHeading"]').should('contain', 'Tasks')
    cy.url().should('include', '/task?page=1&sort=id,asc')
  })
  it('check Entities tab - User Task link', () => {
    //   check the User Task submenu is opened and url is updated
    cy.get('[data-cy="entity"]').click()
    cy.contains('User Task').click()
    cy.get('[data-cy="UserTaskHeading"]').should('contain', 'User Tasks')
    cy.url().should('include', '/user-task')
  })
  it('check Administration tab - User management link', () => {
    //   check the User management submenu is opened and url is updated
    cy.get('[data-cy="adminMenu"]').click()
    cy.contains('User management').click()
    cy.get('[data-cy="userManagementPageHeading"]').should('contain', 'Users')
    cy.url().should('include', '/admin/user-management?page=1&sort=id,asc')
  })
  it('check Administration tab - Metrics link', () => {
    //   check the Metrics submenu is opened and url is updated
    cy.get('[data-cy="adminMenu"]').click()
    cy.contains('Metrics').click()
    cy.get('[data-cy="metricsPageHeading"]').should(
      'contain',
      'Application Metrics'
    )
    cy.url().should('include', '/admin/metrics')
  })
  it('check Administration tab - Health link', () => {
    //   check the Health submenu is opened and url is updated
    cy.get('[data-cy="adminMenu"]').click()
    cy.contains('Health').click()
    cy.get('[data-cy="healthPageHeading"]').should('contain', 'Health Checks')
    cy.url().should('include', '/admin/health')
  })
  it('check Administration tab - Configuration link', () => {
    //   check the Configuration submenu is opened and url is updated
    cy.get('[data-cy="adminMenu"]').click()
    cy.contains('Configuration').click()
    cy.get('[data-cy="configurationPageHeading"]').should(
      'contain',
      'Configuration'
    )
    cy.url().should('include', '/configuration')
  })
  it('check Administration tab - Logs link', () => {
    //   check the Logs submenu is opened and url is updated
    cy.get('[data-cy="adminMenu"]').click()
    cy.contains('Logs').click()
    cy.get('[data-cy="logsPageHeading"]').should('contain', 'Logs')
    cy.url().should('include', '/logs')
  })
  it('check Swagger tab - API link', () => {
    //   check the API submenu is opened and url is updated
    cy.get('[data-cy="docsMenu"]').click()
    cy.contains('API').click()
    cy.url().should('include', '/docs')
  })
  it('check Account tab - Settings link', () => {
    //   check the Settings submenu is opened and url is updated
    cy.get('[data-cy="accountMenu"]').click()
    cy.contains('Settings').click()
    cy.contains('User settings')
    cy.url().should('include', '/settings')
  })
  it('check Account tab - Password link', () => {
    //   check the Password submenu is opened and url is updated
    cy.get('[data-cy="accountMenu"]').click()
    cy.contains('Password').click()
    cy.get('#password-form')
    cy.url().should('include', '/password')
  })
  it('check Account tab - Sign out link', () => {
    //   check the Sign out submenu is opened and url is updated
    cy.get('[data-cy="accountMenu"]').click()
    cy.contains('Sign out').click()
    cy.contains('Logged out successfully!')
    cy.url().should('include', '/logout')
  })
})
