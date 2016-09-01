$(function() {
    $('.dropdown').hover(
        function(){
            $(this).children('.submenu').slideDown(600).addClass('collapse');
        },
        function(){
            $(this).children('.submenu').slideUp(800).removeClass('collapse')
        }
    );
});
