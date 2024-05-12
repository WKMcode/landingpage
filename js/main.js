$(document).ready(function() {
    $("#navbar a, .btn").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 100
            }, 800);
        }
    });

    // Sticky menu background
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $("#navbar").css("opacity", 0.9);
        } else {
            $("#navbar").css("opacity", 1);
        }
    });
});
