require.config({
  paths: {
    'jquery': 'jquery',
    'moment': 'moment'
  }
})

require(['jquery', 'moment'], function ($, moment) {
  console.log($)
  console.log(moment)
})