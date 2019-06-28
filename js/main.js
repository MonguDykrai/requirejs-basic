require.config({
  paths: {
    'package': 'package'
  },
  shim: {
    'package': {
      exports: 'package'
    }
  }
})

require(['package'], function (package) {
  http://www.ruanyifeng.com/blog/2012/11/require_js.html
  console.log(package) // 不成功
})