Package.describe({
  name: 'ajbarry:yahoo-finance',
  summary: 'Yahoo Finance Stock Quote Data Utility for Meteor Server',
  version: '0.2.11_1',
  git: 'https://github.com/ajbarry/meteor-yahoo-finance.git'
});

Npm.depends({
  'yahoo-finance': '0.2.11'
});

Package.on_use(function (api) {
  api.add_files('yahoo-finance.js', 'server');
  api.export('YahooFinance', 'server');
});

Package.on_test(function (api) {
  api.use(['ajbarry:yahoo-finance', 'underscore', 'tinytest', 'test-helpers']);
  api.add_files('yahoo-finance-test.js', 'server');
});
