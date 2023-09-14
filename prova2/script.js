
const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");
const conteudo = document.getElementById("conteudo");

function atualizarConteudo(conteudoNovo) {
    conteudo.innerHTML = `<p>${conteudoNovo}</p>`;
}

botao1.addEventListener("click", function() {
    atualizarConteudo("O Url foi aberto em outra página.");
    botao1.classList.add("active");
    window.open("https://horadecodar.com.br/o-que-e-html-e-css-e-para-que-servem/", "_blank");
    botao2.classList.remove("active");
    botao3.classList.remove("active");
});

botao2.addEventListener("click", function () {
    atualizarConteudo("'Temos de nos tornar a mudança que queremos ver - Mahatma Gandhi'.");
    botao1.classList.remove("active");
    botao2.classList.add("active");
    botao3.classList.remove("active");
});

botao3.addEventListener("click", function () {
    A = 40;
    B = 15;
    atualizarConteudo((A+B)/3);
    botao1.classList.remove("active");
    botao2.classList.remove("active");
    botao3.classList.add("active");
});