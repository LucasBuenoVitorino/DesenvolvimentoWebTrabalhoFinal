function configurarToggleCertificados() {
    const secao = document.querySelector("#certificados");
    const lista = secao && secao.querySelector("ul");

    if (!secao || !lista) {
        return;
    }

    const botao = document.createElement("button");
    botao.type = "button";
    botao.id = "toggle-certificados";
    botao.textContent = "Ocultar certificados";
    botao.setAttribute("aria-controls", "lista-certificados");
    botao.setAttribute("aria-expanded", "true");
    lista.id = "lista-certificados";

    botao.addEventListener("click", function () {
        const expandida = botao.getAttribute("aria-expanded") === "true";
        lista.hidden = expandida;
        botao.setAttribute("aria-expanded", String(!expandida));
        botao.textContent = expandida ? "Mostrar certificados" : "Ocultar certificados";
    });

    secao.insertBefore(botao, lista);
}

configurarToggleCertificados();