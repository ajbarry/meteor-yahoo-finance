Package.describe({
  name: "yahoo-finance",
  summary: "Yahoo Finance Stock Quote Data"
});

Npm.depends({
  'yahoo-finance': '0.1.1'
});

Package.on_use(function (api) {
  api.add_files(['yahoo-finance.js'], 'server');

  if (api.export) 
    api.export('YahooFinance');
});

Package.on_test(function (api) {
  api.use(['yahoo-finance', 'underscore', 'tinytest', 'test-helpers']);
  api.add_files('yahoo-finance-test.js', ['server']);
});