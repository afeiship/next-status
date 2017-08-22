(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var NULL_STATUS = 'NULL';

  nx.status = function(inMap){
    for (var key in inMap) {
      if (inMap.hasOwnProperty(key)) {
        var condition = inMap[key];
        if(condition){
          return key;
        }
      }
    }
    return NULL_STATUS;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.status;
  }

}());
