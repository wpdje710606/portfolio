$(".carousel-slider-setting [data-bs-toggle=collapse]").on("click", function () {
    var $myGroup = $(this).parents('.collpase-content-setting');
    $myGroup.find('.collapse.show').collapse('hide');
});