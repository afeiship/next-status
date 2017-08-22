(function () {

  var global = global || this || self || window;

  nx.status = function(inMap){
    for (var key in inMap) {
      if (inMap.hasOwnProperty(key)) {
        var condition = inMap[key];
        if(condition){
          return key;
        }
      }
    }
    return 'NULL';
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.status;
  }

}());
