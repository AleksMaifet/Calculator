const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3030',
    video: false,
    supportFile: false,
  },
});
