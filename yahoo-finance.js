var _yf = Npm.require('yahoo-finance');

YahooFinance = {};

YahooFinance.snapshot = Meteor._wrapAsync(_yf.snapshot);
YahooFinance.historical = Meteor._wrapAsync(_yf.historical);
