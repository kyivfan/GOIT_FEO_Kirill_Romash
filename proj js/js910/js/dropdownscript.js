$(function() {
    $('.dropdown').hover(
        function(){
            $(this).children('.submenu').slideDown(600)
        },
        function(){
            $(this).children('.submenu').slideUp(400)
        }
    );
});
