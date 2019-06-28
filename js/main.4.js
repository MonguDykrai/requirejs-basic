require.config({
  paths: {
    'jquery': 'https://cdn.bootcss.com/jquery/3.4.1/jquery',
    'moment': 'https://cdn.bootcss.com/moment.js/2.24.0/moment'
  }
})

require(['jquery', 'moment'], function ($, moment) {
  console.log($)
  console.log(moment)
})