$(document).ready(function() {
    checarResolucao();
});

function navFunction() {
    var nav = $('#topnav')
    if (nav.attr('class') === "topnav") {
        nav.addClass("responsive");
    } else {
        nav.removeClass("responsive");
    }
}

function checarResolucao(){
    checarVisibilidade('sobre-hidden');
    checarVisibilidade('curso-hidden');
    checarVisibilidade('galeria-hiden', '.');
}

function checarVisibilidade(idTexto, selector = '#'){
    var texto = $(selector+idTexto);
    var botao = $('#mais-'+idTexto);
    if(window.innerWidth >= 600){
        texto.show();
        botao.hide();
    }else{
        texto.hide();
        botao.text("Mais...")
        botao.show();
    }
}

function mais(idTexto, selector ='#') {
    $(selector+idTexto).slideToggle(500);
    var botao = $('#mais-' + idTexto);
    if (botao.text() === "Mais...") {
        botao.text("Menos...");
    } else {
        botao.text("Mais...");
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
