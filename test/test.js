var assert = require('assert');
require('../src/next-status');


describe('nx.status only return one STR_STATUS', function() {
  var frozen = true;
  var items = [1,2,4];
  var map1 = {
    'HAS_FROZEN': frozen === true && items.length > 0,
    'HAS_MANY_ITEMS': items.length > 5
  };

  var map2 = {
    'ONLY_ONE': items.length === 1
  };

  it('should return HAS_FROZEN status', function() {
    assert.equal(
      'HAS_FROZEN',
      nx.status(map1)
    );
  });

  it('should return NULL Status', function() {
    assert.equal(
      'NULL',
      nx.status(map2)
    );
  });

});
