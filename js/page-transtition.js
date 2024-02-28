$.get("../elements/nav.html", function (data) {
    $("header").append(data);
});

$(document).ready(function () {
    if (window.matchMedia('(min-width:991px)').matches) {
        $('body').removeClass('page-transition-action');
        $("nav a, .button-page-transtition").on("click", function (event) {
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

$(document).ready(function () {
    console.log("working");

    let gtag = `
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-PBDJGC46RS"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-PBDJGC46RS');
    </script>
    `;
    console.log(gtag);

    $("head").append(gtag);
});
