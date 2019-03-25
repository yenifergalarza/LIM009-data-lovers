

//sconst   menuPrincipal = document.getElementById("");


(function () {
    document.getElementById('mostrar-nav').onclick = mostrarMenu;

    function mostrarMenu() {
        var nav = document.getElementById('menuPrincipal');
        nav.classList.toggle('mostrar');
    }
})();
