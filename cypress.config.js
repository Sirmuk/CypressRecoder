const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: '6n4ia5',
  
  projectId: "sfxw6r",
  video: true,
  screenshot: true,
  defaultCommandTimeout: 15000,

    

  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'results/test-output.xml',
    overwrite: false,
    html: true,
    json: true,
    toConsole: true,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    mochaFile: 'results/test-output.json',
    toConsole:true,
    overwrite: true,
    html: true,
    json: true,
    includeCode: false
  
    
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
