// MENU


function changeOpacity() {
    var scroll = $(window).scrollTop();
    var menu = $("#menu").height();
    var max_scroll = $(window).height() - menu;

    if (scroll <= max_scroll) {
        var opacity = scroll / max_scroll;
        $("#menu").css("background-color", "rgba(200, 16, 46, " + opacity + ")"); 
    } else {
        $("#menu").css("background-color", "rgb(200, 16, 46)");
    }
}

$(document).ready(function() {
    $(window).on("scroll", function() {
        changeOpacity();
    });
});

$(document).ready(function() {
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > windowHeight * 0.5) {
            $(".logo").attr("src", "MEDIA/IMG/logo peru.png");

            $("#menu  a").css("color", "white");

        } else {
            $(".logo").attr("src", "MEDIA/IMG/logo_peru_rojo.png");
            
            $("#menu  a").css("color", "rgb(200, 16, 46)");
        }
    });
});