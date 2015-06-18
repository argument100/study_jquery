// Generated by CoffeeScript 1.9.3
(function() {
  var $, Core;

  $ = function(selector, context) {
    return new Core(selector, context);
  };

  $.isArray = require('./isArray');

  $.each = require('./each');

  Core = function(selector, context) {
    var elems;
    context = context || document;
    elems = context.querySelectorAll(selector);
    Array.prototype.push.apply(this, elems);
    this.context = context;
    this.selector = selector;
    return this;
  };

  Core.prototype = {
    addClass: function(cName) {
      var arr, i, j, len, results;
      results = [];
      for (j = 0, len = this.length; j < len; j++) {
        i = this[j];
        arr = i.className.split(" ");
        if (arr.indexOf(cName) > -1) {
          continue;
        }
        if (arr[0] === "") {
          arr[0] = cName;
        } else {
          arr.push(cName);
        }
        results.push(i.className = arr.length === 1 ? arr[0] : arr.join(" "));
      }
      return results;
    },
    removeClass: function(cName) {
      var arr, c, classArray, i, j, k, len, len1, results;
      results = [];
      for (j = 0, len = this.length; j < len; j++) {
        i = this[j];
        arr = i.className.split(" ");
        if (arr.indexOf(cName) === -1) {
          continue;
        }
        classArray = [];
        for (k = 0, len1 = arr.length; k < len1; k++) {
          c = arr[k];
          if (c !== cName && c !== "") {
            classArray.push(c);
          }
        }
        results.push(i.className = classArray.join(" "));
      }
      return results;
    },
    hasClass: function(cName) {
      var arr, i, j, len;
      for (j = 0, len = this.length; j < len; j++) {
        i = this[j];
        arr = i.className.split(" ");
        if (arr.indexOf(cName) > -1) {
          return true;
        }
      }
      return false;
    },
    each: function(callback) {
      var i, j, l, ref;
      i = 0;
      l = this.length;
      for (i = j = 0, ref = l; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        callback.call(this, this[i], i);
      }
    },
    get: function(index) {
      var i, j, l, ref, ret;
      ret = [];
      l = this.length;
      for (i = j = 0, ref = l; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        ret.push(this[i]);
      }
      if (typeof index === 'number') {
        ret = ret[index];
      }
      return ret;
    },
    splice: Array.prototype.splice
  };

  window.$ = $;

  require('./test');

  return;

}).call(this);

//# sourceMappingURL=jquery.js.map
