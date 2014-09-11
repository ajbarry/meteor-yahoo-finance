ajbarry:yahoo-finance
====================

Provides a Meteor server-side interface to [node-yahoo-finance](https://github.com/pilwon/node-yahoo-finance) through
a ```YahooFinance``` object.

## Usage:


### Historical Quotes

#### Single Quote

```javascript
YahooFinance.historical({symbol:'YHOO', from:'2014-06-02', to:'2014-06-02'})
```

*yields:*

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

```javascript
YahooFinance.historical({symbols:['AAPL','GOOGL','YHOO'], from:'2014-06-02', to:'2014-06-02'})
```

*yields:*

```javascript
[{
  symbol: 'AAPL',
  open: 633.96,
  high: 634.83,
  low: 622.5,
  close: 628.65,
  volume: 92337700,
  adjClose: 89.36,
  date: '2014-06-02T07:00:00.000Z'
},{
  symbol: 'GOOGL',
  open: 569.75,
  high: 570.41,
  low: 556.7,
  close: 564.34,
  volume: 1660500,
  adjClose: 564.34,
  date: '2014-06-02T07:00:00.000Z'
},{
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

### Snapshot Quotes

```javascript
YahooFinance.snapshot({symbols:['AAPL','GOOGL','YHOO'], fields:['s','n']})
```

*yields:*

```javascript
{
  AAPL: {name:'Apple Inc.', symbol:'AAPL'},
  GOOGL: {name:'Google Inc.', symbol:'GOOGL'},
  YHOO: {name:'Yahoo! Inc.', symbol:'YHOO'}
}
```

See the [node-yahoo-finance source](https://github.com/pilwon/node-yahoo-finance/blob/master/lib/index.js) for a list
of available fields.
