jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    //  Window Height 
    // -------------------------------------------------------------

    (function() {

        var height = $(window).height();
         $(".slide-content").innerHeight(height);
        
    }());     

    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    (function() {

       $(".portfolio-slider").slick({
        infinite: true,
        slidesToShow: 4,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
        ]       
      });        

       $(".team-slider").slick({
        infinite: true,
        slidesToShow: 4,
        autoplay:true,
        autoplaySpeed:10000,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
        ]        
      }); 

    }());



    // -------------------------------------------------------------
    // Cubeportfolio
    // -------------------------------------------------------------

    $('#portfolio-item').cubeportfolio({
        filters: '#portfolio-menu',
        loadMore: '#portfolio-menu',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 35,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 800,
            cols: 3
        }, {
            width: 470,
            cols: 2
        }, {
            width: 0,
            cols: 1
        }],

    });


    // -------------------------------------------------------------
    // onePageNav
    // -------------------------------------------------------------

    $(function() {

        $('.tr-menu ul').onePageNav();

    });  


    // -------------------------------------------------------------
    //  Sidr
    // -------------------------------------------------------------

    (function() {
        
        $('#menu').sidr();

    }());       


    // -------------------------------------------------------------
    //  MagnificPopup
    // -------------------------------------------------------------

    (function() {
        
        $('.video-link').magnificPopup({type:'iframe'});

    }()); 
    

    /*==============================================================*/
    // TheiaStickySidebar
    /*==============================================================*/
           
   (function() {

        $('.tr-sticky')
            .theiaStickySidebar({
                additionalMarginTop: 0
            });
    }());


  /*==============================================================*/
  // Animationend
  /*==============================================================*/


    (function( $ ) {

        //Function to animate slider captions 
        function doAnimations( elems ) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            
            elems.each(function () {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        
        //Variables on page load 
        var $myCarousel = $('#home-carousel'),
            $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
            
        //Initialize carousel 
        $myCarousel.carousel();
        
        //Animate captions in first slide on page load 
        doAnimations($firstAnimatingElems);
        
        //Pause carousel  
        $myCarousel.carousel('pause');
        
        //Other slides to be animated on carousel slide event 
        $myCarousel.on('slide.bs.carousel', function (e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });  
        
    })(jQuery);    
 
    

// script end
});
$(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});