function verificarNomeMesa() {
    console.log("ee");
    const nomeMesaCadastrada = localStorage.getItem("tableName");
    if (nomeMesaCadastrada !== null) {
        gerenciaMesa(nomeMesaCadastrada)
    }
}
function filtrarItensMenu(elemento, categoria) {
    removerClasseAtivo(elemento);
    const itensMenu = document.getElementsByClassName("itens-menu");
    for (itemMenu of itensMenu) {
        if (itemMenu.getAttribute("data-category") === categoria) {
            itemMenu.classList.remove("inactive");

        } else {
            itemMenu.classList.add("inactive")
        }

    }

}