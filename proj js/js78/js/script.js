$(function(){

var $tab = $('.tablist');

$tab.on('click', 'li:not(tab-current)', function() {
  $(this).addClass('tab-current');
  $(this).siblings().removeClass('tab-current');
  $(this).closest('div.tabs').find('div.content').removeClass('visible').eq($(this).index()).addClass('visible');
});
});
