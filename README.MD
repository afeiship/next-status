# next-status
> Status for next.


## usage:
```js
  var frozen = true;
  var items = [1,2,4];
  var map1 = {
    'HAS_FROZEN': frozen === true && items.length > 0,
    'HAS_MANY_ITEMS': items.length > 5
  };

  nx.status(map1);
  // 'HAS_FROZEN'
```
