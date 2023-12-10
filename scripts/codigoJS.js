$(document).ready(function() {
    // Al hacer clic sobre el botón hamburguesa creo una pequeña animación
    $(".ham").click (function () {
        $("header nav ul").toggleClass("activado");
        $(this).find('span').each(function(index, element){
            $(element).toggleClass('animado');
        });
        $(this).toggleClass('girar');
    });

    // Favoritos
    $('a.favorito').hover(function() {
        $(this).find('img').css('filter', 'grayscale(100%) blur(5px)');
        $(this).find('p').css('display', 'block');
    }, function() {
        $(this).find('img').css('filter', 'none');
        $(this).find('p').css('display', 'none');
    });
});