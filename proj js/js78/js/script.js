$(function(){

var $tab = $('.tablist');

$tab.on('click', 'li:not(tab-current)', function() {
  $(this).addClass('tab-current');
  $(this).siblings().removeClass('tab-current');
  $(this).closest('div.tabs').find('div.content').hide().eq($(this).index()).slideDown(400);
});
});

// part 2 - Tooltips

$(document).ready(function () {

  var $input = $('input');
  $input.hover (
    function() {
    $(this).siblings('.tooltip').animate(
      {height:'+25px', opacity:0.7},800, function () {
      console.log('animation complete')
    });
  },
    function() {
    $(this).siblings('.tooltip').animate(
      {opacity:0},300);
  });

  var $help = $('button');
  $help.on('click', function(e) {
      $('.tooltip').animate(
        {height:'+25px', opacity:0.7},1000,function () {
        console.log('animation complete')
      });

  });
});
