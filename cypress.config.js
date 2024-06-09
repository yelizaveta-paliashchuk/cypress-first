const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  projectId: 'af3w16',
  video: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'https://sqlverifier-staging-08050d656f7a.herokuapp.com/',
    setupNodeEvents(on, config) {
      allureCypress(on)
    },
  },
})
