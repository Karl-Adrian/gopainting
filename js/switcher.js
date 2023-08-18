jQuery(document).ready(function($){
    $('.preset-list li a').on('click',function(event){
        event.preventDefault();
        var color = $(this).data('color'),
            url = 'css/presets/'+color+'.css';
            ctaIconSrc1 = 'images/presets/'+color+'/1.png';
            ctaIconSrc2 = 'images/presets/'+color+'/2.png';
            ctaIconSrc3 = 'images/presets/'+color+'/3.png';					
            ctaIconSrc4 = 'images/presets/'+color+'/4.png';					
            ctaIconSrc5 = 'images/presets/'+color+'/5.png';					
            
        $('#preset').attr('href', url);
        $('.service.icon-1 img').attr('src', ctaIconSrc1);
        $('.service.icon-2 img').attr('src', ctaIconSrc2);
        $('.service.icon-3 img').attr('src', ctaIconSrc3);				
        $('.service.icon-4 img').attr('src', ctaIconSrc4);				
        $('.testimonial-image img').attr('src', ctaIconSrc5);				
    });

    $('.style-chooser .toggler').on('click', function(event){
        event.preventDefault();
        $(this).closest('.style-chooser').toggleClass('opened');
    });
});