ajbarry:yahoo-finance
=====================

Provides a Meteor server-side interface to [node-yahoo-finance](https://github.com/pilwon/node-yahoo-finance) through a ```YahooFinance``` object.

## Usage:

Please note that currently this package is limited to server-side operation. Personally I didn't intend to ever use this package for client-side functionality and chose not to bloat my client footprint unnecessarily. I don't believe there is currently any way in Meteor to specify where to load packages outside of the package.js definition itself. If there is a way, please let me know... or Fork it!

Meanwhile, if you would like to try it out for yourself, see Tim Barclay's walk-through [Creating a Single Page app in Meteor](http://blog.scottlogic.com/2015/07/14/meteor.html) that uses yahoo-finance to generate a [Highstock](http://www.highcharts.com/products/highstock) chart. Thanks Tim!


### Historical Quotes
Historical quotes give you the closing data for the stock symbols you request within a given date range.

#### Single Quote
Note that the single historical quote approach returns an Array of quote data for the stock symbol requested. This data structure is different from the Multiple Quote approach described below.

```javascript
YahooFinance.historical({symbol:'YHOO', from:'2014-06-02', to:'2014-06-02'})
```

yields an Array of quote Objects `[{from date quote}, ..., {to date quote}]` :

```javascript
[{
  symbol: 'YHOO',
  open: 34.69,
  high: 34.95,
  low: 34.28,
  close: 34.87,
  volume: 9178900,
  adjClose: 34.87,
  date: '2014-06-02T07:00:00.000Z'
}]
```

#### Multiple Quotes
Note that the multiple historical quote approach returns an Object holding the quote data for each stock symbol requested. This data structure is different from the Single Quote approach described above.

```javascript
YahooFinance.historical({symbols:['AAPL','GOOGL','YHOO'], from:'2014-06-02', to:'2014-06-02'})
```

yields an Object of `{'SYMBOL': [{from date quote}, ..., {to date quote}]}` such as:

```javascript
{ AAPL: [{
    date: Mon Jun 02 2014 00:00:00 GMT-0700 (PDT),
    open: 633.959984,
    high: 634.830017,
    low: 622.500015,
    close: 628.650009,
    volume: 92337700,
    adjClose: 87.860693,
    symbol: 'AAPL'
  }],
  GOOGL: [{
    date: Mon Jun 02 2014 00:00:00 GMT-0700 (PDT),
    open: 569.75,
    high: 570.409973,
    low: 556.700012,
    close: 564.340027,
    volume: 1660500,
    adjClose: 564.340027,
    symbol: 'GOOGL'
  }],
  YHOO: [{
    date: Mon Jun 02 2014 00:00:00 GMT-0700 (PDT),
    open: 34.689999,
    high: 34.950001,
    low: 34.279999,
    close: 34.869999,
    volume: 9178900,
    adjClose: 34.869999,
    symbol: 'YHOO'
  }]
}
```

### Snapshot Quotes
Snapshot Quotes provides delayed intra-day stock quote data with a range of fields that can be queried.

See the [node-yahoo-finance source](https://github.com/pilwon/node-yahoo-finance/blob/master/lib/fields.js) for a list
of available fields.

```javascript
YahooFinance.snapshot({symbols:['AAPL','GOOGL','YHOO'], fields:['s','n']})
```

yields an Array of quote objects:

```javascript
[
  {name:'Apple Inc.', symbol:'AAPL'},
  {name:'Google Inc.', symbol:'GOOGL'},
  {name:'Yahoo! Inc.', symbol:'YHOO'}
]
```
