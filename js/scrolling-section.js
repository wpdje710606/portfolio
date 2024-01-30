let scrolling = 0;
let scrollFlag = 1;
var lastScrollPosition= $('.side-indicator .nav p:last-of-type').attr('data-number');

function scrollEvent(event) {
    
    var scrolling = parseInt($(".side-indicator p.nav-dot.active").attr('data-number'));
    if (event.deltaY < 0) {
        if (scrolling !== 0) {
            scrolling += 100;
            document.getElementById(
                "wrapper-setting"
            ).style.transform = `translateY(${scrolling}vh)`;
            var currentIndicator = $('.side-indicator .nav p.active');
            currentIndicator.removeClass('active');
            currentIndicator.prev().addClass('active');
        }
    } else if (event.deltaY > 0) {
        if (scrolling > lastScrollPosition) {
            scrolling -= 100;
            document.getElementById(
                "wrapper-setting"
            ).style.transform = `translateY(${scrolling}vh)`;
            var currentIndicator = $('.side-indicator .nav p.active');
            currentIndicator.removeClass('active');
            currentIndicator.next().addClass('active');
        }
    }
}

window.addEventListener("wheel", function (event) {
    if (scrollFlag === 1) {
        setTimeout(() => {
            scrollEvent(event);
            scrollFlag = 1;
        }, 250);
        scrollFlag = 0;
    }
});


$(".side-indicator p.nav-dot").on("click", function () {
    var scrolling = $(this).attr('data-number');
    document.getElementById(
        "wrapper-setting"
    ).style.transform = `translateY(${scrolling}vh)`;
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
});