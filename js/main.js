$(document).ready(function(){
    $('.owl-one').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:2500,
        margin:10,
        nav:true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        mouseDrag: false,
    });
    
    
    // ITEM TWO
    $('.owl-two').owlCarousel({
        items:3,
        autoplay:false,
        loop:false,
        margin:10,
        nav:true,
        dots:false,
        callbacks:false,
        margin:25,
    });



    jQuery(document).ready(function() {
        var duration = 1000;
        jQuery(window).scroll(function() {
            if (jQuery(this).scrollTop() > 200) {
                jQuery('.to-top').fadeIn(duration);
            } else {
                jQuery('.to-top').fadeOut(duration);
            }
        });

        jQuery('.to-top').click(function(event) {
            event.preventDefault();
            jQuery('html').animate({scrollTop: 0}, duration);
            return false;
        })
    });


    $(".search-input").click(function(){
      $(".search-input").addClass("search-button");
    });
    $(window).click(function(e) {
        if(! $(e.target).hasClass('search-input')){
            $(".search-input").removeClass("search-button");
        }
    });


    $(".cart").mouseenter(function(){
      $(".cart-no-item").addClass("no-item-visible");
    });
    $(".cart").mouseleave(function(){
      $(".cart-no-item").removeClass("no-item-visible");
    });

});

