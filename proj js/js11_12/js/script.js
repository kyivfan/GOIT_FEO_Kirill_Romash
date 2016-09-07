// Part 1 - Слайдер

$(function() {
  $('.carousel-hider').slider();
});

//Part2 - Шаблонизатор

$(function () {

var html = $('#page').html();


var myProfile = [
  {
    title: 'Ромаш Кирилл Владимирович',
    content: 'экс-банкир, студент Go IT'
  },
  {
		title: 'Учу фронтенд потому что:',
		reason1: 'это интересно',
		reason2: 'хочу освоить новую профессию',
		reason3: 'хочу писать сайты'
  },
  {
    title: 'Мой контактный телефон',
    content: '+380673776101'
  },
  {
    title: 'Мой профайл в Facebook',
    link: 'facebook.com/KirillRomash'
  },

];

var content = tmpl(html, {
  data: myProfile
});

$('.profile').append(content);
});
