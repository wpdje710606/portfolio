$.get("../elements/nav.html", function (data) {
    $("header").append(data);
});

$(document).ready(function () {
    if (window.matchMedia('(min-width:991px)').matches) {
        $('body').removeClass('page-transition-action');
        $(".nav-item a").on("click", function (event) {
            event.preventDefault();
            $('body').addClass('page-transition-action');
            var thePageLink = $(this).attr('href');
            performPageTransition(thePageLink);

            return false;
        });
    }
});

function performPageTransition(newUrl) {
    setTimeout(function () {
        setTimeout(function () {
            window.location = newUrl;
        }, 600);
    }, 1000);
}
