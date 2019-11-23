function navFunction() {
    var nav = $('#topnav')
    if (nav.attr('class') === "topnav") {
        nav.addClass("responsive");
    } else {
        nav.removeClass("responsive");
    }
}

function lerMais(idTexto) {
    $('#' + idTexto).slideToggle(500);
    var lermais = $('#lermais-' + idTexto);
    if (lermais.text() === "Ler mais...") {
        lermais.text("Menos...");
    } else {
        lermais.text("Ler mais...");
    }
}

function verMais() {
    $('.galeria-hide').slideToggle(500);
    var vermais = $('#vermais-galeria');
    if (vermais.text() === 'Ver mais...') {
        vermais.text('Menos...');
    } else {
        vermais.text('Ver mais...');
    }

}

function abrirTopico(topico) {
    topicos = $('.topicos').find('p');
    topicos.each(function() {
        if ($(this).attr('id') === topico) {
            $(this).slideToggle(500);
            $('#topico-' + topico).toggleClass('topico-selecionado');
        } else {
            $(this).slideUp(500);
            $('#topico-' + $(this).attr('id')).removeClass('topico-selecionado');
        }
    });
}