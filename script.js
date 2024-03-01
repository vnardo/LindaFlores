function abrirModal() {
    const modal = document.getElementById("janela-modal")
    modal.classList.add("abrir")

    modal.addEventListener("click",(e) => {
        if(e.target.id == "fechar" || e.target.id == "janela-modal"){
            modal.classList.remove("abrir")
        }
    })
}

$(document).ready(function() {
    // manda pro topo
    $('.go-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1200);
    });

});