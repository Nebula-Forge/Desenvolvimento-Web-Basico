const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const conteudo = document.getElementById("conteudo");

function atualizarConteudo(conteudoNovo) {
    conteudo.innerHTML = `<p>${conteudoNovo}</p>`;
}


botao1.addEventListener("click", function () {
    atualizarConteudo("Você clicou no Botão 1.");
    botao1.classList.add("active");
    botao2.classList.remove("active");
    botao3.classList.remove("active");
});

botao2.addEventListener("click", function () {
    atualizarConteudo("Você clicou no Botão 2.");
    botao1.classList.remove("active");
    botao2.classList.add("active");
    botao3.classList.remove("active");
});


botao3.addEventListener("click", function () {
    atualizarConteudo("Você clicou no Botão 3.");
    botao1.classList.remove("active");
    botao2.classList.remove("active");
    botao3.classList.add("active");
});