Tinytest.add('YahooFinance - Historical Function Export', function(test) {
  test.instanceOf(YahooFinance.historical, Function, "Expected YahooFinance.historical to be defined");
});

Tinytest.add('YahooFinance - Historical Quote (single)', function(test) {
  var symbol = 'YHOO';
  var testDate = '2014-06-02T07:00:00.000Z';
  var expectedQuote = {
    symbol: 'YHOO',
    open: 34.689999,
    high: 34.950001,
    low: 34.279999,
    close: 34.869999,
    volume: 9178900,
    adjClose: 34.869999,
    date: new Date(testDate)
  };

  var quotes = YahooFinance.historical({symbol: symbol, from: testDate, to: testDate});
  // console.log(quotes);

  test.instanceOf(quotes, Array);
  test.equal(quotes[0], expectedQuote);
});

Tinytest.add('YahooFinance - Historical Quote (multiple)', function(test) {
  var symbols = ['AAPL', 'GOOGL', 'YHOO'];
  var fields = ['n', 's', 'p'];
  var testDate = new Date('2014-06-02T07:00:00.000Z');
  var expectedQuotes = {
    AAPL: [{
      symbol: 'AAPL',
      open: 633.959984,
      high: 634.830017,
      low: 622.500015,
      close: 628.650009,
      volume: 92337700,
      adjClose: 87.860693,
      date: testDate
    }],
    GOOGL: [{
      symbol: 'GOOGL',
      open: 569.75,
      high: 570.409973,
      low: 556.700012,
      close: 564.340027,
      volume: 1660500,
      adjClose: 564.340027,
      date: testDate
    }],
    YHOO: [{
      symbol: 'YHOO',
      open: 34.689999,
      high: 34.950001,
      low: 34.279999,
      close: 34.869999,
      volume: 9178900,
      adjClose: 34.869999,
      date: testDate
    }]
  };

  var stocks = YahooFinance.historical({symbols: symbols, from: testDate, to: testDate});
  //console.log(stocks);

  test.instanceOf(stocks, Object);
  test.instanceOf(stocks['AAPL'], Array);
  test.instanceOf(stocks['GOOGL'], Array);
  test.instanceOf(stocks['YHOO'], Array);

  test.equal(stocks['AAPL'], expectedQuotes['AAPL']);
  test.equal(stocks['GOOGL'], expectedQuotes['GOOGL']);
  test.equal(stocks['YHOO'], expectedQuotes['YHOO']);
});


Tinytest.add('YahooFinance - Snapshot Function Export', function(test) {
  test.instanceOf(YahooFinance.snapshot, Function, "Expected YahooFinance.snapshot to be defined");
});

Tinytest.add('YahooFinance - Snapshot Quote', function(test) {
  var symbols = ['AAPL', 'GOOGL', 'YHOO'];
  var fields = ['s', 'n'];
  var expectedSnapshots = [
    {name: 'Apple Inc.', symbol: 'AAPL'},
    {name: 'Alphabet Inc.', symbol: 'GOOGL'},
    {name: 'Yahoo! Inc.', symbol: 'YHOO'}
  ];

  var snapshots = YahooFinance.snapshot({symbols: symbols, fields: fields});
  //console.log(snapshots);

  test.equal(snapshots, expectedSnapshots);
});
