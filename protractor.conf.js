exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to this directory.
  specs: [
    'feature_files/*.feature'
  ],

  baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: 'feature_files/step_definitions/stepDefinitions.js',
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};
