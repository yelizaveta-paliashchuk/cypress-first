const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'qy8d5s',
  e2e: {
    baseUrl: 'https://google.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
