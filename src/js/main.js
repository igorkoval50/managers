/////RESPONSIVE MENU ////////////
$(function(){

    var link = $(".menu-link");
    var linkActive = $(".menu-link_active");
    var menu = $(".menu");
    var nav = $(".menu a");
    
    link.on("click", function() {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu-active');
        $("html,body").toggleClass('overflow');
    });
    linkActive.on("click", function() {
        link.removeClass('menu-link_active');
    });
    nav.on("click", function() {
        menu.toggleClass('menu-active');
        link.toggleClass('menu-link_active');
    });

    ///OWL CAROUSEL ///////////////

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

////HOVER EFFECT FOR MENU///////
    var nav = $("#home_navigation a");
    var a = $(".first");
    a.addClass('active');
        nav.click(function (e) {
        nav.addClass("active").not(this).removeClass("active");
    });

});


