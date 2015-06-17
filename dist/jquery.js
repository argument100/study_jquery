(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by CoffeeScript 1.9.2
'use strict';

(function () {
  var $, Core;

  $ = function (selector, context) {
    return new Core(selector, context);
  };

  $.isArray = require('./isArray');

  $.each = require('./each');

  Core = function (selector, context) {
    var elems;
    context = context || document;
    elems = context.querySelectorAll(selector);
    Array.prototype.push.apply(this, elems);
    this.context = context;
    this.selector = selector;
    return this;
  };

  Core.prototype = {
    addClass: function addClass(cName) {
      var arr;
      arr = this.get(0).className.split(' ');
      if (arr.indexOf(cName) > -1) {
        return;
      }
      arr.push(cName);
      return this.get(0).className = arr.join(' ');
    },
    removeClass: function removeClass(cName) {
      var arr, c, classArray, j, len;
      arr = this.get(0).className.split(' ');
      if (arr.indexOf(cName) === -1) {
        return;
      }
      classArray = [];
      for (j = 0, len = arr.length; j < len; j++) {
        c = arr[j];
        if (c !== cName && c !== '') {
          classArray.push(c);
        }
      }
      return this.get(0).className = classArray.join(' ');
    },
    each: function each(callback) {
      var i, j, l, ref;
      i = 0;
      l = this.length;
      for (i = j = 0, ref = l; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        callback.call(this, this[i], i);
      }
    },
    get: function get(index) {
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
}).call(undefined);

},{"./each":2,"./isArray":3,"./test":4}],2:[function(require,module,exports){
"use strict";

module.exports = function (obj, callback) {
  if ($.isArray(obj)) {
    var i = 0,
        l = obj.length;
    for (; i < l; i++) {
      callback(obj[i], i);
    }
  } else {
    for (var key in obj) {
      callback(key, obj[key]);
    }
  }
};

},{}],3:[function(require,module,exports){
"use strict";

module.exports = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
};

},{}],4:[function(require,module,exports){
'use strict';

$.each(['a', 'b', 'c'], function (e, i) {
  console.log(e, i);
});

$.each({
  a: 'apple',
  b: 'banana',
  c: 'chocolate'
}, function (k, v) {
  console.log(k, v);
});

console.log($('body'));
console.log($('div'));
console.log($('div').get());
console.log($('div').get(0));
//$('body').addClass('hoge');
$('div').each(function (e, i) {
  console.log(e);
});

$('#e').removeClass('hoge');

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJEOi9Vc2Vycy9VVTA2MzA1OC9Eb2N1bWVudHMvd29yay9zdHVkeV9qcXVlcnkvc3JjL2pxdWVyeS5qcyIsIkQ6L1VzZXJzL1VVMDYzMDU4L0RvY3VtZW50cy93b3JrL3N0dWR5X2pxdWVyeS9zcmMvZWFjaC5qcyIsIkQ6L1VzZXJzL1VVMDYzMDU4L0RvY3VtZW50cy93b3JrL3N0dWR5X2pxdWVyeS9zcmMvaXNBcnJheS5qcyIsIkQ6L1VzZXJzL1VVMDYzMDU4L0RvY3VtZW50cy93b3JrL3N0dWR5X2pxdWVyeS9zcmMvdGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0NBLENBQUMsWUFBVztBQUNWLE1BQUksQ0FBQyxFQUFFLElBQUksQ0FBQzs7QUFFWixHQUFDLEdBQUcsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQzlCLFdBQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ3BDLENBQUM7O0FBRUYsR0FBQyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRWpDLEdBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUUzQixNQUFJLEdBQUcsVUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLFFBQUksS0FBSyxDQUFDO0FBQ1YsV0FBTyxHQUFHLE9BQU8sSUFBSSxRQUFRLENBQUM7QUFDOUIsU0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxTQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFFBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsQ0FBQzs7QUFFRixNQUFJLENBQUMsU0FBUyxHQUFHO0FBQ2YsWUFBUSxFQUFFLGtCQUFTLEtBQUssRUFBRTtBQUN4QixVQUFJLEdBQUcsQ0FBQztBQUNSLFNBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkMsVUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzNCLGVBQU87T0FDUjtBQUNELFNBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEIsYUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzlDO0FBQ0QsZUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixVQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDL0IsU0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QyxVQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDN0IsZUFBTztPQUNSO0FBQ0QsZ0JBQVUsR0FBRyxFQUFFLENBQUM7QUFDaEIsV0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsU0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNYLFlBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFO0FBQzNCLG9CQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO09BQ0Y7QUFDRCxhQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckQ7QUFDRCxRQUFJLEVBQUUsY0FBUyxRQUFRLEVBQUU7QUFDdkIsVUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDakIsT0FBQyxHQUFHLENBQUMsQ0FBQztBQUNOLE9BQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ2hCLFdBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRTtBQUNqRixnQkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO09BQ2pDO0tBQ0Y7QUFDRCxPQUFHLEVBQUUsYUFBUyxLQUFLLEVBQUU7QUFDbkIsVUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3RCLFNBQUcsR0FBRyxFQUFFLENBQUM7QUFDVCxPQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNoQixXQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUU7QUFDakYsV0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUNuQjtBQUNELFVBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQzdCLFdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDbEI7QUFDRCxhQUFPLEdBQUcsQ0FBQztLQUNaO0FBQ0QsVUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTTtHQUMvQixDQUFDOztBQUVGLFFBQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUViLFNBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFbEIsU0FBTztDQUVSLENBQUEsQ0FBRSxJQUFJLFdBQU0sQ0FBQzs7Ozs7QUM1RWQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUU7QUFDeEMsTUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ2xCLFFBQUksQ0FBQyxHQUFHLENBQUM7UUFDTCxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUNuQixXQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDakIsY0FBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNyQjtHQUNGLE1BQU07QUFDTCxTQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUNuQixjQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3pCO0dBQ0Y7Q0FDRixDQUFBOzs7OztBQ1pELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDOUIsU0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssZ0JBQWdCLENBQUM7Q0FDakUsQ0FBQTs7Ozs7QUNGRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDdEMsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDbkIsQ0FBQyxDQUFDOztBQUVILENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDTCxHQUFDLEVBQUUsT0FBTztBQUNWLEdBQUMsRUFBRSxRQUFRO0FBQ1gsR0FBQyxFQUFFLFdBQVc7Q0FDZixFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBSztBQUNYLFNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ25CLENBQUMsQ0FBQzs7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDNUIsU0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNoQixDQUFDLENBQUM7O0FBRUgsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciAkLCBDb3JlO1xuXG4gICQgPSBmdW5jdGlvbihzZWxlY3RvciwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgQ29yZShzZWxlY3RvciwgY29udGV4dCk7XG4gIH07XG5cbiAgJC5pc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbiAgJC5lYWNoID0gcmVxdWlyZSgnLi9lYWNoJyk7XG5cbiAgQ29yZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIGVsZW1zO1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuICAgIGVsZW1zID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLCBlbGVtcyk7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQ29yZS5wcm90b3R5cGUgPSB7XG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uKGNOYW1lKSB7XG4gICAgICB2YXIgYXJyO1xuICAgICAgYXJyID0gdGhpcy5nZXQoMCkuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKTtcbiAgICAgIGlmIChhcnIuaW5kZXhPZihjTmFtZSkgPiAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcnIucHVzaChjTmFtZSk7XG4gICAgICByZXR1cm4gdGhpcy5nZXQoMCkuY2xhc3NOYW1lID0gYXJyLmpvaW4oXCIgXCIpO1xuICAgIH0sXG4gICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKGNOYW1lKSB7XG4gICAgICB2YXIgYXJyLCBjLCBjbGFzc0FycmF5LCBqLCBsZW47XG4gICAgICBhcnIgPSB0aGlzLmdldCgwKS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgaWYgKGFyci5pbmRleE9mKGNOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2xhc3NBcnJheSA9IFtdO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGMgPSBhcnJbal07XG4gICAgICAgIGlmIChjICE9PSBjTmFtZSAmJiBjICE9PSBcIlwiKSB7XG4gICAgICAgICAgY2xhc3NBcnJheS5wdXNoKGMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5nZXQoMCkuY2xhc3NOYW1lID0gY2xhc3NBcnJheS5qb2luKFwiIFwiKTtcbiAgICB9LFxuICAgIGVhY2g6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaSwgaiwgbCwgcmVmO1xuICAgICAgaSA9IDA7XG4gICAgICBsID0gdGhpcy5sZW5ndGg7XG4gICAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gbDsgMCA8PSByZWYgPyBqIDw9IHJlZiA6IGogPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB0aGlzW2ldLCBpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIHZhciBpLCBqLCBsLCByZWYsIHJldDtcbiAgICAgIHJldCA9IFtdO1xuICAgICAgbCA9IHRoaXMubGVuZ3RoO1xuICAgICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IGw7IDAgPD0gcmVmID8gaiA8PSByZWYgOiBqID49IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICAgIHJldC5wdXNoKHRoaXNbaV0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0ID0gcmV0W2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBzcGxpY2U6IEFycmF5LnByb3RvdHlwZS5zcGxpY2VcbiAgfTtcblxuICB3aW5kb3cuJCA9ICQ7XG5cbiAgcmVxdWlyZSgnLi90ZXN0Jyk7XG5cbiAgcmV0dXJuO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqLCBjYWxsYmFjaykge1xyXG4gIGlmICgkLmlzQXJyYXkob2JqKSkge1xyXG4gICAgdmFyIGkgPSAwLFxyXG4gICAgICAgIGwgPSBvYmoubGVuZ3RoO1xyXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgY2FsbGJhY2sob2JqW2ldLCBpKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICBjYWxsYmFjayhrZXksIG9ialtrZXldKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCI7XHJcbn1cclxuIiwiJC5lYWNoKFsnYScsICdiJywgJ2MnXSwgZnVuY3Rpb24gKGUsIGkpIHtcclxuICBjb25zb2xlLmxvZyhlLCBpKTtcclxufSk7XHJcblxyXG4kLmVhY2goe1xyXG4gIGE6ICdhcHBsZScsXHJcbiAgYjogJ2JhbmFuYScsXHJcbiAgYzogJ2Nob2NvbGF0ZSdcclxufSwgKGssIHYpID0+IHtcclxuICBjb25zb2xlLmxvZyhrLCB2KTtcclxufSk7XHJcblxyXG5jb25zb2xlLmxvZygkKCdib2R5JykpO1xyXG5jb25zb2xlLmxvZygkKCdkaXYnKSk7XHJcbmNvbnNvbGUubG9nKCQoJ2RpdicpLmdldCgpKTtcclxuY29uc29sZS5sb2coJCgnZGl2JykuZ2V0KDApKTtcclxuLy8kKCdib2R5JykuYWRkQ2xhc3MoJ2hvZ2UnKTtcclxuJCgnZGl2JykuZWFjaChmdW5jdGlvbiAoZSwgaSkge1xyXG4gIGNvbnNvbGUubG9nKGUpO1xyXG59KTtcclxuXHJcbiQoXCIjZVwiKS5yZW1vdmVDbGFzcyhcImhvZ2VcIik7Il19
