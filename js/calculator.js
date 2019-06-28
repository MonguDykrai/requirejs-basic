define(['math'], function (math) {
  var add = function (x, y) {
    return math.add(x, y)
  }

  var sub = function (x, y) {
    return math.sub(x, y)
  }

  return {
    add: add,
    sub: sub
  }
})