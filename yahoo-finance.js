var _yf = Npm.require('yahoo-finance');

YahooFinance = {};

YahooFinance.snapshot = Meteor.wrapAsync(_yf.snapshot);
YahooFinance.historical = Meteor.wrapAsync(_yf.historical);
