$(window).on('load', function() {
    var preloader = $('#preloader');
    preloader.delay(400).fadeOut("slow");

});

(function ($) {

	$(window).scroll(function(){
        if($(this).scrollTop() > 118) {
            $('#nav-menu').addClass('sticky-top');
        } else {
            $('#nav-menu').removeClass('sticky-top');
        }
    });

    // $(document).click( function(event){
    //     if( $(event.target).closest(".dropdown_menu").length )
    //         return;
    //     $(".dropdown_menu").slideUp(300);
    //     $(".dropdown_toggle").removeClass('clos');
    //     event.stopPropagation();
    // });
    $('.dropdown_toggle').click( function() {
        $(".dropdown_toggle").toggleClass('clos');
        $(this).siblings(".dropdown_menu").slideToggle(300);
        return false;
    });

    $('.owl-carousel').owlCarousel({
      transitionStyle: 'fade',
      autoPlay: 6000,
      singleItem: true,
      items: 1,
      navigation: true,
      navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      pagination: false,
    });

    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank"></a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }

    });

})(jQuery);




