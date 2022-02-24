$(document).ready(function(){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 200,
        gutter:20
    });
});
    // $('.nav__list-item').hover(function () {
    //     $(this).children('.nav__list--submenu').slideDown('fast');
    // },function () {
    //     $(this).children('.nav__list--submenu').slideUp('slow');
    // });

    // $('.gallery__item-link').mouseenter(function(){
    //     var title = $(this).parent('li').data('title');
    //     var desc = $(this).parent('li').data('desc');
    //     if (!$(this).children("div").lenght) {
    //         $(this).append('<div class="overlay"></div>');
    //     }
    //     var overlay = $(this).children('.overlay');
    //     overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');
    //     overlay.fadeIn(800);
    // })
    // $('.gallery__item-link').mouseleave(function(){
    //     var overlay = $(this).children('.overlay');
    //     overlay.fadeOut(500);
    // })
