require.config({
  paths: {
    'moment': 'https://cdn.bootcss.com/moment.js/2.24.0/moment'
  }
})

require(['calculator', 'moment'], function (calculator, moment) {
  console.log(calculator)
  console.log(calculator.add(1, 3))
  console.log(calculator.sub(4, 5))

  console.log(moment)

  console.log('当前时间为：' + moment().format('YYYY-MM-DD HH:mm:ss'))
  var x = 3;
  var y = 4;
  console.log('' + x + ' + ' + y + '的结果为：' + (x + y))
})