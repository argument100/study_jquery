
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
    @get(0).className = cName

  removeClass: (cName) ->
    console.log @get(0).className.split(" ")
    @get(0).className = @get(0).className.replace(cName, '')



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

