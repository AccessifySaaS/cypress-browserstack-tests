const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Use env var as baseUrl if provided
      const base = config.env.BASE_URL;
      if (base) config.baseUrl = base;
      return config;
    },
  },
});
