Tinytest.add('YahooFinance - Historical Function Export', function(test) {
  test.instanceOf(YahooFinance.historical, Function, "Expected YahooFinance.historical to be defined");
});

Tinytest.add('YahooFinance - Historical Quote (single)', function(test) {
    var symbol = 'YHOO';
    var testDate = '2014-06-02T07:00:00.000Z';
    var expectedQuote = {
      symbol: 'YHOO',
      open: 34.69,
      high: 34.95,
      low: 34.28,
      close: 34.87,
      volume: 9178900,
      adjClose: 34.87,
      date: new Date(testDate)
    }

    var quotes = YahooFinance.historical({symbol:symbol, from:testDate, to:testDate});
    // console.log(quotes);

    test.instanceOf(quotes, Array);
    test.equal(quotes[0], expectedQuote);
});

Tinytest.add('YahooFinance - Historical Quote (multiple)', function(test) {
    var symbols = ['AAPL','GOOGL','YHOO'];
    var fields = ['n','s','p'];
    var testDate = new Date('2014-06-02T07:00:00.000Z');
    var expectedQuotes = [{
      symbol: 'AAPL',
      open: 633.96,
      high: 634.83,
      low: 622.5,
      close: 628.65,
      volume: 92337700,
      adjClose: 89.36,
      date: testDate
    },{
      symbol: 'GOOGL',
      open: 569.75,
      high: 570.41,
      low: 556.7,
      close: 564.34,
      volume: 1660500,
      adjClose: 564.34,
      date: testDate
    },{
      symbol: 'YHOO',
      open: 34.69,
      high: 34.95,
      low: 34.28,
      close: 34.87,
      volume: 9178900,
      adjClose: 34.87,
      date: testDate
    }];

    var stocks = YahooFinance.historical({symbols:symbols, from:testDate, to:testDate});
    // console.log(stocks[0].quotes[0]);

    test.instanceOf(stocks, Array);

    test.equal(stocks[0].quotes[0], expectedQuotes[0]);
    test.equal(stocks[1].quotes[0], expectedQuotes[1]);
    test.equal(stocks[2].quotes[0], expectedQuotes[2]);
});


Tinytest.add('YahooFinance - Snapshot Function Export', function(test) {
  test.instanceOf(YahooFinance.snapshot, Function, "Expected YahooFinance.snapshot to be defined");
});

Tinytest.add('YahooFinance - Snapshot Quote', function(test) {
    var symbols = ['AAPL','GOOGL','YHOO'];
    var fields = ['s','n'];
    var expectedSnapshots = {
      AAPL: {name:'Apple Inc.', symbol:'AAPL'},
      GOOGL: {name:'Google Inc.', symbol:'GOOGL'},
      YHOO: {name:'Yahoo! Inc.', symbol:'YHOO'}
    };

    var snapshots = YahooFinance.snapshot({symbols:symbols, fields:fields});
    // console.log(snapshots);

    test.equal(snapshots, expectedSnapshots);
});
