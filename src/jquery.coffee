
$ = (selector, context) ->
  new Core selector, context

$.isArray = require './isArray'
$.each = require './each'

Core = (selector, context) ->
  context = context or document
  elems = context.querySelectorAll selector
  Array.prototype.push.apply @, elems
  @context = context
  @selector = selector
  @

Core.prototype =
  addClass: (cName) ->
    arr = @get(0).className.split(" ")
    return if arr.indexOf(cName) > -1
    arr.push(cName)
    @get(0).className = arr.join " "

  removeClass: (cName) ->
    arr = @get(0).className.split(" ")
    return if arr.indexOf(cName) is -1
    classArray = []
    for c in arr
      classArray.push(c) if c != cName and c != ""
    @get(0).className = classArray.join " "



  each: (callback) ->
    i = 0
    l = @length
    for i in [0..l]
      callback.call(@, @[i], i)
    return

  get: (index) ->
    ret = []
    l = @length
    for i in [0..l]
      ret.push @[i]
    if typeof index is 'number'
      ret = ret[index]
    ret

  splice: Array.prototype.splice

window.$ = $

require './test'
return

