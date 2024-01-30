$('.vertical-slider-setting').each(function () {
    var $slider = $(this);
    var numberOfSlides = $slider.find('.vertical-slider-slide').length;

    $slider.find('.vertical-slider-slide:eq(0)').addClass('side-panel-active');
    $slider.find('.side-pannel-adjustment:eq(0)').addClass('active');

    var $activeSlide = $slider.find('.vertical-slider-slide.side-panel-active');

    $('.side-pannel-adjustment', $slider).on('click', function () {
        var slideToGo = $(this).data('slide');
        goToSlide(slideToGo);
    });

    $slider.on('slide.changed', function () {
        $slider.find('.side-pannel-adjustment').removeClass('active');
        var $activeDot = $slider.find('.side-pannel-adjustment[data-slide="' + $slider.find('.vertical-slider-slide.side-panel-active').data('slide') + '"]');
        $activeDot.addClass('active');
    });

    function goToSlide(slideToGo) {
        $slider.find('.vertical-slider-slide.side-panel-active').removeClass('side-panel-active');
        $slider.find('.vertical-slider-slide').eq(slideToGo - 1).addClass('side-panel-active');
        $activeSlide = $slider.find('.vertical-slider-slide').eq(slideToGo - 1).addClass('side-panel-active');
        $slider.trigger('slide.changed');
    }

});